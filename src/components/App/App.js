import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import BookList from '../BookList/BookList';
import Loader from '../Loader';
import ErrorBoundary from '../ErrorBoundary';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { 
  Wrapper,
  Header, 
  SearcBar, 
  HeaderButton, 
  SearchInput, 
} from './App.styles';

const defaultQuery = 'javascript';

const getBookFromFavorites = (id) => {
  const books = JSON.parse(localStorage.getItem('favoriteBooks')) ?? [];
  return books.find(book => book.id === id);
}

const App = () => {
  const getUserSearch = localStorage.getItem('userSearch');
  const query = getUserSearch?.length ? getUserSearch : defaultQuery;
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState(getUserSearch ?? '');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = setTimeout(() => {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then(response => response.json())
        .then(data => {
          setBooks(data.items);
          setIsLoading(false);
        }).catch((error) => {
          console.error(error);
        });
    }, 250);
    return () => clearTimeout(fetchBooks);
  }, [search, query]);

  const handleSearch = (e) => {
    const { value } = e.target;
    localStorage.setItem('userSearch', value);
    setSearch(value);
  };

  const renderBookList = () => (
    <>
      <SearcBar>
        <SearchInput 
          type='text' 
          value={search} 
          onChange={handleSearch}
          placeholder='search books'
        />
      </SearcBar>
      {books?.length ? <BookList books={books} /> : 'books not found'}
    </>
  );

  const renderBook = ({ match }) => {
    const id = match.params.id;
    const findBook = books?.find(book => book.id === id);
    const book = findBook ?? getBookFromFavorites(id); 
    return <Book book={book} />;
  };

  const renderFavorites = () => {
    const favBooks = JSON.parse(localStorage.getItem('favoriteBooks')) ?? [];
    return favBooks.length ? <BookList books={favBooks} /> : 'no favorite books';
  }

  return (
    <Wrapper>
      <ErrorBoundary>
        <Router>
          <Header>
            <HeaderButton to='/'>Search</HeaderButton>
            <HeaderButton to='/favorite'>Favorites</HeaderButton>
          </Header>
          {isLoading ? <Loader /> : (
            <>
              <Route exact path="/" render={renderBookList} />
              <Route path="/book/:id" render={renderBook} />
              <Route path="/favorite" render={renderFavorites} />
            </>
          )}
        </Router>
      </ErrorBoundary>
    </Wrapper>
  );
};

export default App;

import React, { useState } from 'react';

import { 
  Title,
  Subtitle,
  Image,
  Info, 
  Wrapper,
  Favorite,
  FavoriteIcon
} from './Book.styles';


const Book = ({ book }) => {
  const { title, subtitle, imageLinks } = book?.volumeInfo;
  const addedBooks = JSON.parse(localStorage.getItem('favoriteBooks')) ?? [];
  const isAdded = addedBooks.some(favBook => favBook.id === book?.id);
  const [added, setAdded] = useState(isAdded);
  
  const handleFavorites = () => {
    const newFavorites = isAdded ? 
      addedBooks.filter(favBook => favBook.id !== book?.id) : 
      [...addedBooks, book];
    localStorage.setItem('favoriteBooks', JSON.stringify(newFavorites));
    setAdded(!isAdded)
  }

  return (
    <Wrapper>  
      <Title>
        {title}
        <Favorite isAdded={added} onClick={handleFavorites}>
          <FavoriteIcon  />
        </Favorite>
      </Title>
      <Subtitle>{subtitle}</Subtitle>
      <Image src={imageLinks?.thumbnail} alt='book image' />
      <Info dangerouslySetInnerHTML={{ __html: book?.searchInfo?.textSnippet }} />
    </Wrapper>
  )
}

export default Book;
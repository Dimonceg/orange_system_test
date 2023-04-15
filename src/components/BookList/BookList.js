import React from 'react';
import BookItem from '../BookItem/BookItem';
import { List } from './BookList.styles';

const BookList = ({ books }) => {
  const book = books?.map(({ id, volumeInfo, searchInfo }) => {
    const { imageLinks, title, subtitle } = volumeInfo;
    return (
      <BookItem
        key={id}
        id={id}
        title={title}
        img={imageLinks?.thumbnail}
        subtitle={subtitle}
        text={searchInfo?.textSnippet}
      />
    )
  });

  return (
    <List>
      { book }
    </List>
  )
};

export default BookList;
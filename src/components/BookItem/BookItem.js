import React from 'react';
import {
  Book,
  Title,
  Subtitle,
  Image,
  NoImage,
  Info,
  BookContent
} from './BookItem.styles';

const BookItem = ({ id, img, title, subtitle, text }) => {
  const bookImage = img ? <Image src={img} /> : <NoImage>image not found</NoImage>;
  return (
    <Book>
      <BookContent to={`/book/${id}`}>
        <Title>{title}</Title>
        {bookImage}
        <Subtitle>{subtitle}</Subtitle>
        <Info dangerouslySetInnerHTML={{ __html: text }} />
      </BookContent>
    </Book>
  )
}

export default BookItem;
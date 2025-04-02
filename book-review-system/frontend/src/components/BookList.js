// frontend/src/components/BookList.js
import React from 'react';

function BookList({ books }) { // Receive books as a prop
  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
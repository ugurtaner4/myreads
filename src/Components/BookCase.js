import React from 'react'
import Books from './Books'


const BookCase = props => {
  const { bookshelves, books,onMove } = props;
  return (
    <div className="list-books-content">
      <div>
        {bookshelves.map(shelf => (
          <Books key={shelf.key} shelf={shelf} books={books} onMove={onMove}/>
        ))}
      </div>
    </div>
  );
};

  export default BookCase;
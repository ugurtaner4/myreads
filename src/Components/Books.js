import React  from "react";
import Book from './Book';

const Books = props => {
    const { shelf, books,onMove } = props;
    const booksFiltered = books.filter(book => book.shelf === shelf.key);
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksFiltered.map(book => (
              <Book key={book.id} book={book} shelf={shelf.key} onMove={onMove}/>
            ))}
          </ol>
        </div>
      </div>
    );
  };


  export default Books;
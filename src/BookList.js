import React, { Component }  from 'react';
import SearchBookButton from './Components/SearchBookButton'
import BookCase from './Components/BookCase'


class BookList extends Component
{
    render()
    {
        const { bookshelves, books, onMove } = this.props;
        return(
            <div className="listBooks">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                    <BookCase bookshelves={bookshelves} books={books} onMove={onMove} />
                    <SearchBookButton/>
                </div>
            </div>
        )
    }
}

export default BookList
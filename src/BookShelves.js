import React, {Component} from 'react';
import BookList from './BookList.js';
import { Link } from 'react-router-dom';

class BookShelves extends Component {
    render() {
        const books = this.props.books;
        const booksByShelf = {};
        const status = ['currentlyReading', 'wantToRead', 'read'];

        status.forEach((shelf) => {
            let list = Object.values(books).filter((book) => (book.shelf === shelf));
            booksByShelf[shelf] = list;
        })

        return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {status.map(sh=>{
                        return(
                            <div className="bookshelf" key={sh}>
                            <h2 className="bookshelf-title">{sh.toLocaleUpperCase()}</h2>
                            <div className="bookshelf-books">
                                <BookList bookShelves={booksByShelf[sh]} onChangeShelf={this.props.bookUpdate}/>                      
                            </div>
                        </div>
                        )
                        
                    })
                    }
                </div>
            </div>
            <div className="open-search">
              <Link to='search'>Add a book</Link>
            </div>
          </div>
    )}
}

export default BookShelves
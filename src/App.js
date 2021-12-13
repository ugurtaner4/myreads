import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import BookList from './BookList';
import BookSearch from './BookSearch';
import getAll from './Business';
import SearchBookButton from './Components/SearchBookButton';
import * as BooksAPI from './BooksAPI';
import { debounce } from 'throttle-debounce';
const bookshelves = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Have Read' },
];

class BooksApp extends Component {
  
  state = {
    myBooks: [],
    searchBooks: [],
    error: false
  };
  componentDidMount = () => {
    BooksAPI.getAll()
      .then(books => {
        this.setState({ myBooks: books });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: true });
      });
  };
  moveBook = (book, shelf) => {
    // update db
    BooksAPI.update(book, shelf);

    let updatedBooks = [];
    updatedBooks = this.state.myBooks.filter(b => b.id !== book.id);

    if (shelf !== 'none') {
      book.shelf = shelf;
      updatedBooks = updatedBooks.concat(book);
    }

    this.setState({
      myBooks: updatedBooks,
    });
  };
  searchForBooks = debounce(300, false, query => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: books });
        }
      });
    } else {
      this.setState({ searchBooks: [] });
    }
  });
  resetSearch = () => {
    this.setState({ searchBooks: [] });
  };

  render() {
    const { myBooks, searchBooks, error } = this.state;
    return (
      <div className="app">
        
       <Routes>
       <Route path="/" element={<BookList
              bookshelves={bookshelves}
              books={myBooks}
              onMove={this.moveBook}
            />} />
       <Route path="/search" element={<BookSearch searchBooks={searchBooks}
              onSearch={this.searchForBooks}
              myBooks={myBooks}
              onMove={this.moveBook}
              onResetSearch={this.resetSearch}/>} />
       </Routes>
        
      </div>
    )
  }
}

export default BooksApp

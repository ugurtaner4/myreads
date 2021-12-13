import React, { Component }  from 'react';

import SearchBar from './Components/SearchBar'
import SearchResult from './Components/SearchResult'
class BookSearch extends Component {
    render() {
      const {
        searchBooks,
        myBooks,
        onSearch,
        onResetSearch,
        onMove,
      } = this.props;
      return (
        <div className="search-books">
        <SearchBar onSearch={onSearch} onResetSearch={onResetSearch} />
        <SearchResult searchBooks={searchBooks}
          myBooks={myBooks}
          onMove={onMove} />
        </div>
      )
    }
  }



  export default BookSearch
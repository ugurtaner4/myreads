import React from 'react'
import {Link} from 'react-router-dom'
import Input from './Input'

const SearchBar = props => {
  const { onSearch, onResetSearch } = props;
  
    return (
      <div className="search-books-bar">
        <Link to="/">
           <button className="close-search" onClick={onResetSearch}>Close</button>
        </Link>
        <Input onSearch={onSearch} />
      </div>
    );
  };

  export default SearchBar
import React from 'react'
import {Link} from 'react-router-dom'
import BookSearch from '../BookSearch';

const SearchBookButton = () => {
    return (
      <div className="open-search">
        <Link to="search">
          <button>Add a Book</button>
        </Link>
      </div>
    );
  };

  export default SearchBookButton;   
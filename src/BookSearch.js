import React, { Component }  from 'react';
import * as _ from 'lodash';
import BookList from './BookList'
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
class BookSearch extends Component {
    state = {
      keyword :'',
      results:[]
    }

    // bookMap(books,allBooks){
    //   console.log(Object.values(books))
    //   console.log(Object.values(allBooks))
    //   Object.values(books).map((b)=>{
    //     let match = _.find(allBooks, {id: b.id});
    //                 if (match && !_.isEmpty(match)) {
    //                     b.shelf = match.shelf;
    //                 } else {
    //                     b.shelf = 'none';
    //                 }
    //                 return b;
    //   })
    // }
    search(keywordInput){
      const allBooks = this.props.books;
      BooksAPI.search(keywordInput).then((books)=>{
        //const mappedBooks = this.bookMap(books,allBooks);
        this.setState({results: books})
      })
    }
//handling input text
    setKeyword(keywordInput)
    {
        this.setState({keyword:keywordInput})
        if (keywordInput.trim()) {
          this.search(keywordInput);
      } else {
          this.setState({keyword: '', results: []});
      }
    }

render(){
    return(
                <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search Books" value={this.state.keyword}///when value change List Book Change
                  onChange={e => this.setKeyword(e.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                <BookList bookShelves={this.state.results} onChangeShelf={this.props.bookUpdate}/>
              </ol>
            </div>
          </div>
    )
  }
}



  export default BookSearch
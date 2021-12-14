import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookSearch from './BookSearch';
import BookShelves from './BookShelves';
import * as BooksAPI from './BooksAPI';


class BooksApp extends Component {
  //books state app.js
  state = {
    books:[]
  }
//getting book from service
 getBooksFromApi()
 {
  BooksAPI.getAll()
  .then(data => { 
  this.setState(() => (
      {books: data}
  ))
})
 }
 componentDidMount(){
   this.getBooksFromApi();
 }

 bookUpdate = (e,book,value)=>
 {
   BooksAPI.update(book,value).then(()=>{
    book.shelf =value;
    this.getBooksFromApi();
   })
 }

 
  render() {
    
    return (
      <div className="app">
        
        <Routes>
                <Route exact path="/search" element={
                    <BookSearch 
                        books={this.state.books} 
                        bookUpdate={this.bookUpdate}/>
                }/>
                <Route path="/" exact element={
                    <BookShelves 
                        books={this.state.books} 
                        bookUpdate={this.bookUpdate}/>

                }/>
        </Routes>
                
       </div>
    )
  }
}

export default BooksApp

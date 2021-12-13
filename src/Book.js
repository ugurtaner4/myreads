import React from 'react'

//passing Book in a loop so we can use other side 
const Book = (props) => {
  const {imageLinks, title, authors, shelf} = props.bookDetails;
   
  return (
      <li>
          <div className="book">
              <div className="book-top">
                  <div className="book-cover" style={{ 
                      width: 128, 
                      height: 193, 
                      backgroundImage: "url(" + imageLinks.smallThumbnail + ")"
                  }}>
                  </div>
                  <div className="book-shelf-changer">
                      <select value={shelf} onChange={(e) => {props.onChangeShelf(e, props.bookDetails, e.target.value)}}>
                          <option value="disabled" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                      </select>
                  </div>
              </div>
              <div className="book-title">{title}</div> 
             <div className="book-authors" key={authors}>{authors}</div>
          </div>
      </li>
  )
}


  export default Book;
import React, { Component }  from 'react';
import Book from './Book'


const BookList = (props)=>
{
    const bookShelves = props.bookShelves;
    return(
        <div>
            {bookShelves && bookShelves.length > 0 ?
                <ol className="books-grid">{
                    bookShelves.map(b =>{
                        return <Book key={b.id}  bookDetails={b} onChangeShelf={props.onChangeShelf}/>
                    })
                }
                </ol>
            : <div>There are no books finded'</div>
            }
        </div>
    )
}
export default BookList
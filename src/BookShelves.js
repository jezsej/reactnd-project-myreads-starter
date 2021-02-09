import React from 'react'
import Read from "./bookshelf-books/Read";
import WantToRead from "./bookshelf-books/WantToRead";
import CurrentlyReading from "./bookshelf-books/CurrentlyReading";

function BookShelves({books, onUpdate}){

    return (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <CurrentlyReading books={books.filter(book => book.shelf === 'currentlyReading')} onUpdate = {onUpdate}/>
            </div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <WantToRead books={books.filter(book => book.shelf === 'wantToRead')} onUpdate = {onUpdate}/>
            </div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <Read books={books.filter(book => book.shelf === 'read')} onUpdate = {onUpdate}/>
            </div>
        </div>


    )

}

export default BookShelves
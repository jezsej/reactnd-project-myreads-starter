import React from 'react'
import BookShelf from './BookShelf'


function BookShelves({books, onUpdate}){

    return (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <BookShelf books={books.filter(book => book.shelf === 'currentlyReading')} onUpdate = {onUpdate}/>
            </div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <BookShelf books={books.filter(book => book.shelf === 'wantToRead')} onUpdate = {onUpdate}/>
            </div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <BookShelf books={books.filter(book => book.shelf === 'read')} onUpdate = {onUpdate}/>
            </div>
        </div>


    )

}

export default BookShelves
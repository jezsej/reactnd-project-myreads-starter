import React, { Component } from 'react'
import Read from "./bookshelf-books/Read";
import WantToRead from "./bookshelf-books/WantToRead";
import CurrentlyReading from "./bookshelf-books/CurrentlyReading";


class BookShelves extends Component {
    render() {
        
        const {books, onUpdate} = this.props

        console.log('books', books)

        let currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
        
        let wantToRead = books.filter(book => book.shelf === 'wantToRead')
        
        let read = books.filter(book => book.shelf === 'read')
        
        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <CurrentlyReading currentlyReading={currentlyReading} onUpdateShelf = {onUpdate}/>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <WantToRead wantToRead={wantToRead} onUpdateShelf = {onUpdate}/>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <Read read={read} onUpdateShelf = {onUpdate}/>
                </div>
            </div>


        )
    }
}

export default BookShelves
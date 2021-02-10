import React from "react";
import Book from './Book'

function BookShelf ({books, onUpdate}){
    return (
        <div className="bookshelf-books">
            <ol className="books-grid">
                {
                    books.map(book => (
                        <li key={book.id}><Book book={book} onUpdate={onUpdate} /></li>
                    ))
                }
            </ol>
        </div>
    )

}

export default BookShelf
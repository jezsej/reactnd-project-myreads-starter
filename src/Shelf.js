import React from "react";
import Book from './Book'
import propTypes from 'prop-types';

function Shelf ({books, onUpdate}){
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
Shelf.propTypes ={
    books:propTypes.array,
    onUpdate:propTypes.func
}

export default Shelf
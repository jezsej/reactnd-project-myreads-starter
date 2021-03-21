import React from 'react'
import BooksContent from './BooksContent'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types';

function ListBooks({books, onUpdate}){

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <BooksContent books={books} onUpdate={onUpdate} />
            <div className="open-search">
                <Link to='/search'><button>Add a book</button></Link>
            </div>
        </div>
    )
}

ListBooks.propTypes ={
    books:propTypes.array,
    onUpdate:propTypes.func
}

export default ListBooks
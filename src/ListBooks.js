import React from 'react'
import ListBooksContent from './ListBooksContent'
import { Link } from 'react-router-dom'

function ListBooks({books, onUpdate}){

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <ListBooksContent books={books} onUpdate={onUpdate} />
            <div className="open-search">
                <Link to='/search'><button>Add a book</button></Link>
            </div>
        </div>
    )
}

export default ListBooks
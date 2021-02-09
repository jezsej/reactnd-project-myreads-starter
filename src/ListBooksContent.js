import React from 'react'
import BookShelves from './BookShelves'

function ListBooksContent({books, onUpdate}){
    return (
        <div className="list-books-content">
            <BookShelves books={books} onUpdate={onUpdate}/>
        </div>
    )

}


export default ListBooksContent
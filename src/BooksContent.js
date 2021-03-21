import React from 'react'
import Shelves from './Shelves'
import propTypes from 'prop-types';

function BooksContent({books, onUpdate}){
    return (
        <div className="list-books-content">
            <Shelves books={books} onUpdate={onUpdate}/>
        </div>
    )

}

BooksContent.propTypes ={
    books:propTypes.array,
    onUpdate:propTypes.func
}

export default BooksContent
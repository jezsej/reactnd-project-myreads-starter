import React from 'react'
import Shelf from './Shelf'
import propTypes from 'prop-types';


function Shelves({books, onUpdate}){

    return (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <Shelf books={books.filter(book => book.shelf === 'currentlyReading')} onUpdate = {onUpdate}/>
            </div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <Shelf books={books.filter(book => book.shelf === 'wantToRead')} onUpdate = {onUpdate}/>
            </div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <Shelf books={books.filter(book => book.shelf === 'read')} onUpdate = {onUpdate}/>
            </div>
        </div>


    )

}
Shelves.propTypes ={
    books:propTypes.array,
    onUpdate:propTypes.func
}

export default Shelves
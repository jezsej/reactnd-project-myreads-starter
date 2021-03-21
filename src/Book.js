import React from "react";
import * as BooksAPI from './BooksAPI'
import propTypes from 'prop-types';

function Book({book, onUpdate}){

    const update = shelf => {
        BooksAPI.update(book, shelf).then(()=>{onUpdate()})
        
    }

    const { shelf, title, authors, imageLinks } = book

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                    <select onChange={(event) => update(event.target.value)} value={shelf !== undefined ? shelf: "none"}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            {authors !==undefined && (<div className="book-authors">{authors.join(", ")}</div>)}
            
        </div>
    )
}

Book.propTypes ={
    book:propTypes.object,
    onUpdate:propTypes.func
}

export default Book;
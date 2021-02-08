import React, { Component } from "react";
import * as BooksAPI from './BooksAPI'

class Book extends Component {
    state = {
        shelf: ''
    }
    

    update = shelf => {
        //console.log(this.props.onUpdateShelf)
        BooksAPI.update(this.props.book, shelf).then(book=>{
            console.log('book',book)
            this.setState((currentState) => ({
                shelf: currentState.shelf.trim()
            }))
        })
        //this.props.onUpdateShelf()
        
    }

    componentDidMount() {
        this.update(this.props.book.shelf)
    }

    render() {
        console.log(this.props.book.shelf, this.props.book)
        //const {book, updateShelf} = this.props
        const { shelf, title, authors, imageLinks } = this.props.book

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={(event) => this.update(event.target.value)} value={shelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors.join(", ")}</div>
            </div>
        )
    }
}

export default Book;
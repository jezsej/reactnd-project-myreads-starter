import React, { Component } from 'react'
import BookShelf from './BookShelf'

class ListBooksContent extends Component {
    render() {
        return (
            <div className="list-books-content">
                <BookShelf/>
            </div>
        )
    }
}

export default ListBooksContent
import React, { Component } from "react";
import Book from '../Book'

class WantToRead extends Component {
    render() {
        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        this.props.wantToRead.map(book => (
                            <li key={book.id}><Book book={book} /></li>
                        ))
                    }
                </ol>
            </div>
        )
    }
}

export default WantToRead
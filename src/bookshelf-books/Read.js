import React, { Component } from "react";
import Book from '../Book'

class Read extends Component {
    render() {
        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        this.props.read.map(book => (
                            <li key={book.id}><Book book={book} /></li>
                        ))
                    }
                </ol>
            </div>
        )
    }
}

export default Read
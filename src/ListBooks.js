import React, { Component } from 'react'
import ListBooksContent from './ListBooksContent'
import { Link } from 'react-router-dom'


class ListBooks extends Component {
    render() {

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <ListBooksContent books={this.props.books} onUpdate={this.props.onUpdate} />
                <div className="open-search">
                    <Link to='/search'><button>Add a book</button></Link>
                </div>
            </div>
        )
    }
}

export default ListBooks
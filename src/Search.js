import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import propTypes from 'prop-types';

class Search extends Component {
    state = {
        query: '',
        books: []
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }))

        if (query !== '') {
             BooksAPI.search(query).then(books => {
                this.setState(() => ({
                    books
                }))
            })
        } 
        else {
            this.setState(() => ({
                books: []
            }))
        }

    }


    render() {
        const { query, books } = this.state
        const { booksOnShelf, onUpdate } = this.props


        let vBooks = []

        if (books.length > 0) {
            vBooks = books.map(book => {
                booksOnShelf.forEach(bookOnShelf => {
                    if (book.id === bookOnShelf.id) {
                        book.shelf = bookOnShelf.shelf
                    }
                })
                return book
            })
        }
        
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">

                        <input type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            vBooks.length > 0 ? (
                                vBooks.filter(book => book.imageLinks !== undefined).map(book => (
                                    <li key={book.id}><Book book={book} onUpdate={onUpdate} /></li>
                                ))
                            ) : (
                                query !== '' && books.length === 0 && <h3>No result</h3>
                            )
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

Search.propTypes = {
    booksOnShelf:propTypes.array,
    onUpdate: propTypes.func
}

export default Search
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
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
        } else {
            this.setState(() => ({
                books: []
            }))
        }

    }


    render() {
        const { query, books } = this.state
        const { booksOnShelf, onUpdate } = this.props


        let verifiedBooks = []

        if (books.length > 0) {
            verifiedBooks = books.map(book => {
                booksOnShelf.forEach(bookOnShelf => {
                    if (book.id === bookOnShelf.id) {
                        book.shelf = bookOnShelf.shelf
                    }
                })
                return book
            })
        }

        console.log('verifiedBooks>>', verifiedBooks)

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'><button className="close-search">Close</button></Link>
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
                            verifiedBooks.length > 0 ? (
                                verifiedBooks.filter(book => book.imageLinks !== undefined).map(book => (
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

export default SearchBooks
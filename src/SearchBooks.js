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

    clearQuery = () => {
        this.updateQuery('')
    }

    render() {
        const { query, books } = this.state
        const { allBooks } = this.props
        
        
        console.log('allBooks ', allBooks)
        console.log('books ', books)

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
                            books.length > 0 && (
                                books.filter(book => book.imageLinks !== undefined).map(book => (
                                    <li key={book.id}><Book book={book} onUpdate={this.props.onUpdate} /></li>
                                ))
                            )
                        }
                    </ol>


                </div>
            </div>
        )
    }
}

export default SearchBooks
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
            query: query.trim()
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

        console.log('books ', books)
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'><button className="close-search">Close</button></Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
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
import React, { Component } from 'react'
import BookShelves from './BookShelves'
//import * as BooksAPI from './BooksAPI'

class ListBooksContent extends Component {

    

    render() {
        
        return (
            <div className="list-books-content">
                <BookShelves books={this.props.books} onUpdate={this.props.onUpdate}/>
            </div>
        )
    }
}

export default ListBooksContent
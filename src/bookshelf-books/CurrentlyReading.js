import React, { Component } from 'react'
import Book from '../Book'

class CurrentlyReading extends Component {

    state = {
        currentlyReading: []
    }

    // componentDidMount() {
    //     this.setState(() => ({
    //         books
    //       }))
    //   }

    render() {

        const {currentlyReading, onUpdateShelf} = this.props
        


        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        currentlyReading.map(book => (
                            <li key={book.id}><Book book={book} onUpdateShelf={onUpdateShelf}/></li>
                        ))
                    }
                </ol>
            </div>
        )
    }
}

export default CurrentlyReading
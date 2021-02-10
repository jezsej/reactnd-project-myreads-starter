import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }))
    })
  }

  updateShelf = () =>{
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }))
    })
}



  render() {
    return (
      <div className="app">
      <Route exact path='/' render={() => (
          <ListBooks books={this.state.books} onUpdate = {this.updateShelf}/>
        )} />
        <Route path='/search' render={({ history })=>(
          <SearchBooks booksOnShelf={this.state.books} onUpdate = {this.updateShelf}/>
          //history.push('/')
        )}/>
      </div>
    )
  }
}

export default BooksApp

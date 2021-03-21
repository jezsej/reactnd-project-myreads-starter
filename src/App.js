import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  async componentDidMount() {
    const books =  await BooksAPI.getAll();
    this.setState({books})
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
        <Route exact path='/'>
          <ListBooks books={this.state.books} onUpdate={this.updateShelf} />
        </Route>
        <Route path='/search' render={()=>(
          <Search booksOnShelf={this.state.books} onUpdate = {()=>{
            this.updateShelf()
          }}/>
          
        )}/>
      </div>
    )
  }
}

export default BooksApp

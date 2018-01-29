import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  addBook = () => {
    this.setState({ showSearchPage: true })
  }
  render() {
    return (
      <div className="app">
        <Route
          exact path='/'
          render={() => (
            <ListBooks
              AddBook={this.addBook} />
          )}
        />
        <Route
          path='/search'
          render={() => (
            <SearchBooks />
          )}
        />

      </div>
    )
  }
}

export default BooksApp

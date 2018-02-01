import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {

  state = {
    books: [],
    
  }
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
      console.log(books)    
    })
  }
  

  render() {
    return (
      <div className="app">
        <Route
          exact path='/'
          render={() => (
            <ListBooks
              books={this.state.books}
            />
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

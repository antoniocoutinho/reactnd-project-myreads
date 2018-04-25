import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {

  state = {
    books: []
  }
  
  changeShelf = (book, shelf) => {
    book.shelf = shelf;
    BooksAPI.update(book, shelf).then( _=> {
      this.setState({books: this.state.books.filter( (b) => b.id !== book.id).concat([ book ])});
    });
  };
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
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
              onChangeShelf={ (book, shelf) => this.changeShelf (book, shelf) }
            />
          )}
        />
        <Route
          path='/search'
          render={() => (
            <SearchBooks 
            onChangeShelf={ (book, shelf) => this.changeShelf (book, shelf) }
          />
          )}
        />

      </div>
    )
  }
}

export default BooksApp

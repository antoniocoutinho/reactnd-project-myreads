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
    //First update to the target shelf
    book.shelf = shelf;
    //Updating the shelf of the book, via BooksAPI and send a new object to the then() method
    BooksAPI.update(book, shelf).then( () => {
      //Returning the book list without diferent of the book.id, concatenating the updated book object to the list of objects and save into newBookList variable     
      let newBookList = this.state.books.filter( (b) => b.id !== book.id).concat([ book ])
      //Updating the state in order to render it on my browser 
      this.setState({books:newBookList})
    });
  };
  componentDidMount(){
    //Getting all boosks from API and updating the state in order to render it on my browser
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

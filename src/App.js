import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css';
import ListShelves from './ListShelves';
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

    const shelves = [
      {
          title: 'Currently Reading',
          shelfId: 'currentlyReading',
      },
      {
          title: 'Want to Read',
          shelfId: 'wantToRead',
      },
      {
          title: 'Read',
          shelfId: 'read',
      }
  ];
    return (
      <div className="app">
        <Route
          exact path='/'
          render={() => (
            <ListShelves
              shelves={shelves}
              books={this.state.books}
              onChangeShelf={ (book, shelf) => this.changeShelf (book, shelf) }
            />
          )}
        />
        <Route
          path='/search'
          render={() => (
            <SearchBooks 
            books={this.state.books}
            onChangeShelf={ (book, shelf) => this.changeShelf (book, shelf) }
          />
          )}
        />

      </div>
    )
  }
}

export default BooksApp

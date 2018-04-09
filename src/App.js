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
  
  onChangeShelf = (book, shelf) => {
    console.log('Alterando para:', shelf)

    console.log('Antes:', book.shelf)
    book.shelf = shelf;
    console.log('Depois:', book.shelf)
    BooksAPI.update(book, shelf).then( _=> {
      this.setState({books: this.state.books.filter( (b) => b.id !== book.id).concat([ book ])});
    });
  };
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
      console.log('Books ',books)
      /*
      let currentlyReadingList = books.filter(books => books.shelf === 'currentlyReading')
      this.setState({currentlyReadingList: currentlyReadingList})
      console.log('currentlyReadingList',currentlyReadingList)

      let wantToReadList = books.filter(books => books.shelf === 'wantToRead')
      this.setState({wantToReadList: wantToReadList})
      console.log('wantToReadList',this.state.wantToReadList)

      let readList = books.filter(books => books.shelf === 'read')
      this.setState({readList: readList })
      console.log('readList',readList)
      */
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
              onChangeShelf={ (book, shelf) => this.onChangeShelf (book, shelf) }
              //currentlyReadingList={this.state.currentlyReadingList}
              //wantToReadList={this.state.wantToReadList}
              //readList={this.state.readList}
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

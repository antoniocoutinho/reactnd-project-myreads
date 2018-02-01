import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {

  state = {
    books: [],
    currentlyReadingList: [],
    wantToReadList: [],
    readList: []
  }
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
      console.log('Books ',books)
      
      let currentlyReadingList = books.filter(books => books.shelf === 'currentlyReading')
      this.setState({currentlyReadingList: currentlyReadingList})
      console.log('currentlyReadingList',currentlyReadingList)

      let wantToReadList = books.filter(books => books.shelf === 'wantToRead')
      this.setState({wantToReadList: wantToReadList})
      console.log('wantToReadList',this.state.wantToReadList)

      let readList = books.filter(books => books.shelf === 'read')
      this.setState({readList: readList })
      console.log('readList',readList)
      
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
              currentlyReadingList={this.state.currentlyReadingList}
              wantToReadList={this.state.wantToReadList}
              readList={this.state.readList}
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

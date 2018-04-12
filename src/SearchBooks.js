import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom'

class SearchBooks extends Component {

  state = {
    books: [],
    query: ""
  };
  onChangeQuery = (q) => {
    let query = q.trim();
    if (q) {
      BooksAPI.search(query).then(book => {
        if (book.error === 'empty query') {
          console.log('book object: ', book)
          console.log('book.error: ', book.error)
          this.setState({
            books: [],
            query: q
          })
        } else {
          this.setState({
            books: book,
            query: q
          })
        }
      }).catch(erro => {
        alert(erro)
      })
    } else {
      this.setState({
        books: [],
        query: ''
      });
    }
  }

  render() {
    const { onChangeShelf } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">

          <Link
            to='/'
            className='close-search'
          >Close Search
              </Link>

          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.onChangeQuery(event.target.value)}
            />

          </div>

        </div>
        {(this.state.books.length === 0)
          ?
          <div className="search-books-results">
            Resultados {this.state.books.length}
          </div>
          : <div className="search-books-results">
            <ol className="books-grid">
              {this.state.books.map(book =>
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover"
                        style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                      <div className="book-shelf-changer">
                        <select value={book.shelf ? book.shelf : "none"}
                          onChange={(event) => onChangeShelf(book, event.target.value)} >
                          <option value="none" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>

                    <div className="book-authors">{book.authors}</div>
                  </div>
                </li>
              )}
            </ol>
          </div>
        }
      </div>
    )
  }
}

export default SearchBooks;


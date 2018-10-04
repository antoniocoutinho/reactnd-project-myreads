import React, { Component } from 'react';
import Book from './Book'
import PropTypes from 'prop-types'


class ListBooks extends Component {

  /*Using PropTypes to typecheck arrays, funcs, strings...*/
  static propTypes = {
    shelves: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  render() {
    
    const { shelves, books, onChangeShelf } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelves.title}</h2>
        <div className="bookshelf-books">
          <ol className='books-grid'>
            {books.map(book => (
              <li key={book.id}>
                <Book
                  book={book}
                  onChangeShelf={onChangeShelf}
                />
              </li>
            ))}
          </ol>

        </div>
      </div>

    )
  }
};

export default ListBooks;

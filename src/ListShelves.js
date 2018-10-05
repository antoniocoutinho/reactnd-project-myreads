import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import ListBooks from './ListBooks';


class ListShelves extends Component {

  /*Using PropTypes to typecheck arrays, funcs, strings...*/
  static propTypes = {
    shelves: PropTypes.array.isRequired, 
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }


  render() {
    const { shelves, books, onChangeShelf } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
                {
                    shelves.map((shelf) => (

                        <div key={shelf.shelfId}>
                            <ListBooks
                                shelves={shelf}
                                books={books.filter( (book) => book.shelf === shelf.shelfId )}
                                onChangeShelf={onChangeShelf}
                            />
                        </div>

                    ))
                }
        </div>
        <div className="open-search">
          <Link
            to='/search'
          >Open Search
              </Link>
        </div>
      </div>
    )
  }
};

export default ListShelves;

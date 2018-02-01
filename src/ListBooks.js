import React, { Component } from 'react';

import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead';
import Read from './Read';
import { Link } from 'react-router-dom';


class ListBooks extends Component {
    render (){
      const { books, currentlyReadingList, wantToReadList, readList  } = this.props
      
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            
              <div>
                <CurrentlyReading
                  // books Array with all books, without shelf filter.
                  currentlyReadingList={currentlyReadingList}
                  
                />
                <WantToRead
                  // books Array with all books, without shelf filter.
                  wantToReadList={wantToReadList}
                />
                <Read
                  // books Array with all books, without shelf filter.
                  readList={readList}
                />
              </div>
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

export default ListBooks;

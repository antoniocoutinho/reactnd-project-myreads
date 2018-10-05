import React, { Component } from 'react';

class Book extends Component {
    render() {
        const {book, onChangeShelf} = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    {/*Verifying if there is a imageLinks property*/}
                    {book.imageLinks ?
                        <div className="book-cover"
                            style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}>
                        </div>
                        :
                        <div className="book-cover">
                        </div>
                    }
                    <div className="book-shelf-changer">
                        <select value={book.shelf ? book.shelf : "none"} onChange={(event) => onChangeShelf(book, event.target.value)}>
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
        )
    }
}

export default Book;
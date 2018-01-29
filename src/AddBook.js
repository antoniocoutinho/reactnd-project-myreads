import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddBook extends Component {
    render() {
        return (
            <div className="open-search">
                {/* Receving propsAddBook from App.js. */}
                <Link
                    to='/search'
                >Open Search
                </Link>
            </div>
        )
    }
}

export default AddBook;
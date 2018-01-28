import React, {Component} from 'react';

class AddBook extends Component {
    render() {
        return(
            <div className="open-search">
            {/* Receving propsAddBook from App.js. */}
              <a onClick={this.props.AddBook}>Add a book</a>
            </div>
        )
    }
}

export default AddBook;
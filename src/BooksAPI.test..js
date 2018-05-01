import React from 'react'
import {shallow, mount} from 'enzyme'
import BooksAPI from './BooksAPI'

describe('<BooksAPI/>', ()=> {
    it('shallows BooksAPI', () => {
        expect(shallow(<BooksAPI/>))
    })
})
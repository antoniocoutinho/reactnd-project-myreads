import React from 'react'
import {shallow, mount} from 'enzyme'
import App from './App'

describe('<App>', ()=>{
  it('shallow renders App without crashing', ()=>{
    expect(shallow(<App/>))
  })
})


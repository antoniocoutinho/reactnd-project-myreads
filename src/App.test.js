import React from 'react'
import {shallow, mount} from 'enzyme'
import App from './App'

describe('<App>', ()=>{
  global.localStorage ={token: ''}
  it('shallow renders App without crashing', ()=>{
    expect(shallow(<App/>))
  })
})


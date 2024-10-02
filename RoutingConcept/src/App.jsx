import React, { Component } from 'react'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/About/:id' element={<About />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
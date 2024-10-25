import React from 'react'
import DashBord from './FireBase/DashBord'
import SignUp from './FireBase/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './FireBase/SignIn'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={SignUp}></Route>
          <Route path='/signin' Component={SignIn}></Route>
          <Route path='/dashbord' Component={DashBord}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

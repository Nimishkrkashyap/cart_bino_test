import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Cart from './Components/Cart'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
    <div className='appContainer'>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
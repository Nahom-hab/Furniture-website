import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpPage from './pages/signup';
import HomePage from './pages/home';
import Shop from './pages/Shop';
import Header from './components/Header';
import Product from './pages/Product';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/product' element={<Product />}></Route>

        <Route path='/signup' element={<SignUpPage />}></Route>
      </Routes>
    </BrowserRouter >
  )
}



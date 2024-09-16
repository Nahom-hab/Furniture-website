import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Shop from './pages/Shop';
import Header from './components/Header';
import Product from './pages/Product';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Blog from './pages/blog';
import BlogDetail from './pages/BlogDetail';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path='/aboutUs' element={<About />}></Route>
        <Route path='/contactUs' element={<ContactUs />}></Route>
        <Route path='/product' element={<Product />}></Route>
      </Routes>
    </BrowserRouter >
  )
}



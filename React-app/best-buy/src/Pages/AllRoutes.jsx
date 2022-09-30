import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../Components/PrivateRoute'
import Cart from './Cart'
import Home from './Home'
import Products from './Products'
import SignIn from './Signin'
import Signup from './Signup'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<h1>Product</h1>}/>
        <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<SignIn/>}/>

    </Routes>
  )
}

export default AllRoutes
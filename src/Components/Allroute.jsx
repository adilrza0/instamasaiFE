import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Addpost from '../Pages/Addpost'

export default function Allroute() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/posts' element={<Home/>} />
        <Route path='/addpost' element={<Addpost/>} />

    </Routes>
  )
}

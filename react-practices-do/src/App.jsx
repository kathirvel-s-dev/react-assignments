import React, { useState } from 'react'
import axios from "axios"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Compos/useParams Prac/Home"
import UserDetails from './Compos/useParams Prac/UserDetails'
const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/user/:id' element={<UserDetails/>}/>
      </Routes>
    </BrowserRouter>
  )


}

export default App



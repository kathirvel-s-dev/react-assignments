import React, { createContext, useContext, useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import UiMainPage from './Compos/UiMainPage'
import QuizOne from './Compos/QuizOne'
import Dasboard from './Compos/Dasboard'
import Cart from './Compos/Cart'
import Home from './Compos/Home'
export const QzData =createContext()
const App = () => {

  const [qz1Name,setQz1Name]=useState()
  const [count, setCount] = useState()

  
  return (
    <>
    <BrowserRouter>
    <QzData.Provider value={{qz1Name, setQz1Name,count,setCount }} >
    <Routes>
      <Route path='/' element={<UiMainPage/>}/>
          <Route path='/qz1' element={<QuizOne />} />
          <Route path='/dashboard' element={<Dasboard/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/home' element={<Home />} />


    </Routes>
    </QzData.Provider>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
import React, { useContext } from 'react'
import { QzData } from '../App'

const Cart = ( ) => {
 const {count} =useContext(QzData)
  return (
    <>
    <h1>Your Total Cart Item is : {count}</h1>
    </>
  )
}

export default Cart
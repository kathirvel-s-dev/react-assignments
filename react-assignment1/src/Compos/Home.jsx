import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { QzData } from '../App'

const Home = () => {
  const { count, setCount } = useContext(QzData)
  const nav = useNavigate()
  function cartCount(){
    setCount(prev=> prev+1)
    alert("Successfully added to Cart ")
  }
  return (
    <div>
      <h1>Welcome to Home page </h1>

      <div>
        <h2>Product 1</h2>
        <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, mollitia?</p>
        <button onClick={cartCount}>Add to Cart </button>

        <h2>Product 2</h2>
        <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, mollitia?</p>
        <button onClick={cartCount}>Add to Cart </button>

        <h2>Product 3</h2>
        <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, mollitia?</p>
        <button onClick={cartCount}>Add to Cart </button>

        <button onClick={() => {
          nav("/cart")
        }}>
          See Cart
        </button>

      </div>
    </div>
  )
}
export default Home
import React, { useContext } from 'react'
import { QzData } from '../App'
import { useNavigate } from 'react-router-dom'

const Dasboard = () => {
    const {qz1Name,setQz1Name}=useContext(QzData)
    const nav=useNavigate()
  return (
      <div>
          <button
              onClick={() => {
                  navigate("/")
              }}
          >Back To Qustion Page</button>
        <h1>Welcome to Dasboard {qz1Name} !</h1>
        <button
        onClick={()=>{
            nav("/qz1")
            setQz1Name("")
        }}
        >logOut</button>
        </div>
  )
}

export default Dasboard
import React, { useContext } from 'react'
import { QzData } from '../App'
import { useNavigate } from 'react-router-dom'

const QuizOne = () => {

   const {qz1Name,setQz1Name}= useContext(QzData)
   const navigate =useNavigate()
  return (
    <div >
        <button
        onClick={()=>{
            navigate("/")
        }}
        >Back To Qustion Page</button>
        <h1>Login Page</h1>
        <input 
        type="text"
        placeholder='Enter ur Name.....'
        onChange={(e)=>{
            setQz1Name(e.target.value)
            
            
        }} />
        <br />
        <button onClick={()=>{
            if(!qz1Name || qz1Name.trim() ==="") {
                alert("Please enter ur name")
                return
                
            }
            else{
                navigate("/dashboard")
            }
             
        }
            
        }>
        login now
        </button>

    </div>
  )
}

export default QuizOne
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
const UserDetails = () => {
    const{id }=useParams()
    const [user,setUser]=useState([]) //here data is in object format bcz of 

    useEffect(()=>{
        axios.
            get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                setUser(res.data)
                console.log(res.data);
                
            })
    },[id])
  return (
    <div>

        <table style={{border:"1px solid"}}>
            <thead>
                <td>
                      <h1> User id: </h1>
                </td>
                <td>
                      <h1>{id}</h1>
                </td>
            </thead>
            <tr>
                <td>
                      <h1>Name:</h1>
                </td>
                  <td>
                      <h1>{user.name}</h1>
                  </td>
            </tr>
            <tr>
                <td>
                      <h1>Email:</h1>
                </td>
                  <td>
                      <h1>{user.email}</h1>
                  </td>
            </tr>
            <tr>
                <td>
                      <h1>Username:</h1>
                </td>
                  <td>
                      <h1>{user.username}</h1>
                  </td>
            </tr>

            <tr>
                <td>
                      <h1>Phone no:</h1>
                </td>
                  <td>
                      <h1>{user.phone}</h1>
                  </td>
            </tr>
        </table>          
    </div>
  )
}

export default UserDetails
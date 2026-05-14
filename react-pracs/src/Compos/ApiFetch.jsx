import React, { useEffect, useRef, useState } from 'react'
import axios from "axios"
const ApiFetch = () => {

    const [user,setUser]=useState([])
    const [search, setSearch] = useState("")
    const userRef= useRef("")
    useEffect(()=> {


        // / focus is method 
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then( (res)=>  {
            setUser( res.data)
     } )
        .catch((err)=> {
            console.log(err)
        }
        )

    },[])

 const filteredData  = user.filter ( (user)=>
        user.name.toLowerCase().includes(search.toLowerCase())  ///mistake used {}  but not written return we need to write ()
    )

  return (
    <div>

        <input 
        ref={userRef}
        type="text" 
        onChange={(e)=> {
            setSearch(e.target.value)   
        }} />
        {  filteredData.length 
            ?
            filteredData.map( (res) => (
                <h1 key={res.id}>{res.name}</h1>  ///here too i wrote res.data
            ))
            :
            <h1>user not found</h1>
        }
        

    </div>
  )
}

export default ApiFetch
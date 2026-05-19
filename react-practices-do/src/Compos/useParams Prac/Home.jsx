import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const App = () => {

    const [user, setUser] = useState([])
    const navigate=useNavigate()

    useEffect(()=>{
        axios.
            get("https://jsonplaceholder.typicode.com/users")
            .then(data => setUser(data.data))
    },[])


    return (
        <div>
            <h1> Welcome user....</h1>
            {
                user.map(data => {
                    return(
                        <div key={data.id}>
                            {console.log(data)}
                            <h1 >{data.name}</h1>
                            <button onClick={()=> navigate(`user/${data.id}`)}>view</button>
                        </div>
                    )
                  
 
                }
                )
            }
        </div>
    )
}

export default App



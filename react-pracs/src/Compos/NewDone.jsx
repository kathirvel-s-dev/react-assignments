import axios from 'axios'
import React, { useEffect, useState } from 'react'

const NewDone = () => {

    const [user,setUser]=useState([])
    const [search,setSearch]=useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=> {
            setUser(res.data)
            setLoading(false)
            })
        .catch((err)=>{
            setError(err.message)
            setLoading(false)
        }  )
        
    },[])

    const filteredList=user.filter((val)=> (
        val.name.toLowerCase().includes(search.toLowerCase())
    ))
    if (loading) return <h1>Loading....</h1>
   if(error) return <h1>{error}</h1> 
  return (
    <div>
        <input type="text"
        value={search}
        onChange={(e)=> setSearch(e.target.value)}

         />


            {filteredList.length
            ?

            filteredList.map((val) =>  (
                <h1 key={val.id}>{val.name}</h1> 
                ) )
            :
            <h2>user not found</h2>
            }

    </div>
  )
}

export default NewDone
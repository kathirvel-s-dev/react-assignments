import React, { useEffect, useMemo, useState } from 'react'

const App = () => {

  const [search,setSearch]=useState("")
  const [dark,setDark]=useState(false)

  const themer = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black"
    }
  },[dark])

  const products = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Phone",
    "Tablet",
    "Charger",
    "Headphones"
  ];

  const filteredData = useMemo(() => {
    return slowLoad(products, search)
  } ,[search]) 

  return (
    <div style={themer}>
      <h1>Products </h1>
      <input type="text"
      onChange={(e)=> setSearch(e.target.value) }
      />
      <button onClick={()=> setDark(!dark)}>change theme</button>
      <ul >
        {
          filteredData.map((data,index)=> (
            <li key={index}>{data}</li>
          ))
        }
      </ul>

    </div>
  )
}

export default App

function slowLoad(product,searchChar){
  console.log("running slow function....");
  
  for( let i=0;i<500000000n;i++){  }
  return product.filter((pros) => 
    pros.toLowerCase().includes(searchChar.toLowerCase()))

}
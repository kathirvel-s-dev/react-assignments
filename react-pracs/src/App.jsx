import React, { useReducer, useState } from 'react'

const ACTIONS={
  INCREMENT :"increment" ,
  DECREMENT :"decrement",
  RESET :"reset"
}

const initialValue = { count: 0 }

function reducerFn(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 }
    case ACTIONS.DECREMENT:
      return { count: state.count - 1}
    case ACTIONS.RESET:
      return { count: 0 }
      //here also i made mistake state:state.count+1 we want to change the state of count only not state 
    default:
      return state
  }

}
const App = () => {

  const [state ,dispatch]=useReducer( reducerFn, initialValue)

  return (
    <div>
      <h1>useReducer practices</h1>
      <h2>counter</h2>
      <h3>count is : {state.count}</h3>
      <button onClick={()=>dispatch({ type:ACTIONS.INCREMENT})}>+</button> 
      {/* //here i made mistake directly giving a dispatch then i crted it by giving callback fnction  */}
      <button onClick={() => dispatch({type:ACTIONS.DECREMENT})}>-</button>
      <button onClick={() => dispatch({type:ACTIONS.RESET})}>reset</button>
    </div>
  )
}

export default App
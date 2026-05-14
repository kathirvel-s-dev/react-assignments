import React from 'react'
import { useReducer } from 'react'
const Prac = () => {

    const ACTIONS = {
        INCREMENT: 'increment',
        DECREMENT: "decrement",
        INCREMENTBYVALUE: "incrementByVal",
        RESET: "reset"
    }
    
    const initialValue = { count: 0 }

    function reducerFn(state, action) {
        switch (action.type) {
            case ACTIONS.INCREMENT:
                return {
                    count:state.count + 1
                }
            case ACTIONS.DECREMENT:
                return {
                    count:
                        state.count > 0
                            ?
                            state.count - 1
                            :
                            0
                }
            case ACTIONS.INCREMENTBYVALUE:
                return {
                    count: state.count + action.payload
                }
            case ACTIONS.RESET:
                return {
                    count: 0
                }
            default:
                return state
        }
    }

   const [state ,dispatch  ]=useReducer(reducerFn,initialValue)

  return (
    <div>
        <h1> {state.count}</h1>
        <button onClick={()=>dispatch({type : ACTIONS.INCREMENT})}>+</button>
        <button onClick={()=>dispatch({type :ACTIONS.DECREMENT})}>-</button>

       {/* { [5,10,15].map((val) =>(
            <button
                onClick={()=> dispatch( {type: "incrementbyVal" ,payload : val})}
            >
                {val}
            </button>

       ))} */}
        <button onClick={()=> dispatch({type : ACTIONS.INCREMENTBYVALUE ,payload : 5})}>  5</button>
        <button onClick={() => dispatch({ type: ACTIONS.INCREMENTBYVALUE, payload: 10 })}>  10</button>
        <button onClick={() => dispatch({ type: ACTIONS.RESET })}>  Reset </button>
    </div>
  )
}

export default Prac
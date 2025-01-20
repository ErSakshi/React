import React, { useReducer } from 'react'

const UseReducerEx2 = () => {
    let initialState =0;
    let reducer=(state,action)=>{
       switch (action.type) {
        case "add": return state + action.value;
           break;
       
           case "sub": return state - action.value;
           break;
        default: return state;
          break;
       }
    }
    let[state,dispatch]=useReducer(reducer,initialState);
  return (
    <div>
        <h1 className='font-bold text-4xl my-3'>State : {state}</h1>
        <button onClick={()=>{dispatch({type :"add",value:10})}}
         className='px-3  mx-2 bg-orange-500 text-white rounded-lg'>Add</button>
       
       <button onClick={()=>{dispatch({type :"sub" ,value:5})}}
         className='px-3  mx-2 bg-orange-500 text-white rounded-lg'>Sub</button>

    </div>
  )
}

export default UseReducerEx2
import React, { useReducer } from 'react'

const UseReducerEx1 = () => {
    let initialState=0;
    let reducer=(state,action)=>{

        switch(action){
            case "add" : return state+1;
            break;
            case "sub" : {
                if(state==0){
                return state;
                }
                else{
                    return state-1}
                };
            break;
            case "reset" : return 0;
            break;
            default : return state;
            break;
        }
    }
    let[state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <h1 className='font-bold text-4xl my-3'>State : {state}</h1>
        <button  onClick={()=>{dispatch("add")}} className='px-3  mx-2 bg-orange-500 text-white rounded-lg'>Add</button>
        <button  onClick={()=>{dispatch("sub")}}  className='px-3  mx-2 bg-orange-500 text-white rounded-lg'>Sub</button>
        <button  onClick={()=>{dispatch("mult")}} className='px-3 mx-2  bg-orange-500 text-white rounded-lg'>Multi</button>
        <button  onClick={()=>{dispatch("reset")}} className='px-3 mx-2  bg-orange-500 text-white rounded-lg'>Reset</button>
    </div>
  )
}

export default UseReducerEx1
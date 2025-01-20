import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, reset, sub } from './counterSlice';

const Counter = () => {
    

    let count = useSelector((store)=>{
       return store.addReducer.count;
        
    })

    let dispatch = useDispatch();

    let handleClick =()=>{
        dispatch(add(10))
       
    }
    let handleClick2 =()=>{
       
        dispatch(sub(10))
    }
    let handleClick3 =()=>{
       
      dispatch(reset(0))
  }
  return (
    <div>
        <h1 className='text-2xl'>Count : {count}</h1>
        <button onClick={handleClick}  className='bg-slate-500  p-2 m-3 rounded-md'>Add</button> 
        <button onClick={handleClick2}  className='bg-slate-500 p-2 m-3 rounded-md '>Sub</button>
        <button onClick={handleClick3}  className='bg-slate-500 p-2 m-3 rounded-md '>reset</button>
    </div>
  )
}

export default Counter
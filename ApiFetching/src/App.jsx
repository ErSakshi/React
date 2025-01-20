import { createSlice } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import todoSlice from './component/todoSlice'

const App = () => {
  let list = useSelector((store)=>{ 
    return store.todoReducer.list})
 

  let{actions}=todoSlice
  let{addtodo,deletetodo,updatetodo}=actions

  

  let dispatch = useDispatch();
  let[state,setState]=useState({
    todo:"",
    id:null,
   
  })

 let handleChange =(e)=>{
   setState({...state,[e.target.name]:e.target.value})
 }

 
  
 let handleClick = (e)=>{
   e.preventDefault()
   if(state.todo.length > 0 && state.id == null){
    dispatch(addtodo({...state,id:Date.now()}))
   }
   else if(state.todo.length > 0 && state.id != null){
      dispatch(updatetodo(state))
   }
     setState({
      todo:"",
      id:null
     })
 }
   
 let handleDelete =(val)=>{
    
      dispatch(deletetodo(val.id))
   }
    
 

 let handleUpdate =(val)=>{
     console.log(val);
     setState(val)           //?  it will bring the content of targeted object into the field
     
     
 }

  return (
    <div className='m-auto flex'>
     
      <form action="" className='w-[30%] h-[10vh] bg-slate-400  m-4 flex justify-center items-center '>
      <h1 className='text-xl font-bold '>Todo List : </h1>
      <input type="text"  onChange={handleChange}
       name='todo' value={state.todo} required className='w-[15vw] h-[5vh] bg-slate-100 m-4 border-[1px] '/>
       <button className='bg-slate-700 text-white p-1'
       onClick={handleClick}>Add todo</button>
      </form> 

      <main className=' w-[60%] bg-slate-300  flex flex-wrap justify-center'>
        {Array.isArray(list) && list.length > 0 && list.map((val,i)=>{
          return(
            <div key={val.id} className=' w-[15vw] p-2 m-4  bg-slate-700 text-white'>
            <p>{val.todo}</p>
            <p>{val.id}</p>
            <button onClick={()=>{handleUpdate(val)}}
             className='bg-blue-500 text-white p-1 m-1'>update</button>
            <button  onClick={()=>{handleDelete(val)}}
            className='bg-red-500 text-white p-1 m-1'>delete</button>
          </div>
          )
        })}
      </main>
       
    </div>
  )
}
export default App 







// import React from 'react'
// import AxiosIntro from './component/axios/AxiosIntro'

// const App = () => {
//   return (
//     <div>
//       <AxiosIntro></AxiosIntro>
//     </div>
//   )
// }

// export default App
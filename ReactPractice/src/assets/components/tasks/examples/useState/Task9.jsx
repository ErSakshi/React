import React, { useState } from 'react'

const Task9 = () => {

    let[state,setState]=useState({
        todo:'',
        id:Date.now() ,
        todoList : []
    })
 
    let handleChange = (e)=>{
     let{name,value}=e.target 
     setState({...state,[name]:value})
    }

    let handleClick = (e)=>{
       e.preventDefault()
       let tempObj = {
        todo : state.todo ,
        id : state.id
       }
       setState({
        todo :'',
        id: Date.now(),
        todoList : [...state.todoList ,tempObj]
       })
       console.log(state);
       
       
    }

  return (
    <div>
        <div className='w-[20%] border-black border-[1px] p-2 m-5'>
            <input type="text" onChange={handleChange} name='todo' value={state.todo} className='border-[1px] border-black' />
            <button  onClick={handleClick} className='p-1 m-1 bg-orange-400 text-white rounded-md'>Add</button>
        </div>
        <div className=' w-[20%]  bg-orange-300 my-8 border-[2px] border-orange-600 text-center '>
            <h1 className='text-lg font-bold'>Todo-List</h1>
          {state.todoList.length > 0 && state.todoList.map((ele,ind)=>{
            return(
                <div key={ind} className='bg-orange-600 text-white h-[5%] p-1 m-2'>
                <h1>{ele.todo}</h1>
                <p>{ele.id}</p>
               </div>
            )
          })}
        </div>
    </div>
  )
}

export default Task9
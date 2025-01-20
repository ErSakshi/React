import React, { useState } from 'react'

const Task8 = () => {

    let[state,setState]=useState({
        name : "",
        loc : ""
    })
  let handleChange = (e)=>{
    let{name,value}=e.target
    setState({...state,[name]:value})
  }

  let handleClick = (e)=>{
    e.preventDefault()
    setState({
        name : state.name,
        loc: state.loc
    })
    console.log(state);
    
  }
  console.log(state);
  
  return (
    <div>
        <form action="">
            <input type="text" name='name' value={state.name}  onChange={handleChange} className='border-[2px] border-black m-2' />
            <input type="text" name='loc' value={state.loc} onChange={handleChange}  className='border-[2px] border-black'/>
            <button 
              >Submit</button>
        </form>
        <main>
            <h1>{state.name}</h1>
            <h1>{state.loc}</h1>
           
        </main>
    </div>
  )
}

export default Task8
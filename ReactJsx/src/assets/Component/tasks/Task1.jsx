import React, { useState } from 'react'

const Task1 = () => {
    let[state,setState] = useState(name ="")

    let handleChange =(e)=>{
      let{name,value} =e.target 
      setState({...state,[name]:value})
       
     if(state.length >= 8){
        setState(state.name+=value)
        
     }
 }
 console.log(state);
 



  return (
    <div>
        <h4 className='text-md'>The length of character : {state.name.length}</h4>
        <input type="text"  onChange={handleChange}
        name='name' value={state.name} className='border-[1px] border-slate-700'/>
        <button className='bg-slate-600 p-1 text-white'>Click</button>
        <h5>{`you have to add more ${state.length } characters`}</h5>
    </div>
  )
}

export default Task1
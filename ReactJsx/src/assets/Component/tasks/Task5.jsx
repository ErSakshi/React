import React, { useState } from 'react'

const Task5 = () => {

    let[state,setState] = useState({temp : ''})
    console.log(state.temp);
    

   let handleChange = (e)=>{
     let[name,value]=e.target 
     setState({...state ,[name]:value})
     
   }
   

  return (
    <div>
        
        <input type="text"  name='temp' value={state.temp}  onChange={handleChange}/>
       
        <h1>{state.temp}</h1>
        <h1>{state.temp*9.5}</h1>
    </div>
  )
}

export default Task5
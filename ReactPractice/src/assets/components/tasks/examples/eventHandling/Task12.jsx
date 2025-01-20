import React, { useState } from 'react'

const Task12 = () => {
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
     console.log(state.name);
     console.log(state.loc);
   }
  
   
   return (
     <div>
         <form action="">
             <input type="text" name='name' value={state.name}  onChange={handleChange} className='border-[2px] border-black m-2' />
             <input type="text" name='loc' value={state.loc} onChange={handleChange}  className='border-[2px] border-black'/>
             <button onClick={handleClick}
               >Submit</button>
         </form>
        
     </div>
   )
}

export default Task12
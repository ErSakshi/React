import React from 'react'

const Form = ({username,password,id,handleChange,handleClick}) => {
    console.log(handleChange);
    
  return (
    <div>
       <input type="text" name='username' value={username}  onChange={handleChange} className='border-[2px] p-4'/> 
       <input type="text" name='password' value={password} onChange={handleChange} className='border-[2px] p-4'/> 
       <button onClick={handleClick}>Create</button>
    </div>
  )
}

export default Form
import React, { useState } from 'react'

const DynamicFormInput = () => {
    let[name,setName]=useState('')
   
  return (
    <div>
        <form  className='h-[20vh] border-[2px] border-gray-900   absolute left-1/3 top-28 rounded-md shadow-lg '>
        
            <input type="text" onChange={(e)=>{setName(e.target.value)}}
             name='name' value={name}  
            className='border-[1px] border-gray-800   m-3 rounded-md'/> 
              
             <p className='text-2xl m-4 '>{name ?  `Hello, ${name}` :"Hello Stranger"}</p>
             
        </form>
    </div>
  )
}

export default DynamicFormInput
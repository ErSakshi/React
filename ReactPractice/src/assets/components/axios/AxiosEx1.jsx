import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosEx1 = () => {

    let[state,setState]=useState([])
 
   useEffect(()=>{
    axios.get('http://api.github.com/users').then((val)=>{
        console.log(val);
        
        setState(val.data)})
        
   },[])
   
     
//    axios.post('http://api.github.com/users',state)
  return (
    <div>
      
    </div>
  )
}

export default AxiosEx1
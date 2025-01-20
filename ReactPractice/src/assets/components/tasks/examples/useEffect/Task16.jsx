import React, { useEffect, useState } from 'react'

const Task16 = () => {

    let[joke,setJoke]=useState('')
    
    useEffect(()=>{
       let apiFunc = async()=>{
        let resp = await fetch("'https://v2.jokeapi.dev/joke/Any?type=single") 
        let data = await resp.json();
        console.log(data);
        
         }
         
         

    },[])
  return (
    <div>
        <h1>{joke}</h1>
    </div>
  )
}

export default Task16
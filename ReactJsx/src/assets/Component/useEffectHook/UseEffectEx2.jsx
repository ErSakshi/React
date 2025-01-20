import React, { useEffect, useState } from 'react'


//! when we pass empty dependancy array for useEffect  hook it acts as componentDidMount() life-cycle method
//! so that it will execute only once throughout the life-cycle method 
//! it will execute at the end of the mounting phase 
//! we use this syntax useEffect(()=>{},[]) mostly for calling the api's so that api's not get called unneccesaryly and repeatedly


const UseEffectEx2 = () => {
    let[state,setState]=useState(0)

    useEffect(()=>{
        console.log("useEffect callback function is called");
        let fetching=async()=>{
            let resp=await fetch("https://api.github.com/users");
            let data= await resp.json();
            console.log(data);
            
        };
        fetching();
        
    },[])
  return (
    <div>
      <h1>Count :{state}</h1>
      <button onClick={()=>{setState(state+1)}} className='bg-orange-400 text-white px-3 rounded-md'>Increment</button>
    </div>
  )
}

export default UseEffectEx2
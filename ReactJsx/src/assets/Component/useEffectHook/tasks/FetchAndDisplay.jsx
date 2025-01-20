import React, { useEffect, useState } from 'react'


const FetchAndDisplay = () => {
  let[user,setUser]=useState([])
  let[isLoading,setLoading]=useState(true)
  let[error,setError]=useState(null)

   useEffect(()=>{
    
     let resp=fetch('https://jsonplaceholder.typicode.com/users') .then((resp)=>resp.json()).then( (data)=>{
       setUser(data)
       setLoading(false)
     }).catch((err)=>{
       setError(err.message)
       setLoading(false)
     })
   },[])

   if(isLoading){
    return "Loading"
  }
  if(error){
    return <div>"Error" :{error}</div>
  }
 
  return (
    <div className='flex justify-center my-5'>
      <ul className='bg-indigo-400 border-[2px] gap-3  rounded-md w-[50%] '>
        {user.map((ele,ind)=>{
          
          return<li key={ind} className='my-4 h-[4vh] bg-slate-500 text-2xl px-4 mx-2 gap-2'>{ele.name} : {ele.email}</li>
        })}
      </ul>
       
    </div>
  )
}

export default FetchAndDisplay
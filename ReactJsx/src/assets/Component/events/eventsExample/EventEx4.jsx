import React, { useState } from 'react'


const EventEx4 = () => {
    let[state,setState]=useState({
        user:"",
        pass:"",
    })
   let{user,pass}=state
   let[users,setUsers]=useState([])

   let handleChange=(e)=>{
    //let[name,value]=e.target
    setState({...state,[e.target.name]:e.target.value})
   
    console.log(state);
    }

  let handleSubmit=(e)=>{
    e.preventDefault()
    setUsers([...users,state])
    setState({
      user:"",
      pass:""
    })
  }
   
  return (
    <div className='h-32 border-slate-400'>
      <h1 className='text-4xl text-blue-950 px-80 py-10 my-4 '>Login</h1>
        <form action="" onSubmit={handleSubmit} className='border-[2px] border-slate-900 w-[30%] h-[40vh] px-10 py-8 mx-80 my-10 '>
            <input type="text" onChange={handleChange} name='user' value={user} placeholder="username"className='border-[2px]  border-gray-950 rounded-md'/><br /><br />
            <input type="text" onChange={handleChange} name='pass' value={pass} placeholder="password" className='border-[2px] border-gray-950 rounded-md'/><br /><br />
            <button className='border-[2px] border-gray-950 rounded-md bg-green-700 px-5 text-white'>submit</button>
        </form>
           
           <table className="border-[2px] border-gray-950 mx-auto my-10 w-[60%] ">
             <thead>
              <tr>
                <th className="border-[2px] border-gray-950 px-4 py-2 bg-slate-500">Username</th>
                <th className="border-[2px] border-gray-950 px-4 py-2 bg-slate-500">Password</th>
              </tr>
             </thead>
             <tbody>
             {users.map((ele, ind) => (
            <tr key={ind}>
              <td className="border-[2px] border-gray-950 px-4 py-2">{ele.user}</td>
              <td className="border-[2px] border-gray-950 px-4 py-2">{ele.pass}</td>
            </tr>
          ))}
             </tbody>
           </table>
      
    </div>
  )
}

export default EventEx4
import React from 'react'
import { useState } from 'react'

const EventEx5 = () => {
     let[state,setState]=useState({
          user:"",
          pass:"",
          id:Date.now(),
          users:[],
      })
     let{user,pass,id,users}=state
    
    let handleChange=(e)=>{
        let{name,value}=e.target
        setState({...state,[name]:value})
        console.log(state);
        
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        let tempObj={
         user:state.user,
         pass:state.pass,
         id:state.id
        };
        setState({
            user:"",
            pass:"",
            id:Date.now(),
            users:[...users,tempObj]})
            console.log(state);
    }
   
     
     
     
    return (
      <div className='p-10 '>
       <div className='border-[1px] w-[30%] h-[20%] m-auto bg-#edf2fa rounded shadow-md'>
       <h1 className='text-4xl text-orange-400  p-5 '>Login</h1>
          <form action="" onSubmit={handleSubmit}  className=' border-grey-400 p-5 '>
              <input type="text" onChange={handleChange}  required name='user' value={user} placeholder="username"className='  w-[100%] h-[5vh] border-[2px]  required border-orange-700 rounded-md'/><br /><br />
              <input type="text" onChange={handleChange}  required name='pass' value={pass} placeholder="password" className=' w-[100%] h-[5vh] border-[2px] required border-orange-700 rounded-md'/><br /><br />
              <button  className=' w-[100%] h-[5vh] border-[2px] border-orange-400 rounded-md bg-orange-400 p-1 text-white text-xl'>submit</button>
              <p className='text-black p-2 m-auto text-lg'>Don't have an account?<a href="" className='text-blue-600'>signUp</a></p>
          </form>
       </div>
             <br />
             <hr />
           <br /> <br />
            
           <main className="w-[100%] bg-orange-200">
                <div className='p-3 flex flex-wrap text-grey'>
                    {state.users.length >0 && state.users.map((ele,ind)=>{
                        return(
                            <div className='w-[18%] p-3 m-2 bg-orange-500 rounded-md'>
                                <h1 className='text-3xl'>{ele.user}</h1>
                                <h1 className='text-sm'>{ele.pass}</h1>
                                <h1 className='text-sm'>{ele.id}</h1>
                                <button className='rounded-md px-2 m-2 text-white bg-green-800'>update</button>
                                <button className='rounded-md px-2 m-2 text-white bg-red-800'>delete</button>
                            </div>
                        )
                    })}
                </div>
                </main>

                <table className="border-[2px] border-gray-950 mx-auto my-10 w-[60%] ">
                    <thead >
                        <tr>
                            <td className= "border-[2px] border-orange-900 px-4 py-2 bg-orange-400">Username</td>
                            <td className= "border-[2px] border-orange-900 px-4 py-2 bg-orange-400">Password</td>
                            <td className= "border-[2px] border-orange-900 px-4 py-2 bg-orange-400">Id</td>
                            <td className= "border-[2px] border-orange-900 px-4 py-2 bg-orange-400">Update</td>
                            <td className= "border-[2px] border-orange-900 px-4 py-2 bg-orange-400">Delete</td>
                        </tr>
                    </thead>
                    <tbody>
             {users.map((ele, ind) => (
            <tr key={ind}>
              <td className="border-[2px]   border-orange-900  px-4 py-2">{ele.user}</td>
              <td className="border-[2px]   border-orange-900 px-4 py-2">{ele.pass}</td>
              <td className="border-[2px]   border-orange-900 px-4 py-2">{ele.id}</td>
              <td className="border-[2px] border-orange-900 px-4 py-2">
             <button className='rounded-md px-2 m-2 text-white bg-green-800'>update</button>
          </td>
        <td className="border-[2px] border-orange-900 px-4 py-2">
          <button className='rounded-md px-2 m-2 text-white bg-red-800'>delete</button>
        </td>
            
            </tr>
          ))}
             </tbody>
                </table>
              
             </div>
    )
}

export default EventEx5
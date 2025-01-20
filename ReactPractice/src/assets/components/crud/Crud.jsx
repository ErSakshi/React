import React, { useState } from 'react'


const Crud = () => {

    let[state,setState]=useState({
        username:"",
        password:"",
        id:Date.now(),
        userList:[]
    })

    let{username,password,id,userList}=state
    let handleChange =(e)=>{
        let{name,value}=e.target 
        setState({...state,[name]:value})
    }

    let handleSubmit = (e)=>{
        e.preventDefault()
        let tempObj ={
            username : state.username,
            password : state.password,
            id:Date.now()
        }
        setState({
            username:"",
            password:"",
            id:Date.now(),
            userList:[...userList , tempObj]
        })
    }

    let handleDelete =(id)=>{
         let updateList = state.userList.filter((id)=>{
             return val.id != id;
         })
         setState({...state,userList : updateList})
    }

    let handleUpdate = ()=>{
        let updateList = state.userList.filter((id)=>{
            return val.id != id;
        })

        let  updatedUser = state.userList.find((id,val)=>{
            return  val.id == id;
        })
        setState({
            username : updatedUser.username,
            password : updatedUser.password,
            id:updatedUser.id,
            userList : updateList
        })
    }

 console.log(state);
 
  return (
    <div>
        {/* <Form
        username={state.username}
        password={state.password}
        id={state.id}
        handleChange={handleChange}
        handleClick={handleClick}
        ></Form> */}

       <form action="">
       <input type="text" name='username' value={username}  onChange={handleChange} required className='border-[2px] p-4'/> 
       <input type="text" name='password' value={password} onChange={handleChange}  required className='border-[2px] p-4'/> 
       <button onSubmit={handleSubmit}>Create</button>
   
       </form>
       <main className='bg-slate-500'>
        {state.userList.length > 0 && state.userList.map((ele,ind)=>{
            return(
                <div key={ind}>
                  <h1>{ele.username}</h1>
                  <h1>{ele.password}</h1>
                  <h1>{ele.id}</h1>
                  <button  onClick={handleUpdate(ele.id)}className='bg-green-800 text-white px-5 m-2'>update</button>
                  <button  onClick={handleDelete(ele.id)}className='bg-green-800 text-white px-5 m-2'>delete</button>
                </div>
            )
        })}
       </main>
     </div>
  )
}

export default Crud
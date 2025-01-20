import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import HandleChange from './examples/HandleChange';
import Form from './examples/Form';
import HandleSubmit from './examples/HandleSubmit';
import Cart from './examples/Cart';


const CrudIntro = () => {
    let[state,setState]=useState(
     {
       username : "",
       password : "",
       id : Date.now(),
       user :[]
     
     })
     
     let handleChange=(e)=>{
       let {name ,value} = e.target;
      
       setState({...state,[name] : value})
     }
     
     let {username,password,id,user}=state;
     
     let handleSubmit = (e)=>{
        e.preventDefault()
       
      let tempObj ={
       username ,
       password ,
       id :Date.now(),
       user:[]
     }
      setState({
      username :"",
      password:"",
      id :Date.now(),
      user:[...user,tempObj]
      })
     }
     let handleDelete =(id)=>{
      let updatedUser =user.filter((val)=>{
       return val.id !=id;
      });
      setState({...state ,user :updatedUser});
   }
 
   let handleUpdate =(id,e)=>{
     let updatedUser =user.filter((val)=>{
       return val.id !=id;
     });
     let itemToUpdate=user.find((val)=>{
       return val.id ==id;
     })
     setState({
       username:itemToUpdate.username,
       password:itemToUpdate.password,
       id:itemToUpdate.id,
       user:updatedUser
     })
   }
     

  return (
    <div>
        <Form handleSubmit={handleSubmit} handleChange={handleChange} state={state} setState={setState} />
        <Cart handleSubmit={handleSubmit} handleChange={handleChange} state={state} setState={setState} />
        
    </div>
  )
}

export default CrudIntro
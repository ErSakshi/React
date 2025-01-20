import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


let Crud = ()=>{

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
    //user:[]
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
        <form action="" className='w-[50%] my-4  d-flex  gap-7'>
        <InputGroup >
     
      <Form.Control type="text" 
       placeholder='Username' 
       name='username'
       value={username}
       onChange={handleChange} />
      
    </InputGroup>
    <InputGroup className='w-24'>
     
      <Form.Control type="text" 
       placeholder='password' 
       name='password'
       value={password}
       onChange={handleChange} />
      
    </InputGroup>
    <Button variant="primary"
    onClick={handleSubmit}>Submit</Button>
        </form>
  
      <main>
        <div className='d-flex flex-wrap border border-zinc-200 gap-24'>
     {user.length > 0 && user.map((ele,ind)=>{
       return(
        <div key={ind} >
        <Card style={{ width: '18rem' }}>
     
      <Card.Body>
        <Card.Title>{ele.username}</Card.Title>
        <Card.Text> {ele.password} </Card.Text>
        <Card.Text>{ele.id}</Card.Text>         
        <Button variant="success" className='mx-3' onClick={()=>{handleUpdate(ele.id,e)}}>Update</Button>
        <Button variant="danger" onClick={()=>{handleDelete(ele.id)}}>Delete</Button>
      </Card.Body>
    </Card>
        </div>
       )
       })}
  </div>
  </main>
  </div>
  
 
 
  )
  }
export default Crud
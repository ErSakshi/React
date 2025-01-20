import React from 'react'
import Form from './Form'

const HandleSubmit = ({props,handleChange}) => {
    let{state,setState}=props
    let{username,password,id,list}=state
   
    let handleSubmit = (e)=>{
        e.preventDefault()
       
      let tempObj ={
       username ,
       password ,
       id :Date.now(),
       list:[]
     }
      setState({
       username :"",
      password:"",
      id :Date.now(),
      list:[...user,tempObj]
      })
     }
    
    

  return (
    <div>
     <Form 
       username={state.username}
       password={state.password}
       id={state.id}
       list={state.list}
       handleSubmit={handleSubmit}
       ></Form>
    </div>
  )
}

export default HandleSubmit
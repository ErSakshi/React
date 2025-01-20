import React from 'react'
import Form from './Form'
import HandleSubmit from './HandleSubmit'

const HandleChange = ({props}) => {
    let{state,setState}=props
    let{username,password,id,list}=state
   
   

    let handleChange =(e)=>{
       let{name,value}=e.target
       setState({...state,[name]:value})
    }
  
 return (
    <div>
{/*      
     <Form 
       sername={state.username}
       password={state.password}
       id={state.id}
       list={state.list}
       handleChange={handleChange}
       ></Form>
       <HandleSubmit handleChange={handleChange}></HandleSubmit>
       */}
    </div>
  )
}

export default HandleChange
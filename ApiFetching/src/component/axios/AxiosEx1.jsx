import axios from 'axios'
import React, { useEffect, useState } from 'react'
import data from './data.json'

const AxiosEx1 = () => {
   


    // let fetching =async()=>{
    //     let data = await fetch("https://api.github.com/users");
    //     data =await data.json();
    //     console.log(data);
    //     setState(data)
        
    // }
    // fetching()

    // axios.get('https://api.github.com/users').then((val)=>{setState(val.data);
    //     console.log(state);
        
    // })
    // axios.post('https://api.github.com/users',state)


    let[state,setState]=useState({
      name :"",
      surname:"",
      id:Date.now(),
      list:[]
  });

  useEffect(()=>{
    axios.get("https://localhost:3000/data").then((val)=>{
      setState({...state,list:val.data});
    })
  },[])

  let handleChange = (e)=>{
    setState({...state , [e.target.name]:e.target.value});
  }

  let handleClick = (e)=>{
    e.preventDefault();
    let objToPost ={
      name : state.name,
      surname:state.surname,
      id:state.id
    }
    console.log(state);

    axios.post("http://localhost:3000/data",objToPost).then((val)=>{setState(val.data)})
    axios.get("http://localhost:3000/data").then((val)=>{
    setState({
        name:"",
        surname:"",
        id:Date.now(),
        list:val.data
    })})
    console.log(state);
    
  }
  return (
    <div>
      <form action="">
        <input type="text" className='border-[1px] border-grey-600 rounded'
        name='name' value={state.name} onChange={handleChange} placeholder='name' />
        <button className='border-[1px] border-grey-600 rounded' onClick={handleClick} >click</button>
      </form>
    </div>
  )
}

export default AxiosEx1
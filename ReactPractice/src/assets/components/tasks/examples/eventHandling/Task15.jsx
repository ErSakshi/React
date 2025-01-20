import React, { useState } from 'react'

const Task15 = () => {

    let[select,setSelect]=useState('')

    let handleChange = (e)=>{
       let{name,value}=e.target
       setSelect(value)
       console.log(select);
       
    }
  return (
    <div>
        <select value={select}
        onChange={handleChange}>
      <option value="">Select option</option>
      <option value="html">HTML</option>
      <option value="css">CSS</option>
      <option value="js">JavaScript</option>
      <option value="react">ReactJS</option>
      <option value="angular">Angular</option>
        </select>
    </div>
  )
}

export default Task15
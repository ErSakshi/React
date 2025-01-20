import React from 'react'
import { useState } from 'react'
const ThemeEx1 = () => {
    let [theme,setTheme]=useState('dark')
    //let [theme,setTheme]=useState('light')
    
  return (
    <div>
         <p>if by default theme is dark</p> 
        
        <h1 style={theme=='light'?{}:{backgroundColor:"black",color:"white"}}> PageNotFound </h1><br/>
        <p>if by default theme is light</p>
       <h1 style={theme=='light'?{backgroundColor:"black",color:"white"}:{}}> PageNotFound </h1>

        </div>
  )
}

export default ThemeEx1 
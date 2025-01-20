import React, { useState } from 'react'

const Theme = () => {
//     let[theme,setTheme]=useState('light')
//   return (
//     <div>
//        <div style={theme=='light'?{}:{backgroundColor:"black",color:"white",height:"100vh",display:"flex",justifyContent:"space-between"}}>
//         <h1>Theme Changing</h1>
//         <button onClick={()=>{
//            setTheme(theme === 'light' ? 'dark' : 'light')
//         }} style={{height:"40px"}}>{theme === 'light' ? '🌙' : '☀️'}</button>
//        </div>
//     </div>
//   )

let[theme,setTheme]=useState('☀️')
return (
  <div>
     <div style={theme=='☀️'?{backgroundColor:"white",color:"black",height:"100vh",display:"flex",justifyContent:"space-between"}
     :{backgroundColor:"black",color:"white",height:"100vh",display:"flex",justifyContent:"space-between"}}>
      <h1>Theme Changing</h1>
      <button onClick={()=>{
         setTheme(theme === '☀️' ? '🌙' : '☀️')
      }} style={{height:"40px",backgroundColor:"lightcoral"}}>{theme === '☀️' ? '🌙' : '☀️'}</button>
     </div>
  </div>
)
}

export default Theme
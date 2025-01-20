import React, { useState } from 'react'

const ThemeSwitcher = () => {
    let[theme,setTheme]=useState('light')
  return (
    <div>
        {theme && (<h1 className='text-black bg-slate-50 w-[100%] h-[8vh] text-4xl font-bold'>Light Mode</h1>)||(<h1 className='text-white bg-black w-[100%] h-[8vh] text-4xl font-bold'>Dark Mode</h1>)}
        <button onClick={()=>{
            setTheme(!theme)
        }}
        className='bg-gray-500 text-white m-3 p-2 rounded-lg shadow-lg'>{theme?"🌙":"☀️"}</button>
    </div>
  )
}

export default ThemeSwitcher
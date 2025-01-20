import React, { useEffect, useState } from 'react'

const LocalStorage = () => {
    let[theme,setTheme]=useState(localStorage.getItem('theme')||"light")

    useEffect((e)=>{
       localStorage.setItem('theme',theme)
       document.body.style.background = theme === 'dark' ? 'black' : 'white';
       document.body.style.color = theme === 'dark' ? 'white' : 'black';
    },[theme])
  return (
    <div>
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="bg-slate-500 px-3 rounded-lg"
      >
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button></div>
  )
}

export default LocalStorage 
import React from 'react'
import style from './headerEx.module.css'

//! ConditionRendering
const HeaderEx = (props ) => {
    console.log(props);
    
  return (
    <div>
    <header id={style.head}>
        <div id={style.logo}>
           <h1> Logo</h1>
        </div>

        <div id={style.rightnav}>
            {props.data.isLogin ? (
                <a href="#" onClick={() => props.data.setIsLogin(false)}>Logout</a>
            ) : (
                <>
                    <a href="#" onClick={()=>{alert(" Login Please")}}>Home</a>
                    <a href="#" onClick={()=>{alert("Login Please ")}}>Menu</a>
                    <a href="#" onClick={() => props.data.setIsLogin(true)}>Login</a>
                    <a href="#">Signup</a>
                </>
            )}
        </div>
    </header>
</div>
  )
}

export default HeaderEx



















// {<a href="#" onClick={()=>{}}>}
import React, { useState } from 'react'

const Task6 = () => {

    let[state,setState] = useState({
        char : "",
        bgColor :"",
    })
    console.log(state);
    
    let colorChange = ()=>{

        if(char.length >=8 )
         if(char>='a' && char<='z'){
            //return(backgroundColor = "red")

            setState({...state , backgroundColor : "red"})
             
           }
           else  if(char>='A' && char<='Z'){
              //div.style.background = "red"
              setState({...state , backgroundColor : "yellow"})
              
            }
            else  if(char>='0' && char<='9'){
              //div.style.width = "10%"
              setState({...state , backgroundColor : "orange"})
            }
            else {
                setState({...state , backgroundColor : "green"})
            }
    }

    let handleChange = (e)=>{
     setState({...state,[e.target.name]:e.target.value})
    
       setState({
        ...state,
        char : e.target.value,
        bgColor : colorChange(value)
       })  
      
    }
  return (
    <div>
        <input type="text"  className='border-[2px] '  name="char" value={state.char} onChange={handleChange}/>
        <main className='w-[50vw] h-[10vh] border-[2px] border-black' style={state.bgColor}>
            <div id='div'></div>
        </main>
    </div>
  )
}

export default Task6
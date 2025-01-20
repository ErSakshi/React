import React, { useEffect } from 'react'

const UseEffectEx8ForEx7 = () => {
    let timer=setInterval(()=>{
        console.log("hello hunny bunny...!");
        
    },1000)

    useEffect(()=>{
        ///gdgfdfd
        return()=>{
            //clearance
            console.log("child comp removed");    // it is compulsory to return
            clearInterval(timer)
            
        }
    },[])
  return (
    <div>
        <div>Child Component</div>
    </div>
  )
}

export default UseEffectEx8ForEx7
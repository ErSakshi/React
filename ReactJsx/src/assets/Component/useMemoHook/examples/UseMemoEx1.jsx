import React, { useMemo, useState } from 'react'

const UseMemoEx1 = () => {
    let[count1,setCount1]=useState(0)
    let[count2,setCount2]=useState(0)

    let checkCount1=()=>{
        let i=0
        while(i<1000000000){
            i++
        }
        if(count1%2==0){
            return "Even"
        }else{
            return "Odd"
        }
    }

    let checkCount2=()=>{
        if(count2%2==0){
            return "Even"
        }else{
            return "Odd"
        }
    }

    let memoizedCount1=useMemo(checkCount1,[count1])
  return (
    <div className='flex justify-center m-6 '>
        <button  onClick={()=>{setCount1(count1+1)}} className='bg-orange-600 text-white px-3 rounded-md mx-3 text-2xl'>
           {/* //! when it is not directly called and use with useMemo hook ,it
             //! handles the caused performance issue */}

            count1 : {count1} {memoizedCount1}

           {/*  count1: {count1} {checkCount1()} 
           //! when checkCount1 is directly called it can cause the performance issue  */} 
           </button>
        <button  onClick={()=>{setCount2(count2+1)}} className='bg-orange-600 text-white px-3 rounded-md mx-3 text-2xl'>count2 : {count2} {checkCount2()}</button>
    </div>
  )
}  

export default UseMemoEx1
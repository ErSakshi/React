import React, { useContext } from 'react'
import { myStore } from '../AppContext'

const ContextEx1 = () => {
  let data=useContext(myStore)
  let{state,setState}=data
  return (
    <div>
      <h1>state : {state}</h1>
      <button onClick={()=>{setState(state+1)}}
      className='bg-orange-500 text-white px-4 rounded-lg'>click</button>
    </div>
  )
}


export default ContextEx1
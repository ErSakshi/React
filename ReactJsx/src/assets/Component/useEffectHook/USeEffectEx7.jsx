import React, { useState } from 'react'
import UseEffectEx8ForEx7 from './UseEffectEx8ForEx7'

const USeEffectEx7 = () => {
    let [state,setState]=useState(false)

    let handleClick=()=>{
        setState(!state)
    }

  return (
    <div>
        <div>Main Component</div>
        <button onClick={handleClick}
        className='bg-orange-400 text-white px-4 rounded-md'>
             {state?"Remove child component":"Add child component"}
             </button>
             <div>
                {state?<UseEffectEx8ForEx7/>:"Click button to call child component"}
             </div>
    </div>
  )
}

export default USeEffectEx7
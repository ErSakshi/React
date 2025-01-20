import React, { useState } from 'react'
import HocEx2Child from './HocEx2Child'
import Loader from './Loader'

const HocEx2 = () => {
 

   let ChildWithLoader=Loader(HocEx2Child)
   let a=10;
   let b=20;
   let c=30;
   let d=40;
  return (
    <div>
      <h1 className='text-2xl m-2'>Parent</h1>
       <br /> <br /><hr /><br />
      <ChildWithLoader props={{a,b,c,d}}/>
    </div>
  )
}

export default HocEx2
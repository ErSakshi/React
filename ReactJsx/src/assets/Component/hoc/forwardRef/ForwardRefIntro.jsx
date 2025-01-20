import React, { useRef } from 'react'
import ForwardRefChild from './ForwardRefChild'

const ForwardRefIntro = () => {
    let headingRef =useRef()
  return (
    <div>
        <h1 ref={headingRef}>Parent</h1>
        <br /><hr /><br /><br />
        <div>
            <ForwardRefChild props={headingRef}/>
        </div>
    </div>
  )
}

export default ForwardRefIntro
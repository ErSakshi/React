import React from 'react'
import PropsEx2Child from './PropsEx2Child'

const PropEx2 = () => {
  let obj={name:"abc",age:"20"}
  return (
    <div>PropEx2
      {/*//!<PropsEx2Child data={{obj}}>  / while sending object to the child*/} 
        

        <div>
          {/* //! when we are taking data between opening tag and closing tag then  */}
        <PropsEx2Child ><h1>HEADING</h1></PropsEx2Child> 
        </div>
    </div>
  )
}

export default PropEx2
import React from 'react'

const UseCallBackEx1Child = () => {
  console.log("Child");
  
  return (
    <div>
        <p>Child</p>
    </div>
  )
}

export default React.memo (UseCallBackEx1Child)
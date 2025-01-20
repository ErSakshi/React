import React, { memo } from 'react'

const HocEx1Child = () => {
    
    console.log("Child");
    
    
    
  return (
    <div>HocEx1Child</div>
  )
}

export default memo( HocEx1Child)
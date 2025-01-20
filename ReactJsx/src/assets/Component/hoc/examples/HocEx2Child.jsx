import React from 'react'

const HocEx2Child = ({props}) => {
  console.log(props);
  
  
  return (
    <div>
      <h1 className='text-2xl m-2'>Child</h1>
    </div>
  )
}

export default HocEx2Child
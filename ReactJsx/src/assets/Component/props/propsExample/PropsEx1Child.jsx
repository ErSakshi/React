import React from 'react'

const PropsEx1Child = ({gift="SWIFT"}) => {
    console.log(gift);
    
  return (
    <div>PropsEx1Child

       <h2>Gift : {gift}</h2>
    </div>
  )
}

export default PropsEx1Child
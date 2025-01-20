import React from 'react'
import PropsEx1Child from './PropsEx1Child'

const PropsEx1 = () => {
    let a=10;
    let car="BMW"
  return (
    <div>PropsEx1
        {/* <PropsEx1Child a={a}/> */}
        <PropsEx1Child />
    </div>
  )
}

export default PropsEx1
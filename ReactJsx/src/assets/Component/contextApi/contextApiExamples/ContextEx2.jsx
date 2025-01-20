import React, { useContext } from 'react'
import { myStore } from '../AppContext'

const ContextEx2 = () => {
    let rData=useContext(myStore)
  return (
    <div>
        <table className='m-auto my-12'>
            <thead className='border-[2px] border-gray-950 px-5 bg-gray-400 '>
                <tr className='border-[2px] border-gray-950 px-5'>
                    <td className='border-[2px] border-gray-950 px-5'>Id</td>
                    <td className='border-[2px] border-gray-950 px-5'>Name</td>
                    <td className='border-[2px] border-gray-950 px-5'>Age</td>
                </tr>
            </thead>

            <tbody className='border-[2px] border-gray-950 px-5'>
               {Array.isArray(rData) && rData.map(
                (ele,ind)=>{
                    return(
                        <tr key={ind}>
                            <td className='border-[2px] border-gray-950 px-5'>{ele.id}</td>
                            <td className='border-[2px] border-gray-950 px-5'>{ele.name}</td>
                            <td className='border-[2px] border-gray-950 px-5'>{ele.age}</td>
                        </tr>
                    )
                }
               ) }
            </tbody>
        </table>
    </div>
  )
}

export default ContextEx2
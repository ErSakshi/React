import React from 'react'

const Delete = ({ id, handleDelete }) => {
    let handleDelete =(id)=>{
        let updatedUser =user.filter((val)=>{
         return val.id !=id;
        });
        setState({...state ,user :updatedUser});
     }
  return (
    <div>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  )
}

export default Delete 
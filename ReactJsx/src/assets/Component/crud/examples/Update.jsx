import React from 'react'

const Update = ({ user, handleUpdate }) => {
    let handleUpdate =(id,e)=>{
        let updatedUser =user.filter((val)=>{
          return val.id !=id;
        });
        let itemToUpdate=user.find((val)=>{
          return val.id ==id;
        })
        setState({
          username:itemToUpdate.username,
          password:itemToUpdate.password,
          id:itemToUpdate.id,
          user:updatedUser
        })
      }
  return (
    <div>
       <Cart user={user} handleDelete={handleDelete} handleUpdate={handleUpdate} />
    </div>
  )
}

export default Update
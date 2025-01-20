import React from 'react'
import Card from 'react-bootstrap/Card';

const Cart = ({ user, handleDelete, handleUpdate}) => {
  return (
    <div>
         <div className='d-flex flex-wrap border border-zinc-200 gap-24'>
     {user.length > 0 && user.map((ele,ind)=>{
       return(
        <div key={ind} >
        <Card style={{ width: '18rem' }}>
     
      <Card.Body>
        <Card.Title>{ele.username}</Card.Title>
        <Card.Text> {ele.password} </Card.Text>
        <Card.Text>{ele.id}</Card.Text>         
        <Button variant="success" className='mx-3' handleUpdate={handleUpdate(ele.id)}>Update</Button>
        <Button variant="danger" handleDelete={handleDelete(ele.id)}>Delete</Button>
      </Card.Body>
    </Card>
        </div>
       )
       })}
  </div>
    </div>
  )
}

export default Cart
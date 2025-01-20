import React from 'react'
import Task5Child from './Task5Child'

const Task5Parent = () => {

    let movieList = {
        movie1 : "Udaan",
        movie2 : "Lakshya",
        movie3 : "Mary Kom",
        movie4 : "3 Idiots",
        movie5 : "Airlift"
    }
  return (
    <div>
    <Task5Child props={movieList}/>
    </div>
  )
}

export default Task5Parent
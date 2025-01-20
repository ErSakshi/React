import React from 'react'

const Task27 = () => {
    
    let listOfStudent = [{name : "Abc" , grade : "A+"},{name : "Efg" , grade : "C+"},{name : "Mno" , grade : "B+"},{name : "Stu" , grade : "A++"}]
  return (
    <div>
        
        {Array.isArray(listOfStudent) && listOfStudent.length > 0 && (
        <ul>
          {listOfStudent.map((ele, ind) => (
            <li key={ind}>
              <div>
                <strong>{ele.name}</strong>: {ele.grade}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Task27
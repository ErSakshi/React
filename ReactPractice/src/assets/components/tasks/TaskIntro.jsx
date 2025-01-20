import React, { useEffect, useState } from 'react'
import Task1 from './examples/props/Task1'
import Task2 from './examples/props/Task2'
import Task3 from './examples/props/Task3'
import Task4 from './examples/props/Task4'
import Task5Parent from './examples/props/Task5Parent'
import Task6 from './examples/useState/Task6'
import Task7 from './examples/useState/Task7'
import Task8 from './examples/useState/Task8'
import Task9 from './examples/useState/Task9'
import Task10 from './examples/useState/Task10'
import Task11 from './examples/eventHandling/Task11'
import Task12 from './examples/eventHandling/Task12'
import Task13 from './examples/eventHandling/Task13'
import Task14 from './examples/eventHandling/Task14'
import Task15 from './examples/eventHandling/Task15'
import Task16 from './examples/useEffect/Task16'
import Task21 from './examples/conditionalRendering/Task21'
import Task26 from './examples/list&Keys/Task26'
import Task27 from './examples/list&Keys/Task27'
import Task28 from './examples/list&Keys/Task28'
import Task29 from './examples/list&Keys/Task29'

const TaskIntro = () => {
    let data ={
        name:"Sakshi",
        age:"23",
        location:"Pune"
    }

    let listOfHobbies = [{
        1 : "Yoga",
        2 : "Meditation",
        3 : "Dance",
        4 : "Volly ball",
        5 : "Badminton"
    }]


  //    let[color,setColor]=useState('')

  //  useEffect(()=>{
  //   let userColor = prompt("Enter your favorite color  ")
  //   console.log(userColor);
  //   setColor(userColor)
  //  },[])
  
  //  console.log(color);
   
   
   
  return (
    <div >
      <div>
         {/* <div className='h-[20%]'> 
        <h2>Task1:</h2>
        <Task1 props="Sakshi"/>
        </div>
       <div className='h-[20%] my-2'>
        <h2>Task 2 :</h2>
         <Task2 props={{data}}/>
         </div>
       <div className='h-[20%] my-2'>
        <h2>Task 3 :</h2> 
        <Task3 props={{listOfHobbies}}/>
        </div> */}
        {/* <div className='h-[20%] my-2'>
        <h2 className='bg-slate-400'>Task 4 :</h2> 
        <Task4 props={color}/></div> */}
        {/* <div className='h-[20%] my-2'>
        <h2 className='bg-slate-400'>Task 5 :</h2> 
        <Task5Parent /></div> */}
      </div>

      <div>
        {/* //!  useState hook  */}
        {/* <Task6/> */}
        {/* <Task7/> */}
        {/* <Task8/> */}
        {/* <Task9/> */}
        {/* <Task10/> */}
      </div>

      <div>
        {/* //! Event Handling */}
        {/* <Task11/> */}
        {/* <Task12/> */}
        {/* <Task13/> */}
        {/* <Task14/>  */}
        {/* <Task15/>  */}
      </div>

      <div>
        {/* //! UseEffect */}
        {/* <Task16/> */}
      </div>

      <div>
        {/* //! Conditional Rendering */}
        {/* <Task21/> */}
      </div>

      <div>
        {/* //! List&Key */}
        {/* <Task26/> */}
        {/* <Task27/> */}
        {/* <Task28/> */}
        <Task29/>
      </div>

    </div>
  )
}

export default TaskIntro
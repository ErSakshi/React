import { RouterProvider } from "react-router-dom"
import { router } from "./assets/components/app/AppRoutes"
import ConditionalIntro from "./assets/components/conditionalRendering/ConditionalIntro"
import EventsIntro from "./assets/components/events/EventsIntro"
import UseStateIntro from "./assets/components/USeStateIntro"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import CrudIntro from "./assets/components/crud/CrudIntro"
//import { paisaDedo } from "./main"




// import React, { useState } from 'react'
// import { Axios } from "axios"
// import AxiosIntro from "./assets/components/axios/AxiosIntro"
// import { addTodo } from "./toolkit/todoSlice"
 import Counter from "./toolkit/Counter"
import TaskIntro from "./assets/components/tasks/TaskIntro"
// import CrudIntro from "./assets/components/crud/CrudIntro"

const App = () => {
  
//   let[state,setState]=useState({
//     todo:"",
//    id:null , //keeps it null intensionaly
//    // id:Date.now(),
//     taskList :[]
//   })
//  let todoList = useSelector((store)=>{
//   console.log(store);
  
//  })

//  let handleChange =(e)=>{
//   let{name,value}=e.target
//   setState({...state,[name]:value})
//  }

//  let dispatch = useDispatch()

//  let handleClick =(e)=>{
//   e.preventDefault()
//   let tempObj = {
//       todo : state.todo,
//       id: state.id
//   }
//   setState({
//     todo:'',
//     id:null,
//     taskList:[...state.taskList,tempObj]
//   })
//   // dispatch(addTodo({...state ,id:Date.now()}))/
//   dispatch(addTodo({...state,id:Date.now()}))
//  }
  



  return (
    <div>
      {/* <form action="" >
        <input  onChange={handleChange}
        type="text" name="todo" value={state.todo}  className="border-[1px] border-gray-900"/>
        <button  onClick={handleClick}
         className="bg-slate-400 px-4">Add</button>
      </form>

      <main className="w-[15%] bg-slate-400">
        {state.taskList.length > 0 && state.taskList.map((ele,ind)=>{
            return(
              <div key={ind} className="w-[12vw] h-[10vh] px-5 m-5 bg-slate-600">
                 <h1>{ele.todo}</h1>
                 <h1>{ele.id}</h1>
              </div>
            )
        })}
      </main>

      */}

      {/* <Counter></Counter> */}
      {/* <CrudIntro></CrudIntro> */}

      {/* <AxiosIntro></AxiosIntro> */}

     <TaskIntro></TaskIntro>
    </div>
  )
}

export default App















// let App=()=>{


// let paisa =useSelector((store)=>{
//   return store.pkReducer.amount
  
// })

// let makeTransaction = useDispatch()
// let handlePaisa =()=>{
//   makeTransaction(paisaDedo(100))
// }

//   return(
//     <div>
//    <h1>paisa : {paisa}</h1>
//    <button onClick={handlePaisa} className="bg-slate-500 px-2">paisa badhao</button>







//     {/* //! UseState intro */}
//     {/* <UseStateIntro/> */}

//     <div>
//       {/* <ConditionalIntro/> */}

//       {/* <EventsIntro/> */}
//     </div>

//     {/* <RouterProvider router={router}></RouterProvider>  */}



     
 
//     </div>
//   )
// }
// export  default App
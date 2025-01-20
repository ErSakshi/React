import { createSlice } from "@reduxjs/toolkit";

let todoSlice = createSlice({
  name :"todo",
  initialState :{
    todoList :[]
  },
  reducers :{
    addTodo :(state,action)=>{
      console.log(action.payload);
      console.log(action.payload.taskList);
      
      state.todoList.push(action.payload)
      console.log(state.todoList)
    }
  }
})

export let {addTodo} =todoSlice.actions
export default todoSlice.reducer
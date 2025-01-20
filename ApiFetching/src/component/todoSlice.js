import { createSlice } from "@reduxjs/toolkit";

let todoSlice = createSlice({
    name :"todo",
    initialState:{
        list:[]
    },
    reducers:{
        addtodo : (state,action)=>{
       state.list.push(action.payload)
       console.log(state.list);
        },
        deletetodo : (state,action)=>{
           console.log(action.payload);
           let newList = state.list.filter((val)=>{
            return val.id != action.payload
           })
           state.list=newList
           console.log(state.list);
        },
        updatetodo : (state,action)=>{
           let index = state.list.findIndex((val)=>{
             return val.id == action.payload.id
           })

           state.list[index]=action.payload
    
        }
    }
   
})

export default todoSlice 
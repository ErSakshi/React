import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
    name :"counter",
    initialState :{
        count : 0
    },
    reducers :{
        add : (state,action)=>{
            state.count+=action.payload;
            
        },
        sub : (state,action)=>{
            if(state.count > 0){
                state.count-=action.payload
            }else{
                return 0 ;
            }
        },
        reset :(state,action)=>{
            state.count = action.payload
        }
    }
})

export let {add}=counterSlice.actions
export let {sub}=counterSlice.actions
export let {reset}=counterSlice.actions
export default counterSlice.reducer
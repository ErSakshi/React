import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice.js";

let store = configureStore({
   reducer :{
    todoReducer : todoSlice.reducer
   }
})
export default store
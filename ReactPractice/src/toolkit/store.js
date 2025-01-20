import { configureStore } from "@reduxjs/toolkit";
//import todoReducer from './todoSlice.js'
import addReducer from './counterSlice.js'

// export let store = configureStore({
//    reducer :{
//     todoReducer 
//    }
// })

export let store = configureStore({
   reducer :{
     addReducer
   }
})


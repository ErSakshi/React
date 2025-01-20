import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import { configureStore, createSlice } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { store } from './toolkit/store.js'

//import { RouterProvider } from 'react-router-dom'
//import { router } from './assets/components/app/AppRoutes.jsx'


// let company =createSlice({
//    name :'pk company',
//    initialState :{
//       amount : 0
//    },
//    reducers :{
//       paisaDedo :(wallet,kyaMila)=>{
//          console.log(wallet);
//          console.log(kyaMila);
//          console.log(kyaMila.payload);
//          wallet.amount+= kyaMila.payload
         
         
//       }
//    }
// })

// export let{paisaDedo} =company.actions 
// let store = configureStore({
//    reducer : {
//       pkReducer : company.reducer
//    }
// })

createRoot(document.getElementById('root')).render(
//  <RouterProvider router={router}>

    // <div> 
    //   <App/>
    // </div> 


   //  </RouterProvider>

    <Provider store={store}>
      <App/>
    </Provider>
    
);

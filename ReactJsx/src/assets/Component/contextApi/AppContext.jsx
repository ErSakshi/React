import React, { createContext, useState } from 'react'

export let myStore=createContext()
const AppContext = ({children}) => {
    let[state,setState]=useState(0)
    let a="I am the data received from AppContext";
    let data=[{
      id:1,
      name:"ABC",
      age:"23"
    },
    {
      id:2,
      name:"MNO",
      age:"23"
    },
    {
      id:3,
      name:"PQR",
      age:"23"
    },
    {
      id:4,
      name:"RST",
      age:"23"
    },
    {
      id:5,
      name:"UVW",
      age:"23"
    }]
  return (
      <div>
     {/* <myStore.Provider value={{state,setState}}>{children}</myStore.Provider> */}
    <myStore.Provider value={data}>{children}</myStore.Provider>
    </div>
  )
}

export default AppContext
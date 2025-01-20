import React from 'react'
import HandleChange from './HandleChange';
import HandleSubmit from './HandleSubmit';

const Form = ({handleSubmit, handleChange,state,setState }) => {
  
   
   
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
      <input
          type="text"
          name="username"
          placeholder='username'
          value={state.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder='password'
          value={state.password}
          onChange={handleChange}
          required
        />
        <button>create</button>
      </form>
    </div>
  )
}

export default Form
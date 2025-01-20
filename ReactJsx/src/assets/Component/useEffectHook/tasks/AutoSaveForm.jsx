import React, { useEffect, useState } from 'react'

const AutoSaveForm = () => {
    const [input, setInput] = useState('');

    useEffect(() => {
      if (input) {
        localStorage.setItem('formData', input);
      }
    }, [input]);
  
    const handleChange = (e) => {
      setInput(e.target.value);
    };
  
    const handleClear = () => {
      setInput('');
      localStorage.removeItem('formData');
    };
  
    return (
      <div>
        <input type="text" value={input} onChange={handleChange} className='border-[2px] border-gray-900 ' />
        <button onClick={handleClear} className='bg-blue-500 text-white rounded-md px-3 mx-4'>Clear Form</button>
      </div>
    );
}

export default AutoSaveForm
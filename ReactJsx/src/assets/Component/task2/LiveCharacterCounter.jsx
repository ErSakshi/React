import React from 'react'
import { useState } from 'react';

const LiveCharacterCounter = () => {
    const [text, setText] = useState("");

    const handleTextChange = (e) => {
      if (e.target.value.length <= 200) {
        setText(e.target.value);
      }
    };
  
    return (
      <div>
        <textarea
          value={text}
          onChange={handleTextChange}
          maxLength="200"
          placeholder="Type here..."
        />
        

        {text.length > 180 ? (<p className='text-red-600'>Characters :{text.length}/200</p>):(<p className='text-black'>Characters :{text.length}/200</p>)}
      </div>
    );
}

export default LiveCharacterCounter
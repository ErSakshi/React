import React, { useState } from 'react'

const Task28 = () => {

    const [colorsArray, setColorsArray] = useState(['red', 'orange', 'yellow', 'blue', 'purple', 'green']);

  const handleDelete = (colorToDelete) => {
    const updatedList = colorsArray.filter((ele) => ele !== colorToDelete);
    setColorsArray(updatedList);
  };

  return (
    <div>
      {Array.isArray(colorsArray) && colorsArray.length > 0 && colorsArray.map((ele, ind) => {
        return (
          <div key={ind} style={{ color: ele }}>
            <ol>
              <li className='text-xl font-bold'>{ele}</li>
              <button
                onClick={() => handleDelete(ele)} // Pass the color to delete
                className='bg-red-800 p-1 m-2 rounded-md text-white'
              >
                Delete
              </button>
            </ol>
          </div>
        );
      })}
    </div>
  );
}

export default Task28
import React, { useState } from 'react'

const Task11 = () => {
  return (
    <div>
        <button
        onClick={()=>{
            alert("Button is clicked")
        }} className='p-1 bg-purple-500 text-white rounded-lg'>
            Click
        </button>
    </div>
  )





}

export default Task11



// const [inputText, setInputText] = useState('');
//   const [progress, setProgress] = useState(0); // Progress starts at 0%

//   // Handle input change
//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setInputText(value); // Update the input field value

//     // Calculate progress based on the length of the input (10% per character)
//     const newProgress = Math.min(value.length * 10, 100); // Limit the progress to 100%
//     setProgress(newProgress);
//   };

//   return (
//     <div>
//       {/* Input field */}
//       <input
//         type="text"
//         value={inputText}
//         onChange={handleInputChange}
//         className="border p-2 m-2"
//         maxLength="10" // Limit to 10 characters to make the progress bar reach 100% at 10 characters
//       />
      
//       {/* Progress bar */}
//       <div className="relative w-full bg-gray-200 h-4 rounded-full mt-4">
//         <div
//           style={{ width: `${progress}%` }} // Set progress width dynamically
//           className="h-full bg-red-500 rounded-full"
//         ></div>
//       </div>

//       {/* Display progress percentage */}
//       <p className="mt-2">{progress}%</p>
//     </div>
//   );
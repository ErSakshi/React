import React, { useState } from 'react';
import { motion } from "framer-motion";

const PlantSlider = () => {
  // Set the initial index for the active image
  const [positionIndex, setPositionIndex] = useState(0);

  // Plant image URLs
  const plant1 = "https://img.freepik.com/free-photo/front-view-potted-plant-wooden-surface_140725-103323.jpg?ga=GA1.1.2087967281.1733236177&semt=ais_hybrid";
  const plant2 = "https://img.freepik.com/free-photo/grass-pot_144627-15702.jpg?ga=GA1.1.2087967281.1733236177&semt=ais_hybrid";
  const plant3 = "https://img.freepik.com/free-photo/colour-flowers-white-pot-isolated-white_231208-2933.jpg?ga=GA1.1.2087967281.1733236177&semt=ais_hybrid";
  const plant4 = "https://img.freepik.com/free-psd/lush-monstera-plant-light-gray-pot-transparent-background_84443-30552.jpg?ga=GA1.1.2087967281.1733236177&semt=ais_hybrid";
  const plant5 = "https://img.freepik.com/premium-photo/little-decorative-tree_26018-1704.jpg?ga=GA1.1.2087967281.1733236177&semt=ais_hybrid";

  // Handle next button click (cycle through the images)
  const handleClick = () => {
    setPositionIndex((prevIndex) => (prevIndex + 1) % 5); // Cycle between 0 and 4
  };

  // Array of plant images
  const images = [plant1, plant2, plant3, plant4, plant5];

  // Define positions for the image transitions
  const positions = [
    'center',
    'left1',
    'left',
    'right',
    'right1',
  ];

  // Define animation variants for each position
  const imageVariants = {
    center: { x: '0%', scale: 1, zIndex: 5 },
    left1: { x: '-50%', scale: 0.7, zIndex: 2 },
    left: { x: '-100%', scale: 0.5, zIndex: 1 },
    right: { x: '100%', scale: 0.5, zIndex: 1 },
    right1: { x: '50%', scale: 0.7, zIndex: 2 },
  };

  return (
    <div className="flex flex-col justify-center  bg-black h-screen ">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`Plant ${index + 1}`}
          className="rounded-[12px] absolute"
          variants={imageVariants} // Use the correct 'variants' prop
          animate={positions[(index - positionIndex + 5) % 5]} // Animate based on the position index
          transition={{ duration: 0.5 }} // Duration for animation
          style={{
            width: '40%',
            position: 'absolute',
            top:"20%",
            bottom:"30%",
            left: '50%',
            transform: 'translate(-50%, -50%)', // Center the image both horizontally and vertically
          }}
        />
      ))}

      <button
        onClick={handleClick}
        className="text-white mt-96 bg-indigo-600 rounded-md p-4 w-[80px]"
      >
        Next
      </button>

      <h1 className='text-green-700 font-bold mt-4'>The Green Corner</h1>
    </div>
  );
};

export default PlantSlider;








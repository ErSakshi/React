import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const PlantSlider2 = () => {
  // Set the initial index for the active image
  const [positionIndex, setPositionIndex] = useState(0);

  // Refs for the images to directly interact with them in GSAP
  const imageRefs = useRef([]);

  // Plant image URLs
  const plant1 = "https://img.freepik.com/free-photo/front-view-potted-plant-wooden-surface_140725-103323.jpg?ga=GA1.1.2087967281.1733236177&semt=ais_hybrid";
  const plant2 = "https://img.freepik.com/free-photo/grass-pot_144627-15702.jpg?ga=GA1.1.2087967281.1733236177&semt=ais_hybrid";
  const plant3 = "https://img.freepik.com/free-photo/colour-flowers-white-pot-isolated-white_231208-2933.jpg?ga=GA1.1.2087967281.1733236177&semt=ais_hybrid";
  const plant4 = "https://img.freepik.com/free-psd/lush-monstera-plant-light-gray-pot-transparent-background_84443-30552.jpg?ga=GA1.1.2087967281.1733236177&semt=ais_hybrid";
  const plant5 = "https://img.freepik.com/premium-photo/little-decorative-tree_26018-1704.jpg?ga=GA1.1.2087967281.1733236177&semt=ais_hybrid";

  // Array of plant images
  const images = [plant1, plant2, plant3, plant4, plant5];

  // Handle next button click (cycle through the images)
  const handleClick = () => {
    setPositionIndex((prevIndex) => (prevIndex + 1) % 5); // Cycle between 0 and 4
  };

  // GSAP animation logic
  useEffect(() => {
    // Animate the current image to the center
    gsap.to(imageRefs.current[positionIndex], {
      x: '0%', // Move to center
      scale: 1,
      zIndex: 5,
      duration: 0.5,
      ease: 'power2.out',
    });

    // Animate all other images to their off-screen positions
    imageRefs.current.forEach((img, index) => {
      if (index !== positionIndex) {
        gsap.to(img, {
          x: index < positionIndex ? '-100%' : '100%', // Move off-screen left or right
          scale: 0.7,
          zIndex: 2,
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    });
  }, [positionIndex]); // Trigger the animation whenever the positionIndex changes

  return (
    <div className="flex flex-col justify-center  bg-black h-screen relative">
      {images.map((image, index) => (
        <img
          key={index}
          ref={(el) => (imageRefs.current[index] = el)} // Assign ref to each image
          src={image}
          alt={`Plant ${index + 1}`}
          className="rounded-[12px] absolute"
          style={{
            width: '40%',
            position: 'absolute',
            top: '30%',
            bottom:"20%",
            left: '50%',
            transform: 'translate(-20%, -20%)', // Center the image both horizontally and vertically
            transition: 'all 0.5s ease-in-out',
          }}
        />
      ))}

      <button
        onClick={handleClick}
        className="text-white mt-8 bg-indigo-600 rounded-md py-2 px-4 w-[80px]"
      >
        Next
      </button>

      <h1 className='text-green-700 font-bold mt-4'>The Green Corner</h1>
    </div>
  );
};

export default PlantSlider2;

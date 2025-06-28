"use client";

import React from 'react';

const page = () => {
  return (
    // Main container to fill the screen with a sky and white gradient background
    <div className='min-h-screen w-screen flex flex-col items-center justify-center p-4 sm:p-8 bg-gradient-to-br from-white  font-sans text-gray-800'>
      {/* Content wrapper - Removed card specific styling like background, shadow, border, and rounded corners */}
      <div className='text-center max-w-xl w-full p-4'> {/* Adjusted max-w and padding for overall content */}
        {/* Main "Coming Soon" title */}
        <h1 className='text-5xl sm:text-6xl md:text-7xl font-extrabold text-sky-700 mb-6 leading-tight'>
          Coming Soon!
        </h1>

        {/* Engaging message */}
        <p className='text-lg sm:text-xl text-gray-700 mb-8 max-w-prose mx-auto'>
          We're working hard to bring you something amazing. Stay tuned for exciting updates!
        </p>

        {/* Design element: Cloud/Sky themed SVG icon */}
        <div className='mb-10 flex justify-center items-center'>
          <img className='h-30 w-30 rounded-3xl' src="https://img.freepik.com/free-vector/ai-technology-robot-cyborg-illustrations_24640-134419.jpg?t=st=1751112318~exp=1751115918~hmac=74a955e5a34e803b37761000c4a59f5d928673941cdbb263d59ec2821bda8a22&w=1380" alt="" />
        </div>

      </div>
    </div>
  );
};

export default page;

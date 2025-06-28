"use client";

import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  // State for timer duration in seconds
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  // State to store the initial total duration for progress calculation
  const [totalDuration, setTotalDuration] = useState(0);
  // State to control if the timer is running
  const [isRunning, setIsRunning] = useState(false);
  // State for user input minutes and seconds
  const [inputMinutes, setInputMinutes] = useState('');
  const [inputSeconds, setInputSeconds] = useState('');

  // Ref to hold the interval ID for cleanup
  const intervalRef = useRef(null);

  // Constants for the circular progress bar
  const radius = 160; // Increased radius
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const strokeWidth = 8; // Increased stroke width
  // Effect to handle the timer countdown
  useEffect(() => {
    if (isRunning && timeInSeconds > 0) {
      intervalRef.current = setInterval(() => {
        setTimeInSeconds((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeInSeconds === 0 && totalDuration > 0) {
      // If timer reaches 0 and it was actually set, stop it
      setIsRunning(false);
      clearInterval(intervalRef.current);
      // Optional: Play a sound or show a notification when timer ends
      // new Audio('path/to/sound.mp3').play();
    }

    // Cleanup function: clear the interval when component unmounts or dependencies change
    return () => clearInterval(intervalRef.current);
  }, [isRunning, timeInSeconds, totalDuration]);

  // Function to format time for display (MM:SS)
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  // Handler for setting the timer from user input
  const handleSetTimer = () => {
    const minutes = parseInt(inputMinutes) || 0;
    const seconds = parseInt(inputSeconds) || 0;

    const newTotalSeconds = minutes * 60 + seconds;

    if (newTotalSeconds > 0) {
      setTimeInSeconds(newTotalSeconds);
      setTotalDuration(newTotalSeconds); // Store initial duration for progress calculation
      setIsRunning(false); // Stop timer if it was running, to allow a fresh start
      clearInterval(intervalRef.current); // Clear any existing interval
    } else {
      // In a real app, you'd show a user-friendly error message here (e.g., a modal or inline text)
      console.log("Please enter valid positive numbers for minutes and seconds.");
    }
  };

  // Handler for Start/Pause button
  const handleToggleTimer = () => {
    if (timeInSeconds > 0) {
      setIsRunning((prev) => !prev);
    }
  };

  // Handler for Reset button
  const handleResetTimer = () => {
    setIsRunning(false);
    setTimeInSeconds(0);
    setTotalDuration(0); // Reset total duration when timer is reset
    setInputMinutes('');
    setInputSeconds('');
    clearInterval(intervalRef.current);
  };

  // Calculate current time for display below main timer
  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    return `${hours}:${minutes} ${ampm}`;
  };

  // Calculate stroke-dashoffset for the FILLING progress bar.
  // As time elapses, the progress bar should fill clockwise.
  // At start (timeInSeconds = totalDuration), elapsed = 0, offset = circumference.
  // At end (timeInSeconds = 0), elapsed = totalDuration, offset = 0.
  const elapsedTime = totalDuration - timeInSeconds;
  const progressRatio = totalDuration > 0 ? (elapsedTime / totalDuration) : 0;
  const strokeDashoffset = circumference * (1 - progressRatio); // Fills from circumference to 0

  return (
    // Outer container: Fills page, dark background
    <div className='min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-sky-300 to-sky-100 text-black font-sans p-4 relative'>

      {/* Main Timer Display and Progress Bar */}
      <div className='relative w-80 h-80 sm:w-96 sm:h-96 md:w-[480px] md:h-[330px] flex items-center justify-center mb-16'> {/* Increased container size */}
        <svg className='w-full h-full transform -rotate-90'>
          {/* Background circle (track) */}
          <circle
            className='text-gray-800' // Darker track
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="50%"
            cy="50%"
          />
          {/* Progress circle (filling bar) */}
          <circle
            className={'text-sky-400 transition-all duration-1000 ease-linear'} // Vibrant blue
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="50%"
            cy="50%"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset} // This now controls filling
            strokeLinecap="round"
          />
        </svg>
        {/* Timer text positioned absolutely in the center of the SVG */}
        <div className='absolute flex flex-col items-center justify-center'>
          <div className='text-5xl sm:text-6xl md:text-7xl font-bold text-white select-none'>
            {formatTime(timeInSeconds)}
          </div>
          <div className='mt-2 text-md sm:text-lg text-gray-400 font-medium tracking-wide'>
            {getCurrentTime()} {/* Current system time */}
          </div>
        </div>
      </div>

      {/* Input Fields (conditionally rendered) */}
      {totalDuration === 0 && (
        <div className='flex flex-col sm:flex-row gap-4 mb-10 w-full max-w-sm justify-center'>
          <input
            type="number"
            placeholder="Min"
            value={inputMinutes}
            onChange={(e) => setInputMinutes(e.target.value)}
            className='flex-1 p-3 border border-gray-700 bg-gray-800 text-white rounded-lg text-xl text-center focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder-gray-500'
            min="0"
            aria-label="Set minutes"
          />
          <input
            type="number"
            placeholder="Sec"
            value={inputSeconds}
            onChange={(e) => setInputSeconds(e.target.value)}
            className='flex-1 p-3 border border-gray-700 bg-gray-800 text-white rounded-lg text-xl text-center focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder-gray-500'
            min="0"
            max="59"
            aria-label="Set seconds"
          />
          <button
            onClick={handleSetTimer}
            className='w-full sm:w-auto bg-sky-600 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md
                       hover:bg-sky-700 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-950'
          >
            Set
          </button>
        </div>
      )}

      {/* Control Buttons (Play/Pause, Reset) */}
      <div className='flex gap-6 w-full justify-center'>
        <button
          onClick={handleToggleTimer}
          className='flex items-center justify-center w-16 h-16 rounded-full shadow-lg transition-all duration-200 ease-in-out
                     bg-sky-500 hover:bg-sky-600 text-white text-3xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-950'
          disabled={timeInSeconds === 0 && totalDuration === 0} // Disable if no time is set
        >
          {isRunning ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643L18.12 12l-10.84 7.99c-1.25.687-2.779-.235-2.779-1.643V5.653Z" clipRule="evenodd" />
            </svg>
          )}
        </button>
        <button
          onClick={handleResetTimer}
          className='flex items-center justify-center w-16 h-16 rounded-full shadow-lg transition-all duration-200 ease-in-out
                     bg-gray-700 hover:bg-gray-600 text-white text-3xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-950'
        >
          R
        </button>
      </div>
    </div>
  );
};

export default Timer;

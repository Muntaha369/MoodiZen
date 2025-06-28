"use client";

import React, { useState } from 'react';

const page = () => {
  // State to hold the current content of the notepad
  const [noteContent, setNoteContent] = useState('');

  // Handler to clear all text from the notepad
  const handleClear = () => {
    setNoteContent('');
  };

  return (
    // Main container for the notepad: fills the screen, sky blue/white gradient background
    <div className='min-h-screen w-screen flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-white to-sky-100 font-sans'>
      {/* Notepad content area: central card with shadow and rounded corners */}
      <div className='bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-sky-100 w-full max-w-2xl flex flex-col'>
        <h2 className='text-3xl sm:text-4xl font-extrabold text-sky-700 mb-6 text-center leading-tight'>
          My SkyPad Notes
        </h2>

        {/* Textarea for note input */}
        <textarea
          className='w-full flex-grow p-4 mb-6 text-lg text-gray-800 bg-sky-50 border border-sky-200 rounded-xl resize-y min-h-[250px] sm:min-h-[350px]
                     focus:outline-none focus:ring-3 focus:ring-sky-300 placeholder-gray-500 transition-all duration-200 ease-in-out shadow-inner'
          placeholder="Start writing your thoughts here..."
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          rows={10} // Default rows, but resize-y allows user to change
          aria-label="Notepad text area"
        />

        {/* Clear Button */}
        <button
          onClick={handleClear}
          // Disable button if notepad is empty
          disabled={!noteContent.trim()}
          className={`w-full py-3 px-6 rounded-lg text-xl font-semibold shadow-md
                      transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2
                      ${noteContent.trim()
                        ? 'bg-sky-600 hover:bg-sky-700 text-white focus:ring-sky-500 focus:ring-offset-white'
                        : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                      }`}
        >
          Clear Notes
        </button>
      </div>
    </div>
  );
};

export default page;
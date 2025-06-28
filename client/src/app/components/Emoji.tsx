import React from 'react';

const emojis = ['😭', '🥲', '😑', '😊', '😎'];
const texts = [
  "It's shown when you feel 20% (Very Sad)",
  "It's shown when you feel 40% (A Bit Sad)",
  "It's shown when you feel 60% (Neutral)",
  "It's shown when you feel 80% (Happy)",
  "It's shown when you feel 100% (Ecstatic)"
];

const Emoji = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full max-w-lg mx-auto p-4 bg-white rounded-2xl shadow-xl border border-gray-100'>
      <h1 className='text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4 text-center leading-tight'>
        Understanding Emojis
      </h1>

      <p className='text-md sm:text-lg text-gray-600 mb-6 text-center max-w-prose'>
        Each emoji represents how your mood was during a particular day, helping you quickly grasp your emotional journey.
      </p>

      {/* Emoji and Text Explanations */}
      <div className='w-full flex flex-col gap-3 mb-6 px-4'>
        {emojis.map((emoji, idx) => (
          <div
            key={idx}
            className='flex items-center bg-gray-50 rounded-xl p-3 shadow-sm hover:bg-gray-100 transition-all duration-200 ease-in-out'
          >
            <span className='text-4xl sm:text-5xl mr-3'>{emoji}</span>
            <p className='text-base sm:text-lg text-gray-700 font-medium'>
              {texts[idx]}
            </p>
          </div>
        ))}
      </div>

      <div className='text-sm text-gray-500 text-center mt-2'>
        Tap on an emoji in the "Track Day" section to record your daily mood.
      </div>
    </div>
  );
};

export default Emoji;
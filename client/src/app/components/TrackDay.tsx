import React, { useState } from 'react';
import { useTemp } from './store.js'

const TrackDay = () => {
  const emojis = ['😭', '🥲', '😑', '😊', '😎'];
  const percentages = [20, 40, 60, 80, 100];

  const [selectedEmojiIndex, setSelectedEmojiIndex] = useState<number | null>(null);
  const [selectedPercentage, setSelectedPercentage] = useState<number | null>(null);

  const { temp, trackTemp } = useTemp()

  const d = new Date();
  const day = d.getDay();

  const getDayofWeek = ()=>{
    switch (day){
      case 0 :
        return 'Sun'
        break;
      case 1:
        return 'Mon'
        break;
      case 2:
        return 'Tue'
        break;
      case 3:
        return 'Wed'
        break
      case 4:
        return 'Thu'
        break;
      case 5:
        return 'Fri'
        break;
      case 6:
        return 'Sat'
        break;
    }
  }


  return (
    <div className='flex rounded-2xl flex-col items-center justify-center min-h-[300px] w-full max-w-lg mx-auto p-6 bg-white'>
      <h1 className='text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 text-center leading-tight'>
        How do you feel Today?
      </h1>

      {/* Emoji Selection */}
      <div className='flex justify-center items-center gap-4 sm:gap-6 mb-10 flex-wrap'>
        {emojis.map((emoji, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedEmojiIndex(idx)}
            className={` text-2xl sm:text-3xl md:text-3xl p-3 rounded-full transition-all duration-300 ease-in-out
              ${selectedEmojiIndex === idx
                ? 'bg-blue-100 ring-4 ring-blue-400 transform scale-110 shadow-lg'
                : 'bg-gray-100 hover:bg-gray-200 transform hover:scale-105'
              }`}
            aria-label={`Select ${emoji} emoji`}
          >
            {emoji}
          </button>
        ))}
      </div>

      {/* Percentage Buttons */}
      <div className='flex flex-wrap justify-center gap-3 sm:gap-4'>
        {percentages.map((percent, idx) => (
          <button
            key={idx}
            onClick={
              () => {
                setSelectedPercentage(percent);
                const Week = {week:getDayofWeek(), Mood:percent}
                trackTemp(Week);
                console.log(temp)
            }}
            className={`flex items-center justify-center px-6 py-3 rounded-full text-lg font-semibold
              transition-all duration-300 ease-in-out border-2 hover:cursor-pointer
              ${selectedPercentage === percent
                ? 'bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg border-blue-700 transform scale-105'
                : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 hover:shadow-md'
              }`}
          >
            {percent}%
          </button>
        ))}
      </div>
     
    </div>
  );
};

export default TrackDay;

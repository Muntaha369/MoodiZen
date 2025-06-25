"use client"

import React,{useState} from 'react'
import BarChart from '../components/BarChart'
import LineChart from '../components/LineChart'
import PieChart from '../components/PieChart'

const ChartType = [
  {type: 'Bar', border:"rounded-tl-2xl"},
  {type: 'Line', border:""},
  {type: 'pie', border:"rounded-tr-2xl"},
]

const Tracker = [
  {type: 'Track Day', img:'https://img.freepik.com/premium-photo/there-is-man-sitting-chair-beach-with-drink_1035446-21107.jpg?w=1380'},
  {type: 'Result of 14 Days', img:'https://img.freepik.com/premium-vector/hiker-sunset-overlooking-serene-lake-mountains-palm-trees-vibrant-colors-nature-scenic-landscape-digital-art-banner_48369-50007.jpg?w=1380'},
  {type: 'Understand emojis?', img:'https://img.freepik.com/premium-vector/set-icon-emoji-retro-30s-50s-60s-old-animation-eyes-mouths-elements-vector-illustration_317331-1446.jpg?w=1380'}
]

const page = () => {
  const arr = Array(6).fill(null)
  const arr1 = Array(3).fill(null)

  const [activeIndex, setActiveIndex] = useState(null);
  const [chart, setChart] = useState("Bar")

  return (
    <div className=' bg-gradient-to-r from-white  to-blue-300'>
      <div className='h-[110vh] w-screen pt-20 md:p-4 flex 
      flex-col md:flex-row items-center justify-between'>
        <div className=' h-[75%] w-[100%] sm:w-[95%] md:w-[60%] bg-white shadow-2xl sm:rounded-2xl flex justify-between items-center flex-col'>
          <div className='h-[13%] w-full border-b-2 border-b-gray-200 bg-gray-100 sm:rounded-t-2xl flex justify-center items-center'>
            {
              ChartType.map((val,idx)=>(
                <div 
                onClick={()=>{setActiveIndex(idx);
                              setChart(val.type)}}
                className={`w-[33.33%] ${val.border} h-full flex justify-center items-center hover:cursor-pointer
                `}
                key={idx}
                >
                  <p className={`${activeIndex === idx ? "sm:bg-blue-500 sm:text-white text-blue-500" : "sm:bg-gray-200 text-black"} flex  py-3 sm:w-[75%] justify-center items-center rounded-lg m-1`}>{val.type}</p>
                </div>
              ))
            }
          </div>
          <div className='flex justify-center items-center h-[85%] w-[100%] sm:w-[100%] sm:pr-6'style={{ minHeight: 300 }}>

            
              {chart === "Bar" && <BarChart/>}
              {chart === "Line" && <LineChart/>}
              {chart === 'pie' && <PieChart/>}
          
            

          </div>
        </div>
        <div
        className='w-[95%] md:w-[37%] flex flex-col justify-between items-center p-4 h-[50%] mb-20'
        >
          {
            Tracker.map((val,idx)=>(
              <div key={idx}
              className='w-full bg-white shadow-2xl overflow-clip rounded-2xl m-1 h-30 relative' 
              >
                <div className='h-full w-full bg-black/60 hover:bg-black/80 absolute flex items-center justify-center z-10 text-3xl hover:text-4xl transition-all duration-300 hover:cursor-pointer '>
                  <p className=' hover:cursor-pointer font-bold text-white transition-all duration-300'>
                    {val.type}
                  </p>
                </div>

                <img className='z-0 h-full w-full rounded-2xl' src={val.img} alt="image" />
              </div>
            ))
          }
        </div>
      </div>

      <div className=' w-screen  flex justify-center items-center p-1 sm:p-4 flex-wrap mt-20'>
        {
          arr.map((_,idx)=>(
            <div
            key={idx}
            className=' h-[15em] w-[250px] bg-cyan-500 m-6 shadow-2xl shrink-0 rounded-2xl'></div>
          ))
        }
      </div>

    </div>
  )
}

export default page
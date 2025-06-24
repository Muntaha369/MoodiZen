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
                  <p className={`${activeIndex === idx ? "sm:bg-blue-500 sm:text-white text-blue-500" : "sm:bg-gray-200 text-black"} py-3 sm:px-20 rounded-lg`}>{val.type}</p>
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
        className='w-[95%] md:w-[37%] flex flex-col justify-between items-center p-4 h-[50%]'
        >
          {
            arr1.map((_,idx)=>(
              <div key={idx}
              className='w-full bg-white shadow-2xl p-6 rounded-2xl m-1'
              >
                <p>Hello there</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className=' w-screen  flex justify-center items-center p-1 sm:p-4 flex-wrap'>
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
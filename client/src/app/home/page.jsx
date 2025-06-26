"use client"

import React,{ useState, useEffect } from 'react'
import BarChart from '../components/BarChart'
import LineChart from '../components/LineChart'
import PieChart from '../components/PieChart'
import TrackDay from '../components/TrackDay'
import { motion, AnimatePresence } from 'framer-motion'
import { useData } from '../components/store'
import { useTemp } from '../components/store'

const ChartType = [
  {type: 'Bar', border:"rounded-tl-2xl"},
  {type: 'Line', border:""},
  {type: 'pie', border:"rounded-tr-2xl"},
]

const Tracker = [
  {
  type: 'Track Day', 
  img:'https://img.freepik.com/free-vector/people-walking-jogging-clean-trash-park_107791-14579.jpg?t=st=1750873900~exp=1750877500~hmac=e1cd128ddf0a7268dff90fffc0d3a485464f1af71367c3d3f9089fdefb46f3c2&w=1380', renderComponent:<TrackDay/>
},
  {
  type: 'Result of 14 Days', 
  img:'https://img.freepik.com/free-vector/tasks-schedule-concept-with-people-making-notes_107791-15370.jpg?t=st=1750873983~exp=1750877583~hmac=2782bd4c346f9476e60b51dac8701294e11a8844980af68fdf614fd24d301924&w=1380',renderComponent:<TrackDay/>
},
  {
  type: 'Understand emojis?',
   img:'https://img.freepik.com/premium-vector/set-icon-emoji-retro-30s-50s-60s-old-animation-eyes-mouths-elements-vector-illustration_317331-1446.jpg?w=1380',
   renderComponent:<TrackDay/>
  }
]

const Cards = [
  {text:"Therapist",img:"https://img.freepik.com/free-vector/open-mind-psychotherapy-concept-with-treatment-effect-symbols-flat-vector-illustration_1284-78165.jpg?t=st=1750864715~exp=1750868315~hmac=d7f7b054bada65226285e1ac5fcee758ac8a9f3d57f864789b89b7159afb9498&w=1380"},
  {text:"Jornaling",img:"https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150320909.jpg?t=st=1750864358~exp=1750867958~hmac=6c8b298369f7ce319902c1edc4a0cc1662de54611ac11e56765ad22e39fa1069&w=1380"},
  {text:"Promodoro",img:"https://img.freepik.com/premium-vector/financial-clock_442409-2093.jpg?w=1380"},
  {text:"Ai Therapist",img:"https://img.freepik.com/free-vector/innovation-concept-illustration_114360-5848.jpg?t=st=1750864905~exp=1750868505~hmac=1551e5daf60a38484325499f18f305888f4f2c0ff82e581249f41bc41a669ed7&w=1380"},
]

const page = () => {

  const [activeIndex, setActiveIndex] = useState(null);
  const [chart, setChart] = useState("Bar");
  const [renderComp, setRenderComp] = useState(null);

  const { userData, trackMood } = useData();
  const { temp } = useTemp();
  
  useEffect(() => {
    console.log(userData);
  }, [userData]);

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
              onClick={()=>{setRenderComp(val.renderComponent)}} 
              >
                <div className='h-full w-full bg-black/60 hover:bg-black/80 absolute flex items-center justify-center z-10 text-3xl hover:text-4xl transition-all duration-300 hover:cursor-pointer '>
                  <p className=' hover:cursor-pointer font-bold text-white '>
                    {val.type}
                  </p>
                </div>

                <img className='z-0 h-full w-full rounded-2xl' src={val.img} alt="image" />
              </div>
            ))
          }
        </div>
        <AnimatePresence>
          {renderComp !== null && (
            <motion.div 
              className='z-20 flex justify-center items-center absolute top-1/2 left-1/2
               transform -translate-x-1/2 -translate-y-1/2 h-screen w-screen '
              initial={{ opacity:0,scale:0.9 }}
              animate={{ opacity:1,scale:1 }}
              exit={{ opacity:0,scale:0.9 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className='flex flex-col bg-white w-[280px] rounded-2xl sm:w-auto relative border-2  border-gray-100 shadow-2xl'>
              <div className='w-full relative rounded-2xl'>
                <button
                  onClick={() => setRenderComp(null)}
                  aria-label="Close"
                  className='m-2 w-8 h-8 absolute right-0 flex items-center justify-center 
                            border-2 border-red-500 text-red-500 rounded-full 
                            text-lg font-bold hover:bg-red-500 hover:text-white 
                            transition duration-300 ease-in-out'
                >
                  ×
                </button>
              </div>

              {renderComp}
                <div className='w-full flex justify-center items-center m-3'>
                  <button className="w-[140px] text-xl font-semibold px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl"
                  onClick={()=>trackMood(temp)}
                  >
                    Track &#10003;
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className=' w-screen relative justify-center flex flex-wrap p-1 sm:p-4 mt-80 md:mt-20 '>
        {
          Cards.map((val,idx)=>(
            <div
            key={idx}
            // Card container styling: shadows, rounded corners, hover effects, fixed size
            className='relative h-64 w-64  shadow-xl rounded-2xl overflow-hidden cursor-pointer m-3
                       group transform hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 ease-out'
          >
            {/* Image with subtle zoom on hover */}
            <img
              className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              src={val.img}
              alt={val.text} // Important for accessibility
            />
            {/* Gradient overlay and text at the bottom */}
            <div className='absolute inset-x-0 bottom-0 z-10 h-1/2 flex items-end p-4
                            bg-gradient-to-t from-black/80 to-transparent'>
              <p className='text-white text-2xl font-semibold drop-shadow-md'>
                {val.text}
              </p>
            </div>
          </div>
          ))
        }
      </div>

    </div>
  )
}

export default page
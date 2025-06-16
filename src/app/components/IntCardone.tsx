"use client"
import React from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const IntCardone = () => {

  const {scrollY} = useScroll()
  
  const p1opacity = useTransform(scrollY,[0,277.5],[0,1])
  const p1x = useTransform(scrollY,[0,277.5],[100,0])

  const p2opacity = useTransform(scrollY,[277.5,555],[0,1])
  const p2x = useTransform(scrollY,[277.5,555],[100,0])

  const p3opacity = useTransform(scrollY,[555,832.5],[0,1])
  const p3x = useTransform(scrollY,[555,832.5],[100,0])

  const p4opacity = useTransform(scrollY,[832.5,1110],[0,1])
  const p4x = useTransform(scrollY,[832.5,1110],[100,0])

  const p5opacity = useTransform(scrollY,[1110,1387.5],[0,1])
  const p5x = useTransform(scrollY,[1110,1387.5],[100,0])

  // const p6opacity = useTransform(scrollY,[1387.5,1600],[0,1])
  // const p6x = useTransform(scrollY,[1387.5,1600],[100,0])

  return (
    <div className=" text-white flex flex-col sm:flex-row h-full w-full bg-gradient-to-r from-gray-200 to-gray-600 rounded-3xl overflow-hidden shadow-xl">
  {/* Text Section */}
  <div className="w-full h-full sm:w-[70%] p-2 sm:p-6 text-gray-800 text-sm sm:text-lg leading-relaxed flex flex-col  sm:bg-gray-200 bg-white/70 order-2 sm:order-1 gap-y-4 justify-center z-10">
    <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900 w-full text-center mt-10 sm:mt-0">The Silent Struggle</h2>

    <motion.p className="mb-2"
    style={{opacity:p1opacity,x:p1x}}
    >
      Depression isn't merely <span className="font-bold text-red-700">sadness</span>—it&apos;s an <span className="italic text-gray-700">invisible weight</span>, a slow, relentless
      <span className="font-semibold text-gray-900">drag</span> that suffocates over <span className="font-bold text-gray-900">280 million lives</span>.
    </motion.p>

    <motion.p className="mb-2"
    style={{opacity:p2opacity,x:p2x}}
    >
      Every year, <span className="font-bold text-red-800">more than 700,000 souls</span> surrender to that final, desperate act—<span className="underline text-gray-900">suicide</span>.
    </motion.p>

    <motion.p className="mb-2"
    style={{opacity:p3opacity,x:p3x}}
    >
      Behind each chilling number lies a <span className="italic text-gray-700">silent scream</span>, an anguished plea often lost in the void, <span className="font-bold text-red-700">unheard</span>.
    </motion.p>

    <motion.p className="mb-2"
    style={{opacity:p4opacity,x:p4x}}
    >
      Left to fester, it <span className="font-semibold text-gray-900">devours joy</span>, corrodes health, and extinguishes the very ember of hope.
    </motion.p>

    <motion.p className="mb-2"
    style={{opacity:p5opacity, x:p5x}}
    >
      This isn't just a condition—it's a <span className="font-extrabold text-red-900">consuming crisis</span>.
    </motion.p>

    {/* <motion.p
    className=' hidden sm:h-auto sm:w-auto'
    style={{opacity:p6opacity, x:p6x}}
    >
      Only through <span className="font-bold text-gray-900">piercing awareness</span> can we begin to reclaim lives. And perhaps, through <span className="italic text-gray-700">unyielding compassion</span>, offer a flicker of light against the encroaching darkness.
    </motion.p> */}
  </div>

  {/* Image Section */}
  <div className="w-full h-full sm:w-[30%] absolute inset-0 z-0 sm:relative sm:flex justify-center items-center sm:p-4 p-0 order-1 sm:order-2">
    <img
      src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzF2eWF6ZmF3NXZheGZueTQ0c3UxMG9lMDV6a2ZsYTg3a3g0eDNzNyZlcD12MV9pbnRlcmcmNlX2dpZl9ieV9pZCZjdD1z/4g7Pg3Ij7UDFjcpe4m/giphy.gif"
      alt="A person sitting in a melancholic pose, reflecting the struggle with depression."
      className="max-w-full h-[90%] sm:h-auto rounded-2xl  object-cover"
      loading="lazy"
    />
  </div>
</div>
  )
}

export default IntCardone
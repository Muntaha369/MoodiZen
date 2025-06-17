"use client"

import React from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import IntCardone from '../components/IntCardone'

const Page = () => {
  const {scrollY} = useScroll()

  const opacity = useTransform(scrollY,[0,600,1600,2000],[1,1,1,0])
  const scale = useTransform(scrollY,[0,600,1600,2000],[0.8,0.95,0.95,0.7])
  const y = useTransform(scrollY,[0,600,1400,2000],[0,0,0,-300])

  const opacity1 = useTransform(scrollY,[0,2000,2600,3200,4200,4400],[1,1,1,1,1,0])
  const scale1 = useTransform(scrollY,[0,2000,2600,3200,4200,4400],[0.8,0.8,0.8,0.95,0.95,0.7])
  const y1 = useTransform(scrollY,[0,2000,2600,3200,4000,4400],[1000,1000,0,0,0,-300])

  const backgroundColor = useTransform(scrollY,[0,600,1600,2000,2600,3200,4200,4400],["#404040","#404040","#404040","#ffffff","#00ffff","#00ffff","#00ffff","#00ffff"])

  return (
    <motion.div
     className='h-[1100vh] w-screen p-0 sm:p-10 sm:space-y-12 '
     style={{backgroundColor}}
     transition={{duration:2, ease:"easeInOut"}}
     >

      <motion.div 
      className='shadow-2xl bg-gray-400 rounded-3xl h-full w-full mb-3 fixed inset-0'
      style={{opacity,scale,y}}
      transition={{duration:0.7, ease:"easeInOut"}}
      >

        <IntCardone/>


      </motion.div>

      <motion.div 
      className='shadow-2xl bg-gradient-to-r bg-cyan-100 to-cyan-400 rounded-3xl h-full w-full mb-3 fixed inset-0'
      style={{opacity:opacity1,scale:scale1,y:y1}}
      transition={{duration:0.7, ease:"easeInOut"}}
      >
        Sheeeeeeeh!!
      </motion.div>

    </motion.div>
  )
}

export default Page
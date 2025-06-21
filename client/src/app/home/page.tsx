import React from 'react'

const page = () => {
  const arr = Array(8).fill(null)
  return (
    <div>
      <div className='h-[100vh] w-screen shadow-2xl'>

      </div>
      <div className='h-[100vh] w-screen bg-amber-50 flex justify-between items-center p-4 flex-wrap'>
        {
          arr.map((_,idx)=>(
            <div
            key={idx}
            className='h-[45%] w-[250px] bg-cyan-50 mr-4 shadow-2xl shrink-0 rounded-2xl'></div>
          ))
        }
      </div>
    </div>
  )
}

export default page
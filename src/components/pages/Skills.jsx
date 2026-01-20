import React from 'react'
import CurvedLoop from '../CurvedLoop'

function Skills() {
  return (
    <div className='w-full relative h-screen bg-black text-white flex flex-col items-center justify-center'>
        <div className="absolute -top-1/2 left-0 w-full h-1/2">
         <CurvedLoop marqueeText="Skills and Expertise ✦" />
        </div>
        <h1 className='text-4xl font-bold'>Skills</h1>
    </div>
  )
}

export default Skills
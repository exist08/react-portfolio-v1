import React from 'react'
import CurvedLoop from '../CurvedLoop'
import ScrollReveal from '../ScrollReveal'

function Skills() {
  return (
    <div className='w-full relative h-screen bg-black text-white flex flex-col items-center justify-center'>
      <div className="absolute -top-1/2 left-0 w-full h-1/2">
        <CurvedLoop marqueeText="Skills and Expertise ✦" />
      </div>
      <h1 className='text-4xl font-bold'>Skills</h1>
      <ScrollReveal
        baseOpacity={0.1}
        enableBlur
        baseRotation={3}
        blurStrength={4}
      >
        When does a man die? When he is hit by a bullet? No! When he suffers a disease?
        No! When he ate a soup made out of a poisonous mushroom?
        No! A man dies when he is forgotten!
      </ScrollReveal>
    </div>
  )
}

export default Skills
import React from 'react'
import CurvedLoop from '../CurvedLoop'
import ScrollReveal from '../ScrollReveal'

function Skills() {
  return (
    <div className='w-full relative h-screen bg-black text-white flex flex-col items-center justify-center'>
      <div className="absolute -top-1/2 left-0 w-full h-1/2">
        <CurvedLoop marqueeText="Skills and Expertise ✦" />
      </div>
      {/* <h1 className='text-4xl font-bold'>Skills</h1> */}
      <div className="px-10">
      <ScrollReveal
        baseOpacity={0.1}
        enableBlur
        baseRotation={3}
        blurStrength={4}
        >
        I'm a versatile developer who builds exceptional applications 
        across the entire stack. From responsive web interfaces to native mobile experiences, 
        I create digital products that users love. With expertise in React, React Native, 
        and modern web technologies, I turn complex challenges into elegant solutions—whether
         it's a dynamic web application or a cross-platform mobile app.
      </ScrollReveal>
        </div>
    </div>
  )
}

export default Skills
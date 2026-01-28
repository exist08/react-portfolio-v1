import { useState } from 'react'
import Hero from './components/pages/Hero'
import About from './components/pages/About'
import Skills from './components/pages/Skills'
import GradualBlur from './components/GradualBlur'
import SplashCursor from './components/SplashCursor'
import Expertise from './components/pages/Expertise'

function App() {
  return (
    <div className='w-full h-screen bg-black text-white'>
      <SplashCursor />
      <Hero />
      <About />
      <Skills />
      <Expertise />
      {/* <!-- Content Here - such as an image or text --> */}
      <GradualBlur
        target="fixed"
        position="fixed"
        height="12rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential
        opacity={1}
      />
    </div>
  )
}

export default App

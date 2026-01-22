import { useState } from 'react'
import Hero from './components/pages/Hero'
import About from './components/pages/About'
import CurvedLoop from './components/CurvedLoop'
import Skills from './components/pages/Skills'
import GradualBlur from './components/GradualBlur'
import SplashCursor from './components/SplashCursor'
function App() {
  return (
    <div className='w-full h-screen bg-black text-white'>
      <SplashCursor />
      <Hero />
      <About />
      <Skills />
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

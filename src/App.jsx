import { useState } from 'react'
import Hero from './components/Hero'

function App() {
  return (
    <div div className='w-full h-screen bg-black text-white'>
      <div className='flex flex-col items-center justify-center h-full'>
        <Hero />
      </div>
    </div>
  )
}

export default App

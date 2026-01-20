import React from 'react'
import DecryptedText from '../DecryptedText'
import TrueFocus from '../TrueFocus'

function About() {
    return (
        <div className='w-full h-screen bg-black text-white flex flex-col items-center justify-center'>
            <div style={{ marginTop: '4rem' }} className='w-full max-w-5xl mx-auto text-3xl'>
                <DecryptedText
                    text="Hey there! I'm Anurag—a developer who believes that exceptional mobile apps have the power to transform how we live, work, and connect. My journey in tech isn't just about writing code; it's about crafting experiences that feel natural, perform flawlessly, and solve real problems."
                    animateOn="view"
                    revealDirection="start"
                    sequential
                    useOriginalCharsOnly={true}
                    encryptedClassName="text-[#03ef94]"
                />
            </div>
            <div style={{ marginTop: '4rem' }} className='w-full max-w-5xl mx-auto text-3xl'>
                <DecryptedText
                    text="I'm good in React and React Native"
                    animateOn="view"
                    revealDirection="start"
                    sequential
                    useOriginalCharsOnly={true}
                    encryptedClassName="text-[#03ef94]"
                />
            </div>
            <div className="mt-20">
                <TrueFocus
                    sentence="React Native"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="#5227FF"
                    animationDuration={0.5}
                    pauseBetweenAnimations={1}
                />
            </div>

        </div>
    )
}

export default About
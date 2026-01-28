import React from 'react'
import DecryptedText from '../DecryptedText'
import TrueFocus from '../TrueFocus'
import ScrollReveal from '../ScrollReveal'

function About() {
    return (
        <div className='w-full min-h-screen py-6 bg-black text-white flex flex-col items-center justify-center'>
            <div style={{ marginTop: '4rem' }} className='w-full max-w-5xl mx-auto text-3xl px-10 text-center'>
                <ScrollReveal
                    baseOpacity={0.1}
                    enableBlur
                    baseRotation={3}
                    blurStrength={4}
                > Hey there! I'm Anurag—a developer who believes that exceptional
                    mobile apps have the power to transform how we live, work, and connect.
                    My journey in tech isn't just about writing code;
                    it's about crafting experiences that feel natural,
                    perform flawlessly, and solve real problems. </ScrollReveal>
            </div>
            <div style={{ marginTop: '4rem' }} className='w-full max-w-5xl mx-auto text-3xl text-center px-4 sm:px-0'>
                <ScrollReveal
                    baseOpacity={0.1}
                    enableBlur
                    baseRotation={3}
                    blurStrength={4}
                > React or React Native I'm good in both </ScrollReveal>
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
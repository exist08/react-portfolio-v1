import React from "react";
import SplitText from "../SplitText";
import Antigravity from "../Antigravity";
import CurvedLoop from "../CurvedLoop";

function Hero() {
  return (
    <div className="w-full relative h-screen">
      <div className="absolute inset-0">
        <Antigravity
          count={500}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#03e944"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={3}
          pulseSpeed={5}
          particleShape="tetrahedron"
          fieldStrength={20}
        />
      </div>
      <div className="relative w-full h-full flex flex-col items-center justify-center backdrop-blur-sm">
        <SplitText
          text="ANURAG SINGH"
          className="text-9xl font-bold text-center"
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={() => console.log("Animation complete")}
          showCallback
        />
        <SplitText
          text="Web Developer"
          className="text-2xl font-semibold text-center"
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={() => console.log("Animation complete")}
          showCallback
        />
        <SplitText
          text="App Developer"
          className="text-2xl font-semibold text-center"
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={() => console.log("Animation complete")}
          showCallback
        />
        <SplitText
          text="Cross-Platform Architect"
          className="text-2xl font-semibold text-center"
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={() => console.log("Animation complete")}
          showCallback
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/2">
        <CurvedLoop marqueeText="About Me ✦" />
      </div>
    </div>
  );
}

export default Hero;

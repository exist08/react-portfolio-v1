import React from "react";
import TextType from "./TextType";

function Hero() {
  return (
    <TextType
      text={["Text typing effect", "for your websites", "Happy coding!"]}
      typingSpeed={75}
      pauseDuration={1500}
      showCursor={true}
      cursorCharacter="|"
      className="text-8xl font-bold"
    />
  );
}

export default Hero;

import React from "react";
import Carousel from "../Carousel";
import {
  FiCircle,
  FiCode,
  FiFileText,
  FiLayers,
  FiLayout,
} from "react-icons/fi";

const DEFAULT_ITEMS = [
  {
    title: "Text Animations",
    description: "Cool text animations for your projects.",
    id: 1,
    icon: <FiFileText className="h-[16px] w-[16px] text-white" />,
  },
  {
    title: "Animations",
    description: "Smooth animations for your projects.",
    id: 2,
    icon: <FiCircle className="h-[16px] w-[16px] text-white" />,
  },
  {
    title: "Components",
    description: "Reusable components for your projects.",
    id: 3,
    icon: <FiLayers className="h-[16px] w-[16px] text-white" />,
  },
  {
    title: "Backgrounds",
    description: "Beautiful backgrounds and patterns for your projects.",
    id: 4,
    icon: <FiLayout className="h-[16px] w-[16px] text-white" />,
  },
  {
    title: "Common UI",
    description: "Common UI components are coming soon!",
    id: 5,
    icon: <FiCode className="h-[16px] w-[16px] text-white" />,
  },
];

function Expertise() {
  return (
    <div className="w-full relative h-screen bg-black text-white flex flex-col items-center justify-center">
      <div style={{ height: "600px", position: "relative" }} className="-mt-20">
        <Carousel
          items={DEFAULT_ITEMS}
          baseWidth={300}
          autoplay={false}
          autoplayDelay={3000}
          pauseOnHover={false}
          loop={false}
          round={false}
        />
      </div>
    </div>
  );
}

export default Expertise;

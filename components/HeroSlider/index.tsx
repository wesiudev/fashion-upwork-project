"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isIntervalActive, setIntervalActive] = useState(false);

  useEffect(() => {
    if (!isIntervalActive) {
      setIntervalActive(true);
      setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide % 3) + 1);
      }, 6000);
    }
  }, [isIntervalActive]);

  return (
    <div className={`relative w-screen`}>
      {[1, 2, 3].map((slideNumber) => (
        <Slider
          key={slideNumber}
          slideNumber={slideNumber}
          currentSlide={currentSlide}
        />
      ))}
    </div>
  );
}

function Slider({
  slideNumber,
  currentSlide,
}: {
  slideNumber: number;
  currentSlide: number;
}) {
  const isActive = slideNumber === currentSlide;

  return (
    <div
      className={`absolute w-full lg:h-[65vh] bg-gray-400 flex items-center justify-center slider ${
        isActive ? "active" : ""
      }`}
    >
      <Image
        src={`/images/slide${slideNumber}.png`} // Adjust image paths accordingly
        width={1024}
        height={1024}
        alt=""
        className={`lg:h-full lg:w-auto`}
      />

      <p className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
        Slide no. {currentSlide}
      </p>
    </div>
  );
}

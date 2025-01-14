import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

interface CarouselProps {
  items: string[];
  interval?: number;
}

const Carousel = ({ items, interval = 3000 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  }, [items.length]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const autoplay = setInterval(goToNext, interval);

    return () => clearInterval(autoplay);
  }, [currentIndex, goToNext, interval]);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      {/* Carousel Track */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {/* {items.map((item, index) => (
          <div
            key={index}
            className="min-w-full h-64 flex items-center justify-center bg-gray-300"
          >
            {item}
          </div>
        ))} */}
        {items.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt=""
            width={100}
            height={100}
            className="min-w-full h-[300px] object-contain flex items-center justify-center"
            unoptimized
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2"
        onClick={goToPrev}
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2"
        onClick={goToNext}
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-slate-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

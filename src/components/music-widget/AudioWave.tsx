"use client";

import React, { useState, useEffect } from "react";

const AudioWave = () => {
  const [heights, setHeights] = useState<number[]>([]);
  const barCount = 6;

  useEffect(() => {
    setHeights(Array.from({ length: barCount }, () => getRandomHeight()));

    const interval = setInterval(() => {
      setHeights((prevHeights) => prevHeights.map(() => getRandomHeight()));
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const getRandomHeight = () => {
    return Math.floor(Math.random() * 7) + 1;
  };

  return (
    <div className="flex items-center space-x-1">
      {heights.map((height, index) => (
        <div
          key={index}
          className={`w-1 bg-black dark:bg-white rounded-full transition-all duration-150 ease-out`}
          style={{
            height: `${height * 4}px`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default AudioWave;

"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ScrollHighlight: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const texts = [
    "The Alpha Wearable",
    "measures various health",
    "parameters through its",
    "Bio-Scan technology.",
    "The digital mirror head can be sterilized in 15 minutes using a cassette autoclave with a disinfectant wipe before being placed back on the charger."
  ];

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (highlightedIndex < texts.length - 1) {
        event.preventDefault(); // Prevent scrolling until the last text is highlighted
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [highlightedIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);

      // Calculate which text should be highlighted based on scroll position
      const viewportHeight = window.innerHeight;
      const index = Math.floor(newScrollY / (viewportHeight / texts.length));
      setHighlightedIndex(Math.min(index, texts.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center bg-black overflow-hidden">
      {/* Black Screen */}
      <div className="absolute inset-0 bg-black transition-opacity duration-500" style={{ opacity: highlightedIndex === texts.length - 1 ? 0 : 1 }} />
      
      {texts.map((text, index) => (
        <h1
          key={index}
          className={`text-${highlightedIndex >= index ? 'white' : 'gray-400'} transition-colors duration-500 text-5xl font-bold text-center`}
          style={{ opacity: highlightedIndex >= index ? 1 : 0.5 }}
        >
          {text}
        </h1>
      ))}
      <button
        className={`mt-8 px-4 py-2 rounded bg-blue-500 text-white transition-opacity duration-500 ${highlightedIndex === texts.length - 1 ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => {
          // Allow scrolling to the next section
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        }}
      >
        View Alpha Wearable
      </button>
    </div>
  );
};

export default ScrollHighlight; 
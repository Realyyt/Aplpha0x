import React from 'react';
import Image from 'next/image';

export default function ColorfulSplash() {
  return (
    <div className="relative flex justify-center items-center h-screen bg-white overflow-hidden z-0">
      <div className="absolute left-4 sm:left-8 top-1/4 text-black text-xs sm:text-sm">
        natural healing
      </div>
      
      {/* Background Text Animation */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="relative flex whitespace-nowrap animate-marquee">
          <span className="text-gray-200 text-[10vw] sm:text-[20vw] font-bold mx-[100vw]">bio tech</span>
          <span className="text-gray-200 text-[10vw] sm:text-[20vw] font-bold mx-[100vw]">bio tech</span>
          <span className="text-gray-200 text-[10vw] sm:text-[20vw] font-bold mx-[100vw]">bio tech</span>
          <span className="text-gray-200 text-[10vw] sm:text-[20vw] font-bold mx-[100vw]">bio tech</span>
        </div>
      </div>

      {/* Centered Image */}
      <div className="relative z-10">
        <Image
          src="/splash.png"
          alt="Colorful Splash"
          width={750}
          height={750}
          className="object-cover"
        />
      </div>
    </div>
  );
}
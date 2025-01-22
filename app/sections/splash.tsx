import React from 'react';
import Image from 'next/image';

export default function ColorfulSplash() {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-white overflow-hidden z-0">
      <div className="absolute left-4 sm:left-8 top-1/4 text-black text-sm sm:text-lg md:text-xl">
        natural healing
      </div>
      
      {/* Background Text Animation */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="relative flex whitespace-nowrap animate-[marquee_120s_linear_infinite]">
          <span className="text-gray-200 text-[15vw] sm:text-[25vw] font-bold mx-[50vw]">bio tech</span>
          <span className="text-gray-200 text-[15vw] sm:text-[25vw] font-bold mx-[50vw]">bio tech</span>
          <span className="text-gray-200 text-[15vw] sm:text-[25vw] font-bold mx-[50vw]">bio tech</span>
          <span className="text-gray-200 text-[15vw] sm:text-[25vw] font-bold mx-[50vw]">bio tech</span>
        </div>
      </div>

      {/* Centered Image */}
      <div className="relative z-10">
        <Image
          src="/splash.png"
          alt="Colorful Splash"
          width={1000}
          height={1000}
          className="object-cover max-w-[90vw] max-h-[90vh]"
        />
      </div>
    </div>
  );
}
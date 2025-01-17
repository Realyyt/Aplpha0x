import React from 'react';
import Image from 'next/image';

export default function ColorfulSplash() {
  return (
    <div className="relative flex justify-center items-center h-screen bg-white">
      <div className="absolute left-4 sm:left-8 top-1/4 text-black text-xs sm:text-sm">
        natural healing
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <span className="text-gray-200 text-[10vw] sm:text-[20vw] font-bold">bio</span>
        <Image
          src="/splash.png"
          alt="Colorful Splash"
          width={750}
          height={750}
          objectFit="cover"
        />
        <span className="text-gray-200 text-[10vw] sm:text-[20vw] font-bold">tech</span>
      </div>
    </div>
  );
}
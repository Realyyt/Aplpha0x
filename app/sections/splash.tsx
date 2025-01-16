import React from 'react';
import Image from 'next/image';

export default function ColorfulSplash() {
  return (
    <div className="relative flex justify-center items-center h-screen bg-white">
      <div className="absolute left-8 top-1/4 text-black text-sm">
        natural healing
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <span className="text-gray-200 text-[20vw] font-bold">bio</span>
        <img
          src="/splash.png"
          alt="Colorful Splash"
          className="w-3/4 h-3/4 object-cover"
        />
        <span className="text-gray-200 text-[20vw] font-bold">tech</span>
      </div>
    </div>
  );
}
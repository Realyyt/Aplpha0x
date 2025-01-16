"use client"
import React from 'react';
import Image from 'next/image';

const FirstIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 8H9L12 2Z" fill="black"/>
    <path d="M12 22L9 16H15L12 22Z" fill="black"/>
    <path d="M2 12L8 15V9L2 12Z" fill="black"/>
    <path d="M22 12L16 9V15L22 12Z" fill="black"/>
    <circle cx="12" cy="12" r="3" fill="black"/>
  </svg>
);

const SecondIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2"/>
    <path d="M12 6V12L16 14" stroke="black" strokeWidth="2"/>
  </svg>
);

interface FeatureSection {
  icon: React.ReactNode;
  title: string;
  description: string;
  alignment: 'left' | 'right';
}

const features: FeatureSection[] = [
  {
    icon: <FirstIcon />,
    title: "Bio-Scan Tech",
    description: "Quick, comprehensive body assessment in 2 minutes, detecting potential health concerns with 70-80% accuracy.",
    alignment: "left"
  },
  {
    icon: <SecondIcon />,
    title: "Smart Sleep Tracking",
    description: "Monitors energy patterns during sleep, adjusts frequencies to help achieve deeper, restorative rest.",
    alignment: "right"
  }
];

const BioScanFeatures: React.FC = () => {
  return (
    <div className="bg-white w-full py-10">
      <div className="max-w-[1522.75px] mx-auto relative h-[100vh]">
        {/* Central Watch Image */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px]">
          <Image
            src="/r.png"
            alt="Alpha Wearable Device"
            width={900}
            height={900}
            className="object-contain"
            priority
            quality={100}
          />
        </div>

        {/* Features Container with balanced spacing */}
        <div className="relative z-10 h-full flex flex-col justify-between ">
          {/* Top Feature */}
          <div className={`flex ${features[0].alignment === 'left' ? 'justify-start' : 'justify-end'}`}>
            <div className={`w-full max-w-[460px] ${features[0].alignment === 'left' ? 'pl-8' : 'pr-8'}`}>
              <div className="flex items-center gap-3 mb-4">
                {features[0].icon}
                <div className="h-[1px] bg-black flex-grow"/>
              </div>
              <h2 className="text-[56px] leading-[1.1] font-light mb-4 tracking-[-0.02em]">
                {features[0].title}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-[400px]">
                {features[0].description}
              </p>
            </div>
          </div>

          {/* Bottom Feature - Adjusted position */}
          <div className={`flex ${features[1].alignment === 'left' ? 'justify-start' : 'justify-end'} mt-[-100px]`}>
            <div className={`w-full max-w-[460px] ${features[1].alignment === 'left' ? 'pl-8' : 'pr-8'}`}>
              <div className="flex items-center gap-3 mb-4">
                {features[1].icon}
                <div className="h-[1px] bg-black flex-grow"/>
              </div>
              <h2 className="text-[56px] leading-[1.1] font-light mb-4 tracking-[-0.02em]">
                {features[1].title}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-[400px]">
                {features[1].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioScanFeatures; 
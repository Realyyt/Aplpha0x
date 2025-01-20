"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
      <div className="max-w-full sm:max-w-[1522.75px] mx-auto relative h-[100vh]">
        {/* Central Watch Image */}
        <div className="absolute left-1/2 top-1/2 w-[300px] sm:w-[900px] h-[300px] sm:h-[900px] animate-move-horizontal">
          <Image
            src={"/r.png"}
            alt="Alpha Wearable Device"
            width={900}
            height={900}
            className="object-contain"
            priority
            quality={100}
          />
        </div>

        {/* Features Container with balanced spacing */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          {/* Top Feature */}
          <motion.div 
            initial={{ opacity: 0, x: features[0].alignment === 'left' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ margin: "-100px" }}
            className={`flex ${features[0].alignment === 'left' ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`w-full max-w-[460px] ${features[0].alignment === 'left' ? 'pl-4 sm:pl-8' : 'pr-4 sm:pr-8'}`}>
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 mb-4"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {features[0].icon}
                </motion.div>
                <div className="h-[1px] bg-black flex-grow"/>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[36px] sm:text-[56px] leading-[1.1] font-light mb-4 tracking-[-0.02em] text-black"
              >
                {features[0].title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-[400px] z-10 relative"
              >
                {features[0].description}
              </motion.p>
            </div>
          </motion.div>

          {/* Bottom Feature */}
          <motion.div 
            initial={{ opacity: 0, x: features[1].alignment === 'left' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ margin: "-100px" }}
            className={`flex ${features[1].alignment === 'left' ? 'justify-start' : 'justify-end'} mt-[-50px] sm:mt-[-100px]`}
          >
            <div className={`w-full max-w-[460px] ${features[1].alignment === 'left' ? 'pl-4 sm:pl-8' : 'pr-4 sm:pr-8'}`}>
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 mb-4"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {features[1].icon}
                </motion.div>
                <div className="h-[1px] bg-black flex-grow"/>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[36px] sm:text-[56px] leading-[1.1] font-light mb-4 tracking-[-0.02em] text-black"
              >
                {features[1].title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-[400px] z-10 relative"
              >
                {features[1].description}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BioScanFeatures; 

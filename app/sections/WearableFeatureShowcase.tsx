"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion,  } from 'framer-motion';

interface FeatureSection {
  title: string;
  description: string;
  alignment: 'left' | 'right';
  icon?: string;
}

const features: FeatureSection[] = [
  {
    title: "Stress Relief",
    description: "Real-time stress level monitoring with tailored frequency delivery for natural stress management.",
    alignment: "left",
    icon: "⚡"
  },
  {
    title: "Pain Management",
    description: "Sends soothing frequencies to reduce muscle pain and support the body's natural healing process.",
    alignment: "right",
    icon: "⚓"
  }
];

const WearableFeatureShowcase: React.FC<{ watchImageUrl: string }> = ({ watchImageUrl }) => {
  const [rotation, setRotation] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);


  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="bg-black relative h-[100vh] overflow-hidden">
      <div className="sticky top-0 h-screen">
        <div className="max-w-7xl mx-auto h-full px-4 py-16 sm:py-24 relative">
          <div className="relative w-full h-full">
            {/* Rotating Watch Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div
                style={{
                  transform: `rotateY(${rotation}deg)`,
                }}
                className="w-[500px] h-[500px] perspective-1000"
              >
                <Image
                  src={watchImageUrl}
                  alt="Smart Wearable Device"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>

            {/* Content Sections */}
            <div className="relative h-full">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  className={`
                    absolute w-[400px] z-10
                    ${feature.alignment === 'left' 
                      ? 'left-[5%] top-[15%] text-left' 
                      : 'right-[5%] bottom-[15%] text-right'}
                  `}
                  initial={{ opacity: 0, x: feature.alignment === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {/* Icon line decoration */}
                  <div className={`mb-8 relative ${feature.alignment === 'left' ? 'text-left' : 'text-right'}`}>
                    <div className={`absolute ${feature.alignment === 'left' ? 'left-0' : 'right-0'} w-[200px] h-[1px] bg-white/20 top-1/2`} />
                    {feature.alignment === 'left' && (
                      <motion.span 
                        className="relative inline-block text-2xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {feature.icon}
                      </motion.span>
                    )}
                  </div>
                  
                  <motion.h2 
                    className="text-5xl font-light mb-4 tracking-wide text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {feature.title}
                  </motion.h2>
                  
                  <motion.p 
                    className="text-gray-400 text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {feature.description}
                  </motion.p>

                  {feature.alignment === 'right' && (
                    <div className="mt-8">
                      <motion.span 
                        className="relative inline-block text-2xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {feature.icon}
                      </motion.span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WearableFeatureShowcase;
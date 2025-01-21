"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const AlphaWearableHighlight = () => {
  const [isComplete, setIsComplete] = useState(false);
  const lastElementRef = React.useRef(null);
  const isLastElementInView = useInView(lastElementRef, { amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3,
      }
    }
  };

  const elementVariants = {
    hidden: { 
      opacity: 0,
      y: 60,
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      }
    }
  };

  useEffect(() => {
    if (isLastElementInView) {
      setIsComplete(true);
    }
  }, [isLastElementInView]);

  return (
    <motion.div 
      className="min-h-screen bg-black text-white relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        variants={elementVariants}
        className="absolute top-0 left-0 w-full h-full"
      >
        <Image
          src="/watch.png"
          alt="Alpha Wearable"
          fill
          className="object-cover opacity-50"
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.h2 
          variants={elementVariants}
          className="text-4xl md:text-6xl font-bold mb-8"
        >
          Experience the Future of Wellness
        </motion.h2>

        <motion.p 
          variants={elementVariants}
          className="text-lg md:text-xl mb-12 max-w-2xl"
        >
          Discover how our advanced Bio-Scan technology revolutionizes your approach to health and wellness.
        </motion.p>

        <motion.div 
          ref={lastElementRef}
          variants={elementVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {['Bio-Scan Technology', 'Sleep Enhancement', 'Wellness Tracking'].map((feature, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">{feature}</h3>
              <p className="text-gray-300">
                Advanced features designed to optimize your well-being and enhance your daily life.
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Completion indicator */}
      <div className="hidden">
        {isComplete && <div id="section-complete" />}
      </div>
    </motion.div>
  );
};

export default AlphaWearableHighlight;
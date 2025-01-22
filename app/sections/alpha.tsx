"use client"
import React from 'react';
import { motion } from 'framer-motion';

export default function Alpha() {
  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-white px-4">
      <motion.p 
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-20%" }}
        variants={textVariants}
        className="text-sm text-gray-500 mb-2 text-center"
      >
        The Alpha Wearable combines advanced Bio-Scan technology with
        therapeutic support for
      </motion.p>
      
      <motion.h1 
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-20%" }}
        variants={{
          ...textVariants,
          visible: {
            ...textVariants.visible,
            transition: { duration: 1.4, delay: 0.2 }
          }
        }}
        className="text-4xl sm:text-8xl font-bold text-center mb-6"
      >
        sleep, stress, mood, <br /> and pain relief
      </motion.h1>
      
      <motion.button 
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-20%" }}
        variants={{
          ...textVariants,
          visible: {
            ...textVariants.visible,
            transition: { duration: 1.4, delay: 0.4 }
          }
        }}
        className="px-4 sm:px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
      >
        Learn more
      </motion.button>
    </div>
  );
}
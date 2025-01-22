"use client"
import React from 'react';
import { motion } from 'framer-motion';

const AlphaWearableHighlight: React.FC = () => {
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
    <div className="flex flex-col items-center justify-center bg-black py-16 sm:py-[164px] h-screen">
      <div className="flex flex-col items-center gap-5 w-full max-w-[879.59px] mx-auto px-4">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-20%" }}
          variants={textVariants}
          className="font-helveticaneue text-[14px] font-normal text-white text-center"
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Alpha wearable
        </motion.h2>
        <motion.h3 
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
          className="text-center font-helveticaneue text-[36px] sm:text-[76px] font-bold leading-tight sm:leading-[76px] tracking-[-0.04em] text-white"
        >
          <span>We are committed to enhancing overall well-being through the use of innovative and natural health solutions.</span>
        </motion.h3>
        <motion.h4 
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
          className="text-center font-helveticaneue text-[14px] font-normal leading-[18px] text-white"
        >
          Anywhere Healing merges cutting-edge technology with holistic health practices, offering products like the Alpha Wearable that utilize advanced Bio-Scan and frequency therapy.
        </motion.h4>
        <button className="w-[140.22px] h-[43px] rounded-[8px] px-[14px] py-[10px] font-medium bg-gradient-to-r from-[#02B6EB] to-[#1D60A6] hover:bg-gradient-to-r hover:from-[#02B6EB] hover:to-[#1D60A6] text-white transition-transform hover:scale-105">
          View more 
        </button>
      </div>
    </div>
  );
};

export default AlphaWearableHighlight; 
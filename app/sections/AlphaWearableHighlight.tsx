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
    <div className="flex flex-col items-center justify-center bg-black py-16 sm:py-[164px] min-h-screen">
      <div className="flex flex-col items-center gap-5 w-full max-w-[879.59px] mx-auto px-4">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-20%" }}
          variants={textVariants}
          className="font-helveticaneue text-[14px] font-normal text-white text-center"
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
          <span>The Alpha Wearable measures various health parameters through its Bio-Scan technology</span>
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
          The digital mirror head can be sterilized in 15 minutes using a cassette autoclave with a disinfectant wipe before being placed back on the charger.
        </motion.h4>
        <button className="min-w-[188px] rounded-lg px-4 sm:px-[30px] font-medium bg-indigo_A100 hover:bg-indigo_A200 text-white transition-transform hover:scale-105">
          View Alpha Wearable
        </button>
      </div>
    </div>
  );
};

export default AlphaWearableHighlight; 
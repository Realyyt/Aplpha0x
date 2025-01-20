import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WellnessComponent() {
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
    <div className="relative h-screen w-full z-0">
      <Image
        src="/c.png" // Replace with your image path
        alt="Wellness Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute bottom-16 left-4 sm:left-8 z-[1] text-white">
        <motion.h1 
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-20%" }}
          variants={textVariants}
          className="text-3xl sm:text-7xl font-bold mb-4"
        >
          Designed for<br />your wellness
        </motion.h1>
        <motion.p 
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
          className="text-base sm:text-xl max-w-md mb-8 text-gray-200"
        >
          Designed to improve your health and well-being with innovative, natural solutions that support your body&apos;s balance and vitality.
        </motion.p>
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
          className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-3 rounded-lg transition-colors"
        >
          Learn more
        </motion.button>
      </div>
    </div>
  );
}
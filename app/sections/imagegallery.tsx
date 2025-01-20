// components/ImageGallery.js

"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ImageGallery() {
  const imageVariants = {
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
    <div className="flex flex-col sm:flex-row justify-around py-16 sm:py-32 items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4 bg-gray-100">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-20%" }}
        variants={imageVariants}
      >
        <Image
          src="/p2.png"
          alt="Bioscan"
          layout="fixed"
          width={328.34}
          height={676.99}
          className="rounded-lg"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-20%" }}
        variants={{
          ...imageVariants,
          visible: {
            ...imageVariants.visible,
            transition: { duration: 1.4, delay: 0.2 }
          }
        }}
      >
        <Image
          src="/p1.png"
          alt="Vital Signs"
          layout="fixed"
          width={328.34}
          height={676.99}
          className="rounded-lg"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-20%" }}
        variants={{
          ...imageVariants,
          visible: {
            ...imageVariants.visible,
            transition: { duration: 1.4, delay: 0.4 }
          }
        }}
      >
        <Image
          src="/p3.png"
          alt="Congratulations"
          layout="fixed"
          width={328.34}
          height={676.99}
          className="rounded-lg"
        />
      </motion.div>
    </div>
  );
}
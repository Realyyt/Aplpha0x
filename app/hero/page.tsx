"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import TextReveal from '../components/TextReveal';
import { motion, useInView } from 'framer-motion';

const SplitRevealSequence = () => {
  const [isComplete, setIsComplete] = useState(false);
  const mainText = {
    title: "Sleep better,",
    subtitle: "Feel alive again",
    description: "Unlock the power of advanced Bio-Scan technology and therapeutic frequencies to support your body's natural healing process and overall well-being."
  };

  // Container variants
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

  // Individual element variants
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

  // Check when the last element is in view
  const lastElementRef = React.useRef(null);
  const isLastElementInView = useInView(lastElementRef, { amount: 0.5 });

  useEffect(() => {
    if (isLastElementInView) {
      setIsComplete(true);
    }
  }, [isLastElementInView]);

  return (
    <motion.div 
      className="relative w-full h-screen overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onAnimationComplete={() => console.log("Section complete")}
    >
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0"
        variants={elementVariants}
      >
        <Image 
          src="/pf.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Navbar */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 w-full p-4 flex justify-between items-center z-50"
        variants={elementVariants}
      >
        <motion.div 
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.2,
            delay: 1.5,
            ease: "easeOut"
          }}
          className="text-2xl"
        >
          <Image 
            src="/logo.png" 
            alt="logo" 
            width={32} 
            height={35.41} 
            className="w-[32px] h-[35.41px] sm:w-[32px] sm:h-[35.41px]"
          />
        </motion.div>
        <div className="hidden md:flex gap-4 lg:gap-8 text-white">
          {['Science', 'About us', 'Contact', 'Partnerships'].map((text, index) => (
            <motion.span 
              key={index} 
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1.2,
                delay: 1.6 + index * 0.1,
                ease: "easeOut"
              }}
              className="hover:text-green-300 text-sm lg:text-base cursor-pointer"
            >
              {text}
            </motion.span>
          ))}
        </div>
        <motion.span 
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.2,
            delay: 2.0,
            ease: "easeOut"
          }}
          className="bg-[#c0ff72] px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm md:text-base hover:bg-[#c0ff72] whitespace-nowrap cursor-pointer"
        >
          Order now
        </motion.span>
      </motion.nav>

      {/* Main Content */}
      <div className="absolute top-[20%] sm:top-1/4 left-4 sm:left-8 md:left-16 text-white max-w-[90%] sm:max-w-lg">
        <motion.h1 
          variants={elementVariants}
          className="text-2xl sm:text-4xl md:text-6xl font-bold mb-2"
        >
          {mainText.title}
        </motion.h1>
        
        <motion.h2 
          variants={elementVariants}
          className="text-2xl sm:text-4xl md:text-6xl italic mb-4"
        >
          {mainText.subtitle}
        </motion.h2>

        <motion.p 
          ref={lastElementRef}
          variants={elementVariants}
          className="text-xs sm:text-sm md:text-base text-gray-200"
        >
          {mainText.description}
        </motion.p>
      </div>

      {/* Completion indicator (hidden) */}
      <div className="hidden">
        {isComplete && <div id="section-complete" />}
      </div>
    </motion.div>
  );
};

export default SplitRevealSequence;

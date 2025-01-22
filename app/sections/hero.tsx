"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import TextReveal from '../components/TextReveal';
import { motion } from 'framer-motion';
import { Playball } from 'next/font/google';

interface SplitRevealSequenceProps {
  imageUrl?: string;
  mainText?: {
    title: string;
    subtitle: string;
    description: string;
  };
}

const SplitRevealSequence: React.FC<SplitRevealSequenceProps> = ({
  mainText = {
    title: "Sleep better,",
    subtitle: "Feel alive again",
    description: "Unlock the power of advanced Bio-Scan technology and therapeutic frequencies to support your body's natural healing process and overall well-being."
  }
}) => {
  const [isRevealing, setIsRevealing] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsRevealing(true);
  }, []);

  useEffect(() => {
    let requestId: number;
    let currentScrollY = 0;
    const smoothScroll = () => {
      currentScrollY += (window.scrollY - currentScrollY) * 0.1;
      setScrollY(currentScrollY);
      requestId = requestAnimationFrame(smoothScroll);
    };

    smoothScroll();
    return () => cancelAnimationFrame(requestId);
  }, []);



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
    <div className="relative w-full h-[100dvh] overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image 
          src={"/pf.jpg"}
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Slow down the Split Reveal Overlays */}
      <div
        className={`absolute top-0 left-0 w-full h-1/2 bg-black transition-transform duration-[3000ms] ease-in-out z-50 ${isRevealing ? 'translate-y-[-100%]' : 'translate-y-0'}`}
      />
      <div
        className={`absolute bottom-0 left-0 w-full h-1/2 bg-black transition-transform duration-[3000ms] ease-in-out z-50 ${isRevealing ? 'translate-y-[100%]' : 'translate-y-0'}`}
      />

      {/* Main Content */}
      <div className="relative w-full h-full max-w-full sm:max-w-[1522.75px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 w-full p-4 flex justify-between items-center z-50">
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
        </nav>

        {/* Main Text Content */}
        <div className="absolute top-[50%] sm:top-[55%] left-4 sm:left-8 md:left-16 text-white max-w-[90%] sm:max-w-lg">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-20%" }}
            variants={{
              ...textVariants,
              visible: {
                ...textVariants.visible,
                transition: { duration: 1.4, delay: 0.8 }
              }
            }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-7xl font-bold mb-2">{mainText.title}</h1>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-20%" }}
            variants={{
              ...textVariants,
              visible: {
                ...textVariants.visible,
                transition: { duration: 1.4, delay: 1.0 }
              }
            }}
          >
            <h2 className="text-2xl sm:text-4xl md:text-7xl font-playball mb-4 ">{mainText.subtitle}</h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-20%" }}
            variants={{
              ...textVariants,
              visible: {
                ...textVariants.visible,
                transition: { duration: 1.4, delay: 1.2 }
              }
            }}
          >
            <p className="text-sm sm:text-sm md:text-base text-gray-200 max-w-[90%] sm:max-w-full">
              {mainText.description}
            </p>
          </motion.div>
        </div>

        {/* Box */}
        <motion.div 
          className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 bg-white/5 backdrop-blur-[68.52%] p-2 sm:p-3 md:p-5 rounded-2xl w-[240px] sm:w-[340px] md:w-[470px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-20%" }}
          variants={{
            ...textVariants,
            visible: {
              ...textVariants.visible,
              transition: { duration: 1.4, delay: 1.4 }
            }
          }}
        >
          <div className={`text-${scrollY > 100 ? 'gray-400' : 'white'}`}>
            <div className="flex gap-2 sm:gap-3 md:gap-5">
              <div className="w-[60px] sm:w-[80px] md:w-[140px] h-[60px] sm:h-[80px] md:h-[95px] rounded-lg overflow-hidden flex-shrink-0 bg-[#808080]">
                <Image 
                  src="/watch.png"
                  alt="Alpha Wearable Device"
                  width={140}
                  height={140}
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div className="text-white flex-1 flex flex-col justify-between py-0.5 sm:py-1 md:py-2">
                <div>
                  <TextReveal 
                    text="ALPHA WEARABLE" 
                    className="text-sm sm:text-base md:text-xl font-semibold tracking-wide" 
                  />
                  <TextReveal 
                    text="A wearable device that combines advanced Bio-Scan technology with therapeutic frequency therapy to naturally support stress ..." 
                    className="text-[10px] sm:text-xs md:text-sm text-gray-400 mt-1 sm:mt-2 leading-snug" 
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#fffff]/20 backdrop-blur-[95%] p-2 sm:p-3 md:p-5 rounded-2xl flex justify-between items-center mt-2 sm:mt-3 md:mt-4">
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                <div className="relative">
                  <Image 
                    src="/her.png"
                    alt="Dr Emi Martinez"
                    width={32}
                    height={32}
                    className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px] rounded-full object-cover"
                  />
                </div>
                <div className='whitespace-nowrap'>
                  <TextReveal 
                    text="Dr Emi Martinez" 
                    className="text-[10px] sm:text-xs md:text-sm font-medium" 
                  />
                  <TextReveal 
                    text="Head Doctor" 
                    className="text-[8px] sm:text-[10px] md:text-xs text-gray-400" 
                  />
                </div>
              </div>
              <TextReveal 
                text="View product" 
                className="bg-gradient-to-r from-[#8793ff] to-[#6272ff] hover:bg-[#5558E3] px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-xl text-[10px] sm:text-xs md:text-sm font-medium transition-colors" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SplitRevealSequence;

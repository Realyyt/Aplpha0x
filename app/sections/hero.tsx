"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import TextReveal from '../components/TextReveal';
import { motion } from 'framer-motion';

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

  const getParallaxStyle = (speed: number) => ({
    transform: `translate3d(0, ${scrollY * speed}px, 0)`,
    willChange: 'transform'
  });

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden">
      {/* Background Image with enhanced parallax */}
      <div 
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={getParallaxStyle(0.5)}
      >
        <Image 
          src={"/1.png"}
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Slow down the Split Reveal Overlays */}
      <div
        className={`absolute top-0 left-0 w-full h-1/2 bg-black transition-transform duration-[3000ms] ease-in-out z-50 ${isRevealing ? 'translate-y-[-100%]' : 'translate-y-0'}`}
      />
      <div
        className={`absolute bottom-0 left-0 w-full h-1/2 bg-black transition-transform duration-[3000ms] ease-in-out z-50 ${isRevealing ? 'translate-y-[100%]' : 'translate-y-0'}`}
      />

      {/* Main Content */}
      <div className="relative w-full h-full max-w-full sm:max-w-[1522.75px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar with smoother parallax */}
        <nav 
          className={`absolute top-0 w-full p-4 flex justify-between items-center transition-transform duration-300 ease-out`}
          style={getParallaxStyle(0.2)}
        >
          <div className="text-2xl">
            <Image 
              src="/logo.png" 
              alt="logo" 
              width={67.68} 
              height={67.68} 
              className="w-[50px] h-[50px] sm:w-[67.68px] sm:h-[67.68px]"
            />
          </div>
          <div className="hidden md:flex gap-4 lg:gap-8 text-white">
            {['Science', 'About us', 'Contact', 'Partnerships'].map((text, index) => (
              <span 
                key={index} 
                className="hover:text-green-300 transition-opacity duration-[2000ms] ease-in-out opacity-0 hover:opacity-100 animate-fadeIn text-sm lg:text-base"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                {text}
              </span>
            ))}
          </div>
          <span 
            className="bg-[#c0ff72] px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm md:text-base hover:bg-[#c0ff72] transition-opacity duration-[2000ms] ease-in-out opacity-0 hover:opacity-100 animate-fadeIn whitespace-nowrap"
            style={{ animationDelay: `${4 * 0.5}s` }}
          >
            Order now
          </span>
        </nav>

        {/* Main Text Content with enhanced parallax */}
        <div 
          className="absolute top-[20%] sm:top-1/4 left-4 sm:left-8 md:left-16 text-white transition-all duration-300 ease-out max-w-[90%] sm:max-w-lg"
          style={getParallaxStyle(0.3)}
        >
          <TextReveal text={mainText.title} className="text-2xl sm:text-4xl md:text-6xl font-bold mb-2" />
          <TextReveal text={mainText.subtitle} className="text-2xl sm:text-4xl md:text-6xl italic mb-4" />
          <TextReveal text={mainText.description} className="text-xs sm:text-sm md:text-base text-gray-200 max-w-[90%] sm:max-w-full" />
        </div>

        {/* Box with enhanced parallax and scroll trigger */}
        <motion.div 
          className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 bg-white/5 backdrop-blur-[68.52%] p-2 sm:p-3 md:p-5 rounded-2xl
            w-[240px] sm:w-[340px] md:w-[470px] transition-all duration-300 ease-out"
          style={getParallaxStyle(0.15)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
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

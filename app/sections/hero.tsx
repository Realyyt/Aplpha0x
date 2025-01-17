"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import TextReveal from '../components/TextReveal';

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
  const [textVisible, setTextVisible] = useState(false);
  const [boxVisible, setBoxVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsRevealing(true);
    setTimeout(() => setTextVisible(true), 1000);
    setTimeout(() => setBoxVisible(true), 2400);
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
    <div className="relative w-full h-screen overflow-hidden">
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
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Slow down the Split Reveal Overlays */}
      <div
        className={`absolute top-0 left-0 w-full h-1/2 bg-black transition-transform duration-[2000ms] ease-in-out z-50 ${isRevealing ? 'translate-y-[-100%]' : 'translate-y-0'}`}
      />
      <div
        className={`absolute bottom-0 left-0 w-full h-1/2 bg-black transition-transform duration-[2000ms] ease-in-out z-50 ${isRevealing ? 'translate-y-[100%]' : 'translate-y-0'}`}
      />

      {/* Main Content */}
      <div className="relative w-full h-screen max-w-full sm:max-w-[1522.75px] max-h-[951.72px] mx-auto">
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
              className="w-[67.68px] h-[67.68px]"
            />
          </div>
          <div className="hidden md:flex gap-8 text-white">
            {['Science', 'About us', 'Contact', 'Partnerships'].map((text, index) => (
              <span 
                key={index} 
                className={`hover:text-green-300 transition-opacity duration-[2000ms] ease-in-out opacity-0 hover:opacity-100 animate-fadeIn`}
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                {text}
              </span>
            ))}
          </div>
          <span 
            className="bg-[#c0ff72] px-4 py-2 rounded-md text-sm md:text-base hover:bg-[#c0ff72] transition-opacity duration-[2000ms] ease-in-out opacity-0 hover:opacity-100 animate-fadeIn"
            style={{ animationDelay: `${4 * 0.5}s` }}
          >
            Order now
          </span>
        </nav>

        {/* Main Text Content with enhanced parallax */}
        <div 
          className={`absolute top-1/4 left-4 md:left-16 text-white transition-all duration-300 ease-out max-w-lg
            ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={getParallaxStyle(0.3)}
        >
          <TextReveal text={mainText.title} className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2" />
          <TextReveal text={mainText.subtitle} className="text-3xl sm:text-4xl md:text-6xl italic mb-4" />
          <TextReveal text={mainText.description} className="text-sm md:text-base text-gray-200" />
        </div>

        {/* Box with enhanced parallax */}
        <div 
          className={`absolute bottom-0 right-0 bg-white/5 backdrop-blur-[68.52%] p-5 rounded-2xl
            w-[300px] sm:w-[470px] h-[240px] transition-all duration-300 ease-out
            ${boxVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={getParallaxStyle(0.15)}
        >
          <div className={`text-${scrollY > 100 ? 'gray-400' : 'white'}`}>
            <div className="flex h-[126.9px] gap-5 h-full">
              <div className="w-[100px] sm:w-[140px] h-[95px] rounded-lg overflow-hidden flex-shrink-0 bg-[#808080]">
                <Image 
                  src="/watch.png"
                  alt="Alpha Wearable Device"
                  width={140}
                  height={140}
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div className="text-white flex-1 flex flex-col justify-between py-2">
                <div>
                  <TextReveal text="ALPHA WEARABLE" className="text-lg sm:text-xl font-semibold tracking-wide" />
                  <TextReveal text="A wearable device that combines advanced Bio-Scan technology with therapeutic frequency therapy to naturally support stress ..." className="text-sm text-gray-400 mt-2 leading-snug" />
                </div>
              </div>
            </div>

            <div className="bg-[#fffff]/20 backdrop-blur-[95%] p-5 rounded-2xl flex justify-between items-center mt-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Image 
                    src="/her.png"
                    alt="Dr Emi Martinez"
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className='whitespace-nowrap'>
                  <TextReveal text="Dr Emi Martinez" className="text-sm font-medium" />
                  <TextReveal text="Head Doctor" className="text-xs text-gray-400" />
                </div>
              </div>
              <TextReveal text="View product" className="bg-gradient-to-r from-[#8793ff] to-[#6272ff] hover:bg-[#5558E3] px-4 py-2 rounded-xl text-sm font-medium transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitRevealSequence;

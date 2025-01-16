"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface SplitRevealSequenceProps {
  imageUrl?: string;
  mainText?: {
    title: string;
    subtitle: string;
    description: string;
  };
}

const SplitRevealSequence: React.FC<SplitRevealSequenceProps> = ({
  imageUrl = "/placeholder.svg?height=952&width=1523",
  mainText = {
    title: "Sleep better,",
    subtitle: "Feel alive again",
    description: "Unlock the power of advanced Bio-Scan technology and therapeutic frequencies to support your body's natural healing process and overall well-being."
  }
}) => {
  const [isRevealing, setIsRevealing] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [boxVisible, setBoxVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsRevealing(true);
    setTimeout(() => setTextVisible(true), 1000);
    setTimeout(() => setNavVisible(true), 1800);
    setTimeout(() => setBoxVisible(true), 2400);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src={"/1.png"}
          alt="Background"
          fill
          priority
          style={{ objectFit: 'cover', transform: `translateY(${scrollY * 0.5}px)` }}
        />
      </div>

      {/* Split Reveal Overlays */}
      <div
        className={`absolute top-0 left-0 w-full h-1/2 bg-black transition-transform duration-1000 ease-in-out z-50 ${isRevealing ? 'translate-y-[-100%]' : 'translate-y-0'}`}
      />
      <div
        className={`absolute bottom-0 left-0 w-full h-1/2 bg-black transition-transform duration-1000 ease-in-out z-50 ${isRevealing ? 'translate-y-[100%]' : 'translate-y-0'}`}
      />

      {/* Main Content */}
      <div className="relative w-full h-screen max-w-[1522.75px] max-h-[951.72px] mx-auto">
        {/* Navbar */}
        <nav className={`
          absolute top-0 w-full p-4 flex justify-between items-center
          transition-transform duration-500
          ${navVisible ? 'translate-y-0' : '-translate-y-full'}
        `}>
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
            <button className="hover:text-green-300 transition-colors">Science</button>
            <button className="hover:text-green-300 transition-colors">About us</button>
            <button className="hover:text-green-300 transition-colors">Contact</button>
            <button className="hover:text-green-300 transition-colors">Partnerships</button>
          </div>
          <button className="bg-green-300 px-4 py-2 rounded-md text-sm md:text-base hover:bg-green-400 transition-colors">
            Order now
          </button>
        </nav>

        {/* Main Text Content */}
        <div className={`
          absolute top-1/4 left-4 md:left-16 text-white
          transition-all duration-1000 max-w-lg
          ${textVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
        `}>
          <h1 className="text-4xl md:text-6xl font-bold mb-2">{mainText.title}</h1>
          <h2 className="text-4xl md:text-6xl italic mb-4">{mainText.subtitle}</h2>
          <p className="text-sm md:text-base text-gray-200">{mainText.description}</p>
        </div>

        <div className={`
          absolute bottom-0 right-0
          bg-white/5 backdrop-blur-[68.52%] p-5 rounded-2xl
          w-[470px] h-[240px]
          transition-all duration-500
          ${boxVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        `}>
          <div className={`text-${scrollY > 100 ? 'gray-400' : 'white'}`}>
            {/* First Section: Alpha Wearable Device */}
            <div className="flex h-[126.9px] gap-5 h-full">
              <div className="w-[140px] h-[95px] rounded-lg overflow-hidden flex-shrink-0 bg-[#808080]">
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
                  <h3 className="text-xl font-semibold tracking-wide">
                    <span className="text-white">ALPHA</span>{' '}
                    <span className="text-gray-400">WEARABLE</span>
                  </h3>
                  <p className="text-sm text-gray-400 mt-2 leading-snug">
                    A wearable device that combines advanced Bio-Scan technology with therapeutic frequency therapy to naturally support stress ...
                  </p>
                </div>
              </div>
            </div>

            {/* Doctor Information Section - Merged with Alpha Wearable */}
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
                  <p className="text-sm font-medium">Dr Emi Martinez</p>
                  <p className="text-xs text-gray-400">Head Doctor</p>
                </div>
              </div>
              <button className="bg-[#6366F1] hover:bg-[#5558E3] px-4 py-2 rounded-xl text-sm font-medium transition-colors">
                View product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitRevealSequence;

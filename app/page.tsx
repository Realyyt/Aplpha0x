"use client"
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LandingPage = () => {
  const containerRef = useRef(null);
  const revealRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  // Add text pairs for animation
  const textPairs = [
    { top: "Rest", bottom: "Peacefully" },
    { top: "Dream", bottom: "Deeply" },
    { top: "Sleep", bottom: "Smart Naturally" }
  ];

  useGSAP(() => {
    const timeline = gsap.timeline();

    // Vertical rectangular reveal animation
    timeline.fromTo(revealRef.current,
      {
        height: "0vh",
        width: "100%",
      },
      {
        height: "100vh",
        duration: 3,
        ease: "power2.inOut",
      }
    );

    // Text switching animation during the reveal
    textPairs.forEach((pair, index) => {
      if (index > 0) { // Skip first pair as it's already in place
        timeline.to([text1Ref.current, text2Ref.current], {
          opacity: 0,
          scale: 0.5,
          duration: 0.3,
          ease: "power2.in",
        }, index === 1 ? 0 : 1.5);

        timeline.set([text1Ref.current, text2Ref.current], {
          innerHTML: `${pair.top}|||${pair.bottom}`.split('|||'),
        });

        timeline.to([text1Ref.current, text2Ref.current], {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "back.out(1.7)",
        });
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="h-screen w-screen flex items-center justify-center bg-black overflow-hidden">
      {/* White reveal rectangle */}
      <div 
        ref={revealRef}
        className="bg-white absolute left-0 right-0"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      />
      
      {/* Text container */}
      <div className="text-center space-y-4 relative text-black z-10">
        <div
          ref={text1Ref}
          className="text-2xl md:text-4xl"
        >
          Sleep
        </div>
        <div
          ref={text2Ref}
          className="text-4xl md:text-6xl font-bold"
        >
          Smart Naturally
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

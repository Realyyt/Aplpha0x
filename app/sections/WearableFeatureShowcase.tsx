"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface FeatureSection {
  title: string;
  description: string;
  alignment: 'left' | 'right';
  icon?: string;
}

const features: FeatureSection[] = [
  {
    title: "Stress Relief",
    description: "Real-time stress level monitoring with tailored frequency delivery for natural stress management.",
    alignment: "left",
    icon: "⚡"
  },
  {
    title: "Pain Management",
    description: "Sends soothing frequencies to reduce muscle pain and support the body's natural healing process.",
    alignment: "right",
    icon: "⚓"
  }
];

const WearableFeatureShowcase: React.FC<{ watchImageUrl: string }> = ({ watchImageUrl }) => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black relative" ref={containerRef}>
      <div className="max-w-full sm:max-w-7xl mx-auto min-h-[100dvh] px-4 py-16 sm:py-24 relative overflow-hidden">
        {/* Container for watch with relative positioning */}
        <div className="relative w-full h-full">
          {/* Watch Image - Now contained within parent boundaries */}
          <div className="absolute sm:sticky top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] aspect-square z-10">
            <Image
              src={watchImageUrl}
              alt="Smart Wearable Device"
              fill
              className="object-contain animate-spin-slow"
              priority
            />
          </div>

          {/* Content Sections - Improved responsive layout */}
          <div className="relative min-h-[100dvh] sm:min-h-0">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                ref={(el) => {
                  if (el) sectionRefs.current[index] = el;
                }}
                className={`
                  sm:absolute flex items-center opacity-0 transition-all duration-1000 ease-out px-4 sm:px-6
                  ${index === 0 ? 'mb-[60vh] sm:mb-0' : 'mt-[60vh] sm:mt-0'}
                  ${feature.alignment === 'left' 
                    ? 'sm:top-0 sm:left-0 justify-start' 
                    : 'sm:bottom-0 sm:right-0 justify-end'}
                `}
                style={{
                  width: '100%',
                  maxWidth: '100%',
                }}
              >
                <div className={`w-full sm:max-w-[400px] ${feature.alignment === 'right' ? 'sm:ml-auto' : 'sm:mr-auto'}`}>
                  <div className="mb-2 sm:mb-4">
                    <span className="text-blue-400 text-2xl sm:text-xl">{feature.icon}</span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 tracking-tight text-white">
                    {feature.title}
                  </h2>
                  
                  <p className="text-gray-400 text-base sm:text-base leading-relaxed max-w-[90%] sm:max-w-full">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WearableFeatureShowcase;
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
    <div className="bg-black relative">
      <div className="max-w-7xl mx-auto h-[110vh] px-4 relative overflow-hidden">
        {/* Watch Image - Now positioned relative to content */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] z-10">
          <Image
            src={watchImageUrl}
            alt="Smart Wearable Device"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Content Sections */}
        {features.map((feature, index) => (
          <div
            key={feature.title}
            ref={(el) => {
              if (el) sectionRefs.current[index] = el;
            }}
            className={`absolute flex items-center opacity-0 transition-all duration-1000 ease-out
              ${feature.alignment === 'left' ? 'top-0 mt-8 left-0 justify-start' : 'bottom-0 mb-8 right-0 justify-end'}`}
            style={{ width: '50%' }}
          >
            <div className={`w-full max-w-xl ${feature.alignment === 'right' ? 'ml-auto' : 'mr-auto'}`}>
              <div className="mb-4">
                <span className="text-blue-400 text-xl">{feature.icon}</span>
              </div>
              
              <h2 className="text-5xl font-light mb-2 tracking-tight text-white">
                {feature.title}
              </h2>
              
              <p className="text-gray-400 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WearableFeatureShowcase;
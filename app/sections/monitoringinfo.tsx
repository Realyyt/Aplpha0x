"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function MonitoringInfo() {
  const [elementVisible, setElementVisible] = useState({
    sleep: false,
    image: false,
    heart: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === 'sleep-section') {
            setElementVisible(prev => ({ ...prev, sleep: entry.isIntersecting }));
          } else if (entry.target.id === 'image-section') {
            setElementVisible(prev => ({ ...prev, image: entry.isIntersecting }));
          } else if (entry.target.id === 'heart-section') {
            setElementVisible(prev => ({ ...prev, heart: entry.isIntersecting }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('.observe-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="relative h-[screen] overflow-hidden bg-white">
      <div className="flex flex-col h-full">
        {/* Sleep Monitoring Section */}
        <div 
          id="sleep-section"
          className="observe-section h-[100vh] relative flex items-center"
        >
          <div className={`
            w-full max-w-[1440px] mx-auto px-8 flex items-center
            transform transition-all duration-[2000ms]
            ${elementVisible.sleep 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-96'
            }
          `}>
            <div className="w-1/2">
              <div className="bg-black h-[2px] w-[120px] mb-8"></div>
              <h2 className="text-3xl font-bold mb-6">Sleep Monitoring</h2>
              <p className="text-gray-600 max-w-[400px] text-lg leading-relaxed">
                Track your sleep patterns effortlessly. Our app analyzes your nightly rest, providing insights into sleep quality, duration, and disruptions.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div 
          id="image-section"
          className="observe-section fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10"
        >
          <div className={`
            transform transition-all duration-[2500ms] ease-out
            ${elementVisible.image 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-90'
            }
          `}>
            <Image
              src="/mi.png"
              alt="Vital Signs"
              width={500}
              height={1000}
              className="w-auto h-[90vh] object-contain"
              priority
            />
          </div>
        </div>

        {/* Heart Rate Monitoring Section */}
        <div 
          id="heart-section"
          className="observe-section h-[100vh] relative flex items-center"
        >
          <div className={`
            w-full max-w-[1440px] mx-auto px-8 flex items-center justify-end
            transform transition-all duration-[2000ms]
            ${elementVisible.heart 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-96'
            }
          `}>
            <div className="w-1/2 text-right">
              <div className="bg-black h-[2px] w-[120px] mb-8 ml-auto"></div>
              <h2 className="text-3xl font-bold mb-6">Heart Rate Monitoring</h2>
              <p className="text-gray-600 max-w-[400px] text-lg leading-relaxed ml-auto">
                Keep an eye on your heart health in real-time. Our app continuously monitors your heart rate, helping you understand your cardiovascular trends and detect any irregularities early.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
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
    <div className="relative h-auto">
      <div className="flex flex-col gap-[10vh] sm:gap-0 sm:flex-row sm:justify-center sm:items-center sm:p-8 sm:bg-white sm:mt-16">
        {/* Sleep Monitoring Section */}
        <div 
          id="sleep-section"
          className="observe-section h-screen sm:h-auto relative"
        >
          <div className={`
            w-full p-8 sm:p-0 
            sm:relative sm:left-4 sm:w-auto
            transform transition-all duration-700
            ${elementVisible.sleep 
              ? 'opacity-100 translate-z-0 rotate-0' 
              : 'opacity-0 -translate-z-96 rotate-12'
            }
          `}>
            <div className="bg-black h-[2px] w-[200px] sm:w-[545.32px] mb-2"></div>
            <h2 className="text-lg sm:text-xl font-bold mb-2">Sleep Monitoring</h2>
            <p className="text-gray-600 mb-4 max-w-xs">
              Track your sleep patterns effortlessly. Our app analyzes your nightly rest, providing insights into sleep quality, duration, and disruptions.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div 
          id="image-section"
          className="observe-section h-screen sm:h-auto relative"
        >
          <div className={`
            w-[200px] mx-auto sm:mx-0
            transform transition-all duration-700
            ${elementVisible.image 
              ? 'opacity-100 scale-100 translate-z-0' 
              : 'opacity-0 scale-90 -translate-z-96'
            }
          `}>
            <Image
              src="/p1.png"
              alt="Vital Signs"
              layout="fixed"
              width={328.34}
              height={676.99}
            />
          </div>
        </div>

        {/* Heart Rate Monitoring Section */}
        <div 
          id="heart-section"
          className="observe-section h-screen sm:h-auto relative"
        >
          <div className={`
            w-full p-8 sm:p-0
            sm:relative sm:right-4 sm:w-auto
            transform transition-all duration-700
            ${elementVisible.heart 
              ? 'opacity-100 translate-z-0 rotate-0' 
              : 'opacity-0 translate-z-96 -rotate-12'
            }
          `}>
            <div className="bg-black h-[2px] w-[200px] sm:w-[545.32px] mb-2"></div>
            <h2 className="text-lg sm:text-xl font-bold mb-2 mr-4">Heart Rate Monitoring</h2>
            <p className="text-gray-600 mb-4 max-w-xs">
              Keep an eye on your heart health in real-time. Our app continuously monitors your heart rate, helping you understand your cardiovascular trends and detect any irregularities early.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 
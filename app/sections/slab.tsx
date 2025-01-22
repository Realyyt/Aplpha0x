"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Content data
const steps = [
  {
    number: "01",
    title: "DOWNLOAD\nTHE APP",
    description: "Get the Anywhere Healing app from the App Store or Google Play to start your wellness journey.",
    image: "/pg.jpg"
  },
  {
    number: "02",
    title: "Log In Easily",
    description: "Use the auto-generated login details sent to you after purchasing to access your personalized dashboard.",
    image: "/o1.png"
  },
  {
    number: "03",
    title: "Connect via Bluetooth",
    description: "Pair your Alpha Wearable with the app effortlessly through Bluetooth for seamless integration.",
    image: "/o2.png"
  },
  {
    number: "04",
    title: "Run a Bio-Scan",
    description: "Initiate the Bio-Scan within the app to analyze your body&apos;s health metrics in just a few minutes.",
    image: "/o3.png"
  },
  {
    number: "05",
    title: "Start Therapy",
    description: "After the scan, click &quot;Start Therapy&quot; to let the Alpha Wearable emit customized frequencies to support your well-being.",
    image: "/o4.png"
  },
  {
    number: "06",
    title: "Experience Balance",
    description: "Enjoy improved balance and well-being as the Alpha Wearable works to restore your health.",
    image: "/o6.png"
  }
];

const PhotoGrid = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7, // Trigger when element is 70% visible
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stepIndex = stepRefs.current.findIndex(ref => ref === entry.target);
          if (stepIndex !== -1) {
            setActiveStep(stepIndex);
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    // Observe all step elements
    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="bg-black text-white min-h-screen w-screen overflow-hidden sticky top-0"
    >
      <div className="min-h-screen w-full flex items-center py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ margin: "-100px" }}
            className="max-w-5xl mx-auto mb-16 text-center"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-7xl font-bold mb-4"
            >
              Step-by-Step<br />Guide
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400"
            >
              Discover how individuals have used the Alpha Wearable to enhance their<br />
              health and achieve balance in their daily lives.
            </motion.p>
          </motion.div>

          {/* Steps Container */}
          <div className="space-y-[100vh]">
            {steps.map((step, index) => (
              <div
                key={step.number}
                ref={el => { if (el) stepRefs.current[index] = el; }}
                className="max-w-6xl mx-auto grid grid-cols-2 gap-8 sticky top-[20vh]"
              >
                {/* Left Column */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ 
                    opacity: activeStep === index ? 1 : 0,
                    x: activeStep === index ? 0 : -50 
                  }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col justify-center"
                >
                  <motion.div className="mb-4" style={{ fontFamily: 'Cambon' }}>
                    <span className="text-2xl opacity-50">{step.number}</span>
                  </motion.div>
                  <motion.h3 className="text-6xl font-bold mb-4 whitespace-pre-line" style={{ fontFamily: 'Helvetica Neue' }}>
                    {step.title}
                  </motion.h3>
                  <motion.p className="text-gray-400" style={{ fontFamily: 'Helvetica Neue' }}>
                    {step.description}
                  </motion.p>
                </motion.div>

                {/* Right Column - Image */}
                <motion.div
                  className="overflow-hidden rounded-lg perspective-1000"
                  style={{ 
                    perspective: "1000px",
                    transformStyle: "preserve-3d"
                  }}
                >
                  <motion.img 
                    src={step.image} 
                    alt={`Step ${step.number}`}
                    className="w-full"
                    initial={{ 
                      opacity: 0, 
                      y: 200, 
                      scale: 1.4,
                      rotateX: 30,
                      filter: "blur(8px)"
                    }}
                    animate={{ 
                      opacity: activeStep === index ? 1 : 0,
                      y: activeStep === index ? 0 : 200,
                      scale: activeStep === index ? 1 : 1.4,
                      rotateX: activeStep === index ? 0 : 30,
                      filter: activeStep === index ? "blur(0px)" : "blur(8px)"
                    }}
                    transition={{ 
                      duration: 2.5,
                      ease: [0.2, 0.65, 0.3, 0.9],
                    }}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;
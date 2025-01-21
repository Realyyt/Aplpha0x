"use client"
import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const BioScanFeatures = () => {
  const [isComplete, setIsComplete] = useState(false);
  const lastElementRef = React.useRef(null);
  const isLastElementInView = useInView(lastElementRef, { amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      }
    }
  };

  const elementVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      }
    }
  };

  useEffect(() => {
    if (isLastElementInView) {
      setIsComplete(true);
    }
  }, [isLastElementInView]);

  const features = [
    {
      title: "Advanced Bio-Scanning",
      description: "Real-time health monitoring with cutting-edge biosensors"
    },
    {
      title: "Personalized Insights",
      description: "AI-powered analysis for customized health recommendations"
    },
    {
      title: "Continuous Monitoring",
      description: "24/7 tracking of vital health metrics"
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-black text-white py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          variants={elementVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Bio-Scan Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the next generation of health monitoring
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={elementVariants}
              className="bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-xl"
              ref={index === features.length - 1 ? lastElementRef : null}
            >
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Completion indicator */}
      <div className="hidden">
        {isComplete && <div id="section-complete" />}
      </div>
    </motion.div>
  );
};

export default BioScanFeatures;
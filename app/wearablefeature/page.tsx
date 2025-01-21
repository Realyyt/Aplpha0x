"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

interface WearableFeatureShowcaseProps {
  watchImageUrl: string;
}

const WearableFeatureShowcase: React.FC<WearableFeatureShowcaseProps> = ({ watchImageUrl }) => {
  const [isComplete, setIsComplete] = useState(false);
  const lastElementRef = React.useRef(null);
  const isLastElementInView = useInView(lastElementRef, { amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3,
      }
    }
  };

  const elementVariants = {
    hidden: { 
      opacity: 0,
      x: -60,
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      }
    }
  };

  useEffect(() => {
    if (isLastElementInView) {
      setIsComplete(true);
    }
  }, [isLastElementInView]);

  const features = [
    { title: "Bio-Scan Technology", description: "Advanced scanning for optimal health monitoring" },
    { title: "Sleep Enhancement", description: "Improve your sleep quality with smart tracking" },
    { title: "24/7 Monitoring", description: "Continuous health and wellness tracking" },
  ];

  return (
    <motion.div 
      className="min-h-screen bg-black text-white relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <motion.div 
          variants={elementVariants}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <Image
            src={watchImageUrl}
            alt="Wearable Device"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </motion.div>

        <div className="md:w-1/2 md:pl-12">
          <motion.h2 
            variants={elementVariants}
            className="text-3xl md:text-5xl font-bold mb-8"
          >
            Revolutionary Features
          </motion.h2>

          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={elementVariants}
              className="mb-6"
              ref={index === features.length - 1 ? lastElementRef : null}
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
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

export default WearableFeatureShowcase;
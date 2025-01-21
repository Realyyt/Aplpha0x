"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

interface WhyAlphaWearableProps {
  imageUrl: string;
}

const WhyAlphaWearable: React.FC<WhyAlphaWearableProps> = ({ imageUrl }) => {
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
      x: -40,
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

  const reasons = [
    {
      title: "Cutting-Edge Technology",
      description: "Leading the industry with innovative health monitoring solutions"
    },
    {
      title: "Personalized Experience",
      description: "Tailored insights and recommendations for your unique needs"
    },
    {
      title: "Proven Results",
      description: "Demonstrated success in improving users' health outcomes"
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-black text-white relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        variants={elementVariants}
        className="absolute inset-0 opacity-30"
      >
        <Image
          src={imageUrl}
          alt="Background"
          fill
          className="object-cover"
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.h2 
          variants={elementVariants}
          className="text-4xl md:text-6xl font-bold mb-12 text-center"
        >
          Why Choose Alpha Wearable?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={elementVariants}
              className="backdrop-blur-lg bg-white/10 p-8 rounded-xl"
              ref={index === reasons.length - 1 ? lastElementRef : null}
            >
              <h3 className="text-2xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
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

export default WhyAlphaWearable;
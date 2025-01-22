"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Playball } from 'next/font/google';

const WhyAlphaWearable: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  const features = [
    {
      title: "Comprehensive Health<br />Insights",
      description: "The device performs a full-body Bio-Scan in just 2 minutes, identifying potential health concerns across various systems with an impressive 70-80% accuracy, helping you stay ahead of potential issues."
    },
    {
      title: "Personalized Frequency<br />Therapy",
      description: "Using the Bio-Scan results, it delivers precisely tuned therapeutic frequencies that are customized to your body's unique needs, promoting natural healing and balance."
    },
    {
      title: "Smart Sleep<br />Tracking",
      description: "It goes beyond basic sleep monitoring by detecting disruptions in your sleep cycle and automatically adjusting its frequencies to help you achieve deeper, more restorative rest, improving both sleep quality and duration."
    },
    {
      title: "Real-Time Stress<br />Relief",
      description: "The wearable continuously monitors your stress levels throughout the day, offering targeted calming frequencies when you need them most, helping you stay relaxed and composed under pressure."
    },
    {
      title: "Natural Pain<br />Management",
      description: "It provides relief from muscle discomfort by delivering soothing frequencies that penetrate deeply, supporting your body's natural healing process without the need for medication."
    },
    {
      title: "All-in-One Wellness<br />Solution",
      description: "By combining advanced health scanning with therapeutic support for sleep, stress, mood, and pain management, it serves as a comprehensive wellness tool, reducing the need for multiple separate treatments or costly doctor visits."
    }
  ];

  return (
    <div className="bg-black text-white py-24 px-4 sm:px-8 min-h-screen flex items-center">
      <div className="max-w-full sm:max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row mb-24">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ margin: "-100px" }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Why Alpha <br /> Wearable
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              The digital mirror head can be sterilized in 15 minutes using a cassette autoclave.
            </motion.p>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src={imageUrl}
              alt="Alpha Wearable"
              width={600}
              height={600}
              className="object-cover border-4 border-transparent"
            />
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.2 + (index * 0.1) // Staggered delay based on index
              }}
              viewport={{ margin: "-100px" }}
            >
              <motion.h2 
                className="text-2xl sm:text-3xl font-semibold"
                dangerouslySetInnerHTML={{ __html: feature.title }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
              />
              <motion.p 
                className="text-base text-gray-400 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyAlphaWearable; 
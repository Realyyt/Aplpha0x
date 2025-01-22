"use client"
import React from 'react';
import { motion } from 'framer-motion';

const PhotoGrid = () => {
  return (
    <div className="bg-black text-white min-h-screen w-screen overflow-hidden">
      <div className="min-h-screen w-full flex items-center py-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
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

          {/* Content Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8">
            {/* Left Column */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ margin: "-100px" }}
              className="flex flex-col justify-center"
            >
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "auto" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-4"
              >
                <span className="text-2xl opacity-50">01</span>
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-6xl font-bold mb-4"
              >
                DOWNLOAD<br />THE APP
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-400"
              >
                Get the Anywhere Healing app from the App Store or Google Play to<br />
                start your wellness journey.
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
                src="/pg.jpg" 
                alt="Person using mobile app" 
                className="w-full"
                initial={{ 
                  opacity: 0, 
                  y: 200, 
                  scale: 1.4,
                  rotateX: 30,
                  filter: "blur(8px)"
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  rotateX: 0,
                  filter: "blur(0px)"
                }}
                transition={{ 
                  duration: 2.5,
                  ease: [0.2, 0.65, 0.3, 0.9],
                  opacity: { duration: 2 },
                  filter: { duration: 1.5 }
                }}
                viewport={{ margin: "-100px" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;
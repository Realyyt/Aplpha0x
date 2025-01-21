import React, { useState } from 'react';
import Image from 'next/image'; // Import Image from next/image for optimized images
import { motion } from 'framer-motion';

const testimonials = [
  {
    type: 'image',
    src: '/hey.png', // Corrected the image path to start with a leading slash
    alt: 'Testimonial Image',
  },
  {
    type: 'text',
    content: "The sleep insights provided by the app are spot on. I've noticed a real improvement in the quality of my rest since I started using it. It's amazing how accurate the analysis is in detecting disruptions in my sleep cycle.",
    author: "John Doe",
  },
  {
    type: 'text',
    content: "This app has transformed my sleep habits. The detailed reports and suggestions have helped me understand my sleep patterns better.",
    author: "Jane Smith",
  },
  // Add more items as needed
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-black h-screen text-white py-32 px-4 flex flex-col items-center justify-center relative z-10">
      <motion.h2 
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-20%" }}
        variants={textVariants}
        className="text-[76px] font-bold text-center mb-6"
      >
        Our<br />Testimonials
      </motion.h2>
      <motion.p 
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-20%" }}
        variants={{
          ...textVariants,
          visible: {
            ...textVariants.visible,
            transition: { duration: 1.4, delay: 0.2 }
          }
        }}
        className="text-center mb-16 text-gray-400 max-w-[600px]"
      >
        Our Testimonials showcase the real-life experiences of users who have benefited from our innovative health solutions.
      </motion.p>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-20%" }}
        variants={{
          ...textVariants,
          visible: {
            ...textVariants.visible,
            transition: { duration: 1.4, delay: 0.4 }
          }
        }}
        className="relative w-full max-w-[1000px] mx-auto flex items-center justify-center"
      >
        <button 
          onClick={handlePrev} 
          className="absolute left-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-colors"
        >
          <span className="text-2xl">←</span>
        </button>
        <div className="w-full aspect-[16/6] relative overflow-hidden rounded-2xl">
          {testimonials[currentIndex].type === 'image' ? (
            <Image
              src={testimonials[currentIndex].src ?? ''}
              alt={testimonials[currentIndex].alt ?? ''}
              fill
              className="object-contain"
              sizes="(max-width: 1000px) 100vw, 1000px"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-gray-900 p-8">
              <div className="max-w-2xl">
                <p className="text-xl text-center">{testimonials[currentIndex].content}</p>
                <p className="mt-6 text-sm text-gray-400 text-center">@{testimonials[currentIndex].author}</p>
              </div>
            </div>
          )}
        </div>
        <button 
          onClick={handleNext} 
          className="absolute right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-colors"
        >
          <span className="text-2xl">→</span>
        </button>
      </motion.div>
    </div>
  );
}

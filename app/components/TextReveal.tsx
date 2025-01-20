import React from 'react';
import { motion, } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  scrollYProgress?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({ text, className }) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      {words.map((word, index) => (
        <motion.span 
          key={index} 
          variants={child} 
          className="mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextReveal; 
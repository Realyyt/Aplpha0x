import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
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

  return (
    <footer className="bg-black text-white py-4 px-4 relative z-[1]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-20%" }}
            variants={textVariants}
            className="col-span-2 sm:col-span-1"
          >
            <div className="flex items-center mb-2">
              <Image
                src="/logo.png"
                alt="Anywhere Healing"
                width={32}
                height={35.41}
                className="w-[32px] h-[35.41px]"
              />
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-[200px]">
              We are deeply committed to enhancing your overall well-being by harnessing the power of both innovative technologies and time-tested natural health solutions.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-20%" }}
            variants={textVariants}
            className="col-span-1"
          >
            <h3 className="text-sm font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              <li><a href="/about" className="text-gray-400 hover:text-white text-xs">About</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-white text-xs">Products</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-20%" }}
            variants={textVariants}
            className="col-span-1"
          >
            <h3 className="text-sm font-semibold mb-2">Resources</h3>
            <ul className="space-y-1">
              <li><a href="/contacts" className="text-gray-400 hover:text-white text-xs">Contacts</a></li>
              <li><a href="/pricing" className="text-gray-400 hover:text-white text-xs">Pricing</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-white text-xs">FAQ</a></li>
              <li><a href="/science" className="text-gray-400 hover:text-white text-xs">Science</a></li>
              <li><a href="/partnership" className="text-gray-400 hover:text-white text-xs">Partnership</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-20%" }}
            variants={textVariants}
            className="col-span-1"
          >
            <h3 className="text-sm font-semibold mb-2">Follow us</h3>
            <ul className="space-y-1">
              <li><a href="/instagram" className="text-gray-400 hover:text-white text-xs">Instagram</a></li>
              <li><a href="/youtube" className="text-gray-400 hover:text-white text-xs">Youtube</a></li>
              <li><a href="/linkedin" className="text-gray-400 hover:text-white text-xs">Linkedin</a></li>
            </ul>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
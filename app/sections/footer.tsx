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
    <footer className="bg-black text-white py-16 px-4 relative z-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-20%" }}
            variants={textVariants}
            className="col-span-1"
          >
            <Image
              src="/logo.png"
              alt="Anywhere Healing"
              width={166}
              height={40}
              className="mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              We are deeply committed to enhancing your overall well-being by
              harnessing the power of both innovative technologies and time-
              tested natural health solutions.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-20%" }}
            variants={{
              ...textVariants,
              visible: {
                ...textVariants.visible,
                transition: { duration: 1.2, delay: 0.2 }
              }
            }}
            className="col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-white">Products</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-20%" }}
            variants={{
              ...textVariants,
              visible: {
                ...textVariants.visible,
                transition: { duration: 1.2, delay: 0.4 }
              }
            }}
            className="col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/contacts" className="text-gray-400 hover:text-white">Contacts</a></li>
              <li><a href="/pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="/science" className="text-gray-400 hover:text-white">Science</a></li>
              <li><a href="/partnership" className="text-gray-400 hover:text-white">Partnership</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-20%" }}
            variants={{
              ...textVariants,
              visible: {
                ...textVariants.visible,
                transition: { duration: 1.2, delay: 0.6 }
              }
            }}
            className="col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4">Follow us</h3>
            <ul className="space-y-2">
              <li><a href="/instagram" className="text-gray-400 hover:text-white">Instagram</a></li>
              <li><a href="/youtube" className="text-gray-400 hover:text-white">Youtube</a></li>
              <li><a href="/linkedin" className="text-gray-400 hover:text-white">Linkedin</a></li>
            </ul>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
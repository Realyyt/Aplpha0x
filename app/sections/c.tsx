import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WellnessComponent() {
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
    <>
      <div className="relative h-screen w-full z-[2]">
        <Image
          src="/c.png"
          alt="Wellness Image"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="z-0 brightness-[0.85]"
        />
        <div className="absolute top-[25%] left-4 sm:left-8 z-[1] text-white max-w-2xl">
          <motion.h1 
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-20%" }}
            variants={textVariants}
            className="text-5xl sm:text-8xl font-bold mb-6"
          >
            <span className="block">Sleep better,</span>
            <span className="block italic font-serif">Feel alive again</span>
          </motion.h1>
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
            className="text-lg sm:text-xl max-w-xl mb-10 text-gray-100 leading-relaxed"
          >
            Unlock the power of advanced Bio-Scan technology and therapeutic frequencies to support your body&apos;s natural healing process and overall well-being.
          </motion.p>
          <motion.button
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
            className="bg-[#00B4D8] hover:bg-[#0096c7] text-white px-8 py-4 rounded-lg transition-colors text-lg font-medium"
          >
            Learn more
          </motion.button>
        </div>
      </div>
      
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo and Description */}
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Image 
                  src="/logo.png" 
                  alt="Anywhere Healing" 
                  width={40} 
                  height={40}
                />
                <span className="font-bold">ANYWHERE HEALING</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                We are deeply committed to enhancing your overall well-being by 
                harnessing the power of both innovative technologies and time-tested 
                natural health solutions.
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/about" className="hover:text-white">About</a></li>
                <li><a href="/products" className="hover:text-white">Products</a></li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/contacts" className="hover:text-white">Contacts</a></li>
                <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="/faq" className="hover:text-white">FAQ</a></li>
                <li><a href="/science" className="hover:text-white">Science</a></li>
                <li><a href="/partnership" className="hover:text-white">Partnership</a></li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-bold mb-4">Follow us</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/instagram" className="hover:text-white">Instagram</a></li>
                <li><a href="/youtube" className="hover:text-white">Youtube</a></li>
                <li><a href="/linkedin" className="hover:text-white">Linkedin</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
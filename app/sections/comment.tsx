"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Testimonial = {
  type: "image" | "text";
  src?: string | undefined;
  alt?: string | undefined;
  content?: string;
  author?: string;
}

const testimonials: Testimonial[] = [
  {
    type: "image",
    src: "/hey.png",
    alt: "Testimonial Image",
  },
  {
    type: "text",
    content:
      "This app has transformed my sleep habits. The detailed reports and suggestions have helped me understand my sleep patterns better.",
    author: "Jane Smith",
  },
  {
    type: "text",
    content:
      "This app has transformed my sleep habits. The detailed reports and suggestions have helped me understand my sleep patterns better.",
    author: "Jane Smith",
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

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
        ease: "easeOut",
      },
    },
  }

  const getAdjacentIndex = (offset: number) => {
    return (currentIndex + offset + testimonials.length) % testimonials.length
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <div className="bg-black min-h-screen text-white py-32 px-4 flex flex-col items-center justify-center relative z-10">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-20%" }}
        variants={textVariants}
        className="text-[76px] font-bold text-center mb-6"
      >
        Our
        <br />
        Testimonials
      </motion.h2>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-20%" }}
        variants={{
          ...textVariants,
          visible: {
            ...textVariants.visible,
            transition: { duration: 1.4, delay: 0.2 },
          },
        }}
        className="text-center mb-16 text-gray-400 max-w-[600px]"
      >
        Our Testimonials showcase the real-life experiences of users who have benefited from our innovative health
        solutions.
      </motion.p>

      <div className="relative w-full max-w-[1400px] mx-auto overflow-hidden">
        <div className="flex items-center">
          {/* Previous content preview */}
          <div className="w-1/4 pr-4 opacity-50">
            <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
              {testimonials[getAdjacentIndex(-1)].type === "image" ? (
                <Image
                  src={testimonials[getAdjacentIndex(-1)].src || "/hey.png"}
                  alt={testimonials[getAdjacentIndex(-1)].alt || "Alphawearable"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1400px) 25vw, 350px"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-gray-900 p-4">
                  <p className="text-sm text-center line-clamp-3">{testimonials[getAdjacentIndex(-1)].content}</p>
                </div>
              )}
            </div>
          </div>

          {/* Main content */}
          <div className="w-1/2 px-4">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              {testimonials[currentIndex].type === "image" ? (
                <Image
                  src={testimonials[currentIndex].src || "/hey.png"}
                  alt={testimonials[currentIndex].alt || "Alphawearable"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1400px) 50vw, 700px"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-gray-900 p-8">
                  <div className="max-w-2xl">
                    <p className="text-xl text-center">{testimonials[currentIndex].content}</p>
                    <p className="mt-6 text-sm text-gray-400 text-center">{testimonials[currentIndex].author}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Next content preview */}
          <div className="w-1/4 pl-4 opacity-50">
            <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
              {testimonials[getAdjacentIndex(1)].type === "image" ? (
                <Image
                  src={testimonials[getAdjacentIndex(1)].src || "/hey.png"}
                  alt={testimonials[getAdjacentIndex(1)].alt || "Alphawearable"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1400px) 25vw, 350px"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-gray-900 p-4">
                  <p className="text-sm text-center line-clamp-3">{testimonials[getAdjacentIndex(1)].content}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-[calc(25%_-_24px)] top-1/3 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-[calc(25%_-_24px)] top-1/3 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}


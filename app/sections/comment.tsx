import React, { useState } from 'react';
import Image from 'next/image'; // Import Image from next/image for optimized images

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

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-black h-[100vh] text-white py-16 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Our Testimonials</h2>
      <p className="text-center mb-8">
        Real experiences, real results – discover how our solutions have made a difference in the lives of our users.
      </p>
      <div className="max-w-full sm:max-w-4xl mx-auto flex items-center justify-center">
        <button onClick={handlePrev} className="text-white mx-2">←</button>
        <div className="flex flex-col items-center mx-4">
          {testimonials[currentIndex].type === 'image' ? (
            <div className="rounded-lg">
              <Image
                src={testimonials[currentIndex].src ?? ''}
                alt={testimonials[currentIndex].alt ?? ''}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ) : (
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-lg italic max-w-xl text-center">{testimonials[currentIndex].content}</p>
              <p className="mt-4 text-sm text-gray-400">@{testimonials[currentIndex].author}</p>
            </div>
          )}
        </div>
        <button onClick={handleNext} className="text-white mx-2">→</button>
      </div>
    </div>
  );
}

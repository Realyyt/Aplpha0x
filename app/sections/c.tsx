import React from 'react';
import Image from 'next/image';

export default function WellnessComponent() {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/c.png" // Replace with your image path
        alt="Wellness Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute bottom-16 left-4 sm:left-8 z-10 text-white">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Built with wellness in mind</h1>
        <p className="text-base sm:text-lg max-w-md">
          At 30 grams, the Halo Digital Mirror is no heavier than the traditional dental mirror, ensuring your hand muscles work less and your pinch force is minimized.
        </p>
      </div>
    </div>
  );
}
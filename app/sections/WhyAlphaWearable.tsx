"use client"
import React from 'react';
import Image from 'next/image';

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
    <div className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row mb-12">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Why Alpha <br /> Wearable</h1>
            <p className="text-lg">The digital mirror head can be sterilized in 15 minutes using a cassette autoclave.</p>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <Image
              src={imageUrl}
              alt="Alpha Wearable"
              width={500}
              height={500}
              className="object-cover border-4 border-transparent"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title}>
              <h2 className="text-2xl font-semibold mb-2" dangerouslySetInnerHTML={{ __html: feature.title }}></h2>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyAlphaWearable; 
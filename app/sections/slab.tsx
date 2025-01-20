import React from 'react';

const PhotoGrid = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <h2 className="text-7xl font-bold mb-4">Step-by-Step<br />Guide</h2>
          <p className="text-gray-400">
            Discover how individuals have used the Alpha Wearable to enhance their<br />
            health and achieve balance in their daily lives.
          </p>
        </div>

        {/* Content Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <span className="text-2xl opacity-50">01</span>
            </div>
            <h3 className="text-6xl font-bold mb-4">DOWNLOAD<br />THE APP</h3>
            <p className="text-gray-400">
              Get the Anywhere Healing app from the App Store or Google Play to<br />
              start your wellness journey.
            </p>
          </div>

          {/* Right Column - Image */}
          <div>
            <img 
              src="/pg.jpg" 
              alt="Person using mobile app" 
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;
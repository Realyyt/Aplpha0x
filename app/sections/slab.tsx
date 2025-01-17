import React from 'react';

const PhotoGrid = () => {
  return (
    <div className="container mx-auto px-10 py-20">
      <div className="grid grid-cols-12 gap-4 max-w-5xl mx-auto">
        {/* Left tall box */}
        <div className="col-span-4 row-span-3">
          <div className="bg-white rounded-lg shadow-md h-full"></div>
        </div>

        {/* Top middle box */}
        <div className="col-span-4">
          <div className="bg-white rounded-lg shadow-md aspect-[4/3]"></div>
        </div>

        {/* Top right box */}
        <div className="col-span-4">
          <div className="bg-white rounded-lg shadow-md aspect-[4/3]"></div>
        </div>

        {/* Middle row - full width box */}
        <div className="col-span-8">
          <div className="bg-white rounded-lg shadow-md aspect-[16/5]"></div>
        </div>

        {/* Bottom row - two boxes instead of three */}
        <div className="col-span-5">
          <div className="bg-white rounded-lg shadow-md aspect-[5/3]"></div>
        </div>

        <div className="col-span-3">
          <div className="bg-white rounded-lg shadow-md aspect-[3/2]"></div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;
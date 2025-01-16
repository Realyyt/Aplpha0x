"use client"
import React from 'react';

const GridLayout: React.FC = () => {
  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 max-w-4xl p-4 bg-white shadow-md">
        <div className="bg-white h-48 col-span-1 row-span-2 border border-gray-300"></div>
        <div className="bg-white h-48 col-span-2 border border-gray-300"></div>
        <div className="bg-white h-48 col-span-2 border border-gray-300"></div>
        <div className="bg-white h-48 col-span-1 row-span-2 border border-gray-300"></div>
        <div className="bg-white h-48 col-span-3 border border-gray-300"></div>
      </div>
    </div>
  );
};

export default GridLayout; 
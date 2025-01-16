"use client"
import React from 'react';

const AlphaWearableHighlight: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black py-[164px]">
      <div className="flex flex-col items-center gap-5" style={{ width: '879.59px', height: '460px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 className="font-helveticaneue text-[14px] font-normal text-white">
          Alpha wearable
        </h2>
        <h3 className="text-center font-helveticaneue text-[76px] font-bold leading-[76px] tracking-[-0.04em] text-white" style={{ width: '879.59px', height: '304px' }}>
          <span>The Alpha Wearable measures various health parameters through its Bio-Scan technology</span>
        </h3>
        <h4 className="text-center font-helveticaneue text-[14px] font-normal leading-[18px] text-white">
          The digital mirror head can be sterilized in 15 minutes using a cassette autoclave with a disinfectant wipe before being placed back on the charger.
        </h4>
        <button className="min-w-[188px] rounded-lg px-[30px] font-medium sm:px-4 bg-indigo_A100 hover:bg-indigo_A200 text-white">
          View Alpha Wearable
        </button>
      </div>
    </div>
  );
};

export default AlphaWearableHighlight; 
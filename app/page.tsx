"use client"
import Hero from "./sections/hero";
import AlphaWearableHighlight from "./sections/AlphaWearableHighlight"
import WearableFeatureShowcase from './sections/WearableFeatureShowcase';
import BioScanFeatures from './sections/BioScanFeatures';

// ... in your page component

export default function Home() {
  return (
    <div className="scrollable overflow-x-hidden">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <Hero/>
      <AlphaWearableHighlight/>
      <WearableFeatureShowcase 
      watchImageUrl="/watch2.png" 
    />
    <BioScanFeatures />
    </div>
  );
}

"use client"
import Hero from "./sections/hero";
import AlphaWearableHighlight from "./sections/AlphaWearableHighlight"
import WearableFeatureShowcase from './sections/WearableFeatureShowcase';
import BioScanFeatures from './sections/BioScanFeatures';
import WhyAlphaWearable from "./sections/WhyAlphaWearable";
import Alpha from "./sections/alpha";
import ImageGallery from "./sections/imagegallery";
import MonitoringInfo from "./sections/monitoringinfo";
import ColorfulSplash from "./sections/splash";
import Comment from "./sections/comment";
import WellnessComponent from "./sections/c";
import Footer from "./sections/footer";
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
    <WhyAlphaWearable imageUrl="/ride.png"/>
    {/* <GridLayout/> */}
    <Alpha />
    <ImageGallery />
    <MonitoringInfo />
    <ColorfulSplash />
    <Comment />
    <WellnessComponent />
    <Footer />
    </div>
  );
}

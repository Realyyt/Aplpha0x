"use client"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import Hero from "./sections/hero";
import AlphaWearableHighlight from "./sections/AlphaWearableHighlight"
import WearableFeatureShowcase from './sections/WearableFeatureShowcase';
import BioScanFeatures from './sections/BioScanFeatures';
import WhyAlphaWearable from "./sections/WhyAlphaWearable";
import Alpha from "./sections/alpha";
import ImageGallery from "./sections/imagegallery";
import MonitoringInfo from "./sections/monitoringinfo";
import Comment from "./sections/comment";
import WellnessComponent from "./sections/c";
import PhotoGrid from "./sections/slab";
// ... in your page component

export default function Home() {
  return (
    <ParallaxProvider>
      <div className="scrollable overflow-x-hidden bg-black">
        <style jsx global>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
        <Parallax speed={-10}>
          <Hero />
        </Parallax>
        <Parallax speed={-5}>
          <AlphaWearableHighlight />
        </Parallax>
        <Parallax speed={-8}>
          <WearableFeatureShowcase watchImageUrl="/watch2.png" />
        </Parallax>
        <Parallax speed={-10}>
          <BioScanFeatures />
        </Parallax>
        <Parallax speed={-12}>
          <WhyAlphaWearable imageUrl="/ride.png"/>
        </Parallax>
        <Parallax speed={-15}>
          <PhotoGrid/>
        </Parallax>
        <Parallax speed={-18}>
          <Alpha />
        </Parallax>
        <Parallax speed={-20}>
          <ImageGallery />
        </Parallax>
        <Parallax speed={-22}>
          <MonitoringInfo />
        </Parallax>
        <Parallax speed={-28}>
          <Comment />
        </Parallax>
        <Parallax speed={0}>
          <WellnessComponent />
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}

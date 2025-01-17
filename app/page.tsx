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
import PhotoGrid from "./sections/slab";
import { useEffect } from 'react';
// ... in your page component

export default function Home() {
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1 // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="scrollable overflow-x-hidden">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        .section {
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }
        .section.visible {
          opacity: 1;
        }
      `}</style>
      <div className="section"><Hero/></div>
      <div className="section"><AlphaWearableHighlight/></div>
      <div className="section"><WearableFeatureShowcase watchImageUrl="/watch2.png" /></div>
      <div className="section"><BioScanFeatures /></div>
      <div className="section"><WhyAlphaWearable imageUrl="/ride.png"/></div>
      <div className="section"><PhotoGrid/></div>
      <div className="section"><Alpha /></div>
      <div className="section"><ImageGallery /></div>
      <div className="section"><MonitoringInfo /></div>
      <div className="section"><ColorfulSplash /></div>
      <div className="section"><Comment /></div>
      <div className="section"><WellnessComponent /></div>
      <div className="section"><Footer /></div>
    </div>
  );
}

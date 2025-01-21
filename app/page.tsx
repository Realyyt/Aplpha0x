"use client"
import { useState, useEffect } from "react"
import Hero from "./hero/page"
import AlphaWearableHighlight from "./alphawear/page"
import WearableFeatureShowcase from './wearablefeature/page'
import BioScanFeatures from './bioscan/page'
import WhyAlphaWearable from "./whyAlpha/page"
import Alpha from "./alpha/page"
import ImageGallery from "./imagegallery/page"
import MonitoringInfo from "./monitoringinfo/page"
import ColorfulSplash from "./splash/page"
import Comment from "./comment/page"
import WellnessComponent from "./c/page"
import Footer from "./footer/page"
import PhotoGrid from "./slab/page"

export default function Home() {

  return (
    <div className="h-screen overflow-hidden bg-black">
      <Hero key="hero" />,
      <AlphaWearableHighlight key="alpha" />,
      <WearableFeatureShowcase key="features" watchImageUrl="/watch2.png" />,
      <BioScanFeatures key="bioscan" />,
      <WhyAlphaWearable key="why" imageUrl="/ride.png"/>,
      <PhotoGrid key="grid"/>,
      <Alpha key="alpha2" />,
      <ImageGallery key="gallery" />,
      <MonitoringInfo key="monitoring" />,
      <ColorfulSplash key="splash" />,
      <Comment key="comment" />,
      <WellnessComponent key="wellness" />,
      <Footer key="footer" />
    </div>
  )
}

import React from "react";
import BurgerMenu from "./assets/components/parts/BurgerMenu";
import CarouselBanner from "./assets/components/parts/CarouselBanner";
import LogoBanner from "./assets/components/parts/LogoBanner";
import BackToTheTop from "./assets/components/parts/BackToTheTop";
import AboutSection from "./assets/components/sections/AboutSection";
import HowSection from "./assets/components/sections/HowSection";
import MerchBanner from "./assets/components/parts/MerchBanner";
import WhoSection from "./assets/components/sections/WhoSection";
import AdBanner from "./assets/components/parts/AdBanner";
import ContactSection from "./assets/components/sections/ContactSection";
import Footer from "./assets/components/sections/Footer";
import './App.css'
import video_slide from "./assets/images/unified.jpg";
import album_slide from "./assets/images/transformation.jpg";


const video_link =
  "https://www.youtube.com/watch?v=QMcPSQ2o-gA&list=RDQMcPSQ2o-gA&start_radio=1";

const video_out = "The Unified Field - Official Video";

function App() {

  return (
    <>
      <CarouselBanner />
      <BurgerMenu />
      <LogoBanner />
      <BackToTheTop />
      <AboutSection />
      <AdBanner programme_link="" programme_img={album_slide} find_us=""/>
      <HowSection />
      <MerchBanner/>
      <WhoSection />
      <AdBanner programme_link={video_link} programme_img={video_slide} find_us={video_out}/>
      <ContactSection />
      <Footer />
    </>
  )
}

export default App

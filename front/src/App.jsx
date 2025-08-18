import React from "react";
import BurgerMenu from "./assets/components/parts/BurgerMenu";
import CarouselBanner from "./assets/components/parts/CarouselBanner";
import LogoBanner from "./assets/components/parts/LogoBanner";
import BackToTheTop from "./assets/components/parts/BackToTheTop";
import AboutSection from "./assets/components/sections/AboutSection";
import HowSection from "./assets/components/sections/HowSection";
import WhoSection from "./assets/components/sections/WhoSection";
import AdBanner from "./assets/components/parts/AdBanner";
import ContactSection from "./assets/components/sections/ContactSection";
import Footer from "./assets/components/sections/Footer";
import './App.css'

function App() {

  return (
    <>
      <CarouselBanner />
      <BurgerMenu />
      <LogoBanner />
      <BackToTheTop />
      <AboutSection />
      <HowSection />
      <WhoSection />
      <AdBanner/>
      <ContactSection />
      <Footer />
    </>
  )
}

export default App

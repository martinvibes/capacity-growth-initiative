"use client";

import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Marque from "./components/Marque";
import Navbar from "./components/Navbar";
import WhyVolunteer from "./components/WhyVolunteer";

export default function Home() {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marque />
      <WhyVolunteer />
      <AboutUs />
      <Footer />
    </div>
  );
}

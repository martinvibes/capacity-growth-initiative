"use client";

import { useState } from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import WhyVolunteer from "./components/WhyVolunteer";
import VolunteerForm from "./(pages)/form/page";
import ImageCarousel from "./components/ImageCarousel";
import UpcomingEvents from "./components/UpcomingEvents";
import KeySuccessIndicator from "./components/KeySuccessIndicator";
import StrategicPlans from "./components/StrategicPlans";
import WhoWeAre from "./components/WhoWeAre";

export default function Home() {
  const [openModal] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <About />
      <ImageCarousel />
      <WhyVolunteer />
      <WhoWeAre />
      <StrategicPlans />
      <KeySuccessIndicator />
      <UpcomingEvents />
      {openModal && <VolunteerForm />}
    </div>
  );
}

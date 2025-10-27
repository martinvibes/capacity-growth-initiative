"use client";

import { useState } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Marque from "./components/Marque";
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
    <div className="w-full min-h-screen overflow-x-hidden">
      <section className="w-full min-h-screen relative">
        <Hero />
        <Marque />
      </section>

      {/* About Section */}
      <section id="about" className="w-full  bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <About />
        </div>
      </section>

      {/* Image Carousel */}
      <section className="w-full bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ImageCarousel />
        </div>
      </section>

      {/* Why Volunteer */}
      <section id="volunteer" className="w-full bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <WhyVolunteer />
        </div>
      </section>

      {/* Who We Are */}
      <section id="who-we-are" className="w-full  bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <WhoWeAre />
        </div>
      </section>

      {/* Strategic Plans */}
      <section id="strategic-plans" className="w-full  bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StrategicPlans />
        </div>
      </section>

      {/* Key Success Indicators */}
      <section className="w-full bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <KeySuccessIndicator />
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="w-full  bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <UpcomingEvents />
        </div>
      </section>

      {/* Volunteer Form Modal */}
      {openModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <VolunteerForm />
        </div>
      )}
    </div>
  );
}

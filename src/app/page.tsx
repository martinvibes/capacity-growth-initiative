"use client";

import { useState } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Marque from "./components/Marque";
import WhyVolunteer from "./components/WhyVolunteer";
import VolunteerForm from "./components/Form";
import ImageCarousel from "./components/ImageCarousel";
import UpcomingEvents from "./components/UpcomingEvents";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className=" overflow-x-hidden">
      <Hero setOpenModal={setOpenModal} />
      <Marque />
      <About />
      <ImageCarousel />
      <WhyVolunteer />
      {openModal && <VolunteerForm setOpenModal={setOpenModal} />}
      <UpcomingEvents />
    </div>
  );
}

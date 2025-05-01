"use client";

import { useState } from "react";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Marque from "./components/Marque";
import Navbar from "./components/Navbar";
import WhyVolunteer from "./components/WhyVolunteer";
import VolunteerForm from "./components/Form";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <Hero setOpenModal={setOpenModal} />
      <Marque />
      <WhyVolunteer />
      {openModal && <VolunteerForm setOpenModal={setOpenModal} />}
      <AboutUs />
      <Footer />
    </div>
  );
}

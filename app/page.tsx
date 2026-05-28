"use client";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Intro from "../components/Intro/Intro";
import Description from "../components/Description/Description";
import Gallery from "../components/Gallery/Gallery";
import Downloads from "../components/Downloads/Downloads";
import Collaborators from "../components/Collaborators/Collaborators";
import Footer from "../components/Footer/Footer";
import Reviews from "@/components/Reviews/Reviews";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Intro />
        <Reviews />
        <Description />
        <Gallery />
        <Downloads />
        <Collaborators />
      </main>
      <Footer />
    </>
  );
}

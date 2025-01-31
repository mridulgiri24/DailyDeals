import React from "react";
import Hero from "../components/Hero";
import OurPolicy from "../components/OurPolicy";
import Contact from "../components/Contact";
import Featured from "../components/Featured";

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <OurPolicy />
      <Contact />
    </>
  );
}

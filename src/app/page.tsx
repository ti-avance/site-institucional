import React from "react";
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Clients from "@/components/Clients"
import Team from "@/components/Team"
import Contact from "@/components/Contact"


export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ghost-white text-marian-blue">
      <Hero />
      <Services />
      <Clients />
      <Team />
      <Contact />
    </div>
  );
}

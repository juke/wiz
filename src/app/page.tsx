"use client";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { FeaturesGrid } from "@/components/features-grid";
import { AllInOne } from "@/components/all-in-one";
import { Footer } from "@/components/footer";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Home() {
  const featuresRef = useRef<HTMLDivElement>(null);
  const allInOneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add js-loaded class to body to enable CSS transitions
    document.body.classList.add('js-loaded');

    const features = featuresRef.current;
    const allInOne = allInOneRef.current;

    if (!features || !allInOne) return;

    // Set initial states - hidden (override CSS)
    gsap.set([features, allInOne], { opacity: 0, y: 30 });

    // Create timeline for page sections fade-in
    const tl = gsap.timeline({ delay: 1.0 }); // Start sooner for users not at top

    tl.to(features, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    .to(allInOne, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6");

  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        background: 'linear-gradient(to bottom, #F0F4EF 0%, #F0F4EF 35%, rgb(238, 238, 238) 50%, rgb(238, 238, 238) 65%, #F0F4EF 100%)'
      }}
    >
      <Header />
      <Hero />

      <div ref={featuresRef} className="page-section">
        <FeaturesGrid />
      </div>
      <div ref={allInOneRef} className="page-section">
        <AllInOne />
      </div>
      <Footer />
    </div>
  );
}

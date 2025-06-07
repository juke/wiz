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
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const features = featuresRef.current;
    const allInOne = allInOneRef.current;
    const footer = footerRef.current;

    if (!features || !allInOne || !footer) return;

    // Set initial states - hidden
    gsap.set([features, allInOne, footer], { opacity: 0, y: 30 });

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
    }, "-=0.6")
    .to(footer, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6");

  }, []);

  return (
    <div className="min-h-screen overflow-hidden" style={{ backgroundColor: '#F0F4EF' }}>
      <Header />
      <Hero />

      <div ref={featuresRef}>
        <FeaturesGrid />
      </div>
      <div ref={allInOneRef}>
        <AllInOne />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

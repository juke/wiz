"use client";

import Image from "next/image";
import { CTAButton } from "@/components/ui/cta-button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const video = videoRef.current;
    const character = characterRef.current;
    const cta = ctaRef.current;
    const shadow = shadowRef.current;

    if (!title || !subtitle || !video || !character || !cta || !shadow) return;

    // Set initial states
    gsap.set(title, { y: 50, opacity: 0 });
    gsap.set(subtitle, { y: 30, opacity: 0 });
    gsap.set(video, { scale: 0.8, opacity: 0 });
    gsap.set(character, { opacity: 0 });
    gsap.set(cta, { y: 30, opacity: 0 });
    gsap.set(shadow, { opacity: 0 });

    // Create timeline for coordinated animations
    const tl = gsap.timeline({ delay: 0.4 }); // Much shorter wait after header

    tl.to(title, {
      y: 0,
      opacity: 1,
      duration: 0.5, // Faster
      ease: "power3.out"
    })
    .to(subtitle, {
      y: 0,
      opacity: 1,
      duration: 0.5, // Faster
      ease: "power2.out"
    }, "-=0.4") // More overlap
    .to(video, {
      scale: 1,
      opacity: 1,
      duration: 0.7, // Faster
      ease: "power3.out"
    }, "-=0.3") // More overlap
    .to(character, {
      opacity: 1,
      duration: 0.7, // Faster
      ease: "power3.out"
    }, "-=0.7") // More overlap
    .to(cta, {
      y: 0,
      opacity: 1,
      duration: 0.5, // Faster
      ease: "power2.out"
    }, "-=0.3") // More overlap
    .to(shadow, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.8"); // More overlap

  }, []);

  return (
    <section
      className="page-section px-4 pt-46 pb-42 relative overflow-hidden overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Main Content */}
        <div className="text-center mb-24">
          <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 mb-4">
            Meet Wiz
          </h1>
          <p ref={subtitleRef} className="text-lg md:text-xl lg:text-2xl text-neutral-600">
            Your personal guide to the blockchain
          </p>
        </div>

        {/* Hero Content with Character */}
        <div className="relative flex items-center justify-center mb-12">
          {/* Video/Demo Area */}
          <div ref={videoRef} className="relative w-full max-w-5xl mx-auto">
            <div className="bg-neutral-900 rounded-3xl aspect-video flex items-center justify-center shadow-2xl border-4 border-neutral-800 relative">
              {/* Subtle inner shadow */}
              <div className="absolute inset-0 rounded-3xl shadow-inner"></div>

              {/* Play Button */}
              <button className="bg-neutral-600 hover:bg-neutral-500 transition-colors rounded-full p-6 group relative z-10">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white ml-1"
                >
                  <path
                    d="M8 5v14l11-7z"
                    fill="currentColor"
                  />
                </svg>
              </button>

              {/* Character positioned directly on the video player */}
              <div
                ref={characterRef}
                className="absolute z-20"
                style={{
                  bottom: 'calc(90%)',
                  right: '2%', // Position from right edge of video player
                  width: '20%', // Width relative to video player
                  minWidth: '85px',
                  maxWidth: '160px'
                }}
              >
                <Image
                  src="/hero/Character.png"
                  alt="Wiz Character"
                  width={220}
                  height={330}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>



        {/* CTA Button */}
        <div className="flex justify-center">
          <div ref={ctaRef} className="relative">
            <CTAButton
              className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-3 text-lg font-bold transition-all duration-200 relative z-10"
              style={{
                borderRadius: '12px',
                height: '62px',
                minWidth: '220px',
                zIndex: 1
              }}
            >
              Sign up for Waitlist
            </CTAButton>

          </div>

            {/* Elliptical shadow positioned directly under button */}
            <div
              ref={shadowRef}
              className="absolute pointer-events-none"
              style={{
                bottom: '-120px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '150%',
                height: '180px',
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0) 45%, transparent 100%)',
                borderRadius: '100%',
                filter: 'blur(6px)',
                zIndex: -1
              }}
            />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const soonTextRef = useRef<HTMLHeadingElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const soonText = soonTextRef.current;
    const logo = logoRef.current;
    const social = socialRef.current;

    if (!footer || !soonText || !logo || !social) return;

    // Set initial states with sophisticated starting positions (no overflow)
    gsap.set(soonText, {
      opacity: 0,
      scale: 0.85,
      y: 40,
      filter: "blur(8px)"
    });

    gsap.set(logo, {
      opacity: 0,
      x: -25,
      y: 15
    });

    gsap.set(social, {
      opacity: 0
    });

    // Create scroll-triggered timeline with enhanced settings
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: "top 90%", // Start slightly earlier for smoother entry
        end: "bottom 20%",
        once: true, // Play only once
        // markers: true, // Uncomment for debugging
      }
    });

    // Enhanced animation sequence
    tl
      // SOON text dramatic entrance with blur clear
      .to(soonText, {
        opacity: 1,
        scale: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out"
      })
      // Add a subtle scale bounce after main animation
      .to(soonText, {
        scale: 1.02,
        duration: 0.3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: 1
      }, "-=0.2")
      // Logo slides in from left with bounce
      .to(logo, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.6")
      // Social icons simple fade in
      .to(social, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4")


    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === footer) {
          trigger.kill();
        }
      });
    };

  }, []);

  return (
    <footer
      ref={footerRef}
      className="page-section relative pt-0 pb-6 overflow-hidden"
    >
      {/* Large SOON Text Background - Full Width */}
      <div className="relative flex items-center justify-center pointer-events-none w-full">
        <h2
          ref={soonTextRef}
          className="font-bold text-neutral-300/80 select-none leading-none text-center"
          style={{
            fontFamily: 'var(--font-abc-whyte)',
            letterSpacing: '-0.02em',
            fontSize: 'clamp(6rem, 25vw, 24rem)',
            width: '100vw',
            maxWidth: '100vw'
          }}
        >
          SOON
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">

        {/* Footer Content */}
        <div className="relative z-5 flex items-end justify-between min-h-[55px] -mt-4 px-6">
          {/* Logo */}
          <div ref={logoRef} className="flex items-center">
            <Image
              src="/Logo_dark.svg"
              alt="Wiz"
              width={79}
              height={28}
              priority
              className="h-7 w-auto"
            />
          </div>

          {/* Social Icons */}
          <div ref={socialRef} className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200/50 rounded-full"
              asChild
            >
              <a href="#" aria-label="Twitter">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200/50 rounded-full"
              asChild
            >
              <a href="#" aria-label="Discord">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200/50 rounded-full"
              asChild
            >
              <a href="#" aria-label="Medium">
                <span className="text-base font-bold">M</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

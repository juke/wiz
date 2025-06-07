"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    const logo = logoRef.current;
    const social = socialRef.current;

    if (!header || !logo || !social) return;

    // Set initial states
    gsap.set(header, { y: -100, opacity: 0 });
    gsap.set(logo, { opacity: 0, x: -20 });
    gsap.set(social, { opacity: 0, x: 20 });

    // Create timeline for coordinated animations
    const tl = gsap.timeline({ delay: 0.1 });

    tl.to(header, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out"
    })
    .to(logo, {
      opacity: 1,
      x: 0,
      duration: 0.4,
      ease: "power2.out"
    }, "-=0.3")
    .to(social, {
      opacity: 1,
      x: 0,
      duration: 0.4,
      ease: "power2.out"
    }, "-=0.3");

  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="max-w-4xl mx-auto bg-neutral-900 text-white rounded-2xl shadow-lg">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div ref={logoRef} className="flex items-center">
              <Image
                src="/Logo.svg"
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
                className="text-white hover:text-neutral-300 hover:bg-neutral-800 rounded-full"
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
                className="text-white hover:text-neutral-300 hover:bg-neutral-800 rounded-full"
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
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-neutral-300 hover:bg-neutral-800 rounded-full"
                asChild
              >
                <a href="#" aria-label="Medium">
                  <span className="text-base font-bold">M</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

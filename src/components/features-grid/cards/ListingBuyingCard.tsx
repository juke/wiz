"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function ListingBuyingCard() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const loadingSpinnerRef = useRef<HTMLDivElement>(null);
  const buttonTextRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const button = buttonRef.current;
    const loadingSpinner = loadingSpinnerRef.current;
    const buttonText = buttonTextRef.current;
    const card = cardRef.current;

    if (!cursor || !button || !loadingSpinner || !buttonText || !card) return;

    // Set initial states immediately when component mounts
    gsap.set(cursor, {
      x: -100, // Start outside card boundaries (left)
      y: 0,
      opacity: 0 // Start invisible
    });
    gsap.set(loadingSpinner, { opacity: 0, rotation: 0 });
    gsap.set(button, {
      scale: 1,
      background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)'
    });
    gsap.set(buttonText, { opacity: 1 });

    // Create the animation timeline
    const createAnimationSequence = () => {
      const tl = gsap.timeline({ repeat: -1 });

      // 1. Cursor Fade-In - appear before movement
      tl.to(cursor, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.inOut"
      })

      // 2. Cursor Entry - smooth movement from outside to button position
      .to(cursor, {
        x: 0, // Move to final position (relative to its container)
        duration: 1.2,
        ease: "power2.inOut"
      })

      // 3. Brief pause at button
      .to({}, { duration: 0.3 })

      // 4. Click simulation - button press effect
      .to(button, {
        scale: 0.95,
        duration: 0.1,
        ease: "power2.out"
      })
      .to(button, {
        scale: 1,
        duration: 0.15,
        ease: "power2.out"
      })

      // 5. Start loading state (1.5 seconds total)
      .to(buttonText, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.inOut"
      }, "-=0.1")
      .to(loadingSpinner, {
        opacity: 1,
        duration: 0.2,
        ease: "power2.inOut"
      }, "-=0.1")
      .to(loadingSpinner, {
        rotation: 360 * 3, // Multiple rotations during loading
        duration: 1.5,
        ease: "none"
      })

      // 6. Success state transformation
      .to(loadingSpinner, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.inOut"
      })
      .to(button, {
        background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', // Green gradient
        duration: 0.3,
        ease: "power2.inOut"
      }, "-=0.1")
      // Change text content while text is still invisible (opacity 0) to prevent flash
      .call(() => {
        if (buttonText) buttonText.textContent = "Owned";
      }, [], "-=0.3") // Execute during the background color change
      .to(buttonText, {
        opacity: 1,
        duration: 0.2,
        ease: "power2.inOut"
      })

      // 7. Pause in success state
      .to({}, { duration: 1.5 })

      // 8. Cursor exit - move outside card boundaries (right side)
      .to(cursor, {
        x: 200, // Move outside card boundaries (right)
        duration: 1.0,
        ease: "power2.inOut"
      })

      // 9. Reset for next loop - smoother text transition
      .to(buttonText, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut"
      })
      .to(button, {
        background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)',
        duration: 0.5,
        ease: "power2.inOut"
      }, "-=0.2")
      // Change text back to "Buy Now" while text is invisible to prevent flash
      .call(() => {
        if (buttonText) buttonText.textContent = "Buy Now";
      }, [], "-=0.3")
      .to(buttonText, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.inOut"
      })

      // 10. Final delay before restart
      .to({}, { duration: 1.0 });

      return tl;
    };

    // Function to start animations
    const startAnimations = () => {
      const animation = createAnimationSequence();
      return animation;
    };

    // Check if we're on mobile (768px and below)
    const isMobile = window.innerWidth <= 768;

    let animation: gsap.core.Timeline;

    if (isMobile) {
      // On mobile: use ScrollTrigger to start animations when card comes into view
      ScrollTrigger.create({
        trigger: card,
        start: "top 80%",
        once: true,
        onEnter: () => {
          animation = startAnimations();
        }
      });
    } else {
      // On desktop: start animations immediately
      animation = startAnimations();
    }

    // Cleanup
    return () => {
      if (animation) {
        animation.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === card) {
          trigger.kill();
        }
      });
    };
  }, []);
  return (
    <div
      ref={cardRef}
      className="rounded-3xl h-96 md:h-80 lg:h-96 md:col-span-5 relative overflow-hidden p-8 md:p-6 lg:p-8"
      style={{
        background: 'linear-gradient(to bottom, rgba(167, 217, 255, 0.16) 0%, rgba(167, 217, 255, 0.7) 70%, rgba(167, 217, 255, 1) 100%)'
      }}
    >
      {/* Top Light Glow Effect */}
      <div
        className="absolute inset-x-0 top-0 h-20 pointer-events-none rounded-t-3xl"
        style={{
          background: `linear-gradient(180deg,
            rgba(255, 255, 255, 0.6) 0%,
            rgba(255, 255, 255, 0.3) 40%,
            rgba(255, 255, 255, 0.1) 70%,
            transparent 100%
          )`,
          mixBlendMode: 'overlay'
        }}
      />
      {/* Text Content */}
      <div className="absolute top-7 left-7 text-left z-10">
        <h3 className="text-4xl md:text-3xl lg:text-4xl font-bold text-neutral-800 mb-1">
          Listing &
        </h3>
        <h3 className="text-4xl md:text-3xl lg:text-4xl font-bold text-neutral-800">
          Buying
        </h3>
      </div>

      {/* OpenSea Logo - behind NFT card */}
      <div className="absolute z-0" style={{ top: '11rem', right: '6.8rem' }}>
        <Image
          src="/features-grid/Opensea.png"
          alt="OpenSea Logo"
          width={72}
          height={72}
          className="w-32 md:w-24 lg:w-32 h-32 md:h-24 lg:h-32 object-contain"
          style={{
            filter: 'drop-shadow(0 25px 15px rgba(0,0,0,0.19))'
          }}
        />
      </div>

      {/* NFT Card on the right */}
      <div
        className="absolute z-10 p-2 md:p-1.5 lg:p-2 rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm"
        style={{
          top: '3rem',
          right: '-1.5rem',
          width: '140px',
          border: '1px solid rgba(255, 255, 255, 0.5)'
        }}
      >
        <div className="rounded-xl overflow-hidden shadow-inner">
          <Image
            src="/features-grid/OpenseaChar.png"
            alt="OpenSea Character"
            width={138}
            height={138}
            className="w-full h-auto"
          />
        </div>
        <div className="relative mt-2">
          <button
            ref={buttonRef}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg text-sm transition-none relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)',
            }}
          >
            <span ref={buttonTextRef}>Buy Now</span>

            {/* Loading Spinner */}
            <div
              ref={loadingSpinnerRef}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
            </div>
          </button>

          {/* Animated Cursor */}
          <div
            ref={cursorRef}
            className="absolute z-10 pointer-events-none"
            style={{ bottom: '-10px', right: '15px' }}
          >
            <Image
              src="/features-grid/Cursor.png"
              alt="Cursor"
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function LaunchCard() {
  const star1Ref = useRef<HTMLDivElement>(null);
  const star2Ref = useRef<HTMLDivElement>(null);
  const star3Ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stars = [star1Ref.current, star2Ref.current, star3Ref.current];
    const card = cardRef.current;

    if (!card) return;

    // Set initial state - stars are hidden
    stars.forEach(star => {
      if (star) {
        gsap.set(star, { opacity: 0, scale: 0.8 });
      }
    });

    // Function to create looping sparkle animation for a single star
    const createSparkleLoop = (star: HTMLElement | null, initialDelay: number) => {
      if (!star) return;

      const sparkleLoop = () => {
        // Random wait time before next sparkle (3-8 seconds)
        const waitTime = gsap.utils.random(2, 5);

        // Sparkle animation sequence
        const tl = gsap.timeline({ repeat: -1 });

        // Wait period (hidden)
        tl.to(star, {
          duration: waitTime,
          ease: "none"
        })
        // Quick flash in
        .to(star, {
          opacity: 1,
          scale: 1.2,
          duration: 0.15,
          ease: "power2.out"
        })
        // Flash peak
        .to(star, {
          scale: 1,
          duration: 0.1,
          ease: "power2.inOut"
        })
        // Quick flash out
        .to(star, {
          opacity: 0,
          scale: 0.8,
          duration: 0.2,
          ease: "power2.in"
        });

        return tl;
      };

      // Start loop after initial delay
      gsap.delayedCall(initialDelay, sparkleLoop);
    };

    // Function to start animations
    const startAnimations = () => {
      // Initialize sparkle loops with different delays for each star
      createSparkleLoop(stars[0], gsap.utils.random(1, 2));
      createSparkleLoop(stars[1], gsap.utils.random(2, 4));
      createSparkleLoop(stars[2], gsap.utils.random(3, 7));
    };

    // Start animations immediately on both desktop and mobile
    startAnimations();

    // Cleanup - no ScrollTrigger cleanup needed since we're not using it
    return () => {
      // No cleanup needed for simple looping animations
    };

  }, []);
  return (
    <div
      ref={cardRef}
      className="rounded-2xl py-5 text-center relative overflow-hidden h-96 md:h-80 lg:h-96 md:col-span-4"
      style={{
        background: 'linear-gradient(to bottom, rgba(250, 250, 250, 0.24) 0%, rgba(243, 228, 186, 1) 70%, rgba(255, 217, 135, 1) 100%)'
      }}
    >
      {/* Launch Heading */}
      <h3 className="text-4xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-9 md:mb-6 lg:mb-9">Launch.</h3>

      {/* Avatar with Decorative Stars */}
      <div className="relative mx-auto mb-8 md:mb-6 lg:mb-8 w-40 md:w-32 lg:w-40 h-40 md:h-32 lg:h-40">
        {/* Main Avatar with Light Effect and Enhanced Drop Shadow */}
        <div
          className="w-full h-full rounded-full overflow-hidden relative"
          style={{
            // Long soft drop shadow underneath - extended downwards
            boxShadow: "0 90px 80px 0 rgba(0,0,0,0.15), 0 30px 30px 0 rgba(0,0,0,0.15), 0 15px 20px 0 rgba(0,0,0,0.08)"
          }}
        >
          <Image
            src="/features-grid/Avatar.png"
            alt="Wiz Avatar"
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />

          {/* Top light effect overlay */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: `linear-gradient(180deg,
                rgba(255, 255, 255, 0.9) 0%,
                rgba(255, 255, 255, 0.6) 15%,
                rgba(255, 255, 255, 0.3) 25%,
                transparent 35%
              )`,
              mixBlendMode: 'overlay'
            }}
          />
        </div>

        {/* Decorative Stars - varied sizes, rotations, and positioning */}
        <div
          ref={star1Ref}
          className="text-2xl md:text-xl lg:text-3xl font-bold pointer-events-none select-none"
          style={{
            color: '#AD7100',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            position: 'absolute',
            top: '0.725rem',
            right: '0.425rem',
            transform: 'rotate(15deg)',
            zIndex: 20,
            transformOrigin: 'center center',
            opacity: 0
          }}
        >
          ✦
        </div>
        <div
          ref={star2Ref}
          className="text-xl md:text-lg lg:text-2xl font-bold pointer-events-none select-none"
          style={{
            color: '#AD7100',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            position: 'absolute',
            bottom: '0.7rem',
            right: '0.55rem',
            transform: 'rotate(-25deg)',
            zIndex: 20,
            transformOrigin: 'center center',
            opacity: 0
          }}
        >
          ✦
        </div>
        <div
          ref={star3Ref}
          className="text-2xl md:text-xl lg:text-3xl font-bold pointer-events-none select-none"
          style={{
            color: '#AD7100',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            position: 'absolute',
            bottom: '2.275rem',
            left: '-0.425rem',
            transform: 'rotate(35deg)',
            zIndex: 20,
            transformOrigin: 'center center',
            opacity: 0
          }}
        >
          ✦
        </div>
      </div>
    </div>
  );
}

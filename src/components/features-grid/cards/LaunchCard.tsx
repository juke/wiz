import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function LaunchCard() {
  const star1Ref = useRef<HTMLDivElement>(null);
  const star2Ref = useRef<HTMLDivElement>(null);
  const star3Ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stars = [star1Ref.current, star2Ref.current, star3Ref.current];
    const card = cardRef.current;
    const shine = shineRef.current;

    if (!card || !shine) return;

    // Set initial state - stars are hidden
    stars.forEach(star => {
      if (star) {
        gsap.set(star, { opacity: 0, scale: 0.8 });
      }
    });

    // Function to create rare sparkle effect - like finding a shiny item
    const createRareSparkleLoop = () => {
      const validStars = stars.filter(star => star !== null) as HTMLElement[];
      if (validStars.length === 0) return;

      let lastStarIndex = -1; // Track the last star that sparkled

      const scheduleNextSparkle = () => {
        // Much more frequent sparkles (0.5-1.5 seconds)
        const waitTime = gsap.utils.random(0.5, 1.5);

        gsap.delayedCall(waitTime, () => {
          // Select a different star than the last one
          let randomStarIndex;
          if (validStars.length === 1) {
            // If only one star, use it
            randomStarIndex = 0;
          } else {
            // Ensure we don't pick the same star as last time
            do {
              randomStarIndex = Math.floor(Math.random() * validStars.length);
            } while (randomStarIndex === lastStarIndex);
          }

          const randomStar = validStars[randomStarIndex];
          lastStarIndex = randomStarIndex;

          // Create the sparkle animation for the selected star
          const sparkleTimeline = gsap.timeline({
            onComplete: () => {
              // Schedule the next sparkle after this one completes
              scheduleNextSparkle();
            }
          });

          sparkleTimeline
            // Quick flash in with slightly more dramatic scale and rotation for rarity
            .to(randomStar, {
              opacity: 1,
              scale: 0.9,
              rotation: "+=65",
              duration: 0.2,
              ease: "power2.out"
            })
            // Hold the sparkle a bit longer for that "special" feeling
            .to(randomStar, {
              scale: 0.8,
              duration: 0.10,

              ease: "power2.inOut"
            })
            // Quick flash out (no rotation change)
            .to(randomStar, {
              opacity: 0,
              scale: 0.5,
              duration: 0.25,
              rotation: "+=25",
              ease: "power2.in"
            });
        });
      };

      // Start the first sparkle with an initial delay
      scheduleNextSparkle();
    };

    // Function to create diagonal shine animation
    const createShineAnimation = () => {
      // Set initial position - shine starts off-screen to the top-left
      gsap.set(shine, {
        x: "-100%",
        y: "-100%",
        opacity: 0
      });

      // Create repeating shine animation
      const shineTimeline = gsap.timeline({ repeat: -1, repeatDelay: 5 });

      shineTimeline
        // Fade in and start moving
        .to(shine, {
          opacity: 0.8,
          duration: 0.5,
          ease: "power2.out"
        })
        // Sweep diagonally across the avatar
        .to(shine, {
          x: "100%",
          y: "100%",
          duration: 2.0,
          ease: "power2.inOut"
        }, "-=0.2")
        // Fade out as it exits
        .to(shine, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.in"
        }, "-=0.6")
        // Reset position for next iteration
        .set(shine, {
          x: "-100%",
          y: "-100%"
        });
    };

    // Function to start animations
    const startAnimations = () => {
      // Initialize rare sparkle loop
      createRareSparkleLoop();
      // Initialize shine animation
      createShineAnimation();
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
        background: 'linear-gradient(to bottom, rgba(245, 210, 134, 0.16) 0%, rgba(255, 217, 135, 0.7) 70%, rgba(255, 217, 135, 1) 100%)'
      }}
    >
      {/* Top Light Glow Effect */}
      <div
        className="absolute inset-x-0 top-0 h-20 pointer-events-none rounded-t-2xl"
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

          {/* Diagonal Shine Effect */}
          <div
            ref={shineRef}
            className="absolute pointer-events-none rounded-full"
            style={{
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: `linear-gradient(135deg,
                transparent 30%,
                rgba(255, 255, 255, 0.6) 45%,
                rgba(255, 255, 255, 0.9) 50%,
                rgba(255, 255, 255, 0.6) 55%,
                transparent 70%
              )`,
              mixBlendMode: 'overlay',
              transform: 'translate(-100%, -100%)',
              opacity: 0
            }}
          />
        </div>

        {/* Decorative Stars - varied sizes, rotations, and positioning */}
        <div
          ref={star1Ref}
          className="text-2xl md:text-xl lg:text-3xl font-bold pointer-events-none select-none"
          style={{
            color: '#AD7100',
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
            position: 'absolute',
            bottom: '0.7rem',
            right: '0.45rem',
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
            position: 'absolute',
            bottom: '2.275rem',
            left: '-0.435rem',
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

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function NFTMintingCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const preMintRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const postMintRef = useRef<HTMLDivElement>(null);
  const shineLayer1Ref = useRef<HTMLDivElement>(null);
  const shineLayer2Ref = useRef<HTMLDivElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Function to create animation timeline
    const createAnimationTimeline = () => {
      const tl = gsap.timeline({ repeat: -1 });

      // Initial state - show pre-mint, hide post-mint, arrow, and spinner
      gsap.set(postMintRef.current, {
        opacity: 0
      });
      gsap.set([shineLayer1Ref.current, shineLayer2Ref.current], {
        opacity: 0
      });
      gsap.set(arrowRef.current, {
        opacity: 0
      });
      gsap.set(spinnerRef.current, {
        opacity: 0
      });

      // Animation sequence
      tl
        // Phase 1: Show loading spinner
        .to(spinnerRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        })

        // Phase 2: Spinner spins for a moment
        .to({}, { duration: 1.2 })

        // Phase 3: Hide spinner, show arrow
        .to(spinnerRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in"
        })
        .to(arrowRef.current, {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out"
        }, "-=0.1")

        // Phase 4: Pre-mint shrinks slightly as transformation begins
        .to(preMintRef.current, {
          scale: 0.98,
          duration: 0.4,
          ease: "power2.inOut"
        }, "-=0.2")

        // Phase 5: Post-mint NFT fades in subtly
        .to(postMintRef.current, {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out"
        })

        // Phase 6: Holographic shine effects appear
        .to([shineLayer1Ref.current, shineLayer2Ref.current], {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.1
        }, "-=0.2")

        // Phase 7: Shine animation - subtle movement
        .to(shineLayer1Ref.current, {
          x: 8,
          y: -4,
          duration: 1,
          ease: "sine.inOut",
          yoyo: true,
          repeat: 1
        })
        .to(shineLayer2Ref.current, {
          x: -6,
          y: 6,
          duration: 1.1,
          ease: "sine.inOut",
          yoyo: true,
          repeat: 1
        }, "-=2")

        // Phase 8: Hold the transformed state
        .to({}, { duration: 1.5 })

        // Phase 9: Reset for next loop
        .to(postMintRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.in"
        })
        .to([shineLayer1Ref.current, shineLayer2Ref.current], {
          opacity: 0,
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.in"
        }, "-=0.2")
        .to(preMintRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        }, "-=0.1")
        .to(arrowRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in"
        }, "-=0.2")

        // Phase 10: Pause before next loop
        .to({}, { duration: 1 });

      return tl;
    };

    // Function to start animations
    const startAnimations = () => {
      const animation = createAnimationTimeline();
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

    // Cleanup function
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
      className="rounded-2xl py-4 md:py-3 lg:py-4 px-2 h-96 md:h-80 lg:h-96 md:col-span-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, rgba(250, 250, 250, 0.24) 0%, rgb(221.61, 209.72, 242.84) 70%, rgb(208.26, 171.16, 254.22) 100%)',
      }}
    >
      {/* NFT Transformation Visual */}
      <div className="flex justify-center mb-8 md:mb-6 lg:mb-8 mt-4 md:mt-3 lg:mt-4">
        {/* Before NFT */}
        <div
          ref={preMintRef}
          className="w-28 md:w-24 lg:w-28 h-28 md:h-24 lg:h-28 rounded-2xl overflow-hidden"
          style={{
            boxShadow: "0 90px 80px 0 rgba(0,0,0,0.15), 0 30px 30px 0 rgba(0,0,0,0.15), 0 15px 20px 0 rgba(0,0,0,0.08)"
          }}
        >
          <Image
            src="/features-grid/SmolMint.png"
            alt="Pre-Mint NFT"
            width={112}
            height={112}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Spinner/Arrow Container */}
        <div className="mx-2 md:mx-1 lg:mx-2 mt-6 md:mt-4 lg:mt-6 flex items-center justify-center relative w-8 h-8">
          {/* Loading Spinner */}
          <div
            ref={spinnerRef}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-6 h-6 border-2 border-neutral-300 border-t-neutral-700 rounded-full animate-spin"></div>
          </div>

          {/* Arrow */}
          <div
            ref={arrowRef}
            className="absolute inset-0 flex items-center justify-center text-black text-3xl md:text-2xl lg:text-3xl font-bold"
          >
            →
          </div>
        </div>

        {/* After NFT */}
        <div
          ref={postMintRef}
          className="w-38 md:w-32 lg:w-38 h-38 md:h-32 lg:h-38 rounded-2xl overflow-hidden relative"
          style={{
            boxShadow: "0 90px 80px 0 rgba(0,0,0,0.15), 0 30px 30px 0 rgba(0,0,0,0.15), 0 15px 20px 0 rgba(0,0,0,0.08)"
          }}
        >
          <Image
            src="/features-grid/SmolMint.png"
            alt="Post-Mint NFT"
            width={112}
            height={112}
            className="w-full h-full object-cover"
          />
          {/* Holographic Background Pattern */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(45deg,
                  rgba(147, 51, 234, 0.3) 0%,
                  rgba(219, 39, 119, 0.3) 25%,
                  rgba(147, 51, 234, 0.3) 50%,
                  rgba(219, 39, 119, 0.3) 75%,
                  rgba(147, 51, 234, 0.3) 100%
                ),
                repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 8px,
                  rgba(255, 255, 255, 0.1) 8px,
                  rgba(255, 255, 255, 0.1) 16px
                )
              `,
              mixBlendMode: 'overlay'
            }}
          />
          {/* Shine Effect Layer 1 - Holographic shine */}
          <div
            className="absolute inset-0 overflow-hidden rounded-2xl"
            style={{
              mixBlendMode: 'color-dodge'
            }}
          >
            <div
              ref={shineLayer1Ref}
              className="absolute"
              style={{
                top: '-20%',
                left: '-20%',
                width: '140%',
                height: '140%'
              }}
            >
              <Image
                src="/features-grid/Shine.png"
                alt="Shine Effect"
                width={157}
                height={157}
                className="w-full h-full object-cover"
                style={{
                  filter: 'opacity(0.4) brightness(1.8) contrast(1.5) saturate(2) hue-rotate(280deg)',
                }}
              />
            </div>
          </div>
          {/* Shine Effect Layer 2 - Additional holographic shimmer */}
          <div
            className="absolute inset-0 overflow-hidden rounded-2xl"
            style={{
              mixBlendMode: 'screen'
            }}
          >
            <div
              ref={shineLayer2Ref}
              className="absolute"
              style={{
                top: '-20%',
                left: '-20%',
                width: '140%',
                height: '140%'
              }}
            >
              <Image
                src="/features-grid/Shine 2.png"
                alt="Shine Effect 2"
                width={157}
                height={157}
                className="w-full h-full object-cover"
                style={{
                  filter: 'opacity(0.3) brightness(2.2) saturate(2.5) hue-rotate(320deg)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Text Content - Bottom Left */}
      <div className="absolute bottom-7 md:bottom-5 lg:bottom-7 left-7 md:left-5 lg:left-7 text-left">
        <h3 className="text-3xl md:text-2xl lg:text-3xl font-bold text-neutral-900">Minting</h3>
        <h3 className="text-7xl md:text-5xl lg:text-7xl font-extrabold text-neutral-900">NFTs</h3>
      </div>
    </div>
  );
}

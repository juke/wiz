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
  const enhancementEffectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Set initial states immediately when component mounts - show pre-mint, hide post-mint, arrow, and spinner
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
    gsap.set(enhancementEffectsRef.current, {
      opacity: 0
    });

    // Function to create animation timeline
    const createAnimationTimeline = () => {
      const tl = gsap.timeline({ repeat: -1 });

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

        // Phase 5: Post-mint NFT appears
        .to(postMintRef.current, {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out"
        })

        // Phase 5.5: Enhancement effects fade in smoothly after minting
        .to(enhancementEffectsRef.current, {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.2")

        // Phase 6: Holographic shine effects appear sooner after diagonal shine
        .to([shineLayer1Ref.current, shineLayer2Ref.current], {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.1
        }, "-=0.6")

        // Phase 7: Quick enhancement shine effect
        .to([shineLayer1Ref.current, shineLayer2Ref.current], {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out"
        })

        // Phase 8: Hold the transformed state
        .to({}, { duration: 1.5 })

        // Phase 9: Reset for next loop - post-mint fades out
        .to(postMintRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.in"
        })
        .to([shineLayer1Ref.current, shineLayer2Ref.current], {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in"
        }, "-=0.3")
        .to(enhancementEffectsRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in"
        }, "-=0.3")
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
        background: 'linear-gradient(to bottom, rgba(208, 171, 254, 0.16) 0%, rgba(208, 171, 254, 0.7) 70%, rgba(208, 171, 254, 1) 100%)',
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
      {/* NFT Transformation Visual */}
      <div className="flex justify-center mb-8 md:mb-6 lg:mb-8 mt-4 md:mt-3 lg:mt-4">
        {/* Before NFT */}
        <div
          ref={preMintRef}
          className="w-28 md:w-24 lg:w-28 h-28 md:h-24 lg:h-28 rounded-2xl overflow-hidden relative"
          style={{
            // Consistent shadow with post-mint but slightly reduced
            boxShadow: `
              0 120px 90px 0 rgba(0,0,0,0.18),
              0 80px 70px 0 rgba(0,0,0,0.12),
              0 25px 25px 0 rgba(0,0,0,0.12),
              0 12px 18px 0 rgba(0,0,0,0.06),
              0 4px 8px 0 rgba(0,0,0,0.04)
            `,
            // Simple border
            border: '1px solid rgba(0, 0, 0, 0.1)',
            // Minimal background
            background: 'rgba(255, 255, 255, 0.02)'
          }}
        >
          <Image
            src="/features-grid/SmolMint.png"
            alt="Pre-Mint NFT"
            width={112}
            height={112}
            className="w-full h-full object-cover"
          />

          {/* Subtle top light effect */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: `linear-gradient(180deg,
                rgba(255, 255, 255, 0.15) 0%,
                rgba(255, 255, 255, 0.08) 15%,
                transparent 30%
              )`,
              mixBlendMode: 'overlay'
            }}
          />
        </div>

        {/* Spinner/Arrow Container */}
        <div className="mx-2 md:mx-1 lg:mx-2 mt-6 md:mt-4 lg:mt-6 flex items-center justify-center relative w-8 h-8">
          {/* Loading Spinner */}
          <div
            ref={spinnerRef}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-6 h-6 border-2 border-neutral-800/25 border-t-neutral-900 rounded-full animate-spin"></div>
          </div>

          {/* Arrow */}
          <div
            ref={arrowRef}
            className="absolute inset-0 flex items-center justify-center text-black text-3xl md:text-2xl lg:text-3xl font-bold"
          >
            →
          </div>
        </div>

        {/* Container for post-mint NFT */}
        <div className="relative w-38 md:w-32 lg:w-38 h-38 md:h-32 lg:h-38">
          {/* Post-Mint NFT */}
          <div
            ref={postMintRef}
            className="w-full h-full rounded-2xl overflow-hidden relative"
            style={{
              // Shadow moved from placeholder
              boxShadow: `
                0 120px 90px 0 rgba(0,0,0,0.18),
                0 80px 70px 0 rgba(0,0,0,0.12),
                0 25px 25px 0 rgba(0,0,0,0.12),
                0 12px 18px 0 rgba(0,0,0,0.06),
                0 4px 8px 0 rgba(0,0,0,0.04)
              `,
              // Bland initial state - minimal styling like pre-mint
              border: '1px solid rgba(0, 0, 0, 0.1)',
              background: 'rgba(255, 255, 255, 0.02)',
              transform: 'perspective(1000px) rotateX(2deg) rotateY(-1deg)'
            }}
          >
          <Image
            src="/features-grid/SmolMint.png"
            alt="Post-Mint NFT"
            width={112}
            height={112}
            className="w-full h-full object-cover"
          />

          {/* Enhancement Effects Container - animated in after minting */}
          <div
            ref={enhancementEffectsRef}
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              opacity: 0,
              // Enhanced beveled border effect
              boxShadow: `
                inset 0 2px 4px 0 rgba(255,255,255,0.3),
                inset 0 -2px 4px 0 rgba(0,0,0,0.1)
              `,
              border: '2px solid rgba(255, 255, 255, 0.4)',
              borderTop: '2px solid rgba(255, 255, 255, 0.7)',
              borderLeft: '2px solid rgba(255, 255, 255, 0.6)',
              borderRight: '2px solid rgba(0, 0, 0, 0.1)',
              borderBottom: '2px solid rgba(0, 0, 0, 0.15)',
              background: `
                linear-gradient(135deg,
                  rgba(255, 255, 255, 0.2) 0%,
                  rgba(255, 255, 255, 0.1) 25%,
                  transparent 50%,
                  rgba(0, 0, 0, 0.05) 75%,
                  rgba(0, 0, 0, 0.1) 100%
                )
              `,
              transform: 'perspective(1000px) rotateX(2deg) rotateY(-1deg)'
            }}
          >
            {/* Top light effect overlay for premium "lit from above" appearance */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: `linear-gradient(180deg,
                  rgba(255, 255, 255, 0.7) 0%,
                  rgba(255, 255, 255, 0.4) 15%,
                  rgba(255, 255, 255, 0.2) 25%,
                  transparent 35%
                )`,
                mixBlendMode: 'overlay'
              }}
            />

            {/* Inner highlight for embossed effect */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: `
                  radial-gradient(ellipse at top left,
                    rgba(255, 255, 255, 0.4) 0%,
                    rgba(255, 255, 255, 0.1) 30%,
                    transparent 60%
                  ),
                  radial-gradient(ellipse at bottom right,
                    rgba(0, 0, 0, 0.1) 0%,
                    rgba(0, 0, 0, 0.05) 30%,
                    transparent 60%
                  )
                `,
                mixBlendMode: 'overlay'
              }}
            />

            {/* Holographic Background Pattern - Rare Pokemon Card Style */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  conic-gradient(from 0deg at 50% 50%,
                    rgba(255, 0, 150, 0.15) 0deg,
                    rgba(0, 255, 255, 0.15) 60deg,
                    rgba(255, 255, 0, 0.15) 120deg,
                    rgba(255, 0, 255, 0.15) 180deg,
                    rgba(0, 255, 0, 0.15) 240deg,
                    rgba(255, 100, 0, 0.15) 300deg,
                    rgba(255, 0, 150, 0.15) 360deg
                  ),
                  radial-gradient(ellipse at 30% 70%,
                    rgba(255, 255, 255, 0.1) 0%,
                    transparent 50%
                  ),
                  radial-gradient(ellipse at 70% 30%,
                    rgba(255, 255, 255, 0.08) 0%,
                    transparent 50%
                  )
                `,
                mixBlendMode: 'overlay',
                opacity: 0.6
              }}
            />
          </div>


          {/* Shine Effect Layer 1 - Enhancement glow */}
          <div
            className="absolute inset-0 overflow-hidden rounded-2xl"
            style={{
              mixBlendMode: 'screen'
            }}
          >
            <div
              ref={shineLayer1Ref}
              className="absolute"
              style={{
                top: '-10%',
                left: '-10%',
                width: '120%',
                height: '120%'
              }}
            >
              <Image
                src="/features-grid/Shine.png"
                alt="Shine Effect"
                width={157}
                height={157}
                className="w-full h-full object-cover"
                style={{
                  filter: 'opacity(0.6) brightness(1.2) contrast(1.1) saturate(1.5) blur(0.5px)',
                }}
              />
            </div>
          </div>
          {/* Shine Effect Layer 2 - Magical enhancement */}
          <div
            className="absolute inset-0 overflow-hidden rounded-2xl"
            style={{
              mixBlendMode: 'overlay'
            }}
          >
            <div
              ref={shineLayer2Ref}
              className="absolute"
              style={{
                top: '-10%',
                left: '-10%',
                width: '120%',
                height: '120%'
              }}
            >
              <Image
                src="/features-grid/Shine 2.png"
                alt="Shine Effect 2"
                width={157}
                height={157}
                className="w-full h-full object-cover"
                style={{
                  filter: 'opacity(0.4) brightness(1.4) saturate(1.8) blur(0.3px) hue-rotate(30deg)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
        </div>

      {/* Text Content - Bottom Left */}
      <div className="absolute bottom-7  lg:bottom-7 left-7  lg:left-7 text-left">
        <h3 className="text-3xl md:text-2xl lg:text-3xl font-bold text-neutral-900">Minting</h3>
        <h3 className="text-7xl md:text-5xl lg:text-7xl font-extrabold text-neutral-900">NFTs</h3>
      </div>
    </div>
  );
}

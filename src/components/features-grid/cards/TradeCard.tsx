import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function TradeCard() {
  const coin1Ref = useRef<HTMLDivElement>(null);
  const coin2Ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const coin1 = coin1Ref.current;
    const coin2 = coin2Ref.current;

    if (!card) return;

    // Function to start animations
    const startAnimations = () => {
      // Natural idle animations for coins
      if (coin1Ref.current && coin2Ref.current) {
        // Coin 1 (Ethereum) - Complex organic movement
        // Primary floating motion with irregular timing
        gsap.to(coin1Ref.current, {
          y: -12,
          duration: 3.2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        });

        // Secondary horizontal drift for coin 1
        gsap.to(coin1Ref.current, {
          x: 4,
          duration: 4.7,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 0.3,
        });

        // Rotation with varying speed for coin 1
        gsap.to(coin1Ref.current, {
          rotation: 8,
          duration: 5.1,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
          delay: 0.7,
        });

        // Breathing scale effect for coin 1
        gsap.to(coin1Ref.current, {
          scale: 1.03,
          duration: 3.8,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
          delay: 1.1,
        });

        // Coin 2 (Tether) - Different organic pattern
        // Primary floating with different amplitude
        gsap.to(coin2Ref.current, {
          y: -8,
          duration: 2.8,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          delay: 1.2, // Offset from coin 1
        });

        // Horizontal drift in opposite direction
        gsap.to(coin2Ref.current, {
          x: -3,
          duration: 4.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 0.9,
        });

        // Counter-rotation for natural feel
        gsap.to(coin2Ref.current, {
          rotation: -5,
          duration: 4.6,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
          delay: 0.4,
        });

        // Subtle scale variation for coin 2
        gsap.to(coin2Ref.current, {
          scale: 1.025,
          duration: 3.3,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
          delay: 1.8,
        });

        // Add subtle skew for more organic feel on coin 1
        gsap.to(coin1Ref.current, {
          skewX: 1,
          skewY: 0.5,
          duration: 6.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 2.1,
        });

        // Add subtle skew for coin 2 in opposite direction
        gsap.to(coin2Ref.current, {
          skewX: -0.8,
          skewY: -0.3,
          duration: 5.7,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 1.5,
        });
      }
    };

    // Start animations immediately on both desktop and mobile
    startAnimations();

    // Cleanup
    return () => {
      if (coin1) {
        gsap.killTweensOf(coin1);
      }
      if (coin2) {
        gsap.killTweensOf(coin2);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="rounded-2xl py-8 md:py-6 lg:py-8 px-6 md:px-4 lg:px-6 h-96 md:h-80 lg:h-96 md:col-span-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, rgba(167, 255, 187, 0.16) 0%, rgba(167, 255, 187, 0.7) 70%, rgba(167, 255, 187, 1) 100%)'
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
      {/* Text Content - Upper Left */}
      <div className="absolute top-7 left-7 text-left ">
        <h3 className="text-4xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-2">
          Trade
        </h3>
        <p className="text-2xl md:text-xl lg:text-2xl font-bold text-neutral-900 leading-4">
          Any Token
        </p>
      </div>

      {/* Coin Images - Lower Right */}
      <div className="absolute bottom-4 md:bottom-2 lg:bottom-4 right-2">
        <div className="relative w-64 md:w-52 lg:w-72 h-52 md:h-40 lg:h-60">
          {/* Coin 2 - Background coin (Tether) - smaller, behind coin1 */}
          <div ref={coin2Ref} className="absolute bottom-2 right-2 w-32 md:w-24 lg:w-36 h-32 md:h-24 lg:h-36">
            <Image
              src="/features-grid/Coin2.png"
              alt="Tether"
              width={144}
              height={144}
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>

          {/* Coin 1 - Foreground coin (Ethereum) - larger, in front */}
          <div ref={coin1Ref} className="absolute -top-2 -left-4 w-56 md:w-44 lg:w-64 h-56 md:h-44 lg:h-64 z-10">
            <Image
              src="/features-grid/Coin1.png"
              alt="Ethereum"
              width={320}
              height={320}
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

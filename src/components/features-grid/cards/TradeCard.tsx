import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function TradeCard() {
  const coin1Ref = useRef<HTMLDivElement>(null);
  const coin2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Natural idle animations for coins
    if (coin1Ref.current && coin2Ref.current) {
      // Coin 1 (Ethereum) - Gentle floating and subtle rotation
      gsap.to(coin1Ref.current, {
        y: -8,
        rotation: 3,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Coin 2 (Tether) - Different timing for natural feel
      gsap.to(coin2Ref.current, {
        y: -6,
        rotation: -2,
        duration: 2.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.8, // Offset timing for more natural movement
      });

      // Add subtle scale breathing effect to coin 1
      gsap.to(coin1Ref.current, {
        scale: 1.02,
        duration: 4,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.2,
      });

      // Add subtle scale breathing effect to coin 2
      gsap.to(coin2Ref.current, {
        scale: 1.015,
        duration: 3.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2,
      });
    }
  }, []);

  return (
    <div
      className="rounded-2xl py-8 md:py-6 lg:py-8 px-6 md:px-4 lg:px-6 h-96 md:h-80 lg:h-96 md:col-span-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, rgba(250, 250, 250, 0.24) 0%, rgb(200.08, 248.28, 211.36) 70%, rgb(167.67, 255, 187.08, 1) 100%'
      }}
    >
      {/* Text Content - Upper Left */}
      <div className="absolute top-5 left-7 md:left-5 lg:left-7 text-left ">
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

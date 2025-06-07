"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function GetPricesCard() {
  const chartRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = chartRef.current;
    const character = characterRef.current;

    if (!chart || !character) return;

    // Get all candlestick elements after component mounts
    const candlestickElements = chart.querySelectorAll('rect[fill="#E13C3C"], rect[fill="black"]');
    const candlestickLines = chart.querySelectorAll('path[stroke="#E13C3C"], path[stroke="black"]');

    // Convert NodeList to Array for easier manipulation
    const candlesticks = Array.from(candlestickElements) as SVGRectElement[];
    const lines = Array.from(candlestickLines) as SVGPathElement[];

    // Function to create the complete animation sequence
    const createAnimationSequence = () => {
      const tl = gsap.timeline({ repeat: -1 });

      // Set initial states - chart elements hidden, character in normal position
      gsap.set(candlesticks, { scaleY: 0, transformOrigin: "bottom" });
      gsap.set(lines, { scaleY: 0, transformOrigin: "bottom" });
      gsap.set(chart, { opacity: 1 });

      // Sort candlesticks and lines by their x position for left-to-right animation
      const sortedCandlesticks = candlesticks.sort((a, b) => {
        const aX = parseFloat(a.getAttribute('x') || '0');
        const bX = parseFloat(b.getAttribute('x') || '0');
        return aX - bX;
      });

      const sortedLines = lines.sort((a, b) => {
        const aPath = a.getAttribute('d') || '';
        const bPath = b.getAttribute('d') || '';
        // Extract x coordinate from path (format: "M{x} {y}V{y}")
        const aX = parseFloat(aPath.match(/M([\d.]+)/)?.[1] || '0');
        const bX = parseFloat(bPath.match(/M([\d.]+)/)?.[1] || '0');
        return aX - bX;
      });

      // 1. Sequential Left-to-Right Chart Growth Animation
      // Animate each candlestick individually with realistic timing (except the last one)
      sortedCandlesticks.forEach((candlestick, index) => {
        if (index === sortedCandlesticks.length - 1) {
          // Last candle - "to the moon" animation (longer and slower)
          tl.to(candlestick, {
            scaleY: 1,
            duration: 0.8, // Much longer duration for dramatic effect
            ease: "power2.out"
          }, index * 0.18);
        } else {
          // Regular candlesticks
          tl.to(candlestick, {
            scaleY: 1,
            duration: 0.2,
            ease: "power2.out"
          }, index * 0.18);
        }
      });

      // Animate corresponding lines with slight offset for realism
      sortedLines.forEach((line, index) => {
        if (index === sortedLines.length - 1) {
          // Last line - longer duration to match last candle
          tl.to(line, {
            scaleY: 1,
            duration: 0.75,
            ease: "power2.out"
          }, (index * 0.18) + 0.06);
        } else {
          // Regular lines
          tl.to(line, {
            scaleY: 1,
            duration: 0.18,
            ease: "power2.out"
          }, (index * 0.18) + 0.06);
        }
      });

      // Calculate when the last candle starts animating
      const lastCandleStartTime = (sortedCandlesticks.length - 1) * 0.18;
      const characterStartTime = lastCandleStartTime + 0.1; // Slight delay after last candle starts

      // Character double bounce animation - starts when last candle begins its "to the moon" animation
      tl.to(character, {
        y: -22,
        duration: 0.25,
        ease: "power2.out"
      }, characterStartTime)
      .to(character, {
        y: 0,
        duration: 0.35,
        ease: "bounce.out"
      }, characterStartTime + 0.25)
      .to(character, {
        y: -16,
        duration: 0.2,
        ease: "power2.out"
      }, characterStartTime + 0.6)
      .to(character, {
        y: 0,
        duration: 0.3,
        ease: "bounce.out"
      }, characterStartTime + 0.8);

      // Calculate total animation time including the longer last candle
      const totalGrowthTime = lastCandleStartTime + 0.8 + 0.1; // Last candle start + duration + buffer

      // 2. Pause after "to the moon" completes - 2 second delay
      tl.to({}, { duration: 2.0 }, totalGrowthTime)

      // 3. Final pause before fade out
      .to({}, { duration: 1.0 })

      // 5. Chart Fade Out - smooth fade
      .to(chart, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut"
      })

      // 6. Reset for loop - quick reset off-screen
      .set(chart, { opacity: 1 })
      .set(candlesticks, { scaleY: 0 })
      .set(lines, { scaleY: 0 })
      .to({}, { duration: 0.5 }); // Brief pause before restart

      return tl;
    };

    // Start the animation sequence
    const animation = createAnimationSequence();

    // Cleanup function
    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div
      className="rounded-2xl h-96 md:h-80 lg:h-96 md:col-span-5 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, rgba(250, 250, 250, 0.24) 0%, rgb(254.75, 174.11, 173.87) 70%, rgb(254.75, 174.11, 173.87) 100%)',
      }}
    >
      {/* Text Content - Upper Left */}
      <div className="absolute top-7 lg:top-7 left-7 md:left-5 lg:left-7 text-left z-10">
        <h3 className="text-4xl lg:text-5xl sm:text-3xl  font-bold text-neutral-900 mb-1">
          <span className="text-neutral-500 font-extrabold">/</span>
          <span className="text-neutral-500 font-normal"> </span>Get
        </h3>
        <h3 className="text-5xl lg:text-5xl sm:text-4xl font-extrabold text-neutral-900">
          Prices
        </h3>
      </div>

      {/* Character and Chart Container - Layered positioning */}
      <div className="absolute bottom-0 right-0">
        {/* Character - Bottom right, moved slightly more right */}
        <div
          ref={characterRef}
          className="absolute bottom-0 right-38 md:right-32 lg:right-38 w-48 md:w-36 lg:w-48 h-48 md:h-36 lg:h-48"
        >
          <Image
            src="/features-grid/Smol.png"
            alt="Wiz Character"
            width={192}
            height={192}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Candlestick Chart - Inline SVG for Animation Control */}
        <div
          ref={chartRef}
          className="absolute bottom-15 md:bottom-12 lg:bottom-15 right-0 w-44 md:w-36 lg:w-44 h-85 md:h-68 lg:h-85 overflow-hidden"
        >
          <svg width="171" height="301" viewBox="0 0 171 301" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <g clipPath="url(#clip0_86_239)">
              <rect x="144.584" y="200.979" width="7.06768" height="11.5651" fill="#E13C3C" stroke="#E13C3C"/>
              <path d="M148.118 177.144V226.507" stroke="#E13C3C"/>
              <rect x="132.931" y="188.414" width="7.06768" height="11.5651" fill="#E13C3C" stroke="#E13C3C"/>
              <path d="M136.465 166.374V213.942" stroke="#E13C3C"/>
              <rect x="121.277" y="164.181" width="7.06768" height="24.1303" fill="#E13C3C" stroke="#E13C3C"/>
              <path d="M124.811 90.9825V196.889" stroke="#E13C3C"/>
              <rect x="109.624" y="146.231" width="7.06768" height="16.9502" fill="#E13C3C" stroke="#E13C3C"/>
              <path d="M113.158 61.3648L113.158 276.767" stroke="#E13C3C"/>
              <rect x="86.3174" y="192.901" width="7.06768" height="26.8228" fill="#E13C3C" stroke="#E13C3C"/>
              <path d="M89.8512 120.6L89.8512 239.969" stroke="#E13C3C"/>
              <rect x="63.0107" y="228.802" width="7.06768" height="7.07759" fill="#E13C3C" stroke="#E13C3C"/>
              <path d="M66.5446 202.274V253.432" stroke="#E13C3C"/>
              <rect x="39.7041" y="241.367" width="7.06768" height="5.28257" fill="#E13C3C" stroke="#E13C3C"/>
              <path d="M43.2379 183.426L43.2379 249.842" stroke="#E13C3C"/>
              <rect x="28.0508" y="207.261" width="7.06768" height="33.1054" fill="#E13C3C" stroke="#E13C3C"/>
              <path d="M31.5846 186.119L31.5846 248.944" stroke="#E13C3C"/>
              <rect x="156.5" y="-4.5" width="5" height="217" fill="black" stroke="black"/>
              <path d="M159.771 172.656V218.429" stroke="black"/>
              <rect x="97.9707" y="146.231" width="7.06768" height="73.4933" fill="black" stroke="black"/>
              <path d="M101.505 120.6V220.224" stroke="black"/>
              <rect x="74.6641" y="192.901" width="7.06768" height="42.978" fill="black" stroke="black"/>
              <path d="M78.1979 180.734V239.969" stroke="black"/>
              <rect x="51.3574" y="228.802" width="7.06768" height="17.8477" fill="black" stroke="black"/>
              <path d="M54.8912 195.094V254.329" stroke="black"/>
              <rect x="16.3975" y="207.261" width="7.06768" height="17.8477" fill="black" stroke="black"/>
              <path d="M19.9313 190.606L19.9313 256.124" stroke="black"/>
              <rect x="2.95142" y="226.109" width="7.06768" height="42.978" fill="black" stroke="black"/>
              <path d="M6.48523 223.814L6.48523 271.382" stroke="black"/>
            </g>
            <defs>
              <clipPath id="clip0_86_239">
                <rect width="207" height="324" fill="white" transform="translate(0 -23)"/>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

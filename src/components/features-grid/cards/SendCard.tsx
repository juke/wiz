import { IconCurrencyEthereum } from "@tabler/icons-react";
import { Typewriter } from "@/components/ui/typewriter";

export function SendCard() {
  return (
    <div
      className="rounded-2xl p-7 px-0 text-center relative overflow-hidden h-96 md:h-80 lg:h-96 md:col-span-4 flex flex-col justify-between"
      style={{
        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.7) 70%, rgba(255, 255, 255, 1) 100%)',
      }}
    >
      {/* Top Light Glow Effect */}
      <div
        className="absolute inset-x-0 top-0 h-20 pointer-events-none rounded-t-2xl"
        style={{
          background: `linear-gradient(180deg,
            rgba(0, 0, 0, 0.04) 0%,
            rgba(255, 255, 255, 0.3) 70%,
            rgba(255, 255, 255, 0) 100%,
            transparent 100%
          )`,
          mixBlendMode: 'overlay'
        }}
      />

      {/* Send Text - Top Section */}
      <div className="text-center flex-shrink-0">
        <h3 className="text-4xl md:text-3xl lg:text-4xl font-bold text-neutral-900">Send...</h3>
      </div>

      {/* Amount Display - Middle Section (Flexible Center) */}
      <div className="text-center flex-1 flex items-center justify-center">
        <div className="text-8xl md:text-7xl lg:text-8xl font-bold leading-none text-neutral-900">
          <Typewriter
            texts={["0.15", "0.25", "1.00", "0.05", "2.50"]}
            delay={0}
          />
        </div>
      </div>

      {/* Ethereum Selector - Bottom Section */}
      <div className="flex justify-center flex-shrink-0">
        <div
          className="bg-neutral-900 text-white px-6 md:px-4 lg:px-6 py-3 md:py-2 lg:py-3 rounded-2xl flex items-center gap-3 md:gap-2 lg:gap-3 min-w-48 md:min-w-40 lg:min-w-48"
          style={{
            boxShadow: "0 8px 16px rgba(0,0,0,0.15)"
          }}
        >
          <div className="w-6 md:w-5 lg:w-6 h-6 md:h-5 lg:h-6 bg-white rounded-full flex items-center justify-center">
            <IconCurrencyEthereum className="w-4 md:w-3 lg:w-4 h-4 md:h-3 lg:h-4 text-neutral-900" />
          </div>
          <span className="text-lg md:text-base lg:text-lg font-semibold">Ethereum</span>
          <svg className="w-4 md:w-3 lg:w-4 h-4 md:h-3 lg:h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

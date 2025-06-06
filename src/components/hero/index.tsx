import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      className="px-4 pt-46 pb-42 relative overflow-hidden overflow-x-hidden"
      style={{
        backgroundColor: '#F0F4EF'
      }}
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Main Content */}
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 mb-4">
            Meet Wiz
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-neutral-600">
            Your personal guide to the blockchain
          </p>
        </div>

        {/* Hero Content with Character */}
        <div className="relative flex items-center justify-center mb-12">
          {/* Video/Demo Area */}
          <div className="relative w-full max-w-5xl mx-auto">
            <div className="bg-neutral-900 rounded-3xl aspect-video flex items-center justify-center shadow-2xl border-4 border-neutral-800 relative">
              {/* Subtle inner shadow */}
              <div className="absolute inset-0 rounded-3xl shadow-inner"></div>

              {/* Play Button */}
              <button className="bg-neutral-600 hover:bg-neutral-500 transition-colors rounded-full p-6 group relative z-10">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white ml-1"
                >
                  <path
                    d="M8 5v14l11-7z"
                    fill="currentColor"
                  />
                </svg>
              </button>

              {/* Mobile Character */}
              <div
                className="absolute z-20 block md:hidden"
                style={{
                  top: '-43%',
                  right: '2%',
                  width: '25%',
                  minWidth: '80px',
                  maxWidth: '150px'
                }}
              >
                <Image
                  src="/hero/Character.png"
                  alt="Wiz Character"
                  width={220}
                  height={330}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Desktop Character */}
              <div
                className="absolute z-20 hidden md:block"
                style={{
                  top: '-29%',
                  right: '3%',
                  width: '20%',
                  minWidth: '80px',
                  maxWidth: '180px'
                }}
              >
                <Image
                  src="/hero/Character.png"
                  alt="Wiz Character"
                  width={220}
                  height={330}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>



        {/* CTA Button */}
        <div className="flex justify-center">
          <div className="relative">
            <Button
              size="lg"
              className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-3 text-lg font-bold transition-all duration-200 relative z-10"
              style={{
                borderRadius: '12px',
                height: '62px',
                minWidth: '220px'
              }}
            >
              Sign up for Waitlist
            </Button>

            {/* Elliptical shadow positioned directly under button */}
            <div
              className="absolute pointer-events-none"
              style={{
                bottom: '-120px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '150vw',
                maxWidth: '1400px',
                height: '180px',
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0) 45%, transparent 100%)',
                borderRadius: '100%',
                filter: 'blur(6px)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

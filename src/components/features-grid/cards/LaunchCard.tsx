import Image from "next/image";

export function LaunchCard() {
  return (
    <div
      className="rounded-2xl py-7 text-center relative overflow-hidden h-96 md:col-span-4"
      style={{
        background: 'linear-gradient(to bottom, rgba(250, 250, 250, 0.24) 0%, rgba(243, 228, 186, 1) 70%, rgba(255, 217, 135, 1) 100%)'
      }}
    >
      {/* Launch Heading */}
      <h3 className="text-4xl font-bold text-neutral-900 mb-9">Launch.</h3>

      {/* Avatar with Decorative Stars */}
      <div className="relative mx-auto mb-8 w-40 h-40">
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
          className="text-2xl lg:text-3xl font-bold pointer-events-none select-none"
          style={{
            color: '#B45309',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            position: 'absolute',
            top: '0.725rem',
            right: '0.425rem',
            transform: 'rotate(15deg)',
            zIndex: 20
          }}
        >
          ✦
        </div>
        <div
          className="text-xl lg:text-2xl font-bold pointer-events-none select-none"
          style={{
            color: '#B45309',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            position: 'absolute',
            bottom: '0.7rem',
            right: '0.55rem',
            transform: 'rotate(-25deg)',
            zIndex: 20
          }}
        >
          ✦
        </div>
        <div
          className="text-2xl lg:text-3xl font-bold pointer-events-none select-none"
          style={{
            color: '#B45309',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            position: 'absolute',
            bottom: '2.275rem',
            left: '-0.425rem',
            transform: 'rotate(35deg)',
            zIndex: 20
          }}
        >
          ✦
        </div>
      </div>
    </div>
  );
}

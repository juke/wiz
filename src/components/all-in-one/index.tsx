import Image from "next/image";

export function AllInOne() {
  return (
    <section
      className="relative"
      style={{
        background: 'linear-gradient(to bottom, #F0F4EF 0%, #E5E5E5 50%, #D0D0D0 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 pt-0 pb-24">
        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-8">
            Let Wiz Help You
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-neutral-700 mb-4">
              Wiz is a personal assistant. He will help manage your accounts, perform trades,
            </p>
            <p className="text-lg md:text-xl text-neutral-700 mb-4">
              and suggest new activities for you to try. Use <span className="font-bold text-neutral-900">$WIZ</span> to create a customized agent
            </p>
            <p className="text-lg md:text-xl text-neutral-700">
              that can form long-term memories to deliver an experience unique to you.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-12">
          {/* Launch Card */}
          <div
            className="rounded-2xl py-8 text-center relative overflow-visible h-80 lg:h-96 md:col-span-3"
            style={{
              background: 'linear-gradient(to bottom, rgba(211, 211, 211, 0.22) 0%, rgba(243, 228, 186, 1) 50%, rgba(255, 217, 135, 1) 100%)'
            }}
          >
            {/* Launch Heading */}
            <h3 className="text-2xl font-bold text-neutral-900 mb-8">Launch.</h3>

            {/* Avatar with Decorative Stars */}
            <div className="relative mx-auto mb-8 w-32 h-32 lg:w-40 lg:h-40">
              {/* Main Avatar with Light Effect and Enhanced Drop Shadow */}
              <div
                className="w-full h-full rounded-full overflow-hidden relative"
                style={{
                  // Long soft drop shadow underneath - extended downwards
boxShadow: "0 90px 80px 0 rgba(0,0,0,0.15), 0 30px 30px 0 rgba(0,0,0,0.15), 0 15px 20px 0 rgba(0,0,0,0.08)",
                  // Subtle light effect border - lighter at top, darker at bottom
                  border: '2px solid transparent',
                  background: `
                    linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 25%, rgba(255, 215, 0, 0.2) 75%, rgba(180, 83, 9, 0.3) 100%) border-box,
                    linear-gradient(135deg, rgb(255, 249, 230) 0%, #F59E0B 100%) padding-box
                  `,
                  backgroundClip: 'border-box, padding-box'
                }}
              >
                <Image
                  src="/all-in-one/Avatar.png"
                  alt="Wiz Avatar"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
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

          {/* Trade Card - Middle card wider */}
          <div className="bg-green-100 rounded-2xl py-8 text-center h-80 lg:h-96 md:col-span-5">
            <div className="text-6xl mb-4">💰</div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Trade</h3>
            <p className="text-lg text-neutral-700">Any Token</p>
          </div>

          {/* Get Prices Card */}
          <div className="bg-pink-100 rounded-2xl py-8 text-center h-80 lg:h-96 md:col-span-4">
            <div className="text-6xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Get</h3>
            <h3 className="text-2xl font-bold text-neutral-900">Prices</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
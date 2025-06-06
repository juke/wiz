import Image from "next/image";

export function AllInOne() {
  return (
    <section
      className="relative"
      style={{
        background: 'linear-gradient(to bottom, #F0F4EF 0%, #E5E5E5 50%, #D0D0D0 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 pt-0 pb-24">
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
        <div className="grid grid-cols-1 md:grid-cols-15 gap-6 lg:gap-12">
          {/* Launch Card */}
          <div
            className="rounded-2xl py-8 text-center relative overflow-visible h-80 lg:h-96 md:col-span-4"
            style={{
              background: 'linear-gradient(to bottom, rgba(250, 250, 250, 0.24) 0%, rgba(243, 228, 186, 1) 50%, rgba(255, 217, 135, 1) 100%)'
            }}
          >
            {/* Launch Heading */}
            <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-8">Launch.</h3>

            {/* Avatar with Decorative Stars */}
            <div className="relative mx-auto mb-8 w-32 h-32 lg:w-40 lg:h-40">
              {/* Main Avatar with Light Effect and Enhanced Drop Shadow */}
              <div
                className="w-full h-full rounded-full overflow-hidden relative"
                style={{
                  // Long soft drop shadow underneath - extended downwards
                  boxShadow: "0 90px 80px 0 rgba(0,0,0,0.15), 0 30px 30px 0 rgba(0,0,0,0.15), 0 15px 20px 0 rgba(0,0,0,0.08)"
                }}
              >
                <Image
                  src="/all-in-one/Avatar.png"
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

          {/* Trade Card - Middle card wider */}
          <div
            className="rounded-2xl py-8 px-6 h-80 lg:h-96 md:col-span-6 relative overflow-hidden"
            style={{
              background: 'linear-gradient(to bottom, rgba(250, 250, 250, 0.24) 0%, rgb(200.08, 248.28, 211.36) 50%, rgb(167.67, 255, 187.08, 1) 100%'
            }}
          >
            {/* Text Content - Upper Left */}
            <div className="absolute top-8 left-6 text-left ">
              <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-2">
                Trade
              </h3>
              <p className="text-lg lg:text-2xl font-bold text-neutral-900 leading-4">
                Any Token
              </p>
            </div>

            {/* Coin Images - Lower Right */}
            <div className="absolute bottom-4 right-2">
              <div className="relative w-64 h-52 lg:w-72 lg:h-60">
                {/* Coin 2 - Background coin (Tether) - smaller, behind coin1 */}
                <div className="absolute bottom-2 right-2 w-32 h-32 lg:w-36 lg:h-36">
                  <Image
                    src="/all-in-one/Coin2.png"
                    alt="Tether"
                    width={144}
                    height={144}
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>

                {/* Coin 1 - Foreground coin (Ethereum) - larger, in front */}
                <div className="absolute -top-2 -left-4 w-56 h-56 lg:w-64 lg:h-64 z-10">
                  <Image
                    src="/all-in-one/Coin1.png"
                    alt="Ethereum"
                    width={320}
                    height={320}
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Get Prices Card */}
          <div className="bg-pink-100 rounded-2xl py-8 text-center h-80 lg:h-96 md:col-span-5">
            <div className="text-6xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Get</h3>
            <h3 className="text-2xl font-bold text-neutral-900">Prices</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
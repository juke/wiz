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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Launch Card */}
          <div
            className="rounded-2xl p-8 text-center relative overflow-visible"
            style={{
              background: 'linear-gradient(to bottom, rgba(211, 211, 211, 0.22) 0%, rgba(243, 228, 186, 1) 50%, rgba(255, 217, 135, 1) 100%)'
            }}
          >
            {/* Launch Heading */}
            <h3 className="text-2xl font-bold text-neutral-900 mb-8">Launch.</h3>

            {/* Avatar with Decorative Stars */}
            <div className="relative mx-auto mb-8 w-32 h-32 md:w-40 md:h-40">
              {/* Main Avatar */}
              <div
                className="w-full h-full rounded-full overflow-hidden relative z-10"
                style={{
                  background: 'linear-gradient(135deg,rgb(255, 249, 230) 0%, #F59E0B 100%)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1)'
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
                className="text-2xl md:text-3xl font-bold pointer-events-none select-none"
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
                className="text-xl md:text-2xl font-bold pointer-events-none select-none"
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
                className="text-2xl md:text-3xl font-bold pointer-events-none select-none"
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

          {/* Trade Card */}
          <div className="bg-green-100 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">💰</div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Trade</h3>
            <p className="text-lg text-neutral-700">Any Token</p>
          </div>

          {/* Get Prices Card */}
          <div className="bg-pink-100 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Get</h3>
            <h3 className="text-2xl font-bold text-neutral-900">Prices</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
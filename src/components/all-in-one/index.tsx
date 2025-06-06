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
          <div
            className="rounded-2xl p-4 sm:p-6 h-80 lg:h-96 md:col-span-5 relative overflow-hidden"
            style={{
              background: 'linear-gradient(to bottom, rgba(254, 252, 248, 1) 0%, rgba(255, 228, 230, 1) 100%)',
            }}
          >
            {/* Text Content - Upper Left */}
            <div className="absolute top-6 left-6 text-left z-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-2">
                <span className="text-neutral-500 font-normal">/ </span>Get
              </h3>
              <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 leading-tight">
                Prices
              </h3>
            </div>

            {/* Character and Chart Container - Layered positioning */}
            <div className="absolute bottom-0 right-0 overflow-visible">
              {/* Character - Bottom right, moved slightly more right */}
              <div className="absolute bottom-0 right-38 w-48 h-48">
                <Image
                  src="/all-in-one/Smol.png"
                  alt="Wiz Character"
                  width={192}
                  height={192}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Candlestick Chart - Inline SVG */}
              <div className="absolute bottom-15 right-0 w-44 h-85 overflow-visible">
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
        </div>
      </div>
    </section>
  );
}
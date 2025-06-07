import Image from "next/image";

export function TradeCard() {
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
          <div className="absolute bottom-2 right-2 w-32 md:w-24 lg:w-36 h-32 md:h-24 lg:h-36">
            <Image
              src="/features-grid/Coin2.png"
              alt="Tether"
              width={144}
              height={144}
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>

          {/* Coin 1 - Foreground coin (Ethereum) - larger, in front */}
          <div className="absolute -top-2 -left-4 w-56 md:w-44 lg:w-64 h-56 md:h-44 lg:h-64 z-10">
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

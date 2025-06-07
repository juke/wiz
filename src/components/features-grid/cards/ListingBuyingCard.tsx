import Image from "next/image";

export function ListingBuyingCard() {
  return (
    <div
      className="rounded-3xl h-96 md:h-80 lg:h-96 md:col-span-5 relative overflow-hidden p-8 md:p-6 lg:p-8"
      style={{
        background: 'linear-gradient(to bottom, rgba(250, 250, 250, 0.24) 0%, rgb(167.4, 217.12, 254.9) 70%, rgb(167.4, 217.12, 254.9) 100%)'
      }}
    >
      {/* Text Content */}
      <div className="absolute top-8 md:top-6 lg:top-8 left-8 md:left-6 lg:left-8 text-left z-10">
        <h3 className="text-4xl md:text-3xl lg:text-4xl font-bold text-neutral-800 mb-1">
          Listing &
        </h3>
        <h3 className="text-4xl md:text-3xl lg:text-4xl font-bold text-neutral-800">
          Buying
        </h3>
      </div>

      {/* OpenSea Logo - behind NFT card */}
      <div className="absolute z-0" style={{ top: '11rem', right: '6.8rem' }}>
        <Image
          src="/features-grid/Opensea.png"
          alt="OpenSea Logo"
          width={72}
          height={72}
          className="w-32 md:w-24 lg:w-32 h-32 md:h-24 lg:h-32 object-contain"
          style={{
            filter: 'drop-shadow(0 25px 15px rgba(0,0,0,0.19))'
          }}
        />
      </div>

      {/* NFT Card on the right */}
      <div
        className="absolute z-10 p-2 md:p-1.5 lg:p-2 rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm"
        style={{
          top: '3rem',
          right: '-1.5rem',
          width: '140px',
          border: '1px solid rgba(255, 255, 255, 0.5)'
        }}
      >
        <div className="rounded-xl overflow-hidden shadow-inner">
          <Image
            src="/features-grid/OpenseaChar.png"
            alt="OpenSea Character"
            width={138}
            height={138}
            className="w-full h-auto"
          />
        </div>
        <div className="relative mt-2">
          <button 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg text-sm transition-colors"
            style={{
              background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)',
            }}
          >
            Buy Now
          </button>
          <div className="absolute z-10 pointer-events-none" style={{ bottom: '-10px', right: '15px' }}>
            <Image
              src="/features-grid/Cursor.png"
              alt="Cursor"
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

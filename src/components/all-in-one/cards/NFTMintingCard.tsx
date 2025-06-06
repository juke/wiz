import Image from "next/image";

export function NFTMintingCard() {
  return (
    <div
      className="rounded-2xl py-4 px-2 h-96 md:col-span-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, rgba(250, 250, 250, 0.24) 0%, rgb(221.61, 209.72, 242.84) 70%, rgb(208.26, 171.16, 254.22) 100%)',
      }}
    >
      {/* NFT Transformation Visual */}
      <div className="flex justify-center mb-8 mt-4">
        {/* Before NFT */}
        <div className="w-28 h-28 rounded-2xl overflow-hidden"
          style={{
            boxShadow: "0 90px 80px 0 rgba(0,0,0,0.15), 0 30px 30px 0 rgba(0,0,0,0.15), 0 15px 20px 0 rgba(0,0,0,0.08)"
          }}
        >
          <Image
            src="/all-in-one/SmolMint.png"
            alt="Pre-Mint NFT"
            width={112}
            height={112}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Arrow */}
        <div className="text-black text-3xl font-bold mx-3 mt-6">→</div>

        {/* After NFT */}
        <div className="w-38 h-38 lg:w-38 lg:h-38 rounded-2xl overflow-hidden"
          style={{
            boxShadow: "0 90px 80px 0 rgba(0,0,0,0.15), 0 30px 30px 0 rgba(0,0,0,0.15), 0 15px 20px 0 rgba(0,0,0,0.08)"
          }}
        >
          <Image
            src="/all-in-one/SmolMint.png"
            alt="Post-Mint NFT"
            width={112}
            height={112}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Content - Bottom Left */}
      <div className="absolute bottom-7 left-7 text-left">
        <h3 className="text-3xl font-bold text-neutral-900">Minting</h3>
        <h3 className="text-7xl font-extrabold text-neutral-900">NFTs</h3>
      </div>
    </div>
  );
}

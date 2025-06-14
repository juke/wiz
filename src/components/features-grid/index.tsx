import {
  LaunchCard,
  TradeCard,
  GetPricesCard,
  NFTMintingCard,
  SendCard,
  ListingBuyingCard
} from './cards';

export function FeaturesGrid() {
  return (
    <section
      className="relative overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 pt-0 pb-32">
        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Let Wiz Help You
          </h2>
          <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto">
            Wiz is a personal assistant that will help manage your accounts, perform trades,
            and suggest new activities for you to try. Use <span className="font-bold text-neutral-900">$WIZ</span> to create a customized agent
            that can form long-term memories to deliver an experience unique to you.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-15 gap-6 md:gap-4 lg:gap-6 overflow-hidden">
          {/* First Row */}
          <LaunchCard />
          <TradeCard />
          <GetPricesCard />

          {/* Second Row */}
          <NFTMintingCard />
          <SendCard />
          <ListingBuyingCard />
        </div>
      </div>
    </section>
  );
}
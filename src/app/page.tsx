import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F0F4EF' }}>
      <Header />
      <Hero />

      {/* Gradient transition section */}
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
            <div className="bg-yellow-100 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">Launch.</h3>
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
    </div>
  );
}

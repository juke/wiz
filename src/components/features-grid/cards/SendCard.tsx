export function SendCard() {
  return (
    <div
      className="rounded-2xl py-8 px-6 h-96 md:col-span-4 relative overflow-hidden flex flex-col justify-between"
      style={{
        background: 'linear-gradient(to bottom, rgba(206, 206, 206, 0.07) 0%, rgba(255, 255, 255, 0.7) 70%, rgba(255, 255, 255, 0.61) 100%)',
      }}
    >
      {/* Send Text - Top */}
      <div className="text-left">
        <h3 className="text-4xl font-bold text-neutral-900">Send..</h3>
      </div>

      {/* Amount Display - Center */}
      <div className="text-center flex-1 flex items-center justify-center">
        <div className="text-8xl font-bold leading-none">
          <span className="text-neutral-900">0.1</span>
          <span className="text-neutral-400">5</span>
          <span className="text-neutral-900 text-6xl">|</span>
        </div>
      </div>

      {/* Ethereum Selector - Bottom */}
      <div className="flex justify-center">
        <div
          className="bg-neutral-900 text-white px-6 py-3 rounded-2xl flex items-center gap-3 min-w-48"
          style={{
            boxShadow: "0 8px 16px rgba(0,0,0,0.15)"
          }}
        >
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full"></div>
          </div>
          <span className="text-lg font-semibold">Ethereum</span>
          <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

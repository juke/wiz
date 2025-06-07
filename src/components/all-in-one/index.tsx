import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IconWifi, IconAntennaBars4, IconUser } from "@tabler/icons-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function AllInOne() {
  // Refs for chat animation
  const chatSectionRef = useRef<HTMLDivElement>(null);
  const userMessage1Ref = useRef<HTMLDivElement>(null);
  const userMessage2Ref = useRef<HTMLDivElement>(null);
  const userMessage3Ref = useRef<HTMLDivElement>(null);
  const botResponse1Ref = useRef<HTMLDivElement>(null);
  const botResponse2Ref = useRef<HTMLDivElement>(null);
  const botResponse3Ref = useRef<HTMLDivElement>(null);
  const botContent1Ref = useRef<HTMLDivElement>(null);
  const botContent2Ref = useRef<HTMLDivElement>(null);
  const botContent3Ref = useRef<HTMLDivElement>(null);
  const typing1Ref = useRef<HTMLDivElement>(null);
  const typing2Ref = useRef<HTMLDivElement>(null);
  const typing3Ref = useRef<HTMLDivElement>(null);
  const finalTypingIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chatSection = chatSectionRef.current;
    const userMessage1 = userMessage1Ref.current;
    const userMessage2 = userMessage2Ref.current;
    const userMessage3 = userMessage3Ref.current;
    const botResponse1 = botResponse1Ref.current;
    const botResponse2 = botResponse2Ref.current;
    const botResponse3 = botResponse3Ref.current;
    const botContent1 = botContent1Ref.current;
    const botContent2 = botContent2Ref.current;
    const botContent3 = botContent3Ref.current;
    const typing1 = typing1Ref.current;
    const typing2 = typing2Ref.current;
    const typing3 = typing3Ref.current;
    const finalTypingIndicator = finalTypingIndicatorRef.current;

    if (!chatSection || !userMessage1 || !userMessage2 || !userMessage3 ||
        !botResponse1 || !botResponse2 || !botResponse3 ||
        !botContent1 || !botContent2 || !botContent3 ||
        !typing1 || !typing2 || !typing3 || !finalTypingIndicator) return;

    // Set initial states - hide all messages and bot content, show typing indicators
    gsap.set([userMessage1, userMessage2, userMessage3,
              botResponse1, botResponse2, botResponse3, finalTypingIndicator], {
      opacity: 0
    });

    // Bot content starts hidden, typing indicators start visible within bot containers
    gsap.set([botContent1, botContent2, botContent3], { opacity: 0 });
    gsap.set([typing1, typing2, typing3], { opacity: 1 });

    // Create timeline for chat animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: chatSection,
        start: "top 70%", // Start when chat section is 70% in viewport
        once: true, // Play only once
      }
    });

    // Animation sequence with realistic conversation flow
    tl
      // 1. User Message 1 appears
      .to(userMessage1, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      })

      // 2. Show Bot Response 1 container (with typing indicator visible)
      .to(botResponse1, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      }, "+=0.6") // Pause before showing typing

      // 3. Cross-fade: typing indicator 1 out, bot content 1 in (seamless transition)
      .to(typing1, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut"
      }, "+=1.5") // Typing indicator shows for 1.5 seconds
      .to(botContent1, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.inOut"
      }, "-=0.4") // Perfect overlap for seamless cross-fade

      // 4. User Message 2 appears
      .to(userMessage2, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      }, "+=1.0") // Pause to read previous message

      // 5. Show Bot Response 2 container (with typing indicator visible)
      .to(botResponse2, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      }, "+=0.6")

      // 6. Cross-fade: typing indicator 2 out, bot content 2 in
      .to(typing2, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut"
      }, "+=1.8") // Faster thinking time
      .to(botContent2, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.inOut"
      }, "-=0.4") // Perfect overlap for seamless cross-fade

      // 7. User Message 3 appears
      .to(userMessage3, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      }, "+=0.8")

      // 8. Show Bot Response 3 container (with typing indicator visible)
      .to(botResponse3, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      }, "+=0.6")

      // 9. Cross-fade: typing indicator 3 out, bot content 3 in
      .to(typing3, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut"
      }, "+=1.4")
      .to(botContent3, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.inOut"
      }, "-=0.4") // Perfect overlap for seamless cross-fade

      // 10. Show final typing indicator (stays visible)
      .to(finalTypingIndicator, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      }, "+=1.0"); // Final pause before showing ongoing typing

  }, []);

  return (
    <section
      className="relative py-24"
      style={{
        background: 'linear-gradient(to bottom, rgb(238, 238, 238) 0%, #F0F4EF 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            All-In-One
          </h2>
          <p className="text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto">
            Wiz is the all-in-one personal assistant to help you navigate through the
            metaverse. Communicate directly and simplify your daily tasks.
          </p>
        </div>

        {/* Phone and Character Layout */}
        <div className="relative flex items-center justify-center min-h-[700px] max-w-5xl mx-auto">
          {/* Phone Mockup */}
          <div className="relative z-10 mx-auto">
            {/* Glow Background Effect */}
            <div
              className="absolute pointer-events-none z-0"
              style={{
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '1200px',
                height: '850px'
              }}
            >
              <Image
                src="/all-in-one/Glow.svg"
                alt="Glow Effect"
                width={1500}
                height={1500}
                className="w-full h-full opacity-100"
              />
            </div>

            {/* Elliptical shadow positioned behind phone */}
            <div
              className="absolute pointer-events-none z-0"
              style={{
                bottom: '-130px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '300%',
                height: '150px',
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0) 50%, transparent 100%)',
                borderRadius: '100%',
                filter: 'blur(8px)'
              }}
            />

            <PhoneMockup
              chatSectionRef={chatSectionRef}
              userMessage1Ref={userMessage1Ref}
              userMessage2Ref={userMessage2Ref}
              userMessage3Ref={userMessage3Ref}
              botResponse1Ref={botResponse1Ref}
              botResponse2Ref={botResponse2Ref}
              botResponse3Ref={botResponse3Ref}
              botContent1Ref={botContent1Ref}
              botContent2Ref={botContent2Ref}
              botContent3Ref={botContent3Ref}
              typing1Ref={typing1Ref}
              typing2Ref={typing2Ref}
              typing3Ref={typing3Ref}
              finalTypingIndicatorRef={finalTypingIndicatorRef}
            />

            {/* Coin Image - positioned in front of phone, anchored to phone */}
            <div className="absolute z-20 -left-30 top-1/4 transform -translate-y-1/2">
              <Image
                src="/all-in-one/Coin.png"
                alt="Coin"
                width={100}
                height={100}
                className="w-48 h-48"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))'
                }}
              />
            </div>

            {/* Character - anchored position, fixed size */}
            <div
              className="absolute z-30 bottom-[-60px] right-[-125px] md:bottom-[-90px] md:right-[-220px]"
            >
              <Image
                src="/all-in-one/Character.png"
                alt="Wiz Character"
                width={200}
                height={250}
                className="w-75 md:w-96"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface PhoneMockupProps {
  chatSectionRef: React.RefObject<HTMLDivElement | null>;
  userMessage1Ref: React.RefObject<HTMLDivElement | null>;
  userMessage2Ref: React.RefObject<HTMLDivElement | null>;
  userMessage3Ref: React.RefObject<HTMLDivElement | null>;
  botResponse1Ref: React.RefObject<HTMLDivElement | null>;
  botResponse2Ref: React.RefObject<HTMLDivElement | null>;
  botResponse3Ref: React.RefObject<HTMLDivElement | null>;
  botContent1Ref: React.RefObject<HTMLDivElement | null>;
  botContent2Ref: React.RefObject<HTMLDivElement | null>;
  botContent3Ref: React.RefObject<HTMLDivElement | null>;
  typing1Ref: React.RefObject<HTMLDivElement | null>;
  typing2Ref: React.RefObject<HTMLDivElement | null>;
  typing3Ref: React.RefObject<HTMLDivElement | null>;
  finalTypingIndicatorRef: React.RefObject<HTMLDivElement | null>;
}

function PhoneMockup({
  chatSectionRef,
  userMessage1Ref,
  userMessage2Ref,
  userMessage3Ref,
  botResponse1Ref,
  botResponse2Ref,
  botResponse3Ref,
  botContent1Ref,
  botContent2Ref,
  botContent3Ref,
  typing1Ref,
  typing2Ref,
  typing3Ref,
  finalTypingIndicatorRef
}: PhoneMockupProps) {
  return (
    <div className="relative">
      {/* Phone Frame */}
      <div
        className="bg-neutral-100/0 rounded-2xl p-2 shadow-2xl w-80 h-[640px] sm:w-[360px] sm:h-[720px]"
        style={{
          boxShadow: '0 30px 60px rgba(0,0,0,0.1), 0 15px 30px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.15)',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        }}
      >
        {/* Screen */}
        <div className="bg-white rounded-2xl h-full overflow-hidden relative b">
          {/* Status Bar */}
          <div className="bg-neutral-900 text-white px-4 py-2 flex items-center justify-between rounded-t-2xl">
            <div className="flex items-center gap-2">
              <div className="w-12 h-6 flex items-center justify-center">
                <Image
                  src="/Logo.svg"
                  alt="Wiz Logo"
                  width={42}
                  height={42}
                  className="w-12 h-6 h-auto"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              {/* Cellular Reception */}
              <IconAntennaBars4 size={22} className="text-white" />
              {/* WiFi Symbol */}
              <IconWifi size={22} className="text-white mr-1" />
              <span className="text-xs text-neutral-300 font-bold">22:82</span>
            </div>
          </div>

          {/* Chat Content */}
          <div ref={chatSectionRef} className="p-4 space-y-3 h-full relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #f8f9fa 0%, #e9ecef 100%)' }}>
            {/* User Message 1 */}
            <div ref={userMessage1Ref} className="flex justify-end mb-3">
              <div className="relative">
                <div className="text-neutral-900 rounded-2xl px-4 py-3 max-w-xs shadow-sm" style={{ background: 'linear-gradient(to bottom, rgba(239, 246, 255, 0.8) 0%, rgba(219, 234, 254, 0.6) 100%)' }}>
                  <p className="text-sm font-normal opacity-90">Can you set a sell order for ETH at $3600 for 2.5 ETH</p>
                </div>
                <div className="flex items-center justify-end mt-1 gap-2">
                  <span className="text-xs text-neutral-500 opacity-90">1 min ago</span>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center shadow-sm">
                    <IconUser size={14} className="text-neutral-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Wiz Response 1 - contains both typing indicator and content */}
            <div ref={botResponse1Ref} className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-50 to-blue-100 p-0.5 shadow-sm">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src="/all-in-one/AvatarChar.png"
                    alt="Wiz Avatar"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 relative">
                {/* Typing indicator 1 - positioned absolutely, only as wide as needed */}
                <div ref={typing1Ref} className="absolute top-0 left-0">
                  <div className="bg-white rounded-2xl px-4 py-3 shadow-sm w-fit">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>

                {/* Bot content 1 - positioned absolutely to overlay same area */}
                <div ref={botContent1Ref} className="absolute inset-0">
                  <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
                    <p className="text-sm text-neutral-900 font-normal opacity-90">Set a sell order for 2.5 ETH @ $3600.00</p>
                    <p className="text-xs text-neutral-500 mt-1 opacity-90">Via 🖤 CoW Swap</p>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1 opacity-90">1 min ago</p>
                </div>

                {/* Invisible spacer to maintain layout height */}
                <div className="invisible">
                  <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
                    <p className="text-sm text-neutral-900 font-normal opacity-90">Set a sell order for 2.5 ETH @ $3600.00</p>
                    <p className="text-xs text-neutral-500 mt-1 opacity-90">Via 🖤 CoW Swap</p>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1 opacity-90">1 min ago</p>
                </div>
              </div>
            </div>

            {/* User Message 2 */}
            <div ref={userMessage2Ref} className="flex justify-end mb-3">
              <div className="relative">
                <div className="text-neutral-900 rounded-2xl px-4 py-3 max-w-xs shadow-sm" style={{ background: 'linear-gradient(to bottom, rgba(239, 246, 255, 0.8) 0%, rgba(219, 234, 254, 0.6) 100%)' }}>
                  <p className="text-sm font-normal opacity-90">Can you actually set the order with Uniswap?</p>
                </div>
                <div className="flex items-center justify-end mt-1 gap-2">
                  <span className="text-xs text-neutral-500 opacity-90">1 min ago</span>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center shadow-sm">
                    <IconUser size={14} className="text-neutral-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Wiz Response 2 - contains both typing indicator and content */}
            <div ref={botResponse2Ref} className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-50 to-blue-100 p-0.5 shadow-sm">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src="/all-in-one/AvatarChar.png"
                    alt="Wiz Avatar"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 relative">
                {/* Typing indicator 2 - positioned absolutely, only as wide as needed */}
                <div ref={typing2Ref} className="absolute top-0 left-0">
                  <div className="bg-white rounded-2xl px-4 py-3 shadow-sm w-fit">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>

                {/* Bot content 2 - positioned absolutely to overlay same area */}
                <div ref={botContent2Ref} className="absolute inset-0">
                  <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
                    <p className="text-sm text-neutral-900 font-normal opacity-90">Absolutely! I&apos;ll execute the order on Uniswap V3 for better liquidity. Transaction initiated...</p>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1 opacity-90">30 sec ago</p>
                </div>

                {/* Invisible spacer to maintain layout height */}
                <div className="invisible">
                  <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
                    <p className="text-sm text-neutral-900 font-normal opacity-90">Absolutely! I&apos;ll execute the order on Uniswap V3 for better liquidity. Transaction initiated...</p>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1 opacity-90">30 sec ago</p>
                </div>
              </div>
            </div>

            {/* User Message 3 */}
            <div ref={userMessage3Ref} className="flex justify-end mb-3">
              <div className="relative">
                <div className="text-neutral-900 rounded-2xl px-4 py-3 max-w-xs shadow-sm" style={{ background: 'linear-gradient(to bottom, rgba(239, 246, 255, 0.8) 0%, rgba(219, 234, 254, 0.6) 100%)' }}>
                  <p className="text-sm font-normal opacity-90">Great! Can you also check my portfolio balance?</p>
                </div>
                <div className="flex items-center justify-end mt-1 gap-2">
                  <span className="text-xs text-neutral-500 opacity-90">15 sec ago</span>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center shadow-sm">
                    <IconUser size={14} className="text-neutral-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Wiz Response 3 - contains both typing indicator and content */}
            <div ref={botResponse3Ref} className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-50 to-blue-100 p-0.5 shadow-sm">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src="/all-in-one/AvatarChar.png"
                    alt="Wiz Avatar"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 relative">
                {/* Typing indicator 3 - positioned absolutely, only as wide as needed */}
                <div ref={typing3Ref} className="absolute top-0 left-0">
                  <div className="bg-white rounded-2xl px-4 py-3 shadow-sm w-fit">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>

                {/* Bot content 3 - positioned absolutely to overlay same area */}
                <div ref={botContent3Ref} className="absolute inset-0">
                  <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
                    <p className="text-sm text-neutral-900 font-normal opacity-90">Your current portfolio: $12,450 (+8.2% today)</p>
                    <p className="text-xs text-neutral-500 mt-1 opacity-90">• ETH: 3.2 ($11,520)</p>
                    <p className="text-xs text-neutral-500 opacity-90">• USDC: $930</p>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1 opacity-90">Just now</p>
                </div>

                {/* Invisible spacer to maintain layout height */}
                <div className="invisible">
                  <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
                    <p className="text-sm text-neutral-900 font-normal opacity-90">Your current portfolio: $12,450 (+8.2% today)</p>
                    <p className="text-xs text-neutral-500 mt-1 opacity-90">• ETH: 3.2 ($11,520)</p>
                    <p className="text-xs text-neutral-500 opacity-90">• USDC: $930</p>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1 opacity-90">Just now</p>
                </div>
              </div>
            </div>

            {/* Final typing indicator - stays visible at end */}
            <div ref={finalTypingIndicatorRef} className="flex items-start gap-3 mb-16">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-50 to-blue-100 p-0.5 shadow-sm">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src="/all-in-one/AvatarChar.png"
                    alt="Wiz Avatar"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>

            {/* Gradient Fade Overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgba(233, 236, 239, 1) 0%, rgba(233, 236, 239, 0.8) 30%, rgba(233, 236, 239, 0.4) 60%, transparent 100%)'
              }}
            />

            {/* CTA Button - Floating on top */}
            <div className="absolute bottom-18 left-1/2 transform -translate-x-1/2 z-40">
              <Button
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-2 text-sm font-bold rounded-xl shadow-lg"
              >
                Sign up for Waitlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

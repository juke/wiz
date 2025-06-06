import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { FeaturesGrid } from "@/components/features-grid";
import { AllInOne } from "@/components/all-in-one";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden" style={{ backgroundColor: '#F0F4EF' }}>
      <Header />
      <Hero />

      <FeaturesGrid />
      <AllInOne />
    </div>
  );
}

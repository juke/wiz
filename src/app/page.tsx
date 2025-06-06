import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { AllInOne } from "@/components/all-in-one";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F0F4EF' }}>
      <Header />
      <Hero />

      <AllInOne />
    </div>
  );
}

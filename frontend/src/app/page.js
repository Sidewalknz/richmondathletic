import Hero from "../components/Hero";
import MarqueeSection from "@/components/MarqueeSection";
import Footer from "@/components/Footer";
import StriveSection from "@/components/StriveSection";
import BadgeInfo from "@/components/BadgeInfo";

export default function Home() {
  return (
    <main>
      <Hero />
      <MarqueeSection />
      <StriveSection />
      <BadgeInfo />
      <Footer />  
    </main>
  );
}
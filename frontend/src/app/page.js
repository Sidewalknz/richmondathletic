import Hero from "../components/Hero";
import MarqueeSection from "@/components/MarqueeSection";
import Footer from "@/components/Footer";
import StriveSection from "@/components/StriveSection";
import BadgeInfo from "@/components/BadgeInfo";
import DevelopmentProgramme from "@/components/DevelopmentProgramme";

export default function Home() {
  return (
    <main>
      <Hero />
      <MarqueeSection />
      <StriveSection />
      <BadgeInfo />
      <DevelopmentProgramme />
      <Footer />  
    </main>
  );
}
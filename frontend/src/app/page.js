import HeroWithPlayers from "@/components/HeroWithPlayers";
import MarqueeSection from "@/components/MarqueeSection";
import Footer from "@/components/Footer";
import StriveSection from "@/components/StriveSection";
import BadgeInfo from "@/components/BadgeInfo";
import DevelopmentProgramme from "@/components/DevelopmentProgramme";
import SponsorsSection from "@/components/SponsorsSection";
import SocialCTA from "@/components/SocialCTA";

export default function Home() {
  return (
    <main>
      <HeroWithPlayers />
      <MarqueeSection />
      <StriveSection />
      <BadgeInfo />
      <DevelopmentProgramme />
      <SponsorsSection />
      <SocialCTA />
      <Footer />  
    </main>
  );
}
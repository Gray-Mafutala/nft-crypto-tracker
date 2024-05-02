import ExploreOurCollectionsSection from "./ExploreOurCollectionsSection";
import HeroSection from "./HeroSection";
import HotTrendingSection from "./HotTrendingSection";
import JoinNowSection from "./JoinNowSection";
import PartnersSection from "./PartnersSection";


export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HotTrendingSection />
      <ExploreOurCollectionsSection />
      <PartnersSection />
      <JoinNowSection />
    </main>
  );
}

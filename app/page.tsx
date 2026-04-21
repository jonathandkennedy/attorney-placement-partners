import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import TrustBar from '@/components/sections/trust-bar';
import ProblemSection from '@/components/sections/problem-section';
import WhyUs from '@/components/sections/why-us';
import PracticeAreas from '@/components/sections/practice-areas';
import PositionsFilled from '@/components/sections/positions-filled';
import ProcessSection from '@/components/sections/process-section';
import FounderStory from '@/components/sections/founder-story';
import FinalCta from '@/components/sections/final-cta';
import Footer from '@/components/footer';

export default function HomePage() {
  return (
    <main className="bg-[#071223] min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <ProblemSection />
      <WhyUs />
      <PracticeAreas />
      <PositionsFilled />
      <ProcessSection />
      <FounderStory />
      <FinalCta />
      <Footer />
    </main>
  );
}

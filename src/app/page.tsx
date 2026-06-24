import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Problems } from "@/components/sections/Problems";
import { Masalahnya } from "@/components/sections/Masalahnya";
import { SolusiCTA } from "@/components/sections/SolusiCTA";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

/**
 * Homepage — landing page jasa install Elementor Pro.
 * Urutan section:
 * Hero → Intro → Fitur → Masalahnya → SolusiCTA → HowItWorks → Pricing → WhyChooseUs → FAQ → CTA
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Problems />
      <Masalahnya />
      <SolusiCTA />
      <HowItWorks />
      <Pricing />
      <WhyChooseUs />
      <FAQ />
      <CTA />
    </>
  );
}

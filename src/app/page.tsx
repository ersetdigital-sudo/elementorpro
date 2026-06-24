import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Problems } from "@/components/sections/Problems";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

/**
 * Homepage — landing page jasa install Elementor Pro.
 * Urutan section:
 * Hero → Intro → Fitur (Problems) → Services → HowItWorks → Pricing → WhyChooseUs → FAQ → CTA
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Problems />
      <Services />
      <HowItWorks />
      <Pricing />
      <WhyChooseUs />
      <FAQ />
      <CTA />
    </>
  );
}

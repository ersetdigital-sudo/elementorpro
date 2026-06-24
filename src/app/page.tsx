import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

/**
 * Homepage — landing page jasa install Elementor Pro.
 * Urutan section mengikuti spec (Flow A transactional):
 * Hero → Problems → Services → HowItWorks → Pricing → WhyChooseUs → FAQ → CTA
 */
export default function Home() {
  return (
    <>
      <Hero />
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

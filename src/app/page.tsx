import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Problems } from "@/components/sections/Problems";
import { Masalahnya } from "@/components/sections/Masalahnya";
import { SolusiCTA } from "@/components/sections/SolusiCTA";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { Bonus } from "@/components/sections/Bonus";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

/**
 * Homepage — landing page jasa install Elementor Pro.
 * Urutan:
 * Hero → Intro → Fitur → Masalahnya → SolusiCTA → HowItWorks → Pricing → Bonus → WhyChooseUs → Testimonials → FAQ → CTA
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
      <Bonus />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}

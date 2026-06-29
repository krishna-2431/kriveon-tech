import { HeroSection } from "@/components/sections/HeroSection";
// import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { DeliverablesSection } from "@/components/sections/DeliverablesSection";
import { ProcessTeaser } from "@/components/sections/ProcessTeaser";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <SocialProofSection /> */}
      <ServicesBento />
      <DeliverablesSection />
      <ProcessTeaser />
      <CtaSection />
    </>
  );
}

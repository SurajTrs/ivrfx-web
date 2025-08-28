import React from "react";
import Hero from "../../whyivrfxpage/WhyIvrfxHero";
import WhyTradeWithUs from "../../whyivrfxpage/WhyTradeWithUs";
import Stats from "../../whyivrfxpage/WhyIvrfxStats";
import EverythingYouNeed from "../../whyivrfxpage/WhyIvrfxEverythingYouNeed";
import InterestedPlatforms from "../../whyivrfxpage/WhyIvrfxInterestedPlatforms";
import ToolsSuite from "../../whyivrfxpage/WhyIvrfxToolsSuite";
import CTAContact from "../../whyivrfxpage/WhyIvrfxCTAContact";

export default function WhyIVRFXPage() {
  return (
    <main>
      <Hero />
      <WhyTradeWithUs />
      <Stats />
      <EverythingYouNeed />
      <InterestedPlatforms />
      <ToolsSuite />
      <CTAContact />
    </main>
  );
}
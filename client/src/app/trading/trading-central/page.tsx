"use client";

import TCBenefitsGrid from "app/tradingcentralpage/TCBenefitsGrid";
import TCExperienceCTA from "app/tradingcentralpage/TCExperienceCTA";
import TCNewsHighlights from "app/tradingcentralpage/TCNewsHighlights";
import TradingCentralHero from "app/tradingcentralpage/TradingCentralHero";



export default function TradingCentralPage() {
  return (
    <main className="bg-white text-black" aria-label="Trading Central page">
      <div>
       <TradingCentralHero/>
      <TCBenefitsGrid/>
      <TCExperienceCTA/>
      <TCNewsHighlights/>

      </div>
  
    </main>
  );
}

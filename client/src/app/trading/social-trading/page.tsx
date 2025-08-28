"use client";

import HowToStart from "app/socialpage/HowToStart";
import SocialTradingPage from "app/socialpage/SocialInfo";
import SocialTradingHero from "app/socialpage/SocialTradingHero";
import WhyChoose from "app/socialpage/WhyChoose";
import MarketInsights from "components/MarketInsights";


export default function social() {
  return (
    <main>
        <SocialTradingHero />
        <SocialTradingPage /> 
        <HowToStart/>
   <WhyChoose/>
      <MarketInsights />
    </main>
  );
}

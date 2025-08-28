"use client";

import TradingViewCTA from "app/tradingviewpage/TradingViewCTA";
import TradingViewHero from "app/tradingviewpage/TradingViewHero";
import TradingViewHowItWorks from "app/tradingviewpage/TradingViewHowItWorks";
import TradingViewStats from "app/tradingviewpage/TradingViewStats";
import TradingViewFeatures from "app/tradingviewpage/TradingViewFeatures";

export default function TradingViewPage() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#0a0114] via-[#140726] to-[#0a0114]">
      <TradingViewHero />
      <TradingViewStats />
      <TradingViewHowItWorks />
      <TradingViewFeatures />
      <TradingViewCTA />
    </div>
  );
}

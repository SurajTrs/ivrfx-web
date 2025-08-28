"use client";

import TradingAppHero from 'app/tradingapppage/TradingAppHero';
import TradingAppOverview from 'app/tradingapppage/TradingAppOverview';
import TradingAppHighlights from 'app/tradingapppage/TradingAppHighlights';
import TradingAppTools from 'app/tradingapppage/TradingAppTools';
import TradingAppFAQ from 'app/tradingapppage/TradingAppFAQ';
import TradingAppCTA from 'app/tradingapppage/TradingAppCTA';

export default function TradingAppPage() {
  return (
    <main className="bg-white text-black" aria-label="Trading App page">
      <div className="text-white">
        <TradingAppHero />
      </div>
      <TradingAppOverview />
      <TradingAppTools />s
      <TradingAppHighlights />
      
      <TradingAppFAQ />
      <TradingAppCTA />
    </main>
  );
}

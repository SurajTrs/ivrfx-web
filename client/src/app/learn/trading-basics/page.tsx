"use client";
import React from "react";
import TradingBasicsHero from "../../tradingbasicspage/Hero";
import Section1FinancialTrading from "../../tradingbasicspage/Section1FinancialTrading";
import Section2CFD from "../../tradingbasicspage/Section2CFD";
import Section3Leverage from "../../tradingbasicspage/Section3Leverage";
import { DottedDivider, DottedDivider2, SimpleDivider } from "../../tradingbasicspage/Divider";
import Section4Instruments from "../../tradingbasicspage/Section4Instruments";
import Section5RiskManagement from "../../tradingbasicspage/Section5RiskManagement";
import Section6Psychology from "../../tradingbasicspage/Section6Psychology";
import Section7HowToTrade from "../../tradingbasicspage/Section7HowToTrade";
import Section8TradingExample from "../../tradingbasicspage/Section8TradingExample";
import Section9DownloadNow from "../../tradingbasicspage/Section9DownloadNow";

export default function TradingBasicsPage() {
  return (
    <main className="bg-white text-black" aria-label="Trading Basics page">
      {/* Hero */}
      <TradingBasicsHero />

      {/* Divider */}
      <SimpleDivider />

      {/* Section 1: What is financial trading? */}
      <Section1FinancialTrading />

      {/* Dotted path divider mimic */}
      <DottedDivider />

      {/* Section 2: What is a CFD? */}
      <Section2CFD />

      {/* Dotted path divider mimic */}
      <DottedDivider />

      {/* Section 3: Benefits of trading with leverage */}
      <Section3Leverage />

      {/* Dotted path divider mimic */}
      <DottedDivider />

      {/* Section 4: What instruments can you trade? */}
      <Section4Instruments />

      {/* Dotted path divider mimic */}
      <DottedDivider2 />

      {/* Section 5: How to minimise risk */}
      <Section5RiskManagement />

      {/* Dotted path divider mimic */}
      <DottedDivider />

      {/* Section 6: Understand the psychology of trading */}
      <Section6Psychology />

      {/* Dotted path divider mimic */}
      <DottedDivider2 />

      {/* Section 7: How to make a trade */}
      <Section7HowToTrade />

      {/* Dotted path divider mimic */}
      <DottedDivider />

      {/* Section 8: Trading example */}
      <Section8TradingExample />

      {/* Dotted path divider mimic */}
      <DottedDivider />

      {/* Section 9: Download now and make your move */}
      <Section9DownloadNow />

      <div className="container pb-5">
        <hr className="mt-0" />
      </div>
    </main>
  );
}

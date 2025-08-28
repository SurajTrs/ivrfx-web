"use client";
import React from "react";
import ForexProfitCalculatorHero from "../../forexprofitcalculator/ForexProfitCalculatorHero";
import ForexCalculator from "../../forexmargincalculator/ForexCalculator";
import GettingStarted from "../../cfdtradingcalculator/GettingStarted";
import ForexProfitInfoSections from "../../forexprofitcalculator/ForexProfitInfoSections";
import ForexCTA from "app/forexpage/ForexCTA";

export default function ForexProfitCalculatorPage() {
  return (
    <main>
      <ForexProfitCalculatorHero />
      <div id="calculator">
        <ForexCalculator />
      </div>
      <GettingStarted />
      <ForexProfitInfoSections />
      <ForexCTA />
    </main>
  );
}

"use client";
import React from "react";
import ForexMarginCalculatorHero from "../../forexmargincalculator/ForexMarginCalculatorHero";
import ForexCalculator from "../../forexmargincalculator/ForexCalculator";
import GettingStarted from "../../cfdtradingcalculator/GettingStarted";
import ForexHowCalculatorWorks from "../../forexmargincalculator/ForexHowCalculatorWorks";
import ForexCostsAndCharges from "../../forexmargincalculator/ForexCostsAndCharges";
import ForexFAQ from "../../forexmargincalculator/ForexFAQ";
import ForexCTA from "app/forexpage/ForexCTA";

export default function ForexMarginCalculatorPage() {
  return (
    <main>
      <ForexMarginCalculatorHero />
      <div id="calculator">
        <ForexCalculator />
      </div>
      <GettingStarted />
      <ForexHowCalculatorWorks />
      <ForexCostsAndCharges />
      <ForexFAQ />
      <ForexCTA />
    </main>
  );
}

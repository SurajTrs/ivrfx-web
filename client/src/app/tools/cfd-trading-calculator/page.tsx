"use client";
import React from "react";
import CFDTradingCalculatorHero from "../../cfdtradingcalculator/CFDTradingCalculatorHero";
import CFDCalculator from "../../cfdtradingcalculator/CFDCalculator";
import GettingStarted from "../../cfdtradingcalculator/GettingStarted";
import HowCalculatorWorks from "../../cfdtradingcalculator/HowCalculatorWorks";
import CostsAndCharges from "../../cfdtradingcalculator/CostsAndCharges";
import CFDFAQ from "../../cfdtradingcalculator/CFDFAQ";
import ForexCTA from "app/forexpage/ForexCTA";

export default function CFDTradingCalculatorPage() {
  return (
    <main>
      <CFDTradingCalculatorHero />
      <div id="calculator">
        <CFDCalculator />
      </div>
      <GettingStarted />
      <HowCalculatorWorks />
      <CostsAndCharges />
      <CFDFAQ />
        <ForexCTA />
    </main>
  );
}

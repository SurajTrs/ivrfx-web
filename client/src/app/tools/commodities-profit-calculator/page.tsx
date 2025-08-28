"use client";
import React from "react";
import CommoditiesProfitCalculatorHero from "../../commoditiescalculator/CommoditiesProfitCalculatorHero";
import CommoditiesCalculator from "../../commoditiescalculator/CommoditiesCalculator";
import GettingStarted from "../../cfdtradingcalculator/GettingStarted";
import CommoditiesHowCalculatorWorks from "../../commoditiescalculator/CommoditiesHowCalculatorWorks";
import CommoditiesCostsAndCharges from "../../commoditiescalculator/CommoditiesCostsAndCharges";
import CommoditiesFAQ from "../../commoditiescalculator/CommoditiesFAQ";
import ForexCTA from "app/forexpage/ForexCTA";

export default function CommoditiesProfitCalculatorPage() {
  return (
    <main>
      <CommoditiesProfitCalculatorHero />
      <div id="calculator">
        <CommoditiesCalculator />
      </div>
      <GettingStarted />
      <CommoditiesHowCalculatorWorks />
      <CommoditiesCostsAndCharges />
      <CommoditiesFAQ />
      <ForexCTA />
    </main>
  );
}

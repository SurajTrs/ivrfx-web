"use client";
import CFDTradingHero from "app/cfdtrading/CFDTradingHero";
import CFDTradingInfoSections from "app/cfdtrading/CFDTradingInfoSections";
import CFDBenefits from "app/cfdtrading/CFDBenefits";
import CFDFeatures from "app/cfdtrading/CFDFeatures";
import CFDFaqTeaser from "app/cfdtrading/CFDFaqTeaser";
import CFDCTA from "app/cfdtrading/CFDCTA";
import React from "react";
import ForexCTA from "app/forexpage/ForexCTA";

export default function CFDTradingPage() {
  return (
    <main>
      <CFDTradingHero />
      <CFDTradingInfoSections />
      <CFDBenefits />
      <CFDFeatures />
      <CFDFaqTeaser />
      <ForexCTA />
    </main>
  );
}
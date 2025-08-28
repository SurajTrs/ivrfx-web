"use client";
import React from "react";
import Hero from "../../whyivrfxpage/global-offering/GlabalHero";
import Overview from "../../whyivrfxpage/global-offering/GlabalOverview";
import Notice from "../../whyivrfxpage/global-offering/GlabalNotice";
import Regulation from "../../whyivrfxpage/global-offering/GlabalRegulation";
import TradingPlatforms from "../../whyivrfxpage/global-offering/GlabalTradingPlatforms";
import DepositsWithdrawals from "../../whyivrfxpage/global-offering/GlabalDepositsWithdrawals";
import Registration from "../../whyivrfxpage/global-offering/GlabalRegistration";
import Residence from "../../whyivrfxpage/global-offering/GlabalResidence";
import Support from "../../whyivrfxpage/global-offering/GlabalSupport";

export default function GlobalOfferingPage() {
  return (
    <main>
      <Hero />
      <Overview />
      <Notice />
      <Regulation />
      <TradingPlatforms />
      <DepositsWithdrawals />
      <Registration />
      <Residence />
      <Support />
    </main>
  );
}

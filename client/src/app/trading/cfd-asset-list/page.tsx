import React from "react";

import ForexCTA from "app/forexpage/ForexCTA";
import CFDTradingInfoSections from "app/cfdtrading/CFDTradingInfoSections";
import CFDFaqTeaser from "app/cfdtrading/CFDFaqTeaser";
import CFDBenefits from "app/cfdtrading/CFDBenefits";
import CFDFeatures from "app/cfdtrading/CFDFeatures";
import ToolsStrip from "app/auth/cfdassetlistpage/ToolsStrip";
import AssetListHero from "app/auth/cfdassetlistpage/AssetListHero";
import AssetsTeaser from "app/auth/cfdassetlistpage/AssetsTeaser";
import CFDTradingCalculator from "app/cfdtrading/CFDTradingCalculator";

export default function Page() {
  return (
    <main>
      <AssetListHero />
      <AssetsTeaser />
      <ToolsStrip />
      <CFDTradingCalculator />
      <CFDTradingInfoSections />
      <CFDBenefits />
      <CFDFeatures />
      <CFDFaqTeaser />
      <ForexCTA />
    </main>
  );
}
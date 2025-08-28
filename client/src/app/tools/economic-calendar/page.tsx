"use client";

import React from "react";
import EconomicCalendarHero from "../../economiccalendar/EconomicCalendarHero";
import EconomicCalendarEmbed from "../../economiccalendar/EconomicCalendarEmbed";
import EconomicCalendarInfoSections from "../../economiccalendar/EconomicCalendarInfoSections";
import ForexCTA from "app/forexpage/ForexCTA";

export default function EconomicCalendarPage() {
  return (
    <main>
      <EconomicCalendarHero />
      <EconomicCalendarEmbed />
      <EconomicCalendarInfoSections />
      <ForexCTA />
    </main>
  );
}

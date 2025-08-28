"use client";
import React from "react";
import TradingHoursSection from "app/tradinghourspage/TradingHoursSection";

export default function ForexSection() {
  const hours = [
    { label: "All Major FX Pairs", days: "Sunday - Friday", times: "21:00 - 21:00" },
    { label: "USDZAR", days: "Sunday - Friday", times: "21:00 - 20:58" },
    { label: "USDILS", days: "Monday - Friday", times: "06:00 - 16:00" },
    { label: "CZK FX pairs", days: "Monday - Friday", times: "07:17 - 14:14" },
    { label: "NOK FX pairs", days: "Sunday - Friday", times: "21:15 - 20:57" },
    { label: "SEK FX pairs", days: "Sunday - Friday", times: "21:15 - 20:57" },
    { label: "HUF FX pairs", days: "Sunday - Friday", times: "21:05 - 20:58" },
    { label: "RON FX pairs", days: "Monday - Friday", times: "07:20 - 11:55" },
    { label: "PLN FX pairs", days: "Sunday - Friday", times: "21:15 - 20:58" },
  ];
  return <TradingHoursSection title="Forex — Daily Trading Hours (GMT)" hours={hours} />;
}

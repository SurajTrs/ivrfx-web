"use client";
import React from "react";
import TradingHoursSection from "./TradingHoursSection";

export default function EnergySection() {
  const hours = [
    { label: "Brent Oil", days: "Sun - Mon", times: "22:00 - 22:00" },
    { label: "Brent Oil", days: "Tue - Fri", times: "00:00 - 22:00" },
    { label: "Brent Oil", days: "Friday", times: "00:00 - 22:00" },
    { label: "UKOil", days: "Sun - Mon", times: "22:06 - 20:59" },
    { label: "UKOil", days: "Tue - Fri", times: "00:06 - 20:59" },
    { label: "Natural Gas", days: "Sunday - Friday", times: "22:00 - 20:59" },
    { label: "USOil", days: "Sunday - Friday", times: "22:00 - 20:59" },
    { label: "Crude Oil", days: "Sunday - Friday", times: "22:00 - 20:59" },
  ];
  return <TradingHoursSection title="Energy Commodities — Daily Trading Hours (GMT)" hours={hours} />;
}

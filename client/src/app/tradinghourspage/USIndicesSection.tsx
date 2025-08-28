"use client";
import React from "react";
import TradingHoursSection from "./TradingHoursSection";

export default function USIndicesSection() {
  const hours = [
    { label: "DollarIndex", days: "Sun - Mon", times: "22:00 - 20:59" },
    { label: "DollarIndex", days: "Tue - Fri", times: "00:00 - 20:59" },
    { label: "Japan225", days: "Sunday - Friday", times: "22:01 - 20:59" },
    { label: "TECH100", days: "Sunday - Friday", times: "22:01 - 20:59" },
    { label: "USA2000", days: "Sunday - Friday", times: "22:01 - 20:59" },
    { label: "USA30", days: "Sunday - Friday", times: "22:01 - 20:59" },
    { label: "USA500", days: "Sunday - Friday", times: "22:01 - 20:59" },
    { label: "VIXX", days: "Sunday - Friday", times: "22:01 - 20:59" },
  ];
  return <TradingHoursSection title="US Indices — Daily Trading Hours (GMT)" hours={hours} />;
}

"use client";
import React from "react";
import TradingHoursSection from "./TradingHoursSection";

export default function GovernmentBondsSection() {
  const hours = [
    { label: "GER10YBond", days: "Monday - Friday", times: "00:16 - 19:59" },
    { label: "Gilt10Y", days: "Monday - Friday", times: "07:00 - 17:00" },
    { label: "TBond30", days: "Sun - Thu", times: "22:01 - 20:59" },
    { label: "TNote10", days: "Sun - Thu", times: "22:01 - 20:59" },
  ];
  return <TradingHoursSection title="Government Bonds — Daily Trading Hours (GMT)" hours={hours} />;
}

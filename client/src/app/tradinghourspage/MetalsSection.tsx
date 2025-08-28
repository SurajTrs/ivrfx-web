"use client";
import React from "react";
import TradingHoursSection from "./TradingHoursSection";

export default function MetalsSection() {
  const hours = [
    { label: "Copper", days: "Sunday - Friday", times: "22:01 - 20:59" },
    { label: "Gold", days: "Sunday - Friday", times: "22:01 - 20:59" },
    { label: "Platinum", days: "Sunday - Friday", times: "22:01 - 20:59" },
    { label: "Palladium", days: "Sunday - Friday", times: "22:01 - 20:59" },
    { label: "Silver", days: "Sunday - Friday", times: "22:01 - 20:59" },
  ];
  return <TradingHoursSection title="Metals — Daily Trading Hours (GMT)" hours={hours} />;
}

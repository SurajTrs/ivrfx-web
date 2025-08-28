"use client";
import React from "react";
import TradingHoursSection from "./TradingHoursSection";

export default function EuropeanIndicesFuturesSection() {
  const hours = [
    { label: "Amsterdam25", days: "Monday - Friday", times: "06:01 - 19:59" },
    { label: "Europe50", days: "Sunday - Friday", times: "00:16 - 19:59" },
    { label: "France40", days: "Mon - Thu", times: "22:01 - 20:59" },
    { label: "France40", days: "Friday", times: "22:01 - 20:14" },
    { label: "Germany40", days: "Sun - Thu", times: "22:01 - 20:59" },
    { label: "Germany40", days: "Friday", times: "22:01 - 20:10" },
    { label: "Italy40", days: "Monday - Friday", times: "06:03 - 18:59" },
    { label: "Poland20", days: "Monday - Friday", times: "06:46 - 14:49" },
    { label: "Spain35", days: "Monday - Friday", times: "06:01 - 17:59" },
    { label: "Swiss20", days: "Monday - Friday", times: "06:01 - 19:59" },
    { label: "UK100", days: "Sun - Thu", times: "22:01 - 20:59" },
    { label: "UK100", days: "Friday", times: "22:01 - 20:14" },
  ];
  return <TradingHoursSection title="European Indices - Futures — Daily Trading Hours (GMT)" hours={hours} />;
}

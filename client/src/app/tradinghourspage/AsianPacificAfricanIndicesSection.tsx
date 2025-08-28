"use client";
import React from "react";
import TradingHoursSection from "./TradingHoursSection";

export default function AsianPacificAfricanIndicesSection() {
  const hours = [
    { label: "China CSI 300", days: "Monday - Friday", times: "01:31 - 03:59, 05:01 - 07:59" },
    { label: "HongKong45", days: "Monday - Friday", times: "01:16 - 04:00, 05:01 - 08:29, 09:16 - 18:59" },
  ];
  return <TradingHoursSection title="Asian, Pacific and African Indices — Daily Trading Hours (GMT)" hours={hours} />;
}

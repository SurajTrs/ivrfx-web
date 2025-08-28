"use client";
import React from "react";
import TradingHoursSection from "./TradingHoursSection";

export default function CashIndicesSection() {
  const hours = [
    { label: "100UK", days: "Sun - Thu", times: "22:01 - 20:59" },
    { label: "100UK", days: "Friday", times: "22:01 - 20:14" },
    { label: "DE30", days: "Sun - Thu", times: "22:01 - 20:59" },
    { label: "DE30", days: "Friday", times: "22:01 - 20:15" },
    { label: "EU50", days: "Monday - Friday", times: "01:16 - 21:59" },
    { label: "FRA40", days: "Sun - Thu", times: "22:01 - 20:59" },
    { label: "FRA40", days: "Friday", times: "22:01 - 20:14" },
    { label: "HK33", days: "Monday - Friday", times: "01:16 - 04:00, 05:01 - 08:29, 09:16 - 18:59" },
    { label: "JPN225", days: "Sunday - Friday", times: "22:01 - 20:59" },
    { label: "SA40", days: "Monday - Friday", times: "05:02 - 14:49" },
    { label: "SPA35", days: "Monday - Friday", times: "07:01 - 20:59" },
    { label: "US100", days: "Sunday - Friday", times: "22:01 - 20:59" },
    { label: "US30", days: "Sunday - Friday", times: "22:01 - 20:59" },
    { label: "US500", days: "Sunday - Friday", times: "22:01 - 20:59" },
  ];
  return <TradingHoursSection title="Cash Indices — Daily Trading Hours (GMT)" hours={hours} />;
}

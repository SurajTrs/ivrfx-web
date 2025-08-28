"use client";
import React from "react";
import TradingHoursSection from "./TradingHoursSection";

export default function SoftAgriSection() {
  const hours = [
    { label: "Cocoa", days: "Monday - Friday", times: "08:46 - 17:29" },
    { label: "Coffee", days: "Monday - Friday", times: "08:16 - 17:29" },
    { label: "Cotton No2", days: "Monday - Friday", times: "01:01 - 18:19" },
    { label: "Sugar", days: "Monday - Friday", times: "07:31 - 16:59" },
    { label: "Corn", days: "Monday - Friday", times: "00:01 - 12:44, 13:31 - 18:19" },
    { label: "Wheat", days: "Monday - Friday", times: "00:01 - 12:44, 13:31 - 18:19" },
  ];
  return <TradingHoursSection title="Soft & Agriculture Commodities — Daily Trading Hours (GMT)" hours={hours} />;
}

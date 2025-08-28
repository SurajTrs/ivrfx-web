"use client";
import React from "react";
import TradingHoursSection from "./TradingHoursSection";

export default function StocksSection() {
  const hours = [
    { label: "French shares", days: "Monday - Friday", times: "07:02 - 15:29" },
    { label: "German Shares", days: "Monday - Friday", times: "07:01 - 10:59, 11:03 - 15:29" },
    { label: "HK shares", days: "Monday - Friday", times: "01:31 - 03:59, 05:01 - 07:59" },
    { label: "Dutch shares", days: "Monday - Friday", times: "07:01 - 15:29" },
    { label: "Italian shares", days: "Monday - Friday", times: "07:01 - 15:29" },
    { label: "Norwegian shares", days: "Monday - Friday", times: "07:01 - 14:19" },
    { label: "South African shares", days: "Monday - Friday", times: "08:01 - 15:49" },
    { label: "Spanish shares", days: "Monday - Friday", times: "07:01 - 15:29" },
    { label: "Swedish shares", days: "Monday - Friday", times: "07:01 - 15:24" },
    { label: "UK shares", days: "Monday - Friday", times: "07:01 - 10:59, 11:03 - 15:29" },
    { label: "USA shares/ETFs", days: "Monday - Friday", times: "13:31 - 19:59" },
  ];
  return <TradingHoursSection title="Stocks — Daily Trading Hours (GMT)" hours={hours} />;
}

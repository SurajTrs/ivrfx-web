"use client";
import React from "react";
import MT5Hero from "app/mt5page/MT5Hero";
import MT5MarketsClub from "app/mt5page/MT4MarketsClub";
import MT5Benefits from "app/mt5page/MT5Benefits";
import MT5CTA from "app/mt5page/MT5CTA";
import MT5FAQTeaser from "app/mt5page/MT5FAQTeaser";
import MT5Features from "app/mt5page/MT5Features";

export default function MT5Page() {
  return (
    <main>
      <MT5Hero />
      <MT5Features />
      <MT5Benefits />
      <MT5MarketsClub />
      <MT5FAQTeaser />
      <MT5CTA />
    </main>
  );
}

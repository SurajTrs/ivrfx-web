"use client";
import React from "react";
import MT4Hero from "../../mt4page/MT4Hero";
import MT4Features from "../../mt4page/MT4Features";
import MT4Benefits from "../../mt4page/MT4Benefits";
import MT4MarketsClub from "../../mt4page/MT4MarketsClub";
import MT4FAQTeaser from "../../mt4page/MT4FAQTeaser";
import MT4CTA from "../../mt4page/MT4CTA";

export default function MT4Page() {
  return (
    <main>
      <MT4Hero />
      <MT4Features />
      <MT4Benefits />
      <MT4MarketsClub />
      <MT4FAQTeaser />
      <MT4CTA />
    </main>
  );
}

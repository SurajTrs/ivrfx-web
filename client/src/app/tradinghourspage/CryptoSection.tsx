"use client";
import React from "react";
import TradingHoursSection from "app/tradinghourspage/TradingHoursSection";

export default function CryptoSection() {
  const hours = [
    { label: "Bitcoin", days: "Sunday - Friday", times: "24/7" },
    { label: "Ethereum", days: "Sunday - Friday", times: "24/7" },
    { label: "Litecoin", days: "Sunday - Friday", times: "24/7" },
    { label: "RIPPLE", days: "Sunday - Friday", times: "24/7" },
    { label: "BCHUSD", days: "", times: "24/7" },
    { label: "COMPUSD", days: "", times: "24/7" },
    { label: "ADAUSD", days: "", times: "24/7" },
    { label: "XLMUSD", days: "", times: "24/7" },
    { label: "Dash", days: "Sunday - Friday", times: "24/5 (Sun open 21:01 - Fri close 20:59)" },
    { label: "LINKUSD", days: "", times: "24/7" },
    { label: "XMRUSD", days: "", times: "24/7" },
    { label: "CRVUSD", days: "", times: "24/7" },
    { label: "SNXUSD", days: "", times: "24/7" },
    { label: "DOTUSD", days: "", times: "24/7" },
    { label: "XTZUSD", days: "", times: "24/7" },
    { label: "BATUSD", days: "", times: "24/7" },
    { label: "YFIUSD", days: "", times: "24/7" },
    { label: "EOSUSD", days: "", times: "24/7" },
    { label: "TRXUSD", days: "", times: "24/7" },
    { label: "BSVUSD", days: "Sunday - Friday", times: "24/5 (Sun open 21:01 - Fri close 20:59)" },
    { label: "NEOUSD", days: "Sunday - Friday", times: "24/5 (Sun open 21:01 - Fri close 20:59)" },
    { label: "MKRUSD", days: "Sunday - Friday", times: "24/5 (Sun open 21:01 - Fri close 20:59)" },
    { label: "ZRXUSD", days: "Sunday - Friday", times: "24/5 (Sun open 21:01 - Fri close 20:59)" },
    { label: "AAVEUSD", days: "Sunday - Friday", times: "24/5 (Sun open 21:01 - Fri close 20:59)" },
    { label: "DOGUSD", days: "Sunday - Friday", times: "24/5 (Sun open 21:01 - Fri close 20:59)" },
  ];
  return <TradingHoursSection title="Cryptocurrencies — Daily Trading Hours (GMT)" hours={hours} />;
}

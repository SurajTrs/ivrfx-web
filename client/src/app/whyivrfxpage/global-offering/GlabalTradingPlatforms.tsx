"use client";
import Reveal from "components/Reveal";
import React from "react";

const rows = [
  { label: "Trading Products", EU: "CFDs", SVG: "CFDs", ZA: "CFDs" },
  { label: "Client Categorisation", EU: "Retail, Elective Professional, Professional, *", SVG: "Retail", ZA: "Retail" },
  { label: "Loyalty awards", EU: "*Available only for Professional Clients", SVG: "Yes", ZA: "Yes" },
  { label: "Negative Balance Protection", EU: "You cannot lose more than your deposit", SVG: "Yes", ZA: "Yes" },
  { label: "Range of Markets", EU: "CFDs on forex, indices, commodities, shares, ETFs, Bonds, and Cryptos", SVG: "Same as EU", ZA: "Same as EU" },
  { label: "Trading Platforms", EU: "IVRFX Trader & MetaTrader 5 for Desktop, TradingView, iOS/Android", SVG: "Same as EU", ZA: "Same as EU" },
];

export default function TradingPlatforms() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <Reveal className="text-center mb-4">
          <h2 className="h1 fw-bold">Trading Platforms</h2>
          <div className="text-muted">See what accounts and platforms are on offer</div>
        </Reveal>

        <div className="table-responsive rounded-4 overflow-hidden" style={{ boxShadow: "0 6px 28px rgba(123,92,255,0.15)" }}>
          <table className="table align-middle mb-0">
            <thead style={{ background: "#f3efff" }}>
              <tr>
                <th className="py-3 px-4">Feature</th>
                <th className="py-3 px-4">Europe</th>
                <th className="py-3 px-4">SVG</th>
                <th className="py-3 px-4">South Africa</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label}>
                  <td className="px-4 fw-semibold" style={{ width: "28%" }}>{r.label}</td>
                  <td className="px-4">{r.EU}</td>
                  <td className="px-4">{r.SVG}</td>
                  <td className="px-4">{r.ZA}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="small text-muted mt-2">*Retail clients residents of France receive a trading account with limited risk on a per position basis in accordance with French regulation</p>
      </div>
    </section>
  );
}

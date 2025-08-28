"use client";
import React from "react";
import Reveal from "components/Reveal";

const depositRows = [
  { method: "Wire transfer", EU: "100 USD/ EUR/ GBP", ZA: "100 USD/1,500 ZAR", SVG: "100 USD/ EUR/ GBP" },
  { method: "Credit Card", EU: "100 USD/ EUR/ GBP", ZA: "100 USD/1,500 ZAR", SVG: "100 USD/ EUR/ GBP" },
  { method: "Skrill/Neteller", EU: "100 USD/ EUR/ GBP", ZA: "100 USD/1,500 ZAR", SVG: "100 USD/ EUR/ GBP" },
  { method: "PayPal", EU: "100 USD/ EUR/ GBP", ZA: "N/A", SVG: "N/A" },
  { method: "Local Bank transfer", EU: "100 USD/ EUR/ GBP", ZA: "100 USD/1,500 ZAR", SVG: "100 USD/ EUR/ GBP" },
  { method: "Ideal", EU: "100 USD/ EUR/ GBP", ZA: "N/A", SVG: "N/A" },
  { method: "Sofort", EU: "100 USD/ EUR/ GBP", ZA: "N/A", SVG: "N/A" },
];

const withdrawalRows = [
  { method: "Wire Transfer", EU: "100 USD/GBP/ 20 EUR", ZA: "10 USD or 100 ZAR", SVG: "100 USD/GBP/EUR" },
  { method: "Credit Card", EU: "10 USD/GBP/EUR", ZA: "5 USD/50 ZAR", SVG: "10 USD/GBP/EUR" },
  { method: "Skrill/Neteller", EU: "5 USD/GBP/EUR", ZA: "5 USD/50 ZAR", SVG: "5 USD/GBP/EUR" },
  { method: "PayPal", EU: "10 USD/GBP/EUR", ZA: "N/A", SVG: "N/A" },
];

export default function DepositsWithdrawals() {
  return (
    <section className="py-5">
      <div className="container">
        <Reveal className="text-center mb-4">
          <h2 className="h1 fw-bold">Deposits & Withdrawals</h2>
          <div className="text-muted">Fast, safe and secure deposits and withdrawals assured</div>
        </Reveal>

        <div className="row g-4">
          <div className="col-12">
            <div className="rounded-4 overflow-hidden" style={{ boxShadow: "0 6px 28px rgba(123,92,255,0.15)" }}>
              <div className="p-3" style={{ background: "#f3efff" }}>
                <strong>Deposits — Minimums</strong>
              </div>
              <div className="table-responsive">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th className="px-4">Company / PMs</th>
                      <th className="px-4">Europe</th>
                      <th className="px-4">Africa</th>
                      <th className="px-4">SVG</th>
                    </tr>
                  </thead>
                  <tbody>
                    {depositRows.map((r) => (
                      <tr key={r.method}>
                        <td className="px-4 fw-semibold">{r.method}</td>
                        <td className="px-4">{r.EU}</td>
                        <td className="px-4">{r.ZA}</td>
                        <td className="px-4">{r.SVG}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="rounded-4 overflow-hidden" style={{ boxShadow: "0 6px 28px rgba(123,92,255,0.15)" }}>
              <div className="p-3" style={{ background: "#f3efff" }}>
                <strong>Withdrawals — Minimums</strong>
              </div>
              <div className="table-responsive">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th className="px-4">Company/PM</th>
                      <th className="px-4">Europe</th>
                      <th className="px-4">Africa</th>
                      <th className="px-4">SVG</th>
                    </tr>
                  </thead>
                  <tbody>
                    {withdrawalRows.map((r) => (
                      <tr key={r.method}>
                        <td className="px-4 fw-semibold">{r.method}</td>
                        <td className="px-4">{r.EU}</td>
                        <td className="px-4">{r.ZA}</td>
                        <td className="px-4">{r.SVG}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

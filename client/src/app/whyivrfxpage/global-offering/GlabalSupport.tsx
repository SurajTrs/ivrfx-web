"use client";
import React from "react";
import Reveal from "components/Reveal";

const rows = [
  { label: "Languages", EU: "English, French, Spanish, Italian, Arabic", SVG: "English, French, Spanish, Italian, Arabic", ZA: "English, French, Spanish, Italian, Arabic" },
];

export default function Support() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <Reveal className="text-center mb-4">
          <h2 className="h1 fw-bold">Customer Support</h2>
          <div className="text-muted">We offer customer support in a number of languages</div>
        </Reveal>
        <div className="table-responsive rounded-4 overflow-hidden" style={{ boxShadow: "0 6px 28px rgba(123,92,255,0.15)" }}>
          <table className="table mb-0">
            <thead style={{ background: "#f3efff" }}>
              <tr>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Europe</th>
                <th className="py-3 px-4">SVG</th>
                <th className="py-3 px-4">South Africa</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label}>
                  <td className="px-4 fw-semibold">{r.label}</td>
                  <td className="px-4">{r.EU}</td>
                  <td className="px-4">{r.SVG}</td>
                  <td className="px-4">{r.ZA}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

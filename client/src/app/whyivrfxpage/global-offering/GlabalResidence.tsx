"use client";
import React from "react";
import Reveal from "components/Reveal";

const rows = [
  { label: "Residency", EU: "Europe and territories, Iceland, Norway", ZA: "Global applicants", SVG: "Global applicants" },
];

export default function Residence() {
  return (
    <section className="py-5">
      <div className="container">
        <Reveal className="text-center mb-4">
          <h2 className="h1 fw-bold">Country of Residence</h2>
          <div className="text-muted">Depending on where you live you may be able to select a different office</div>
        </Reveal>
        <div className="table-responsive rounded-4 overflow-hidden" style={{ boxShadow: "0 6px 28px rgba(123,92,255,0.15)" }}>
          <table className="table mb-0">
            <thead style={{ background: "#f3efff" }}>
              <tr>
                <th className="py-3 px-4">Criteria</th>
                <th className="py-3 px-4">Europe</th>
                <th className="py-3 px-4">South Africa</th>
                <th className="py-3 px-4">SVG</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label}>
                  <td className="px-4 fw-semibold">{r.label}</td>
                  <td className="px-4">{r.EU}</td>
                  <td className="px-4">{r.ZA}</td>
                  <td className="px-4">{r.SVG}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import Reveal from "components/Reveal";

const docs = [
  { label: "Documents required", EU: "√", SVG: "√", ZA: "√" },
  { label: "Electronic Verification*", EU: "√", SVG: "", ZA: "√" },
];

export default function Registration() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <Reveal className="text-center mb-4">
          <h2 className="h1 fw-bold">Registration Process</h2>
          <div className="text-muted">Signing up can vary depending on where you live</div>
        </Reveal>
        <div className="table-responsive rounded-4 overflow-hidden" style={{ boxShadow: "0 6px 28px rgba(123,92,255,0.15)" }}>
          <table className="table mb-0">
            <thead style={{ background: "#f3efff" }}>
              <tr>
                <th className="py-3 px-4">Requirement</th>
                <th className="py-3 px-4">Europe</th>
                <th className="py-3 px-4">SVG</th>
                <th className="py-3 px-4">South Africa</th>
              </tr>
            </thead>
            <tbody>
              {docs.map((d) => (
                <tr key={d.label}>
                  <td className="px-4 fw-semibold">{d.label}</td>
                  <td className="px-4">{d.EU}</td>
                  <td className="px-4">{d.SVG}</td>
                  <td className="px-4">{d.ZA}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="small text-muted mt-2">* Available in selected countries</p>
      </div>
    </section>
  );
}

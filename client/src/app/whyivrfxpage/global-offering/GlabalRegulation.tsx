"use client";
import React, { useState } from "react";
import Reveal from "components/Reveal";

const tabs = ["Europe", "SVG", "South Africa"] as const;

type Tab = typeof tabs[number];

const data: Record<Tab, { items: { label: string; value: string }[]; cta?: { label: string; href: string } }> = {
  Europe: {
    items: [
      { label: "Regulated by", value: "CySEC" },
      { label: "Supervised by", value: "CySEC" },
      { label: "Complaints Authority", value: "Financial Ombudsman" },
      { label: "Clients' money", value: "Clients' funds kept in segregated bank accounts" },
      { label: "Investor Compensation Scheme", value: "Yes – ICF (EUR20,000)" },
    ],
    cta: { label: "Visit EU Site", href: "#" },
  },
  SVG: {
    items: [
      { label: "Regulated by", value: "–" },
      { label: "Supervised by", value: "–" },
      { label: "Complaints Authority", value: "–" },
      { label: "Clients' money", value: "Clients' funds kept in segregated bank accounts" },
      { label: "Investor Compensation Scheme", value: "–" },
    ],
    cta: { label: "Visit SVG Site", href: "#" },
  },
  "South Africa": {
    items: [
      { label: "Regulated by", value: "FSCA" },
      { label: "Supervised by", value: "FSCA" },
      { label: "Complaints Authority", value: "FAIS Ombudsman" },
      { label: "Clients' money", value: "Clients' funds kept in segregated bank accounts" },
      { label: "Investor Compensation Scheme", value: "–" },
    ],
    cta: { label: "Visit ZA Site", href: "#" },
  },
};

export default function Regulation() {
  const [active, setActive] = useState<Tab>("Europe");
  const region = data[active];
  return (
    <section className="py-5">
      <div className="container">
        <Reveal className="text-center mb-4">
          <h2 className="h1 fw-bold">Regulation</h2>
        </Reveal>

        <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`btn ${active === t ? "btn-primary" : "btn-outline-primary"}`}
              style={{
                borderRadius: 999,
                background: active === t ? "#7b5cff" : undefined,
                borderColor: "#7b5cff",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        <Reveal className="row g-4 justify-content-center">
          {region.items.map((it) => (
            <div key={it.label} className="col-12 col-md-6 col-lg-4">
              <div className="p-4 rounded-4 h-100" style={{ background: "#fff", boxShadow: "0 6px 28px rgba(123,92,255,0.15)" }}>
                <div className="text-muted small mb-1">{it.label}</div>
                <div className="fw-semibold">{it.value}</div>
              </div>
            </div>
          ))}
          {region.cta && (
            <div className="col-12 text-center mt-2">
              <a href={region.cta.href} className="btn btn-lg text-white" style={{ background: "#7b5cff" }}>
                {region.cta.label}
              </a>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

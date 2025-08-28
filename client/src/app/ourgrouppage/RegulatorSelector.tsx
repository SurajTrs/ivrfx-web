"use client";
import React from "react";
import { useRegulator, Regulator } from "components/RegulatorContext";
import Reveal from "components/Reveal";

const items: { key: Regulator; label: string; desc: string; icon: string }[] = [
  { key: "ZA", label: "FSCA (ZA)", desc: "South Africa", icon: "bi-shield-check" },
  { key: "EU", label: "CySEC (EU)", desc: "European Union", icon: "bi-bank" },
  { key: "SVG", label: "FSA (SVG)", desc: "St. Vincent & The Grenadines", icon: "bi-globe2" },
];

export default function RegulatorSelector() {
  const { regulator, setRegulator } = useRegulator();

  return (
    <Reveal>
      <div className="row g-3">
        {items.map((r) => {
          const active = regulator === r.key;
          return (
            <div className="col-12 col-md-4" key={r.key}>
              <button
                type="button"
                onClick={() => setRegulator(r.key)}
                className={`w-100 text-start p-3 rounded-4 border-0 shadow-sm ${
                  active ? "bg-primary text-white" : "bg-white"
                }`}
                style={{ transition: "transform .2s ease, box-shadow .2s ease" }}
              >
                <div className="d-flex align-items-center">
                  <i className={`bi ${r.icon} fs-3 me-3 ${active ? "text-white" : "text-primary"}`} />
                  <div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="fw-semibold">{r.label}</span>
                      {active && <span className="badge bg-light text-primary">Selected</span>}
                    </div>
                    <small className={active ? "text-white-50" : "text-muted"}>{r.desc}</small>
                  </div>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}

"use client";
import React from "react";
import Reveal from "components/Reveal";

const features = [
  {
    title: "Algorithmic Trading",
    desc: "Automate your trading with Expert Advisors that you can plug into the platform.",
  },
  {
    title: "Fast Execution, Low Spreads",
    desc: "Execute trades fast and with low costs based on our pricing and trade infrastructure.",
  },
  {
    title: "Intuitive Charts",
    desc: "Fully customisable charts and a wide range of technical indicators.",
  },
  {
    title: "Trade Micro Lots",
    desc: "Use hedging tools and trade micro-lots from 0.01 lots to manage risk better.",
  },
];

const MT5Features: React.FC = () => {
  return (
    <section className="py-5 mb-5 bg-transparent" aria-label="MT5 Features">
      <div className="container">
        <div className="text-center mb-4">
          <h2
            className="fw-bold"
            style={{
              background: "linear-gradient(90deg, #5b21b6 0%, #7c3aed 35%, #a78bfa 70%, #22c55e 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Benefits of MT5
          </h2>
          <p className="m-0" style={{ color: "#6b7280" }}>Popular, powerful, and easy to use</p>
        </div>
        <div className="row g-4">
          {features.map((f, i) => (
            <div className="col-12 col-md-6" key={i}>
              <Reveal delay={i * 0.05}>
                <div
                  className="position-relative h-100 p-4 p-md-5 rounded-4 border bg-white hover-lift"
                  style={{
                    borderColor: "rgba(155,81,224,0.25)",
                    boxShadow: "0 4px 24px rgba(155,81,224,0.08)",
                    transition: "transform .25s ease, box-shadow .25s ease, border-color .25s ease",
                  }}
                >
                  {/* decorative purple glow */}
                  <div
                    aria-hidden="true"
                    className="position-absolute rounded-circle"
                    style={{
                      top: -30,
                      right: -30,
                      width: 120,
                      height: 120,
                      background: "radial-gradient(circle at center, rgba(155,81,224,0.25), rgba(155,81,224,0) 60%)",
                      filter: "blur(12px)",
                      pointerEvents: "none",
                    }}
                  />
                  <div className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
                    style={{
                      width: 40,
                      height: 40,
                      background: "linear-gradient(135deg, rgba(155,81,224,0.15), rgba(96,165,250,0.15))",
                      border: "1px solid rgba(155,81,224,0.35)",
                      color: "#7c3aed",
                    }}
                  >
                    <span className="small fw-bold">{i + 1}</span>
                  </div>
                  <h5 className="mb-2">{f.title}</h5>
                  <p className="text-secondary m-0">{f.desc}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MT5Features;

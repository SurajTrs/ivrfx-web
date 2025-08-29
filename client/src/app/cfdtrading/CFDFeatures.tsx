"use client";

import React from "react";
import Reveal from "components/Reveal";

export default function CFDFeatures() {
  const features = [
    { title: "Powerful tools", desc: "Advanced charting, watchlists, price alerts and risk controls.", icon: "bi bi-tools" },
    { title: "Asset coverage", desc: "Shares, indices, forex, commodities, bonds and crypto CFDs.", icon: "bi bi-grid-1x2" },
    { title: "Mobile & web", desc: "Trade seamlessly across devices with synced preferences.", icon: "bi bi-phone" },
  ];

  return (
    <section className="bg-white">
      <div className="container py-5 py-md-6">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-6">
            <Reveal>
              <div className="illustration-box rounded-4 border overflow-hidden mb-3 mb-lg-0 hover-lift tilt-card shine-sweep">
                <img src="/images/trading-illustration1.png" alt="Platform features" className="w-100 h-100 object-cover" onError={(e) => { e.currentTarget.src = "/images/trading-illustration.png"; }} />
              </div>
            </Reveal>
          </div>
          <div className="col-12 col-lg-6">
            <Reveal>
              <h2 className="fw-bold mb-3 gradient-text">Features built for CFD traders</h2>
            </Reveal>
            <div className="vstack gap-3">
              {features.map((f, idx) => (
                <Reveal key={f.title} delay={0.08 + idx * 0.07}>
                  <div className="d-flex gap-3 hover-lift">
                    <div className="chip"><i className={f.icon} /></div>
                    <div>
                      <div className="fw-semibold">{f.title}</div>
                      <div className="text-secondary">{f.desc}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .illustration-box { min-height: 280px; background: #f8f9fb; border-color: #ecebf1; box-shadow: 0 6px 18px rgba(17,24,39,.05); }
        .object-cover { object-fit: cover; object-position: center; display: block; }
        .chip { width: 42px; height: 42px; border-radius: 12px; display:inline-flex; align-items:center; justify-content:center; background:#ecfeff; color:#0891b2; border:1px solid #a5f3fc; animation: chipPulse 4.2s ease-in-out infinite; }
        @keyframes chipPulse { 0% { transform: translateY(0); box-shadow: 0 0 0 rgba(0,0,0,0); } 50% { transform: translateY(-2px); box-shadow: 0 6px 14px rgba(0,0,0,.08); } 100% { transform: translateY(0); box-shadow: 0 0 0 rgba(0,0,0,0); } }
        @media (min-width: 992px) { .illustration-box { min-height: 340px; } }
      `}</style>
    </section>
  );
}

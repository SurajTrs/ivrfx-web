"use client";

import React from "react";

export default function HowCalculatorWorks() {
  const steps = [
    { n: 1, title1: "Decide which symbol you want to trade" },
    { n: 2, title1: "Select your order size (quantity)"   },
    { n: 3, title1: "Decide whether to go long (buy) or short (sell)" },
    { n: 4, title1: "Calculate" },
    { n: 5, title1: "Check approximate fees before you proceed" },
  ];

  return (
    <section className="bg-white">
      <div className="container py-5 py-md-6">
        <div className="text-center mb-4">
          <h2 className="section-title">How does a CFD Trading calculator work?</h2>
          <p className="text-secondary mb-0">Follow these quick steps to estimate your potential P/L and costs.</p>
        </div>
        <div className="mx-auto" style={{maxWidth: 980}}>
          <div className="row g-3 g-md-4">
            {steps.map((s, idx) => (
              <div key={s.n} className="col-12 col-md-6">
                <div className="rounded-4 border p-3 p-md-4 h-100 how-card animate-stagger" style={{animationDelay: `${idx * 70}ms`}}>
                  <div className="d-flex gap-3 align-items-start">
                    <div className="step">{s.n}</div>
                    <div className="fw-semibold title1">{s.title1}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .section-title { font-weight: 800; letter-spacing: .2px; }
        .how-card {
          position: relative;
          border-color: #ecebf1;
          background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
          box-shadow: 0 6px 18px rgba(17,24,39,.05);
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .how-card::before {
          content: "";
          position: absolute;
          inset: 0 auto 0 0;
          width: 3px;
          border-radius: 12px 0 0 12px;
          background: linear-gradient(180deg, #a78bfa 0%, #6d28d9 100%);
          opacity: .9;
        }
        .how-card:hover { transform: translateY(-2px); box-shadow: 0 14px 28px rgba(17,24,39,.10); border-color: #e1dff2; }
        .step {
          width: 40px; height: 40px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center;
          background: radial-gradient(100% 100% at 50% 0%, #f3e8ff 0%, #f5f3ff 60%, #ffffff 100%);
          color: #6d28d9; font-weight: 800; border: 1px solid #e9d5ff;
          box-shadow: inset 0 1px 0 rgba(255,255,255,.85), 0 4px 10px rgba(109,40,217,.10);
          line-height: 1; letter-spacing: .2px;
        }
        .title1 { color: #0b0f19; font-weight: 700; line-height: 1.35; letter-spacing: .1px; }
        @keyframes fadeUp { from { opacity: 0; transform: translate3d(0,6px,0);} to { opacity: 1; transform: translate3d(0,0,0);} }
        .animate-stagger { animation: fadeUp .35s ease both; }
      `}</style>
    </section>
  );
}

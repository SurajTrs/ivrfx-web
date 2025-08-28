"use client";

import React from "react";
import Reveal from "components/Reveal";

export default function CFDBenefits() {
  const items = [
    { icon: "bi bi-graph-up", title: "Multi-asset platform", desc: "Informative, customisable charts and alerts across markets." },
    { icon: "bi bi-arrow-left-right", title: "Long or short", desc: "Trade rising or falling markets with flexible positioning." },
    { icon: "bi bi-lightning-charge", title: "Fast execution", desc: "Low latency order routing and reliable fills." },
    { icon: "bi bi-percent", title: "Lower spreads", desc: "Competitive pricing across major instruments." },
  ];

  return (
    <section className="bg-white">
      <div className="container py-5 py-md-6">
        <div className="text-center mb-4">
          <Reveal>
            <h2 className="fw-bold gradient-text">Why trade CFDs with us</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-secondary mb-0">Tools, pricing and performance designed for active traders.</p>
          </Reveal>
        </div>
        <div className="row g-3 g-md-4">
          {items.map((it, idx) => (
            <div className="col-12 col-md-6 col-lg-3" key={it.title}>
              <Reveal delay={0.1 + idx * 0.07}>
                <div className="h-100 p-3 p-md-4 rounded-4 border hover-lift shine-sweep" style={{borderColor: "#ecebf1", background: "linear-gradient(180deg,#ffffff,#fafafa)", boxShadow: "0 6px 18px rgba(17,24,39,.05)"}}>
                  <div className="chip mb-2"><i className={it.icon} /></div>
                  <h3 className="h5 fw-semibold mb-1">{it.title}</h3>
                  <p className="text-secondary mb-0">{it.desc}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .chip { width: 44px; height: 44px; border-radius: 12px; display:inline-flex; align-items:center; justify-content:center; background:#f5f3ff; color:#6d28d9; border:1px solid #e9d5ff; }
      `}</style>
    </section>
  );
}

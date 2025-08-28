"use client";

import React from "react";
import Reveal from "components/Reveal";

export default function CFDFaqTeaser() {
  const faqs = [
    { q: "What are CFDs?", a: "Contracts for Difference let you speculate on price movements without owning the underlying asset." },
    { q: "Can I go long and short?", a: "Yes. You can take positions on rising or falling markets." },
    { q: "Is leverage involved?", a: "Yes. Leverage amplifies both gains and losses. Use risk controls." },
  ];

  return (
    <section className="bg-light" style={{background: "#f8f9fb"}}>
      <div className="container py-5 py-md-6">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-6">
            <Reveal>
              <h2 className="fw-bold mb-3 gradient-text">CFD trading FAQs</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-secondary mb-4">Get quick answers to common questions before you dive in.</p>
            </Reveal>
            <div className="vstack gap-3">
              {faqs.map((f, idx) => (
                <Reveal key={f.q} delay={0.08 + idx * 0.07}>
                  <div className="p-3 p-md-4 rounded-4 border bg-white hover-lift shine-sweep" style={{borderColor: "#ecebf1", boxShadow: "0 6px 18px rgba(17,24,39,.05)"}}>
                    <div className="fw-semibold mb-1">{f.q}</div>
                    <div className="text-secondary">{f.a}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <Reveal>
              <div className="illustration-box rounded-4 border overflow-hidden hover-lift tilt-card shine-sweep">
                <img src="/images/cfd-3.jpg" alt="CFD FAQs" className="w-100 h-100 object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <style jsx>{`
        .illustration-box { min-height: 320px; background: #ffffff; border-color: #ecebf1; }
        .object-cover { object-fit: cover; object-position: center; display: block; }
      `}</style>
    </section>
  );
}

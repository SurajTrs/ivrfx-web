"use client";

import React from "react";

export default function GettingStarted() {
  const items = [
    "Open an account with IVRFX. Access via our app or online.",
    "New to trading? We have you covered with trading tools, training and 24/5 customer service.",
    "Experienced in trading? We have the tools and insights you need to grow your trading portfolio.",
  ];

  return (
    <section className="bg-white">
      <div className="container py-5 py-md-6">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-5 order-lg-1">
            <div className="rounded-circle overflow-hidden gs-visual shadow-lg animate-stagger" style={{animationDelay: '60ms'}}>
              <img src="/images/placeholder-app.png" alt="Trading app preview" className="w-100 h-100 object-fit-cover" />
            </div>
          </div>
          <div className="col-12 col-lg-7 order-lg-2">
            <div className="mb-3">
              <h2 className="section-title">How can I get started with Trading?</h2>
              <p className="text-secondary mb-0">A few simple steps to open your account and begin exploring the markets.</p>
            </div>
            <div className="vstack gap-3">
              {items.map((t, i) => (
                <div key={i} className="d-flex align-items-start gap-3 animate-stagger" style={{animationDelay: `${(i+1) * 80}ms`}}>
                  <span className="tick"><i className="bi bi-check2" /></span>
                  <p className="mb-0 text-secondary">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .section-title { font-weight: 800; letter-spacing: .2px; }
        .gs-visual { background: #f8fafc; width: 320px; height: 320px; }
        @media (min-width: 992px) { .gs-visual { width: 380px; height: 380px; } }
        .tick { width: 28px; height: 28px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; background: #f5f3ff; color: #6d28d9; flex: 0 0 28px; border: 1px solid #e9d5ff; }
        .tick :global(i) { font-size: 1rem; }
        @keyframes fadeUp { from { opacity:0; transform: translate3d(0,6px,0);} to {opacity:1; transform: translate3d(0,0,0);} }
        .animate-stagger { animation: fadeUp .35s ease both; }
      `}</style>
    </section>
  );
}

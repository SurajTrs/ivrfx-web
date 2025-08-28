"use client";

import React from "react";

type QA = { q: string; a: string };

const FAQ_ITEMS: QA[] = [
  {
    q: "What is a commodities profit calculator?",
    a: "It helps you estimate position value, margin requirement, spread, swaps and potential P/L for a planned commodities trade.",
  },
  {
    q: "How accurate are the results?",
    a: "These are estimates based on your inputs and typical fees. Actual results may differ due to live pricing, spreads and swap rates.",
  },
  {
    q: "Do I pay commissions on commodities?",
    a: "Most commodity CFDs are commission-free. Costs are usually embedded in the spread, plus overnight swaps if held overnight.",
  },
  {
    q: "What is margin and leverage?",
    a: "Leverage allows larger exposure with less capital. Margin is the funds required to open/maintain that leveraged position.",
  },
];

export default function CommoditiesFAQ() {
  return (
    <section className="bg-white">
      <div className="container py-5 py-md-6">
        <div className="text-center mb-4">
          <h2 className="section-title">Commodities calculator: FAQs</h2>
          <p className="text-secondary mb-0">Need more information? Explore quick answers below.</p>
        </div>

        <div className="mx-auto" style={{ maxWidth: 860 }}>
          <div className="vstack gap-2 gap-md-3">
            {FAQ_ITEMS.map((item, idx) => (
              <details className="faq-item animate-stagger" key={idx} style={{animationDelay: `${idx * 70}ms`}}>
                <summary className="faq-summary">
                  <span className="faq-q">{item.q}</span>
                  <span className="chev" aria-hidden>⌄</span>
                </summary>
                <div className="faq-body text-secondary">{item.a}</div>
              </details>
            ))}
          </div>

          <div className="text-center mt-4">
            <a href="#" className="see-all">See all FAQs</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-title { font-weight: 800; letter-spacing: .2px; }
        .faq-item { border: 1px solid #ecebf1; border-radius: 14px; background: linear-gradient(180deg,#fff, #fafafa); box-shadow: 0 4px 14px rgba(17,24,39,.04); overflow: hidden; }
        .faq-item[open] { box-shadow: 0 10px 24px rgba(17,24,39,.08); border-color: #e1dff2; }
        .faq-summary { display: flex; align-items: center; justify-content: space-between; gap: 12px; cursor: pointer; padding: 14px 16px; list-style: none; }
        .faq-summary::-webkit-details-marker { display: none; }
        .faq-q { font-weight: 600; color: #0b0f19; }
        .faq-body { padding: 0 16px 16px; }
        .chev { width: 28px; height: 28px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; background: #f5f3ff; color: #6d28d9; border: 1px solid #e9d5ff; font-weight: 700; transform: rotate(0deg); transition: transform .25s ease; }
        .faq-item[open] .chev { transform: rotate(180deg); }
        @keyframes fadeUp { from { opacity:0; transform: translate3d(0,6px,0);} to {opacity:1; transform: translate3d(0,0,0);} }
        .animate-stagger { animation: fadeUp .35s ease both; }
        .see-all { display: inline-block; font-weight: 600; color: #6d28d9; text-decoration: none; border: 1px solid #e9d5ff; padding: 8px 14px; border-radius: 999px; background: #f5f3ff; transition: all .2s ease; }
        .see-all:hover { background: #ede9fe; border-color: #c4b5fd; }
      `}</style>
    </section>
  );
}

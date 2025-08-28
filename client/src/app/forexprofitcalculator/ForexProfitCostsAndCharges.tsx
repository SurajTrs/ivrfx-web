"use client";

import React from "react";

export default function ForexProfitCostsAndCharges() {
  return (
    <section className="bg-white">
      <div className="container py-5 py-md-6">
        <div className="text-center mb-4">
          <h2 className="section-title1">Forex costs and charges explained</h2>
          <p className="text-secondary mb-0">Understand spreads, swaps and any commissions that may affect your final profit or loss.</p>
        </div>
        <div className="mx-auto" style={{maxWidth: 1080}}>
          <div className="row g-3 g-md-4">
            {ITEMS.map((it, idx) => (
              <div key={it.title} className="col-12 col-md-6">
                <article className="card-row animate-stagger" style={{animationDelay: `${idx * 70}ms`}}>
                  <div className="d-flex gap-3 align-items-start">
                    <div className="chip flex-shrink-0"><i className={it.icon}/></div>
                    <div>
                      <h3 className="h5 fw-semibold mb-1 title1">{it.title}</h3>
                      {it.desc.map((p, i) => (
                        <p key={i} className="mb-1 text-secondary">{p}</p>
                      ))}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .section-title1 { font-weight: 800; letter-spacing: .2px; }
        .card-row { padding: 18px 18px; border: 1px solid #ecebf1; border-radius: 16px; background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%); box-shadow: 0 6px 18px rgba(17,24,39,.05); transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; height: 100%; }
        .card-row:hover { transform: translateY(-2px); box-shadow: 0 14px 28px rgba(17,24,39,.10); border-color: #e1dff2; }
        .chip { width: 48px; height: 48px; border-radius: 14px; display: inline-flex; align-items: center; justify-content: center; background: radial-gradient(100% 100% at 50% 0%, #f3e8ff 0%, #f5f3ff 60%, #ffffff 100%); color: #6d28d9; border: 1px solid #e9d5ff; box-shadow: inset 0 1px 0 rgba(255,255,255,.8), 0 4px 10px rgba(109,40,217,.10); }
        .chip :global(i) { font-size: 1.15rem; }
        @keyframes fadeUp { from { opacity:0; transform: translate3d(0,6px,0);} to {opacity:1; transform: translate3d(0,0,0);} }
        .animate-stagger { animation: fadeUp .35s ease both; }
        .title1 { color: rgb(122, 2, 251); letter-spacing: .1px; }
      `}</style>
    </section>
  );
}

const ITEMS: {title: string; icon: string; desc: string[]}[] = [
  {
    title: "Spread",
    icon: "bi bi-bar-chart-line",
    desc: [
      "The spread is the difference between Bid and Ask; it varies by pair and liquidity. It directly impacts net P/L.",
    ],
  },
  {
    title: "Overnight swap (rollover)",
    icon: "bi bi-moon-stars",
    desc: [
      "Swaps can be a debit or credit when holding positions overnight; depends on the pair and trade direction.",
    ],
  },
  {
    title: "Commission",
    icon: "bi bi-asterisk",
    desc: [
      "Most pairs are commission-free on many accounts; if charged, commissions reduce net profit.",
    ],
  },
  {
    title: "Conversion fee",
    icon: "bi bi-currency-exchange",
    desc: [
      "If account currency differs from the settlement currency, conversion fees may apply at exit.",
    ],
  },
];

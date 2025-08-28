"use client";
import React, { useMemo, useState } from "react";

export default function AnalysisSection() {
  const tabs = [
    "All",
    "bonds",
    "stocks",
    "forex",
    "indices",
    "commodity",
    "crypto",
    "etfs",
    "cfd trading",
  ];

  const [active, setActive] = useState<string>("All");

  const articles = [
    {
      id: 1,
      title: "Meituan's Q2 Profit Plunges Amidst Fierce Price War",
      excerpt:
        "Meituan's profit plummeted in Q2 due to the price war in the food delivery market.",
      author: "Sophia Claire",
      time: "about 1 hour ago",
      tag: "stocks",
    },
    {
      id: 2,
      title: "BOJ Rate Hike Speculation Intensifies, Yields Climb",
      excerpt:
        "Speculation intensifies about a Bank of Japan rate hike in October, impacting markets.",
      author: "Ava Grace",
      time: "about 2 hours ago",
      tag: "bonds",
    },
    {
      id: 3,
      title:
        "Trump's Second Term Power Grab: Expanding Influence & Challenging Norms",
      excerpt:
        "A detailed analysis of broadening scope of power and implications for markets.",
      author: "Sophia Claire",
      time: "about 3 hours ago",
      tag: "indices",
    },
  ];

  const filtered = useMemo(() => {
    if (active === "All") return articles;
    return articles.filter((a) => a.tag === active);
  }, [active]);

  // Markets panel state and data
  const marketTabs = ["Popular", "Shares", "FX", "Commodities", "Indices"] as const;
  type MarketTab = typeof marketTabs[number];
  const [activeMarket, setActiveMarket] = useState<MarketTab>("Popular");

  const marketData: Record<MarketTab, { name: string; change: number }[]> = {
    Popular: [
      { name: "Apple", change: 0.67 },
      { name: "EUR/USD", change: -0.10 },
      { name: "Gold", change: 0.42 },
      { name: "Nvidia", change: 1.12 },
      { name: "BTC/USD", change: -1.77 },
      { name: "S&P 500", change: 0.25 },
    ],
    Shares: [
      { name: "Apple", change: 0.67 },
      { name: "easyJet", change: 1.81 },
      { name: "Santander", change: 1.12 },
      { name: "Meta", change: -0.38 },
      { name: "TSMC", change: 0.54 },
    ],
    FX: [
      { name: "EUR/USD", change: -0.10 },
      { name: "AUD/USD", change: 0.02 },
      { name: "USD/JPY", change: 0.19 },
      { name: "GBP/USD", change: -0.08 },
      { name: "USD/CAD", change: 0.11 },
    ],
    Commodities: [
      { name: "Palladium - Cash", change: 0.91 },
      { name: "Cotton", change: 0.83 },
      { name: "Silver", change: 0.68 },
      { name: "Crude Oil", change: -0.22 },
      { name: "Natural Gas", change: 0.35 },
    ],
    Indices: [
      { name: "S&P 500", change: 0.25 },
      { name: "NASDAQ 100", change: 0.44 },
      { name: "Dow Jones", change: -0.12 },
      { name: "DAX", change: 0.18 },
      { name: "NIFTY 50", change: 0.31 },
    ],
  };

  return (
    <section className="container py-4 py-lg-5">
      <div className="row g-4">
        {/* Left: Analysis list */}
        <div className="col-lg-8">
          <div className="d-flex align-items-center justify-content-between mb-3 mb-lg-4">
            <h2 className="h3 fw-bold m-0">Analysis</h2>
            <a className="small text-decoration-none" href="#" style={{color:'#7c3aed'}}>View all</a>
          </div>

          {/* Tabs */}
          <div className="border rounded-4 p-2 p-lg-3 mb-3 shadow-sm">
            <div className="d-flex flex-wrap gap-2">
              {tabs.map((t) => {
                const isActive = active === t;
                return (
                  <button
                    key={t}
                    onClick={() => setActive(t)}
                    className={`btn btn-sm ${isActive ? "btn-primary" : "btn-light"}`}
                    style={{ borderRadius: 9999 }}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          {/* List */}
          <div className="list-group list-group-flush">
            {filtered.map((a) => (
              <a
                key={a.id}
                href="#"
                className="list-group-item list-group-item-action py-4"
              >
                <div className="d-flex gap-3">
                  <div className="d-none d-sm-block rounded-3 bg-light flex-shrink-0" style={{width:96, height:64}} />
                  <div className="flex-grow-1">
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <span className="badge rounded-pill" style={{background:'#e9d5ff', color:'#5b21b6'}}>{a.tag}</span>
                    </div>
                    <h3 className="h5 fw-semibold mb-1">{a.title}</h3>
                    <p className="text-muted mb-2">{a.excerpt}</p>
                    <div className="small text-secondary">{a.author} · {a.time}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Markets sidebar */}
        <div className="col-lg-4">
          <aside className="border rounded-4 p-3 p-lg-4 shadow-sm">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h3 className="h6 fw-bold m-0">Markets</h3>
              <a className="small text-decoration-none" href="#" style={{color:'#7c3aed'}}>View all</a>
            </div>

            {/* Markets tabs */}
            <div className="d-flex flex-wrap gap-2 mb-2">
              {marketTabs.map((t) => {
                const isActive = activeMarket === t;
                return (
                  <button
                    key={t}
                    onClick={() => setActiveMarket(t)}
                    className={`btn btn-xs btn-sm ${isActive ? "btn-primary" : "btn-light"}`}
                    style={{ borderRadius: 9999 }}
                  >
                    {t}
                  </button>
                );
              })}
            </div>

            {/* Markets list for selected tab */}
            {marketData[activeMarket].map((item, idx) => {
              const negative = item.change < 0;
              const pct = Math.min(Math.abs(item.change) * 100, 100);
              return (
                <div key={item.name} className="d-flex align-items-center justify-content-between py-2">
                  <div className="d-flex align-items-center gap-2">
                    <span className="badge bg-light text-dark rounded-circle" style={{width:24,height:24}}> {idx+1} </span>
                    <div>
                      <div className="small fw-semibold">{item.name}</div>
                      <div className="d-none d-sm-block" style={{width:120, height:8, background:'#f1f5f9', borderRadius:9999}}>
                        <div style={{height:8, width:`${pct}%`, background: negative ? '#ef4444' : '#22c55e', borderRadius:9999}} />
                      </div>
                    </div>
                  </div>
                  <span className={negative ? "text-danger" : "text-success"}>
                    {item.change > 0 ? "+" : ""}{item.change.toFixed(2)}%
                  </span>
                </div>
              );
            })}
          </aside>
        </div>
      </div>
    </section>
  );
}

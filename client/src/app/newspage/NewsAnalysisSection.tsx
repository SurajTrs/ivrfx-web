"use client";
import React, { useMemo, useState } from "react";

export default function AnalysisSection() {
  const tabs = [
    "All",
    "South Africa",
    "Indices",
    "Forex",
    "Shares",
    "Commodities",
    "Cryptocurrencies",
    "Tech",
    "BoE",
    "BoJ",
    "CPI",
    "RBA",
    "Gold",
    "CFD Trading",
    "Copper",
    "Oil",
    "Natural Gas",
    "IPO",
    "EUR",
    "GBP",
    "JPY",
  ];

  const [active, setActive] = useState<string>("All");
  const [page, setPage] = useState<number>(1);
  const pageSize = 8;

  const articles = [
    {
      id: 1,
      title:
        "EU Eyes Tariff Removal on US Goods Amid Trade Deal Push",
      excerpt:
        "The EU is looking to remove tariffs on US industrial goods as part of a broader trade agreement with the US, while facing internal challenges due to the impact of US tariffs on the European aluminum industry.",
      author: "Sophia Claire",
      time: "about 20 hours ago",
      tag: "EUR",
    },
    {
      id: 2,
      title:
        "Asian Markets Ease Gold ETF Restrictions Amid Geopolitical Uncertainty",
      excerpt:
        "India and Vietnam are easing restrictions on gold ETFs in response to rising demand amid geopolitical uncertainty, opening their markets and potentially lowering local prices.",
      author: "Noah Lee",
      time: "about 24 hours ago",
      tag: "Gold",
    },
    {
      id: 3,
      title:
        "Russia's Economic Dilemma: Will the Ukraine War Push Towards Peace?",
      excerpt:
        "Russia faces increasing economic challenges due to the war in Ukraine, which may force it to reconsider its strategy. Will economic pressures lead to a search for a peaceful solution?",
      author: "Ava Grace",
      time: "1 day ago",
      tag: "Indices",
    },
    {
      id: 4,
      title:
        "Goldman Sachs Predicts Oil Prices to Plunge to $50s by 2026: Analyzing the Forecast",
      excerpt:
        "Goldman Sachs anticipates crude oil prices dropping to the $50s by 2026 due to increasing supply surplus. The market closely monitors geopolitical developments and their impact on oil prices.",
      author: "Ava Grace",
      time: "1 day ago",
      tag: "Oil",
    },
    {
      id: 5,
      title:
        "Cryptocurrency in Venezuela: An Economic Lifeline Amidst Hyperinflation and Sanctions",
      excerpt:
        "In Venezuela, cryptocurrency is becoming integral to the economy as citizens navigate hyperinflation and sanctions, turning digital assets into a fortress for savings.",
      author: "Noah Lee",
      time: "1 day ago",
      tag: "Cryptocurrencies",
    },
    {
      id: 6,
      title: "Cambricon Shares Surge Amidst AI Chip Demand",
      excerpt:
        "Cambricon shares surged, driven by strong financial performance and growing demand for domestic AI chips.",
      author: "Liam James",
      time: "1 day ago",
      tag: "Tech",
    },
    {
      id: 7,
      title: "US Tariffs on India: Economic Impact and Analysis",
      excerpt:
        "A comprehensive assessment of the impact of US tariffs on India, covering trade, investment, and growth.",
      author: "Emma Rose",
      time: "1 day ago",
      tag: "Shares",
    },
    {
      id: 8,
      title: "Iran Nuclear Deal Talks Stall: UN Sanctions Revival Looms",
      excerpt:
        "Talks between Iran and the European trio failed to yield a solution to avoid the revival of UN sanctions, raising concerns about the deal's future.",
      author: "Liam James",
      time: "1 day ago",
      tag: "Commodities",
    },
    {
      id: 9,
      title:
        "ExxonMobil Rethinks Sakhalin: A Potential Return Amid Geopolitical Shifts",
      excerpt:
        "ExxonMobil is exploring a potential return to Russia's Sakhalin project, signaling a strategic shift amid a complex geopolitical landscape.",
      author: "Emma Rose",
      time: "1 day ago",
      tag: "Oil",
    },
    {
      id: 10,
      title: "Trump Threatens 'Economic War' on Russia Over Ukraine",
      excerpt:
        "Donald Trump said he is ready to escalate economic pressure on Russia, threatening an 'economic war' if no resolution is reached.",
      author: "Ava Grace",
      time: "1 day ago",
      tag: "Indices",
    },
    {
      id: 11,
      title:
        "Trump Seeks to Reshape Federal Reserve: Cook Ouster Attempt and Allied Replacements",
      excerpt:
        "The administration is attempting to remove Lisa Cook and appoint allies, raising questions about Fed independence and politics.",
      author: "Noah Lee",
      time: "1 day ago",
      tag: "CPI",
    },
    {
      id: 12,
      title: "Trump Administration Reassessing Fed Influence: A Radical Shift?",
      excerpt:
        "Officials explore ways to increase influence over the Fed, including changes to regional president selection and indirect pressure on hawkish members.",
      author: "Noah Lee",
      time: "1 day ago",
      tag: "CPI",
    },
    {
      id: 13,
      title: "Morning Note: Nvidia's Q2 Earnings; UK Inflation; Oil Prices",
      excerpt:
        "Investors eye Nvidia's Q2 for AI and cloud signals while tracking UK inflation and oil moves.",
      author: "Tommy Yap",
      time: "1 day ago",
      tag: "Tech",
    },
    {
      id: 14,
      title: "BTCUSD Market Outlook: What’s Going on with Crypto Market Today?",
      excerpt:
        "A quick look at BTC price action and drivers shaping crypto sentiment today.",
      author: "Ghko B",
      time: "1 day ago",
      tag: "Cryptocurrencies",
    },
    {
      id: 15,
      title: "XRP News Today: Ripple (XRP) Hovers Near $2.99",
      excerpt:
        "XRP remains in focus amid legal and ecosystem updates, hovering near the $2.99 mark.",
      author: "Frances Wang",
      time: "1 day ago",
      tag: "Cryptocurrencies",
    },
    {
      id: 16,
      title: "US Treasury Yields Spike Amid Fed Independence Concerns",
      excerpt:
        "Treasury bonds sold off as markets weigh potential political interference with Fed independence, pushing yields higher.",
      author: "Emma Rose",
      time: "2 days ago",
      tag: "CPI",
    },
    {
      id: 17,
      title: "Trump's Challenge to Fed Independence: Global Markets React",
      excerpt:
        "Global markets react to concerns over Fed independence, with implications for the dollar and US bonds.",
      author: "Sophia Claire",
      time: "2 days ago",
      tag: "CPI",
    },
    {
      id: 18,
      title: "Japan Bond Yields Test Historic Highs Amid US Fed Concerns",
      excerpt:
        "Japan's long-term yields test highs amid questions over US Fed independence and global monetary paths.",
      author: "Emma Rose",
      time: "2 days ago",
      tag: "BoJ",
    },
    {
      id: 19,
      title: "Ukraine Seeks US Arms Funding Amid Shifting Geopolitics",
      excerpt:
        "President Zelensky seeks monthly financing from allies for US weapons as Western policies evolve.",
      author: "Noah Lee",
      time: "2 days ago",
      tag: "Indices",
    },
    {
      id: 20,
      title: "US-Russia Energy Deal Proposals Emerge in Ukraine Peace Talks",
      excerpt:
        "Reports suggest energy-focused proposals, including ExxonMobil re-entering Sakhalin-1 and LNG equipment purchases, as part of peace efforts.",
      author: "Ava Grace",
      time: "2 days ago",
      tag: "Natural Gas",
    },
    { id: 21, title: "Copper Prices Firm as China Stimulus Bets Rise", excerpt: "Copper finds support on expectations of fresh Chinese stimulus to boost construction.", author: "Ava Grace", time: "2 days ago", tag: "Copper" },
    { id: 22, title: "BoE Minutes: Tight Policy to Stay Longer", excerpt: "Bank of England minutes suggest restrictive policy may be prolonged to tame inflation.", author: "Sophia Claire", time: "2 days ago", tag: "BoE" },
    { id: 23, title: "RBA Hints at Patience Amid Mixed Data", excerpt: "RBA acknowledges mixed signals in labor and inflation, favors patience.", author: "Emma Rose", time: "3 days ago", tag: "RBA" },
    { id: 24, title: "IPO Watch: Tech Unicorn Eyes Dual Listing", excerpt: "A leading SaaS firm preps dual listing amid improved primary market sentiment.", author: "Liam James", time: "3 days ago", tag: "IPO" },
    { id: 25, title: "South Africa Power Constraints Weigh on Rand", excerpt: "Rolling outages pressure growth outlook and the rand despite higher commodity prices.", author: "Noah Lee", time: "3 days ago", tag: "South Africa" },
    { id: 26, title: "GBP Edges Higher on Services Surprise", excerpt: "Stronger services PMI lifts sterling; markets reassess BoE path.", author: "Sophia Claire", time: "3 days ago", tag: "GBP" },
    { id: 27, title: "JPY Weakness Revives Intervention Talk", excerpt: "Yen slides near key levels, traders watch for MoF signals.", author: "Tommy Yap", time: "3 days ago", tag: "JPY" },
    { id: 28, title: "Natural Gas Storage Builds; Prices Drift", excerpt: "Inventories rise modestly; weather models temper upside momentum.", author: "Frances Wang", time: "3 days ago", tag: "Natural Gas" },
    { id: 29, title: "CFD Trading: Managing Overnight Risks", excerpt: "Key techniques to manage swaps and gaps when holding CFD positions overnight.", author: "Ghko B", time: "3 days ago", tag: "CFD Trading" },
    { id: 30, title: "Tech Mega-Caps Lead US Rally", excerpt: "AI optimism keeps mega-caps in charge even as breadth lags.", author: "Liam James", time: "3 days ago", tag: "Tech" },
  ];

  const filtered = useMemo(() => {
    const base = active === "All" ? articles : articles.filter((a) => a.tag === active);
    return base;
  }, [active]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paginated = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

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
                    onClick={() => { setActive(t); setPage(1); }}
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
            {paginated.map((a) => (
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
      {/* Pagination */}
      <div className="mt-4 d-flex align-items-center gap-2 justify-content-center">
        {Array.from({length: Math.min(3, totalPages)}, (_, i) => i + 1).map(n => (
          <button
            key={n}
            onClick={() => setPage(n)}
            className={`btn btn-sm ${n===page? 'btn-primary':'btn-light'}`}
            style={{borderRadius:8, minWidth:40}}
          >
            {n}
          </button>
        ))}
        <button className="btn btn-link p-0 text-secondary small" onClick={() => setPage(totalPages)}>
          More pages
        </button>
        <button className="badge text-bg-light border-0" onClick={() => setPage(totalPages)} style={{cursor:'pointer'}}>177</button>
      </div>
    </section>
  );
}

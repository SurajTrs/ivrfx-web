"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

type QuoteRow = {
  symbol: string;
  shortName: string;
  bid: number | null;
  ask: number | null;
  changePercent: number | null;
  price: number | null;
  currency: string | null;
};

const CATEGORIES: { key: string; label: string; symbols: string[] }[] = [
  {
    key: "most",
    label: "Most Traded",
    symbols: ["AAPL", "US100", "XAU/USD", "EUR/USD"], // US Tech 100 -> US100, Gold -> XAU/USD
  },
  {
    key: "commodities",
    label: "Commodities",
    symbols: ["XAU/USD", "XAG/USD", "WTI", "BRENT"],
  },
  {
    key: "indices",
    label: "Indices",
    symbols: ["US100", "US500", "DJI"],
  },
  {
    key: "crypto",
    label: "Crypto",
    symbols: ["BTC/USD", "ETH/USD", "LTC/USD"],
  },
  {
    key: "shares",
    label: "Shares",
    symbols: ["AAPL", "AMZN", "TSLA", "NVDA"],
  },
  {
    key: "forex",
    label: "Forex",
    symbols: ["EUR/USD", "GBP/USD", "USD/JPY", "USD/CAD"],
  },
];

function formatNumber(n: number | null) {
  if (n == null || !Number.isFinite(n)) return "-";
  const abs = Math.abs(n);
  const opts: Intl.NumberFormatOptions =
    abs >= 1000 ? { maximumFractionDigits: 2 } : { minimumFractionDigits: 4, maximumFractionDigits: 4 };
  return new Intl.NumberFormat(undefined, opts).format(n);
}

// Map symbols to TradingView format (subset of the main mapping)
function toTVSymbol(s: string) {
  const raw = s.toUpperCase().trim();
  const clean = raw.replace(/\s+/g, "");
  const noslash = clean.replace("/", "");
  if (clean.includes(":")) return clean;
  // Crypto first (support both BTC/USD and BTCUSD)
  const cryptoMap: Record<string, string> = {
    BTCUSD: "COINBASE:BTCUSD",
    ETHUSD: "COINBASE:ETHUSD",
    LTCUSD: "COINBASE:LTCUSD",
  };
  if (cryptoMap[noslash]) return cryptoMap[noslash];
  // Indices next
  const indicesMap: Record<string, string> = {
    US100: "TVC:NDX",
    US500: "TVC:SPX",
    DJI: "TVC:DJI",
  };
  if (indicesMap[clean]) return indicesMap[clean];
  // Commodities (prefer provider tickers over FX)
  const commoditiesMap: Record<string, string> = {
    XAUUSD: "TVC:GOLD",   // broader availability than broker feed
    XAGUSD: "TVC:SILVER",
    WTI: "TVC:USOIL",
    BRENT: "TVC:UKOIL",
  };
  if (commoditiesMap[noslash]) return commoditiesMap[noslash];
  // FX pairs
  if (/^[A-Z]{3}\/[A-Z]{3}$/.test(raw)) return `FX:${noslash}`;
  if (/^[A-Z]{6}$/.test(clean)) return `FX:${clean}`;
  // Default equities guess
  if (/^[A-Z.]{1,5}$/.test(clean)) return `NASDAQ:${clean}`;
  return clean;
}

function RowChart({ symbol }: { symbol: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const tvSymbol = useMemo(() => toTVSymbol(symbol), [symbol]);
  useEffect(() => {
    const elNow = ref.current;
    if (!elNow) return;
    // Use Mini Symbol Overview embed for compact charts
    elNow.innerHTML = "";
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.async = true;
    const config = {
      symbol: tvSymbol,
      // Let widget auto-size to container width/height
      autosize: true,
      locale: "en",
      dateRange: "1D",
      colorTheme: "dark",
      trendLineColor: "#21c55d",
      underLineColor: "rgba(34, 197, 94, 0.15)",
      isTransparent: true,
      largeChartUrl: "",
    } as any;
    script.innerHTML = JSON.stringify(config);
    elNow.appendChild(script);
    return () => { if (ref.current) ref.current.innerHTML = ""; };
  }, [tvSymbol]);
  // Container controls responsive size via CSS (.tv-mini)
  return <div ref={ref} className="tv-mini" />;
}

export default function MostTraded() {
  const [active, setActive] = useState(CATEGORIES[0].key);
  // Chart-only mode: derive rows from active symbols (no quote API)
  const activeSymbols = useMemo(() => CATEGORIES.find((c) => c.key === active)?.symbols || [], [active]);
  const rows = useMemo(() => activeSymbols.map((s) => ({ symbol: s, shortName: s } as any)), [activeSymbols]);

  return (
    <section className="mt-wrap">
      <div className="mt-card">
        <aside className="mt-nav" aria-label="Most traded categories">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              className={`mt-nav-item ${active === c.key ? "active" : ""}`}
              onClick={() => setActive(c.key)}
              type="button"
            >
              <span className="mt-dot" aria-hidden />
              {c.label}
            </button>
          ))}
        </aside>
        <div className="mt-table">
          <h3 className="mt-title">Most Traded</h3>
          <div className="mt-head">
            <span>Asset</span>
            <span>Chart</span>
            <span />
          </div>
          <div className="mt-body">
            {rows.map((r) => {
              const toParam = (s: string) => encodeURIComponent(s.toUpperCase().replace(/\s+/g, "").replace(/\//g, "-"));
              return (
                <div key={r.symbol} className="mt-row">
                  <div className="mt-asset">
                    <span className="mt-avatar" aria-hidden>{r.shortName?.[0] ?? "?"}</span>
                    <div className="mt-name">
                      <strong>{r.shortName || r.symbol}</strong>
                      <span className="mt-sym">{r.symbol}</span>
                    </div>
                  </div>
                  <div className="mt-chart">
                    <RowChart symbol={r.symbol} />
                  </div>
                  <div className="mt-chart">
                    {/* spacer for layout if needed */}
                  </div>
                  <div className="mt-cta">
                    <Link
                      className="mt-trade"
                      href={`/trade/${toParam(r.symbol)}`}
                      aria-label={`Trade ${r.symbol} now`}
                    >
                      Trade Now
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-cta-bottom">
        <a href="/trade" className="start-btn" aria-label="Open trading workspace">Start Trading Now</a>
      </div>
    </section>
  );
}

"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import TradingViewChart from "./TradingViewChart";

// Minimal mapper to TV symbols similar to MostTraded.toTVSymbol
function toTVSymbol(input: string) {
  const raw = (input || "").toUpperCase().trim();
  const clean = raw.replace(/\s+/g, "");
  const noslash = clean.replace("/", "");
  if (clean.includes(":")) return clean;
  const crypto: Record<string, string> = {
    BTCUSD: "COINBASE:BTCUSD",
    ETHUSD: "COINBASE:ETHUSD",
    LTCUSD: "COINBASE:LTCUSD",
    BTCUSDT: "BINANCE:BTCUSDT",
    ETHUSDT: "BINANCE:ETHUSDT",
  };
  if (crypto[noslash]) return crypto[noslash];
  const indices: Record<string, string> = {
    US100: "TVC:NDX",
    US500: "TVC:SPX",
    DJI: "TVC:DJI",
  };
  if (indices[clean]) return indices[clean];
  const commodities: Record<string, string> = {
    XAUUSD: "TVC:GOLD",
    XAGUSD: "TVC:SILVER",
    WTI: "TVC:USOIL",
    BRENT: "TVC:UKOIL",
  };
  if (commodities[noslash]) return commodities[noslash];
  if (/^[A-Z]{3}\/[A-Z]{3}$/.test(raw)) return `FX:${noslash}`;
  if (/^[A-Z]{6}$/.test(clean)) return `FX:${clean}`;
  if (/^[A-Z.]{1,5}$/.test(clean)) return `NASDAQ:${clean}`;
  return clean || "NASDAQ:AAPL";
}

const DEFAULT_WATCHLIST = [
  "AAPL",
  "US100",
  "EUR/USD",
  "XAU/USD",
  "BTC/USD",
  "ETH/USD",
];

export default function TradeWorkspace({ symbol }: { symbol?: string }) {
  const initial = symbol || "AAPL";
  const [active, setActive] = useState<string>(initial);
  const tvSymbol = useMemo(() => toTVSymbol(active), [active]);

  return (
    <section className="container-fluid py-3">
      <div className="row g-3">
        {/* Watchlist - left */}
        <aside className="col-12 col-lg-2">
          <div className="card bg-dark text-white border-0">
            <div className="card-header bg-black border-0 py-2">Watchlist</div>
            <ul className="list-group list-group-flush">
              {DEFAULT_WATCHLIST.map((s) => {
                const isActive = s === active;
                const toParam = encodeURIComponent(s.toUpperCase().replace(/\s+/g, "").replace(/\//g, "-"));
                return (
                  <li key={s} className="list-group-item bg-dark text-white d-flex justify-content-between align-items-center">
                    <button className={`btn btn-sm ${isActive ? "btn-primary" : "btn-outline-light"}`} onClick={() => setActive(s)}>
                      {s}
                    </button>
                    <Link href={`/trade/${toParam}`} className="small text-decoration-none">open</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Chart - center */}
        <main className="col-12 col-lg-7">
          <div className="card bg-dark border-0">
            <div className="card-header bg-black border-0 py-2 d-flex justify-content-between align-items-center">
              <span className="text-white">{active}</span>
              <div className="d-flex gap-2">
                <button className="btn btn-sm btn-outline-light" onClick={() => setActive("AAPL")}>AAPL</button>
                <button className="btn btn-sm btn-outline-light" onClick={() => setActive("EUR/USD")}>EUR/USD</button>
                <button className="btn btn-sm btn-outline-light" onClick={() => setActive("BTC/USD")}>BTC/USD</button>
              </div>
            </div>
            <div className="card-body p-0">
              <TradingViewChart symbol={tvSymbol} height={520} />
            </div>
          </div>
        </main>

        {/* Order ticket - right */}
        <aside className="col-12 col-lg-3">
          <div className="card bg-dark text-white border-0">
            <div className="card-header bg-black border-0 py-2">Order Ticket</div>
            <div className="card-body">
              <div className="mb-2">
                <label className="form-label small">Symbol</label>
                <input className="form-control form-control-sm bg-black text-white" value={active} onChange={(e) => setActive(e.target.value)} />
              </div>
              <div className="row g-2 mb-2">
                <div className="col-6">
                  <label className="form-label small">Order Type</label>
                  <select className="form-select form-select-sm bg-black text-white">
                    <option>Market</option>
                    <option>Limit</option>
                  </select>
                </div>
                <div className="col-6">
                  <label className="form-label small">Quantity</label>
                  <input type="number" className="form-control form-control-sm bg-black text-white" defaultValue={1} min={1} />
                </div>
              </div>
              <div className="row g-2 mb-3">
                <div className="col-6">
                  <label className="form-label small">SL</label>
                  <input type="number" className="form-control form-control-sm bg-black text-white" placeholder="Stop Loss" />
                </div>
                <div className="col-6">
                  <label className="form-label small">TP</label>
                  <input type="number" className="form-control form-control-sm bg-black text-white" placeholder="Take Profit" />
                </div>
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-success">Buy</button>
                <button className="btn btn-outline-danger">Sell</button>
              </div>
              <p className="text-muted small mt-2">Demo UI only.</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

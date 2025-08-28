"use client";

import { useEffect, useMemo, useState } from "react";

type Market = "Forex" | "Shares" | "Indices" | "Commodities";
type AccountType = "Retail" | "Professional";

const INSTRUMENTS: Record<Market, Array<{ label: string; symbol: string; contract: number }>> = {
  Forex: [
    { label: "EUR/USD", symbol: "EURUSD=X", contract: 1000 },
    { label: "GBP/USD", symbol: "GBPUSD=X", contract: 1000 },
    { label: "XAU/USD", symbol: "XAUUSD=X", contract: 1 },
  ],
  Shares: [
    { label: "Apple", symbol: "AAPL", contract: 1 },
    { label: "Tesla", symbol: "TSLA", contract: 1 },
  ],
  Indices: [
    { label: "S&P 500", symbol: "^GSPC", contract: 1 },
  ],
  Commodities: [
    { label: "Crude Oil", symbol: "CL=F", contract: 1 },
  ],
};

export default function CFDCalculator() {
  const [currency, setCurrency] = useState("USD");
  const [market, setMarket] = useState<Market>("Shares");
  const [instrumentIdx, setInstrumentIdx] = useState(0);
  const [account, setAccount] = useState<AccountType>("Retail");
  const [direction, setDirection] = useState<"buy" | "sell">("buy");
  const [qty, setQty] = useState<number>(1);
  const [leverage, setLeverage] = useState<number>(30);
  const [entry, setEntry] = useState<number>(0);
  const [exit, setExit] = useState<number | "">("");
  const [spread, setSpread] = useState<number>(0);
  const [swapPerDay, setSwapPerDay] = useState<number>(-0.5);
  const [holdingDays, setHoldingDays] = useState<number>(0);

  const instruments = INSTRUMENTS[market];
  const sel = instruments[instrumentIdx];

  // Real-time quote fetcher (Yahoo Finance public quote API)
  useEffect(() => {
    let alive = true;
    async function fetchQuote() {
      try {
        const res = await fetch(`https://query1.finance.yahoo.com/v7/finance/quote?symbols=${encodeURIComponent(sel.symbol)}`);
        const data = await res.json();
        const q = data?.quoteResponse?.result?.[0];
        if (!q) return;
        const price = Number(q.regularMarketPrice ?? q.postMarketPrice ?? q.bid ?? q.ask);
        const bid = Number(q.bid ?? price);
        const ask = Number(q.ask ?? price);
        if (!Number.isFinite(price)) return;
        if (alive) {
          setEntry(price);
          setSpread(Math.max(ask - bid, 0));
        }
      } catch (_) {
        // ignore network errors
      }
    }
    fetchQuote();
    const t = setInterval(fetchQuote, 5000);
    return () => { alive = false; clearInterval(t); };
  }, [market, instrumentIdx]);

  const contractUnits = useMemo(() => qty * sel.contract, [qty, sel.contract]);

  const results = useMemo(() => {
    const effExit = exit === "" ? entry : Number(exit);
    const move = direction === "buy" ? effExit - entry : entry - effExit;
    const grossPL = move * contractUnits; // simplified
    const spreadCost = Math.abs(spread) * contractUnits;
    const swapCost = swapPerDay * holdingDays;
    const commission = 0; // placeholder
    const conversionFee = 0; // placeholder
    const netPL = grossPL - spreadCost - commission - conversionFee + swapCost;
    const requiredMargin = (entry * contractUnits) / Math.max(leverage, 1);
    return { move, grossPL, spreadCost, swapCost, commission, conversionFee, netPL, requiredMargin };
  }, [direction, exit, entry, contractUnits, spread, swapPerDay, holdingDays, leverage]);

  const format = (n: number | string) => typeof n === "number"
    ? n.toLocaleString(undefined, { maximumFractionDigits: 2 })
    : n;

  return (
    <section className="bg-white">
      <div className="container py-4 py-md-5">
        <div className="alert alert-light border rounded-4 mb-4 calc-info animate-fade-in">
          <div className="d-flex align-items-start gap-3">
            <div className="icon-wrap">
              <i className="bi bi-info-circle"></i>
            </div>
            <div>
              <div className="title text-dark">What is a CFD Trading Calculator?</div>
              <p className="mb-1 desc">The IVRFX Trading Calculator is a simple tool designed to calculate your hypothetical P/L (aggregated cost and charges) if you had opened a trade today.</p>
              <p className="mb-0 desc">Using our calculator, you can easily evaluate any position you already hold or are about to open by calculating its spread, margin requirement, overnight swap and more.</p>
            </div>
          </div>
        </div>
        <div className="calc-card rounded-4 border p-3 p-md-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h3 className="h5 fw-bold mb-1">Choose your points of movement</h3>
              <p className="text-secondary small mb-0">Calculate your hypothetical P/L (aggregated cost and charges) if you had opened a trade today.</p>
            </div>
            <div>
              <div className="dropdown">
                <button className="btn btn-outline-purple dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">{currency}</button>
                <ul className="dropdown-menu dropdown-menu-end">
                  {["USD","EUR","GBP"].map(c => (
                    <li key={c}><button className="dropdown-item" onClick={() => setCurrency(c)}>{c}</button></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-12 col-lg-7">
              <div className="row g-3">
                <div className="col-6">
                  <label className="form-label small">Market</label>
                  <select className="form-select" value={market} onChange={(e) => { setMarket(e.target.value as Market); setInstrumentIdx(0); }}>
                    {Object.keys(INSTRUMENTS).map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
                <div className="col-6">
                  <label className="form-label small">Instrument</label>
                  <select className="form-select" value={instrumentIdx} onChange={(e) => setInstrumentIdx(Number(e.target.value))}>
                    {instruments.map((ins, i) => (
                      <option key={ins.symbol} value={i}>{ins.label}</option>
                    ))}
                  </select>
                </div>

                <div className="col-6">
                  <label className="form-label small">Account Type</label>
                  <div className="btn-group w-100">
                    <button type="button" className={`btn ${account === "Retail" ? "btn-purple" : "btn-outline-purple"}`} onClick={() => setAccount("Retail")}>Retail</button>
                    <button type="button" className={`btn ${account === "Professional" ? "btn-purple" : "btn-outline-purple"}`} onClick={() => setAccount("Professional")}>Professional</button>
                  </div>
                </div>
                <div className="col-6">
                  <label className="form-label small">Direction</label>
                  <div className="btn-group w-100">
                    <button type="button" className={`btn ${direction === "sell" ? "btn-purple" : "btn-outline-purple"}`} onClick={() => setDirection("sell")}>Sell</button>
                    <button type="button" className={`btn ${direction === "buy" ? "btn-purple" : "btn-outline-purple"}`} onClick={() => setDirection("buy")}>Buy</button>
                  </div>
                </div>

                <div className="col-6">
                  <label className="form-label small">Quantity</label>
                  <div className="input-group">
                    <button className="btn btn-outline-secondary" type="button" onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
                    <input type="number" className="form-control" value={qty} min={1} onChange={(e) => setQty(Math.max(1, Number(e.target.value)))} />
                    <button className="btn btn-outline-secondary" type="button" onClick={() => setQty(qty + 1)}>+</button>
                  </div>
                </div>
                <div className="col-6">
                  <label className="form-label small">Leverage (x)</label>
                  <input type="number" className="form-control" value={leverage} min={1} onChange={(e) => setLeverage(Number(e.target.value))} />
                </div>

                <div className="col-6">
                  <label className="form-label small">Entry (live)</label>
                  <input type="number" className="form-control" value={entry} onChange={(e) => setEntry(Number(e.target.value))} />
                </div>
                <div className="col-6">
                  <label className="form-label small">Exit (optional)</label>
                  <input type="number" className="form-control" value={exit === "" ? "" : exit} onChange={(e) => setExit(e.target.value === "" ? "" : Number(e.target.value))} />
                </div>

                <div className="col-6">
                  <label className="form-label small">Spread</label>
                  <input type="number" className="form-control" value={spread} step="0.0001" onChange={(e) => setSpread(Number(e.target.value))} />
                </div>
                <div className="col-6">
                  <label className="form-label small">Overnight Swaps (per day)</label>
                  <input type="number" className="form-control" value={swapPerDay} step="0.01" onChange={(e) => setSwapPerDay(Number(e.target.value))} />
                </div>
                <div className="col-6">
                  <label className="form-label small">Holding Days</label>
                  <input type="number" className="form-control" value={holdingDays} min={0} onChange={(e) => setHoldingDays(Number(e.target.value))} />
                </div>

                <div className="col-12">
                  <button className="btn btn-dark rounded-pill">Calculate</button>
                </div>
                <div className="col-12">
                  <small className="text-secondary">All positions on instruments denominated in a currency that is different from your account currency will be subject to a conversion fee at the position exit as well.</small>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5 ms-lg-auto">
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <div className="calc-card rounded-4 border p-3 h-100">
                    <div className="text-secondary small">Value</div>
                    <div className="fw-bold">{currency} {format(entry * contractUnits)}</div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="calc-card rounded-4 border p-3 h-100">
                    <div className="text-secondary small">Commission</div>
                    <div className="fw-bold">{currency} {format(results.commission)}</div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="calc-card rounded-4 border p-3 h-100">
                    <div className="text-secondary small">Spread</div>
                    <div className="fw-bold">{format(spread)}</div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="calc-card rounded-4 border p-3 h-100">
                    <div className="text-secondary small">Leverage</div>
                    <div className="fw-bold">{format(leverage)}×</div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="calc-card rounded-4 border p-3 h-100">
                    <div className="text-secondary small">Conversion Fee</div>
                    <div className="fw-bold">{currency} {format(results.conversionFee)}</div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="calc-card rounded-4 border p-3 h-100">
                    <div className="text-secondary small">Required Margin</div>
                    <div className="fw-bold">{currency} {format(results.requiredMargin)}</div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="calc-card rounded-4 border p-3 h-100">
                    <div className="text-secondary small">Overnight Swaps</div>
                    <div className={`fw-bold ${results.swapCost >= 0 ? "text-success" : "text-danger"}`}>{currency} {format(results.swapCost)}</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="calc-card rounded-4 border p-3">
                    <div className="d-flex justify-content-between">
                      <span className="fw-bold">Net P/L</span>
                      <span className={`fw-bold ${results.netPL >= 0 ? "text-success" : "text-danger"}`}>{currency} {format(results.netPL)}</span>
                    </div>
                    <div className="mt-3">
                      <a className="btn btn-purple rounded-pill px-4" href="/auth/signup">Start Trading</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .calc-info {
          background: #ffffff;
          border-color: #ecebf1;
          box-shadow: 0 4px 16px rgba(17, 24, 39, 0.06);
          transition: transform 240ms ease, box-shadow 240ms ease;
          position: relative;
        }
        .calc-info::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 4px;
          border-top-left-radius: .75rem;
          border-bottom-left-radius: .75rem;
          background: linear-gradient(180deg, #7c3aed 0%, #6d28d9 100%);
        }
        .calc-info:hover { transform: translateY(-1px); box-shadow: 0 8px 22px rgba(17, 24, 39, 0.08); }
        .calc-info .icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px; height: 36px;
          border-radius: 50%;
          background: #f5f3ff;
          color: #6d28d9;
          flex: 0 0 36px;
          border: 1px solid #e9d5ff;
        }
        .calc-info .icon-wrap :global(i) { font-size: 1rem; }
        .calc-info .title { font-weight: 700; letter-spacing: .1px; font-size: 1.125rem; line-height: 1.3; margin-bottom: .25rem; color: #0b0f19; }
        .calc-info .desc { color: #4b5563; font-size: .9875rem; line-height: 1.6; }
        @media (min-width: 768px) {
          .calc-info .title { font-size: 1.25rem; }
          .calc-info .desc { font-size: 1.025rem; }
        }
        @keyframes fadeInUp { from { opacity: 0; transform: translate3d(0, 6px, 0); } to { opacity: 1; transform: translate3d(0, 0, 0); } }
        .animate-fade-in { animation: fadeInUp .35s ease both; }
      `}</style>
    </section>
  );
}

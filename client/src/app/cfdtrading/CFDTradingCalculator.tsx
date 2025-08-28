"use client";

import React from "react";
import Reveal from "components/Reveal";

// Demo instruments with indicative bid/ask, base currency USD
// You can expand this list as needed.
const INSTRUMENTS = [
  { market: "FX", name: "EUR/USD", symbol: "EURUSD", bid: 1.0832, ask: 1.0834, currency: "USD" },
  { market: "FX", name: "USD/JPY", symbol: "USDJPY", bid: 147.082, ask: 147.094, currency: "USD" },
  { market: "Shares", name: "Apple", symbol: "AAPL", bid: 227.41, ask: 227.57, currency: "USD" },
  { market: "Shares", name: "Tesla", symbol: "TSLA", bid: 198.12, ask: 198.44, currency: "USD" },
  { market: "Indices", name: "US 500", symbol: "US500", bid: 5321.2, ask: 5321.8, currency: "USD" },
  { market: "Commodities", name: "Gold", symbol: "XAUUSD", bid: 2418.5, ask: 2418.9, currency: "USD" },
  { market: "Crypto", name: "Bitcoin", symbol: "BTCUSD", bid: 60850, ask: 60930, currency: "USD" },
  { market: "ETFs", name: "GLD", symbol: "GLD", bid: 311.76, ask: 313.66, currency: "USD" },
];

const MARKETS = ["Shares", "FX", "Commodities", "Indices", "Crypto", "ETFs", "Bonds"] as const;

type Market = typeof MARKETS[number];

type AccountType = "Retail" | "Professional";

type Direction = "Sell" | "Buy";

// Simple leverage presets per market and account type (demo values)
const LEVERAGE: Record<AccountType, Record<Market, number>> = {
  Retail: {
    Shares: 5,
    FX: 30,
    Commodities: 10,
    Indices: 20,
    Crypto: 2,
    ETFs: 5,
    Bonds: 5,
  },
  Professional: {
    Shares: 10,
    FX: 100,
    Commodities: 20,
    Indices: 50,
    Crypto: 5,
    ETFs: 10,
    Bonds: 10,
  },
};

// Commission and fees (demo): commission is 0.05% of notional for shares/etfs; 0.02% for FX/indices/commodities; 0.10% for crypto
function commissionRate(market: Market): number {
  switch (market) {
    case "Shares":
    case "ETFs":
      return 0.0005;
    case "Crypto":
      return 0.001;
    default:
      return 0.0002;
  }
}

// Overnight swaps (demo): daily 0.008% of notional, sign depends on direction and market. We'll just show absolute cost.
const SWAP_DAILY_RATE = 0.00008;

// Conversion fee: if account currency != instrument currency, 0.25% of notional. We keep account currency as USD here.
const CONVERSION_FEE_RATE = 0.0025;

// Contract size assumptions (demo)
// FX: quantity in lots -> 1 lot = 100,000 notional
// Shares/ETFs/Crypto: quantity in units
// Indices/Commodities: quantity in contracts; assume contract multiplier below
const CONTRACT: Record<Market, number> = {
  FX: 100000,
  Shares: 1,
  Commodities: 100, // e.g., simplified 100 units per contract
  Indices: 1,
  Crypto: 1,
  ETFs: 1,
  Bonds: 1,
};

function formatMoney(v: number, currency: string) {
  if (!Number.isFinite(v)) return "-";
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(v);
}

export default function CFDTradingCalculator() {
  const [market, setMarket] = React.useState<Market>("Shares");
  const [instrument, setInstrument] = React.useState<string>("Apple");
  const [accountType, setAccountType] = React.useState<AccountType>("Retail");
  const [direction, setDirection] = React.useState<Direction>("Sell");
  const [quantity, setQuantity] = React.useState<number>(1);
  const accountCurrency = "USD";

  // instruments filtered by selected market
  const list = React.useMemo(
    () => INSTRUMENTS.filter((i) => i.market === market),
    [market]
  );

  React.useEffect(() => {
    if (!list.find((i) => i.name === instrument)) {
      setInstrument(list[0]?.name ?? "");
    }
  }, [list, instrument]);

  const selected = list.find((i) => i.name === instrument);

  const lev = LEVERAGE[accountType][market];

  // Compute prices depending on direction
  const price = selected ? (direction === "Buy" ? selected.ask : selected.bid) : 0;
  const mid = selected ? (selected.bid + selected.ask) / 2 : 0;
  const spreadAbs = selected ? (selected.ask - selected.bid) : 0;

  // Notional value (simplified):
  // FX: quantity lots * contract size * price (price quoted in account currency)
  // Others: quantity units/contracts * price
  const notional = quantity * CONTRACT[market] * price;

  // Commission
  const comm = notional * commissionRate(market);

  // Spread cost approximated as quantity * contract size * spread
  const spreadCost = quantity * CONTRACT[market] * spreadAbs;

  // Required margin = notional / leverage
  const requiredMargin = lev > 0 ? notional / lev : 0;

  // Conversion fee (if non-USD instrument currency). Here all are USD, but formula retained.
  const conversionFee = selected && selected.currency !== accountCurrency ? notional * CONVERSION_FEE_RATE : 0;

  // Overnight swaps (1 day)
  const overnightSwaps = notional * SWAP_DAILY_RATE;

  // Value to show: we’ll display notional based on mid as reference value, direction independent in card
  const displayValue = quantity * CONTRACT[market] * mid;

  return (
    <section className="py-5 py-md-6">
      <div className="container">
        <Reveal>
          <h2 className="fw-bold text-center mb-4 mb-lg-5">CFD Trading Calculator</h2>
        </Reveal>

        <div className="p-4 p-md-5 rounded-4 border bg-light-subtle" style={{ borderColor: "#ecebf1", background: "#f8f9fb" }}>
          <div className="row g-4">
            {/* Left: Inputs */}
            <div className="col-12 col-lg-6">
              <div className="rounded-4 p-3 p-md-4 bg-white border" style={{ borderColor: "#ecebf1" }}>
                <h5 className="fw-bold mb-3">Choose your points of movement</h5>
                <p className="text-muted small mb-4">
                  Calculate your hypothetical P/L (aggregated cost and charges) if you had opened a trade today.
                </p>

                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <label className="form-label">Market</label>
                    <select className="form-select" value={market} onChange={(e) => setMarket(e.target.value as Market)}>
                      {MARKETS.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-12 col-sm-6">
                    <label className="form-label">Instrument</label>
                    <select className="form-select" value={instrument} onChange={(e) => setInstrument(e.target.value)}>
                      {list.map((i) => (
                        <option key={i.symbol} value={i.name}>{i.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Account Type</label>
                    <div className="btn-group" role="group" aria-label="Account type">
                      {(["Retail", "Professional"] as AccountType[]).map((t) => (
                        <button key={t} type="button" className={`btn ${t === accountType ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setAccountType(t)}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Direction</label>
                    <div className="btn-group" role="group" aria-label="Direction">
                      {(["Sell", "Buy"] as Direction[]).map((d) => (
                        <button key={d} type="button" className={`btn ${d === direction ? "btn-secondary" : "btn-outline-secondary"}`} onClick={() => setDirection(d)}>
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="col-12 col-sm-6">
                    <label className="form-label">Quantity</label>
                    <div className="input-group">
                      <button className="btn btn-outline-secondary" type="button" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
                      <input className="form-control text-center" type="number" min={1} value={quantity} onChange={(e) => setQuantity(Math.max(1, Number(e.target.value) || 1))} />
                      <button className="btn btn-outline-secondary" type="button" onClick={() => setQuantity((q) => q + 1)}>+</button>
                    </div>
                    <div className="form-text">
                      {market === "FX" ? "Lots" : market === "Commodities" ? "Contracts" : "Units"}
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 d-flex align-items-end">
                    <button className="btn btn-dark w-100" type="button">Calculate</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Outputs */}
            <div className="col-12 col-lg-6">
              <div className="rounded-4 p-3 p-md-4 bg-white border h-100" style={{ borderColor: "#ecebf1" }}>
                <div className="d-flex justify-content-end mb-3">
                  <div className="small text-muted">USD</div>
                </div>
                <div className="row g-3">
                  <div className="col-6">
                    <div className="p-3 border rounded-3 bg-light-subtle">
                      <div className="small text-muted">Value</div>
                      <div className="fs-5 fw-bold">{formatMoney(displayValue, accountCurrency)}</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 border rounded-3 bg-light-subtle">
                      <div className="small text-muted">Commission</div>
                      <div className="fs-5 fw-bold">{formatMoney(comm, accountCurrency)}</div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="p-3 border rounded-3 bg-light-subtle">
                      <div className="small text-muted">Spread</div>
                      <div className="fs-5 fw-bold">{formatMoney(spreadCost, accountCurrency)}</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 border rounded-3 bg-light-subtle">
                      <div className="small text-muted">Leverage</div>
                      <div className="fs-5 fw-bold">{lev ? `${lev}:1` : "-"}</div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="p-3 border rounded-3 bg-light-subtle">
                      <div className="small text-muted">Conversion Fee</div>
                      <div className="fs-5 fw-bold">{formatMoney(conversionFee, accountCurrency)}</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 border rounded-3 bg-light-subtle">
                      <div className="small text-muted">Required Margin</div>
                      <div className="fs-5 fw-bold">{formatMoney(requiredMargin, accountCurrency)}</div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="p-3 border rounded-3 bg-light-subtle">
                      <div className="small text-muted">Overnight Swaps</div>
                      <div className="fs-5 fw-bold">{formatMoney(overnightSwaps, accountCurrency)}</div>
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-2 mt-3">
                  <button className="btn btn-success">Start Trading</button>
                  <div className="small text-muted d-flex align-items-center">
                    Past performance is not a reliable indicator of future results.
                  </div>
                </div>
                <div className="small text-muted mt-3">
                  All positions on instruments denominated in a currency that is different from your account currency will be subject to a conversion fee at the position exit as well.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

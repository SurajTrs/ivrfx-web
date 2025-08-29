"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Quote = {
  symbol: string;
  shortName?: string;
  bid?: number | null;
  ask?: number | null;
  changePercent?: number | null;
  price?: number | null;
  currency?: string | null;
};

function format(n?: number | null) {
  if (n == null || !Number.isFinite(n)) return "-";
  const abs = Math.abs(n);
  const opts: Intl.NumberFormatOptions =
    abs >= 1000 ? { maximumFractionDigits: 2 } : { minimumFractionDigits: 4, maximumFractionDigits: 4 };
  return new Intl.NumberFormat(undefined, opts).format(n);
}

function toApiSymbol(paramSymbol: string) {
  // Convert URL param like EUR-USD to API symbol EUR/USD, keep others as-is
  return decodeURIComponent(paramSymbol).toUpperCase().replace(/-/g, "/");
}

export default function TradePage({ params }: { params: { symbol: string } }) {
  const apiSymbol = useMemo(() => toApiSymbol(params.symbol), [params.symbol]);
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const tvContainerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const [qty, setQty] = useState<number>(1);
  const [sl, setSl] = useState<string>("");
  const [tp, setTp] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const r = await fetch(`/api/quotes?symbols=${encodeURIComponent(apiSymbol)}`, { cache: "no-store" });
        const js = await r.json();
        if (!r.ok) throw new Error(js?.error || "Failed to load quotes");
        const q = (js?.quotes || [])[0] as Quote | undefined;
        if (!cancelled) setQuote(q ?? { symbol: apiSymbol });
      } catch (e: any) {
        if (!cancelled) setError(e?.message || "Failed to load quotes");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    const id = setInterval(load, 2000);
    return () => { cancelled = true; clearInterval(id); };
  }, [apiSymbol]);

  // Map our symbols to TradingView format (FX, Crypto, Commodities, Indices, Equities)
  function toTVSymbol(s: string) {
    // Examples:
    //  EUR/USD -> FX:EURUSD
    //  EURUSD  -> FX:EURUSD
    const clean = s.replace(/\s+/g, "").toUpperCase();
    if (clean.includes(":")) return clean; // already in EXCHANGE:SYMBOL format
    // Crypto mappings before FX to avoid misclassifying BTCUSD as FX
    const cryptoMap: Record<string, string> = {
      BTCUSD: "COINBASE:BTCUSD",
      ETHUSD: "COINBASE:ETHUSD",
      LTCUSD: "COINBASE:LTCUSD",
      XRPUSD: "BITSTAMP:XRPUSD",
      SOLUSD: "COINBASE:SOLUSD",
      DOGEUSD: "COINBASE:DOGEUSD",
    };
    if (cryptoMap[clean]) return cryptoMap[clean];

    // FX pairs (spot)
    if (/^[A-Z]{3}\/[A-Z]{3}$/.test(clean)) return `FX:${clean.replace("/", "")}`;
    if (/^[A-Z]{6}$/.test(clean)) return `FX:${clean}`;

    // Commodities & energies common mappings
    const commoditiesMap: Record<string, string> = {
      UKOIL: "TVC:UKOIL",   // Brent
      USOIL: "TVC:USOIL",   // WTI
      GOLD: "TVC:GOLD",     // Gold spot index
      XAUUSD: "OANDA:XAUUSD",
      XAGUSD: "OANDA:XAGUSD",
      NATURALGAS: "TVC:NATGAS",
      CORN: "TVC:CORN",
      COCOA: "TVC:COCOA",
      PALL: "OANDA:XPDUSD",   // Palladium spot
      PLAT: "OANDA:XPTUSD",   // Platinum spot
      WHEAT: "TVC:WHEAT",
      COFFEE: "TVC:COFFEE",
    };
    if (commoditiesMap[clean]) return commoditiesMap[clean];
    // Major indices mappings (common CFD tickers -> TV indices)
    const indicesMap: Record<string, string> = {
      US100: "TVC:NDX",   // Nasdaq 100
      US500: "TVC:SPX",   // S&P 500
      DJI: "TVC:DJI",     // Dow Jones Industrial Average
      US30: "TVC:DJI",    // Dow Jones alias
      UK100: "TVC:UKX",   // FTSE 100
      DE40: "TVC:DAX",    // DAX
      DE30: "TVC:DAX",    // Legacy alias
      JP225: "TVC:NI225", // Nikkei 225
      HK50: "TVC:HSI",    // Hang Seng
      AUS200: "TVC:XJO",  // ASX 200
      FRA40: "TVC:CAC40", // CAC 40
      EU50: "TVC:EU50",   // Euro Stoxx 50
      SPX500: "TVC:SPX",  // S&P 500 alias
      INDIA50: "NSE:NIFTY", // NIFTY 50
      SA40: "JSE:TOP40",  // JSE Top 40
    };
    if (indicesMap[clean]) return indicesMap[clean];
    // ETFs explicit exchange mappings
    const etfMap: Record<string, string> = {
      GLD: "ARCA:GLD",
      QQQ: "NASDAQ:QQQ",
      SPY: "ARCA:SPY",
      IXN: "NASDAQ:IXN",
      IWM: "ARCA:IWM",
      XLV: "ARCA:XLV",
      VTI: "ARCA:VTI",
      XLF: "ARCA:XLF",
      TLT: "ARCA:TLT",
      HYG: "ARCA:HYG",
      DIA: "ARCA:DIA",
      IEMG: "ARCA:IEMG",
      IBIT: "NASDAQ:IBIT",
      FBTC: "ARCA:FBTC",
      ARKB: "CBOE:ARKB",
    };
    if (etfMap[clean]) return etfMap[clean];
    // Government bond yields (reliable TV indices)
    const bondsMap: Record<string, string> = {
      TBOND30: "TVC:US30Y",
      TNOTE10: "TVC:US10Y",
      GER10YBOND: "TVC:DE10Y",
      GILT10Y: "TVC:GB10Y",
    };
    if (bondsMap[clean]) return bondsMap[clean];
    // Basic equities mapping: known tickers or default to NASDAQ/NYSE; handle common suffixes
    const equitiesMap: Record<string, string> = {
      AAPL: "NASDAQ:AAPL",
      MSFT: "NASDAQ:MSFT",
      TSLA: "NASDAQ:TSLA",
      AMZN: "NASDAQ:AMZN",
      GOOGL: "NASDAQ:GOOGL",
      META: "NASDAQ:META",
      NVDA: "NASDAQ:NVDA",
      NFLX: "NASDAQ:NFLX",
      AMD: "NASDAQ:AMD",
      INTC: "NASDAQ:INTC",
      PYPL: "NASDAQ:PYPL",
      KO: "NYSE:KO",
      JPM: "NYSE:JPM",
      DIS: "NYSE:DIS",
      WMT: "NYSE:WMT",
    };
    if (equitiesMap[clean]) return equitiesMap[clean];
    // Suffix-based routing for LSE and XETRA
    if (/^[A-Z]{1,5}\.L$/.test(clean)) return `LSE:${clean.replace(".L", "")}`;
    if (/^[A-Z]{1,5}\.DE$/.test(clean)) return `XETR:${clean.replace(".DE", "")}`;
    if (/^[A-Z.]{1,5}$/.test(clean)) return `NASDAQ:${clean}`;
    // Fallback: return as-is (may not resolve on TV)
    return clean;
  }

  // Load TradingView script and render widget when symbol changes
  useEffect(() => {
    if (!tvContainerRef.current) return;
    const tvSymbol = toTVSymbol(apiSymbol);

    function renderWidget() {
      const elNow = tvContainerRef.current;
      if (!elNow) return;
      // Clear previous content
      elNow.innerHTML = "";
      const w: any = (window as any);
      if (!w.TradingView || !w.TradingView.widget) return;
      new w.TradingView.widget({
        symbol: tvSymbol,
        autosize: true,
        interval: "60",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#0b0b0b",
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: elNow.id,
      });
    }

    // Ensure script is loaded once
    const SCRIPT_ID = "tradingview-widget-script";
    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      if ((window as any).TradingView) renderWidget();
      else existing.addEventListener("load", renderWidget, { once: true });
    } else {
      const s = document.createElement("script");
      s.id = SCRIPT_ID;
      s.src = "https://s3.tradingview.com/tv.js";
      s.async = true;
      s.onload = renderWidget;
      document.body.appendChild(s);
    }

    // No hard cleanup for TV widget; just clear container on unmount
    return () => { if (tvContainerRef.current) tvContainerRef.current.innerHTML = ""; };
  }, [apiSymbol]);

  const title = quote?.shortName || quote?.symbol || apiSymbol;
  const bid = quote?.bid ?? quote?.price ?? null;
  const ask = quote?.ask ?? quote?.price ?? null;
  const change = quote?.changePercent ?? null;

  return (
    <main className="container py-4">
      <nav className="mb-3 small">
        <Link href="/" className="text-decoration-none">Home</Link>
        <span className="mx-2 text-secondary">/</span>
        <Link href="/markets/forex" className="text-decoration-none">Markets</Link>
        <span className="mx-2 text-secondary">/</span>
        <span className="text-white">Trade {title}</span>
      </nav>

      <header className="d-flex flex-wrap align-items-end justify-content-between mb-3">
        <div>
          <h1 className="h3 m-0 text-white">Trade {title}</h1>
          <div className="text-secondary small">Live snapshot</div>
        </div>
        <div className="d-flex align-items-center gap-3">
          <div>
            <div className="text-secondary small">Bid</div>
            <div className="fw-bold text-white h5 m-0">{format(bid)}</div>
          </div>
          <div className="text-secondary opacity-50">/</div>
          <div>
            <div className="text-secondary small">Ask</div>
            <div className="fw-bold text-white h5 m-0">{format(ask)}</div>
          </div>
          <div className={`fw-bold small ${((change ?? 0) >= 0) ? 'text-success' : 'text-danger'}`}>
            {change == null ? '-' : `${change.toFixed(2)}%`}
          </div>
        </div>
      </header>

      {error && (
        <div className="alert alert-danger">{error}</div>
      )}

      <section className="row g-3">
        <div className="col-12 col-lg-8">
          <div className="p-3 rounded-3 bg-dark border border-secondary-subtle">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div className="text-secondary">Price Chart</div>
              <Link
                href={`https://www.tradingview.com/chart/?symbol=${encodeURIComponent(toTVSymbol(apiSymbol))}`}
                target="_blank"
                className="btn btn-sm btn-outline-light"
                aria-label="Open this symbol on TradingView to trade"
              >
                Open in TradingView
              </Link>
            </div>
            <div className="ratio ratio-16x9 bg-black rounded-2">
              <div id="tv_chart_container" ref={tvContainerRef} style={{ width: "100%", height: "100%" }} />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="p-3 rounded-3 bg-dark border border-secondary-subtle">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div className="fw-bold text-white">Order Ticket</div>
              <div className="small text-secondary">{quote?.currency || ''}</div>
            </div>

            <form className="mb-3">
              <div className="mb-2">
                <label className="form-label small text-secondary">Quantity</label>
                <input
                  type="number"
                  min={1}
                  step={1}
                  className="form-control bg-black text-white border-secondary-subtle"
                  value={qty}
                  onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
                />
              </div>
              <div className="row g-2">
                <div className="col-6">
                  <label className="form-label small text-secondary">Stop Loss</label>
                  <input
                    type="number"
                    inputMode="decimal"
                    className="form-control bg-black text-white border-secondary-subtle"
                    placeholder="Price"
                    value={sl}
                    onChange={(e) => setSl(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label className="form-label small text-secondary">Take Profit</label>
                  <input
                    type="number"
                    inputMode="decimal"
                    className="form-control bg-black text-white border-secondary-subtle"
                    placeholder="Price"
                    value={tp}
                    onChange={(e) => setTp(e.target.value)}
                  />
                </div>
              </div>
            </form>

            <div className="d-flex gap-2 mb-3">
              <button
                type="button"
                className="btn btn-danger flex-fill py-2"
                disabled={loading || !ask}
                onClick={() => router.push("/auth/login")}
              >
                Sell {format(bid)}
              </button>
              <button
                type="button"
                className="btn btn-success flex-fill py-2"
                disabled={loading || !ask}
                onClick={() => router.push("/auth/login")}
              >
                Buy {format(ask)}
              </button>
            </div>

            <div className="small text-secondary mb-3">
              To place real orders, please <Link href="/auth/login">log in</Link> or <Link href="/auth/register">create an account</Link>.
            </div>

            <div className="d-flex gap-2">
              <Link href="/auth/register" className="btn btn-primary w-50">Open Account</Link>
              <Link href="/auth/login" className="btn btn-outline-light w-50">Log In</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

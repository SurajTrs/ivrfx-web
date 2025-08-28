"use client";

import Reveal from "components/Reveal";
import React from "react";
import Link from "next/link";

type CategoryKey =
  | "all"
  | "shares"
  | "fx"
  | "commodities"
  | "indices"
  | "crypto"
  | "etfs"
  | "bonds";

type Row = {
  asset: string;
  sell: string;
  buy: string;
  changePct: number; // use negative for declines, positive for gains
  category: Exclude<CategoryKey, "all">;
};

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function ChangeCell({ value }: { value: number }) {
  const isUp = value > 0;
  const color = isUp ? "#16a34a" : value < 0 ? "#dc2626" : "#64748b";
  const sign = isUp ? "+" : value < 0 ? "" : "";
  return (
    <span style={{ color, fontWeight: 600 }}>
      {sign}
      {value.toFixed(2)}%
    </span>
  );
}

function AssetsTable({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <div className="card shadow-sm border-0 rounded-4 h-100">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h5 className="mb-0 fw-bold">{title}</h5>
        </div>
        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead>
              <tr className="text-uppercase small text-muted">
                <th style={{ minWidth: 160 }}>Asset</th>
                <th>Sell</th>
                <th>Buy</th>
                <th>Change (%)</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const href = `/trading/asset/${slugify(r.asset)}`;
                return (
                  <tr key={r.asset} className="hover-lift">
                    <td className="fw-semibold">
                      <Link href={href} className="text-decoration-none">
                        {r.asset}
                      </Link>
                    </td>
                    <td>
                      <Link href={href} className="text-decoration-none text-reset">
                        {r.sell}
                      </Link>
                    </td>
                    <td>
                      <Link href={href} className="text-decoration-none text-reset">
                        {r.buy}
                      </Link>
                    </td>
                    <td>
                      <Link href={href} className="text-decoration-none text-reset">
                        <ChangeCell value={r.changePct} />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function AssetsTeaser() {
  // Sample data based on your examples. Replace with real data/API later.
  const rowsA: Row[] = [
    { asset: "USD/MXN", sell: "18.6368", buy: "18.6532", changePct: -0.05, category: "fx" },
    { asset: "USD/JPY", sell: "147.082", buy: "147.094", changePct: -0.17, category: "fx" },
    { asset: "Amsterdam 25 - Futures", sell: "908.21", buy: "908.41", changePct: -0.12, category: "indices" },
    { asset: "Occidental", sell: "46.75", buy: "47.04", changePct: 1.74, category: "shares" },
    { asset: "1000xShiba", sell: "0.01259", buy: "0.01264", changePct: 0.88, category: "crypto" },
  ];

  const rowsB: Row[] = [
    { asset: "GLD", sell: "311.76", buy: "313.66", changePct: 0.20, category: "etfs" },
    { asset: "Work From Home ETF", sell: "66.5398", buy: "67.1308", changePct: 1.54, category: "etfs" },
    { asset: "USD/PLN", sell: "3.66360", buy: "3.66760", changePct: 0.10, category: "fx" },
    { asset: "Siemens", sell: "231.91", buy: "233.36", changePct: -1.05, category: "shares" },
    { asset: "Morgan Stanley", sell: "148.96", buy: "149.87", changePct: 0.32, category: "shares" },
  ];

  const [activeCat, setActiveCat] = React.useState<CategoryKey>("all");

  const counts = [
    { label: "All Markets", value: undefined, icon: "bi-bar-chart-line", key: "all" as CategoryKey },
    { label: "Shares", value: 259, icon: "bi-building", key: "shares" as CategoryKey },
    { label: "FX", value: 54, icon: "bi-currency-exchange", key: "fx" as CategoryKey },
    { label: "Commodities", value: 19, icon: "bi-droplet", key: "commodities" as CategoryKey },
    { label: "Indices", value: 25, icon: "bi-graph-up", key: "indices" as CategoryKey },
    { label: "Crypto", value: 29, icon: "bi-currency-bitcoin", key: "crypto" as CategoryKey },
    { label: "ETFs", value: 68, icon: "bi-box-seam", key: "etfs" as CategoryKey },
    { label: "Bonds", value: 4, icon: "bi-bank", key: "bonds" as CategoryKey },
  ];

  const filterByCat = (rows: Row[]) =>
    activeCat === "all" ? rows : rows.filter((r) => r.category === activeCat);

  return (
    <section id="assets" className="py-5 py-md-6">
      <div className="container">
        <div className="mb-4 mb-lg-5">
          <Reveal>
            <h2 className="fw-bold mb-2">CFD Asset List</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-muted mb-0">
              You can trade a wide range of CFD instruments, in numerous asset classes, at IVRFX.
              Trade with our easy-to-use, customisable platform and discover a world of opportunities.
            </p>
          </Reveal>
        </div>

        <div className="d-flex flex-wrap gap-2 gap-md-3 mb-4">
          {counts.map((c, i) => {
            const active = c.key === activeCat;
            return (
              <Reveal key={c.label} delay={0.05 * i}>
                <button
                  type="button"
                  onClick={() => setActiveCat(c.key)}
                  aria-pressed={active}
                  aria-label={`Filter by ${c.label}`}
                  className={`btn border rounded-pill d-inline-flex align-items-center gap-2 px-3 py-2 ${
                    active ? "btn-primary text-white" : "btn-light"
                  }`}
                  style={{ borderColor: "#ecebf1" }}
                >
                  <i className={`bi ${c.icon}`} />
                  <span className="fw-semibold">{c.label}</span>
                  {typeof c.value === "number" && (
                    <span className={`badge ${active ? "text-bg-light" : "text-bg-secondary-subtle"}`}>
                      {c.value}
                    </span>
                  )}
                </button>
              </Reveal>
            );
          })}
        </div>

        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <Reveal><AssetsTable title="Highlights" rows={filterByCat(rowsA)} /></Reveal>
          </div>
          <div className="col-12 col-lg-6">
            <Reveal delay={0.08}><AssetsTable title="More Markets" rows={filterByCat(rowsB)} /></Reveal>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2 text-muted small mt-3">
          <i className="bi bi-clock-history" />
          <span>Last updated: 2 minutes ago</span>
        </div>
      </div>

      <style jsx>{`
        .badge.text-bg-secondary-subtle {
          background: #eef2ff;
          color: #6366f1;
          border: 1px solid #c7d2fe;
        }
      `}</style>
    </section>
  );
}
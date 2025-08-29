"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import { popularCrypto } from "app/cryptopage/data";

export default function CryptoAllPage() {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"symbol" | "name" | "change">("symbol");
  const [dir, setDir] = useState<1 | -1>(1);

  const rows = useMemo(() => {
    const items = popularCrypto.slice();
    const term = q.trim().toLowerCase();
    const filtered = term
      ? items.filter(r => r.symbol.toLowerCase().includes(term) || r.name.toLowerCase().includes(term))
      : items;
    filtered.sort((a, b) => {
      let va: string | number, vb: string | number;
      if (sort === "symbol") { va = a.symbol; vb = b.symbol; }
      else if (sort === "name") { va = a.name; vb = b.name; }
      else { va = a.change; vb = b.change; }
      // @ts-ignore simple compare
      return (va > vb ? 1 : va < vb ? -1 : 0) * dir;
    });
    return filtered;
  }, [q, sort, dir]);

  const toParam = (s: string) => encodeURIComponent(s.toUpperCase().replace(/\//g, "-"));

  return (
    <main className="container py-5">
      <header className="d-flex flex-wrap align-items-end justify-content-between mb-4">
        <div>
          <h1 className="h3 text-white m-0">All Crypto</h1>
          <div className="text-secondary small">Search and filter popular crypto markets</div>
        </div>
        <div className="d-flex gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search symbol or name"
            className="form-control bg-black text-white border-secondary-subtle"
            style={{ minWidth: 260 }}
          />
          <select
            className="form-select bg-black text-white border-secondary-subtle"
            value={sort}
            onChange={(e) => setSort(e.target.value as any)}
            aria-label="Sort by"
          >
            <option value="symbol">Symbol</option>
            <option value="name">Name</option>
            <option value="change">Change %</option>
          </select>
          <button
            className="btn btn-outline-light"
            onClick={() => setDir(d => (d === 1 ? -1 : 1))}
            aria-label="Toggle sort direction"
            title="Toggle sort direction"
          >
            {dir === 1 ? "Asc" : "Desc"}
          </button>
        </div>
      </header>

      <div className="table-responsive rounded-3 bg-dark border border-secondary-subtle">
        <table className="table table-dark table-hover align-middle m-0">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Name</th>
              <th className="text-end">Bid</th>
              <th className="text-end">Ask</th>
              <th className="text-end">Change</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.symbol}>
                <td className="fw-semibold">{r.symbol}</td>
                <td className="text-secondary">{r.name}</td>
                <td className="text-end">{r.bid}</td>
                <td className="text-end">{r.ask}</td>
                <td className="text-end">
                  <span className={`badge ${r.change < 0 ? 'bg-danger' : 'bg-success'}`}>{r.change >= 0 ? "+" : ""}{r.change}%</span>
                </td>
                <td className="text-end">
                  <Link
                    href={`/trade/${toParam(r.symbol)}`}
                    className="btn btn-sm btn-success"
                  >
                    Trade
                  </Link>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center text-secondary py-4">No results</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}

"use client";
import React from "react";
import Link from "next/link";

const pairs = [
  { sym: "EURUSD", tag: "FOREX" },
  { sym: "GBPUSD", tag: "FOREX" },
  { sym: "USDJPY", tag: "FOREX" },
  { sym: "AUDUSD", tag: "FOREX" },
  { sym: "USDCAD", tag: "FOREX" },
  { sym: "USDCHF", tag: "FOREX" },
];

const ForexPairsStrip: React.FC = () => {
  return (
    <section className="py-4 border-top border-bottom bg-black">
      <div className="container">
        <div className="d-flex gap-3 overflow-auto py-1" style={{scrollSnapType:'x mandatory'}}>
          {pairs.map((p, i) => (
            <Link
              key={i}
              href={`/trade/${encodeURIComponent(p.sym.replace(/\//g, "-"))}`}
              className="d-flex align-items-center gap-2 px-3 py-2 rounded-3 card-gradient-border text-decoration-none"
              style={{minWidth:180, scrollSnapAlign:'start'}}
              aria-label={`Trade ${p.sym}`}
            >
              <div className="small fw-semibold text-white">{p.sym}</div>
              <span className="badge bg-dark text-white border border-secondary-subtle">{p.tag}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForexPairsStrip;

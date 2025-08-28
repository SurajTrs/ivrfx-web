"use client";

import React from "react";
import Link from "next/link";
import Reveal from "components/Reveal";

export type ConditionRow = {
  asset: string;
  spread: string | number;
  leverage: string;
  minQty: string | number;
  rolloverSell?: string;
  rolloverBuy?: string;
  sell?: string | number;
  buy?: string | number;
  viewHref?: string;
};

export default function ConditionsTable({
  id,
  title,
  subtitle,
  rows,
  className,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  rows: ConditionRow[];
  className?: string;
}) {
  return (
    <section id={id} className={`py-5 py-md-6 ${className ?? ""}`.trim()}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-end justify-content-between gap-3 mb-3 mb-md-4">
          <Reveal>
            <h3 className="fw-bold m-0">{title}</h3>
          </Reveal>
          {subtitle && (
            <Reveal delay={0.1}>
              <div className="text-muted small">{subtitle}</div>
            </Reveal>
          )}
        </div>

        <div className="table-responsive rounded-4 border" style={{ borderColor: "#ecebf1" }}>
          <table className="table align-middle m-0">
            <thead className="table-light">
              <tr>
                <th className="text-nowrap">Asset</th>
                <th className="text-nowrap">Spread</th>
                <th className="text-nowrap">Leverage</th>
                <th className="text-nowrap">Min order quantity</th>
                <th className="text-nowrap">Rollover (Sell)</th>
                <th className="text-nowrap">Rollover (Buy)</th>
                <th className="text-nowrap">Sell</th>
                <th className="text-nowrap">Buy</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={`${title}-${r.asset}`}>
                  <td className="fw-semibold">{r.asset}</td>
                  <td>{r.spread}</td>
                  <td>{r.leverage}</td>
                  <td>{r.minQty}</td>
                  <td>{r.rolloverSell ?? "-"}</td>
                  <td>{r.rolloverBuy ?? "-"}</td>
                  <td>{r.sell ?? "-"}</td>
                  <td>{r.buy ?? "-"}</td>
                  <td className="text-end">
                    {r.viewHref && (
                      <Link href={r.viewHref} className="btn btn-sm btn-outline-primary">view</Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";

interface TradingHoursSectionProps {
  title: string;
  hours: { label: string; days: string; times: string }[];
  className?: string;
}

export default function TradingHoursSection({ title, hours, className }: TradingHoursSectionProps) {
  return (
    <section
      className={`rounded-4 p-4 mb-4 shadow-sm ${className ?? ""}`.trim()}
      style={{
        backgroundColor: "#f3e8ff", // light purple
        border: "1px solid #d8b4fe",
      }}
    >
      <h3 className="fw-bold mb-3" style={{ color: "#4c1d95" }}>{title}</h3>
      <div className="table-responsive">
        <table className="table table-sm align-middle mb-0" style={{ backgroundColor: "white" }}>
          <thead className="table-light" style={{ borderBottom: "1px solid #e5e7eb" }}>
            <tr>
              <th style={{ minWidth: 150 }}>Asset</th>
              <th style={{ minWidth: 120 }}>Days</th>
              <th style={{ minWidth: 180 }}>Hours (GMT)</th>
            </tr>
          </thead>
          <tbody>
            {hours.map((h, i) => (
              <tr key={i}>
                <td>{h.label}</td>
                <td>{h.days}</td>
                <td>{h.times}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

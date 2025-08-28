"use client";
import React, { useEffect, useState } from "react";
import TiltCard from "app/eventspage/TiltCard";

interface RankItem { serial: string; maskedId: string; earned: string; }
interface AffiliateRankingProps {
  accentColor?: string;
  items?: RankItem[];
  autoRotate?: boolean;
  intervalMs?: number;
  visibleCount?: number;
}

const defaultItems: RankItem[] = [
  { serial: "1", maskedId: "****265", earned: "6,33,160" },
  { serial: "2", maskedId: "****275", earned: "5,54,220" },
  { serial: "3", maskedId: "****385", earned: "4,85,790" },
  { serial: "4", maskedId: "****392", earned: "4,33,280" },
  { serial: "5", maskedId: "****109", earned: "3,74,940" },
  { serial: "6", maskedId: "****392", earned: "59,480" },
  { serial: "7", maskedId: "****324", earned: "56,470" },
  { serial: "8", maskedId: "****121", earned: "48,740" },
  { serial: "9", maskedId: "****316", earned: "44,310" },
  { serial: "10", maskedId: "****105", earned: "37,740" },
];

const AffiliateRanking: React.FC<AffiliateRankingProps> = ({
  accentColor = "#6f42c1",
  items = defaultItems,
  autoRotate = false,
  intervalMs = 2000,
  visibleCount = 5,
}) => {
  const [rows, setRows] = useState<RankItem[]>(items);

  // keep in sync when items change
  useEffect(() => { setRows(items); }, [items]);

  // optional rotation
  useEffect(() => {
    if (!autoRotate) return;
    const id = setInterval(() => {
      setRows((prev) => (prev.length ? [...prev.slice(1), prev[0]] : prev));
    }, Math.max(800, intervalMs));
    return () => clearInterval(id);
  }, [autoRotate, intervalMs]);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-3">
          <div>
            <div className="text-uppercase small fw-semibold" style={{ color: accentColor }}>Affiliate Commissions Ranking</div>
            <h3 className="h2 fw-bold text-dark mb-0">Ranking</h3>
          </div>
        </div>
        <TiltCard style={{ borderRadius: 16 }} shadowColor="rgba(111,66,193,0.20)">
          <div
            className="rounded-4 border shadow-sm"
            style={{ background: "linear-gradient(180deg, #ffffff 0%, rgba(111,66,193,0.04) 100%)" }}
          >
            <div className="table-responsive">
              <table className="table align-middle mb-0" style={{ tableLayout: "fixed" }}>
                <thead>
                  <tr style={{ backgroundColor: "#f8f9fa" }}>
                    <th className="text-muted small" style={{ width: 90 }}>Ranking</th>
                    <th className="text-muted small">Serial number</th>
                    <th className="text-muted small text-end">Earned bonus ($)</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.slice(0, visibleCount).map((r, idx) => (
                    <tr key={`${r.serial}-${idx}`}>
                      <td>
                        <span className="badge rounded-pill" style={{ backgroundColor: `${accentColor}1A`, color: accentColor, fontWeight: 700 }}>{r.serial}</span>
                      </td>
                      <td className="fw-semibold">{r.maskedId}</td>
                      <td className="text-end"><a href="#" style={{ color: accentColor, textDecoration: "none", fontWeight: 600 }}>{r.earned}</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
};

export default AffiliateRanking;

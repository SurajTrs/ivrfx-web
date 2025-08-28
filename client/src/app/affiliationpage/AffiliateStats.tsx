"use client";
import React from "react";
import TiltCard from "app/eventspage/TiltCard";

interface AffiliateStatsProps {
  accentColor?: string;
}

const AffiliateStats: React.FC<AffiliateStatsProps> = ({ accentColor = "#6f42c1" }) => {
  const stats = [
    { label: "Partners", value: "13,000+" },
    { label: "Support countries", value: "200+" },
    { label: "Paid commissions", value: "300,000+" },
    { label: "Marketing tools", value: "200+" },
  ];
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <TiltCard style={{ borderRadius: 16 }} shadowColor="rgba(111,66,193,0.18)">
          <div className="p-4 p-lg-5 bg-white rounded-4 border shadow-sm">
            <div className="row g-4 text-center">
              {stats.map((s, i) => (
                <div className="col-6 col-lg-3" key={i}>
                  <div className="h2 fw-bold text-dark">{s.value}</div>
                  <div className="text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
};

export default AffiliateStats;

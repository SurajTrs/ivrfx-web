"use client";
import React, { useEffect, useState } from "react";
import TiltCard from "app/eventspage/TiltCard";

interface Stat { label: string; value: string }
interface RankItem { serial: string; maskedId: string; earned: string }
interface AffiliateHeroProps {
  accentColor?: string;
  heroStats?: Stat[];
  title?: string;
  subtitle?: string;
  badgeText?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  rankingItems?: RankItem[];
}

const AffiliateHero: React.FC<AffiliateHeroProps> = ({
  accentColor = "#6f42c1",
  heroStats,
  title = "CPA Affiliate Program",
  subtitle = "Increase your revenue with our affiliate program",
  badgeText = "CPA up to $1,300",
  primaryCtaLabel = "Become a partner",
  primaryCtaHref = "#join",
  secondaryCtaLabel = "Program details",
  secondaryCtaHref = "#details",
  rankingItems,
}) => {
  const stats: Stat[] = heroStats ?? [
    { label: "Partners", value: "13,000+" },
    { label: "Support countries", value: "200+" },
    { label: "Paid commissions", value: "300,000+" },
    { label: "Marketing tools", value: "200+" },
  ];
  const defaultRanking: RankItem[] = [
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
  const [rotating, setRotating] = useState<RankItem[]>(rankingItems && rankingItems.length ? rankingItems : defaultRanking);

  useEffect(() => {
    if (rankingItems && rankingItems.length) {
      setRotating(rankingItems);
    }
  }, [rankingItems]);

  useEffect(() => {
    const id = setInterval(() => {
      setRotating((prev) => (prev.length ? [...prev.slice(1), prev[0]] : prev));
    }, 2000);
    return () => clearInterval(id);
  }, []);
  return (
    <section
      className="py-6 py-lg-7"
      style={{
        background: `linear-gradient(180deg, ${accentColor}14 0%, #ffffff 40%)`,
        paddingTop: "clamp(64px, 10vh, 140px)",
        paddingBottom: "clamp(48px, 8vh, 120px)",
      }}
      aria-labelledby="aff-hero-title"
    >
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-7">
            <div
              className="text-uppercase fw-semibold mb-2"
              style={{
                color: accentColor,
                fontSize: "clamp(20px, 2.8vw, 32px)",
                letterSpacing: "0.02em",
              }}
            >
              {badgeText.replace(/\$1,300|1,300/g, "")} 
              <span
                className="ms-1"
                style={{
                  background: `linear-gradient(90deg, ${accentColor}, #9bb0ff)`,
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontWeight: 900,
                  fontSize: "clamp(32px, 4vw, 48px)",
                  lineHeight: 1.05,
                }}
              >
                $1,300
              </span>
            </div>
            <h1
              id="aff-hero-title"
              className="display-5 fw-bold text-dark mb-2"
              style={{ fontSize: "clamp(34px, 5vw, 60px)", lineHeight: 1.05 }}
            >
              {title}
            </h1>
            <div className="border-bottom" style={{ opacity: 0.2 }} />
            <p className="lead text-muted mt-3 mb-4">{subtitle}</p>
            <div className="d-flex flex-wrap gap-3">
              <a
                className="btn btn-lg text-white"
                style={{ backgroundColor: accentColor, transition: "transform .15s ease, box-shadow .15s ease" }}
                href={primaryCtaHref}
                aria-label={primaryCtaLabel}
                >
                {primaryCtaLabel}
              </a>
              <a
                className="btn btn-lg"
                style={{
                  color: accentColor,
                  border: `1px solid ${accentColor}33`,
                  backgroundColor: "#ffffff",
                  transition: "transform .15s ease, box-shadow .15s ease",
                }}
                href={secondaryCtaHref}
                aria-label={secondaryCtaLabel}
              >
                {secondaryCtaLabel}
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <TiltCard style={{ borderRadius: 16 }} shadowColor="rgba(111,66,193,0.20)" maxTilt={10}>
              <div
                className="p-3 p-lg-4 rounded-4 border shadow-sm"
                style={{
                  background: "linear-gradient(180deg, #ffffff 0%, rgba(111,66,193,0.04) 100%)",
                }}
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="h6 fw-bold mb-0">Affiliate Commissions Ranking</h3>
                </div>
                <div className="table-responsive">
                  <table className="table mb-0 align-middle" style={{ tableLayout: "fixed" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#f8f9fa" }}>
                        <th className="text-muted small" style={{ width: 90 }}>Ranking</th>
                        <th className="text-muted small">Serial number</th>
                        <th className="text-muted small text-end">Earned bonus ($)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rotating.slice(0,5).map((r, idx) => (
                        <tr key={idx} style={{ cursor: "default" }} className="">
                          <td>
                            <span
                              className="badge rounded-pill"
                              style={{ backgroundColor: `${accentColor}1A`, color: accentColor, fontWeight: 700 }}
                            >
                              {r.serial}
                            </span>
                          </td>
                          <td className="fw-semibold">{r.maskedId}</td>
                          <td className="text-end">
                            <a href="#" style={{ color: accentColor, textDecoration: "none", fontWeight: 600 }}>{r.earned}</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
        {/* Stats row below hero, matching reference layout */}
        <div className="row text-center g-4 mt-5">
          {stats.map((s, i) => (
            <div className="col-6 col-lg-3" key={i}>
              <div className="h2 fw-bold text-dark">{s.value}</div>
              <div className="text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliateHero;

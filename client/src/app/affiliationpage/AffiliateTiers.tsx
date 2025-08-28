"use client";
import React from "react";
import TiltCard from "app/eventspage/TiltCard";

interface TierItem { title: string; reward: string; desc: string; countries: string }
interface AffiliateTiersProps { accentColor?: string; tiers?: TierItem[] }

const defaults: TierItem[] = [
  {
    title: "Tier 1",
    reward: "$1,000",
    desc: "Basic CPA rewards",
    countries:
      "Bahrain, Kuwait, Oman, Qatar, Saudi Arabia, Switzerland, United Arab Emirates, Austria, Denmark, Finland, Germany, Ireland, Italy, Netherlands, Sweden, Norway",
  },
  {
    title: "Tier 2",
    reward: "$800",
    desc: "Basic CPA rewards",
    countries:
      "Angola, Argentina, Brazil, Lesotho, Peru, Cyprus, Hungary, Lithuania, Luxembourg, South Africa",
  },
  {
    title: "Tier 3",
    reward: "$500",
    desc: "Basic CPA rewards",
    countries: "Other countries.",
  },
];

const AffiliateTiers: React.FC<AffiliateTiersProps> = ({ accentColor = "#6f42c1", tiers }) => {
  const data = tiers ?? defaults;
  return (
    <section id="commissions" className="py-5 bg-light">
      <div className="container">
        <div className="row g-4">
          {data.map((t, i) => (
            <div className="col-12 col-lg-4" key={i}>
              <TiltCard style={{ borderRadius: 16 }} shadowColor="rgba(111,66,193,0.18)">
                <div className="p-4 h-100 bg-white rounded-4 border shadow-sm">
                  <div className="d-flex justify-content-between align-items-baseline mb-1">
                    <h4 className="h5 text-dark mb-0">{t.title}</h4>
                    <div className="h5 mb-0" style={{ color: accentColor }}>{t.reward}</div>
                  </div>
                  <div className="text-muted mb-2">{t.desc}</div>
                  <div className="small text-muted">{t.countries}</div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliateTiers;

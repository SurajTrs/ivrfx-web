"use client";
import React, { useMemo, useState } from "react";
import TiltCard from "app/eventspage/TiltCard";

interface AffiliateCalculatorProps {
  accentColor?: string;
}

const countries = ["Algeria","Andorra","Angola","Argentina","Austria","Bahrain","Bangladesh","Belgium","Brazil","Cyprus","Germany","India","Italy","Luxembourg","Netherlands","Norway","Peru","South Africa","Sweden","Switzerland","UAE","UK"];

const AffiliateCalculator: React.FC<AffiliateCalculatorProps> = ({ accentColor = "#6f42c1" }) => {
  const [country, setCountry] = useState("India");
  const [qualified, setQualified] = useState(25);

  const tier = useMemo(() => {
    const tier1 = ["Bahrain","Kuwait","Oman","Qatar","Saudi Arabia","Switzerland","United Arab Emirates","Austria","Denmark","Finland","Germany","Ireland","Italy","Netherlands","Sweden","Norway"];
    const tier2 = ["Angola","Argentina","Brazil","Lesotho","Peru","Cyprus","Hungary","Lithuania","Luxembourg","South Africa"];
    if (tier1.includes(country)) return 1000;
    if (tier2.includes(country)) return 800;
    return 500;
  }, [country]);

  const commissions = useMemo(() => qualified * tier, [qualified, tier]);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-3">
          <div>
            <div className="text-uppercase small fw-semibold" style={{ color: accentColor }}>Calculate your affiliate commissions</div>
            <h3 className="h2 fw-bold text-dark mb-0">The more your clients trade, the more commissions you earn</h3>
          </div>
          <a className="btn btn-outline-secondary" href="#commissions">View all commissions</a>
        </div>
        <TiltCard style={{ borderRadius: 16 }} shadowColor="rgba(111,66,193,0.20)">
          <div className="p-4 p-lg-5 bg-white rounded-4 border shadow-sm">
            <div className="row g-4">
              <div className="col-12 col-lg-4">
                <label className="form-label text-muted">Country</label>
                <select className="form-select" value={country} onChange={(e) => setCountry(e.target.value)}>
                  {countries.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="col-12 col-lg-4">
                <label className="form-label text-muted">Number of qualified traders</label>
                <input type="range" min={0} max={200} value={qualified} className="form-range" onChange={(e) => setQualified(parseInt(e.target.value))} />
                <div className="small text-muted">Drag to set: <span className="fw-semibold text-dark">{qualified}</span></div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="p-3 bg-light rounded-3 border">
                  <div className="text-muted">Commissions you get</div>
                  <div className="h3 mb-0" style={{ color: accentColor }}>
                    ${commissions.toLocaleString()}
                  </div>
                </div>
                <div className="small text-muted mt-2">*The calculation is for reference only and based on averages.</div>
              </div>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
};

export default AffiliateCalculator;

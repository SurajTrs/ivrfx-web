"use client";
import React from "react";
import TiltCard from "app/eventspage/TiltCard";

interface AffiliateHowItWorksProps { accentColor?: string; }

const steps = [
  { num: 1, title: "Sign Up", desc: "Join IVRFX's Affiliate Program" },
  { num: 2, title: "Refer Clients", desc: "Refer a new client to IVRFX and grow your affiliate revenue" },
  { num: 3, title: "Earn CPA and more", desc: "Earn CPA up to $1,300 per qualified trader + 10% CPA from partners" },
];

const AffiliateHowItWorks: React.FC<AffiliateHowItWorksProps> = ({ accentColor = "#6f42c1" }) => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h3 className="h2 fw-bold text-dark mb-4">Join now and start earning</h3>
        <div className="row g-4">
          {steps.map((s) => (
            <div className="col-12 col-lg-4" key={s.num}>
              <TiltCard style={{ borderRadius: 16 }} shadowColor="rgba(111,66,193,0.18)">
                <div className="p-4 h-100 bg-white rounded-4 border shadow-sm">
                  <div className="d-flex align-items-center mb-2">
                    <div className="me-3 rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: 40, height: 40, backgroundColor: `${accentColor}1a`, color: accentColor }}>{s.num}</div>
                    <h4 className="h6 mb-0 text-dark">{s.title}</h4>
                  </div>
                  <p className="text-muted mb-0">{s.desc}</p>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliateHowItWorks;

"use client";
import React from "react";
import TiltCard from "app/eventspage/TiltCard";

interface AffiliateSubAffiliateProps { accentColor?: string; }

const AffiliateSubAffiliate: React.FC<AffiliateSubAffiliateProps> = ({ accentColor = "#6f42c1" }) => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <TiltCard style={{ borderRadius: 16 }} shadowColor="rgba(111,66,193,0.18)">
          <div className="p-4 p-lg-5 bg-white rounded-4 border shadow-sm">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-lg-8">
                <h3 className="h3 fw-bold text-dark">10% commissions from your sub-affiliates</h3>
                <p className="text-muted mb-0">Affiliates earn 10% on sub-affiliates' commissions. <a href="#" className="link-underline" style={{ color: accentColor }}>Learn more &gt;</a></p>
              </div>
              <div className="col-12 col-lg-4 text-lg-end">
                <a className="btn btn-lg text-white" style={{ backgroundColor: accentColor }} href="#join">Join now</a>
              </div>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
};

export default AffiliateSubAffiliate;

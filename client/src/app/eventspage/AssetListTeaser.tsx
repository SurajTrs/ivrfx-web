"use client";
import React from "react";
import TiltCard from "app/eventspage/TiltCard";

interface AssetListTeaserProps {
  accentColor?: string;
}

const AssetListTeaser: React.FC<AssetListTeaserProps> = ({ accentColor = "#6f42c1" }) => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <TiltCard style={{ borderRadius: 16 }} shadowColor="rgba(0,0,0,0.12)" maxTilt={8}>
          <div className="row align-items-center g-4 p-4 p-lg-5 bg-white rounded-4 shadow-sm border">
            <div className="col-12 col-lg-8">
              <h3 className="h2 fw-bold mb-2 text-dark">Asset List</h3>
              <p className="text-muted mb-0">Explore our full list of tradeable assets across FX, indices, commodities, shares and more.</p>
            </div>
            <div className="col-12 col-lg-4 text-lg-end">
              <a href="/markets/assets" className="btn btn-lg" style={{ backgroundColor: accentColor, color: "#fff" }}>View Full List</a>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
};

export default AssetListTeaser;

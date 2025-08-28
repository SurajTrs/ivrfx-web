"use client";
import React from "react";

interface AffiliateCTAProps { accentColor?: string; }

const AffiliateCTA: React.FC<AffiliateCTAProps> = ({ accentColor = "#6f42c1" }) => {
  return (
    <section id="join" className="py-5 bg-light">
      <div className="container">
        <div className="p-4 p-lg-5 bg-white rounded-4 border shadow-sm text-center">
          <h3 className="h2 fw-bold text-dark">Become a partner</h3>
          <p className="text-muted">Take advantage of our affiliate program to earn competitive commissions for every qualified client you refer.</p>
          <a className="btn btn-lg text-white" style={{ backgroundColor: accentColor }} href="#">Join now</a>
        </div>
      </div>
    </section>
  );
};

export default AffiliateCTA;

"use client";
import React from "react";
import Reveal from "components/Reveal";

const TradingAppCTA: React.FC = () => {
  return (
    <section className="py-6 position-relative" aria-label="Get started CTA">
      {/* Ambient glow effect */}
      <div 
        className="position-absolute rounded-circle"
        style={{
          width: 520,
          height: 520,
          filter: "blur(120px)",
          background: "radial-gradient(50% 50% at 50% 50%, rgba(168, 85, 247, 0.12) 0%, rgba(0,0,0,0) 70%)",
          bottom: -160,
          right: -160,
          pointerEvents: "none"
        }}
        aria-hidden="true"
      />
      
      <div className="container position-relative">
        <Reveal>
          <div className="p-5 rounded-4 border bg-white shadow-sm">
            <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between gap-3">
              <div>
                <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-2" style={{ background: "rgba(168, 85, 247, 0.12)", color: "#a855f7", border: "1px solid rgba(168, 85, 247, 0.35)" }}>
                  <span className="rounded-circle" style={{ width: 6, height: 6, background: "#a855f7" }} />
                  Start today
                </div>
                <h2 className="h1 m-0">Download the Trading App</h2>
                <p className="text-muted m-0 mt-2">Trade on the go with our powerful mobile trading platform.</p>
              </div>
              <div className="d-flex gap-2 flex-shrink-0">
                <a className="btn text-white px-4 hover-lift" style={{ backgroundColor: '#a855f7' }} href="#download">
                  Download Now
                </a>
                <a className="btn btn-outline-secondary px-4 hover-lift" href="#demo">
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TradingAppCTA;

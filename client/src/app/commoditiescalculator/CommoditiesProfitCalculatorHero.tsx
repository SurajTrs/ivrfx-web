"use client";
import React from "react";
import Reveal from "components/Reveal";

const CommoditiesProfitCalculatorHero: React.FC = () => {
  return (
    <section
      className="py-6 py-lg-7 position-relative overflow-hidden mb-5"
      style={{
        backgroundImage: "url(/images/bg-pattern1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Commodities Profit Calculator"
    >
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-black" style={{ opacity: 0.6 }} aria-hidden="true" />
      <div className="container position-relative">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-7">
            <div className="p-4 p-lg-5 rounded-4 border border-opacity-25" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)", backdropFilter: "blur(8px)" }}>
              <Reveal>
                <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-3" style={{ background: "rgba(155,81,224,0.18)", color: "#d2b7ff", border: "1px solid rgba(155,81,224,0.35)" }}>
                  <span className="rounded-circle" style={{ width: 6, height: 6, background: "#b185ff" }} />
                  Commodities Profit Calculator
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="display-5 fw-bold mb-3" style={{
                  background: "linear-gradient(90deg, #ffffff 0%, #a78bfa 35%, #60a5fa 70%, #22c55e 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}>Estimate value, margin and P/L for commodities trades</h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="lead text-white-50 mb-4 pe-lg-4">Calculate your position value, margin requirement and potential P/L before you trade Oil, Gold, Silver and more.</p>
              </Reveal>
              <div className="d-flex flex-wrap gap-3">
                <Reveal as="a" href="#calculator" className="btn btn-success px-4 hover-lift" delay={0.25}>Try calculator</Reveal>
                <Reveal as="a" href="#tools" className="btn btn-outline-light px-4 hover-lift" delay={0.35}>Learn more</Reveal>
              </div>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <div className="px-3 py-2 rounded-3 bg-dark border border-opacity-25 small text-white-50"><span className="text-white fw-semibold me-1">Position size</span> calculator</div>
                <div className="px-3 py-2 rounded-3 bg-dark border border-opacity-25 small text-white-50"><span className="text-white fw-semibold me-1">News</span> & Analysis</div>
                <div className="px-3 py-2 rounded-3 bg-dark border border-opacity-25 small text-white-50"><span className="text-white fw-semibold me-1">Custom</span> alerts</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <Reveal delay={0.2}>
              <img src="/images/trading-illustration1.png" alt="Commodities trading interface" className="img-fluid rounded-4 shadow-lg hover-lift" />
            </Reveal>
          </div>
          <div className="mt-5 pt-2 d-flex flex-wrap align-items-center gap-4 text-white-50 small"></div>

        </div>
      </div>
    </section>
  );
};

export default CommoditiesProfitCalculatorHero;

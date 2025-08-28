"use client";

import React from "react";
import Reveal from "components/Reveal";

function TradingConditionsHero() {
  return (
    <section
      className="py-6 py-lg-7 position-relative overflow-hidden mb-5 hero-animated"
      style={{ backgroundImage: "url(/images/bg-pattern1.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
      aria-label="Trading Conditions"
    >
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-black" style={{ opacity: 0.6 }} aria-hidden="true" />
      <span aria-hidden className="position-absolute rounded-circle"
        style={{
          top: "8%", right: "6%", width: 110, height: 110, filter: "blur(8px)",
          background: "radial-gradient(50% 50% at 50% 50%, rgba(99,102,241,0.45), rgba(139,92,246,0.18) 70%, rgba(0,0,0,0) 72%)",
          opacity: 0.75, pointerEvents: "none"
        }} />
      <span aria-hidden className="position-absolute rounded-circle"
        style={{
          bottom: "6%", left: "4%", width: 160, height: 160, filter: "blur(10px)",
          background: "radial-gradient(50% 50% at 50% 50%, rgba(34,197,94,0.35), rgba(96,165,250,0.18) 70%, rgba(0,0,0,0) 72%)",
          opacity: 0.6, pointerEvents: "none"
        }} />
      <div className="container position-relative">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-7">
            <div className="p-4 p-lg-5 rounded-4 border border-opacity-25"
                 style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)", backdropFilter: "blur(8px)" }}>
              <Reveal>
                <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-3"
                     style={{ background: "rgba(139,92,246,0.18)", color: "#e9d5ff", border: "1px solid rgba(139,92,246,0.35)" }}>
                  <span className="rounded-circle" style={{ width: 6, height: 6, background: "#c4b5fd" }} />
                  Trading • Trading Conditions
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="display-5 fw-bold mb-3 gradient-text">Trading Conditions</h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="lead text-white-50 mb-4 pe-lg-4">
                  Below you can view the trading conditions per instrument across asset classes.
                </p>
              </Reveal>
              <div className="d-flex flex-wrap gap-3">
                <Reveal as="a" href="#conditions" className="btn btn-success px-4 hover-lift" delay={0.25}>View Conditions</Reveal>
                <Reveal as="a" href="#platforms" className="btn btn-outline-light px-4 hover-lift" delay={0.35}>Platforms</Reveal>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <Reveal delay={0.2}>
              <div className="tilt-card shine-sweep rounded-4 shadow-lg">
                <img src="/images/trading-illustration.png" alt="Trading conditions" className="img-fluid rounded-4" />
              </div>
            </Reveal>
          </div>
          <div className="mt-5 pt-2 d-flex flex-wrap align-items-center gap-3 text-white-50 small">
            <span className="px-3 py-2 rounded-pill border border-white border-opacity-25 d-inline-flex align-items-center gap-2">
              <i className="bi bi-bar-chart-line" /> All markets
            </span>
            <span className="px-3 py-2 rounded-pill border border-white border-opacity-25 d-inline-flex align-items-center gap-2">
              <i className="bi bi-clock-history" /> 24/5 markets
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TradingConditionsHero;

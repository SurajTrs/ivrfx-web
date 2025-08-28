"use client";
import React from "react";
import Reveal from "components/Reveal";
import { ArrowDownTrayIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const TradingAppHero: React.FC = () => {
  return (
    <section
      className="py-6 py-lg-7 position-relative overflow-hidden mb-5"
      style={{
        backgroundImage: "url(/images/bg-pattern1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Trading App"
    >
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-black" style={{ opacity: 0.6 }} aria-hidden="true" />
      <div className="container position-relative">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-7">
            <div className="p-4 p-lg-5 rounded-4 border border-opacity-25" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)", backdropFilter: "blur(8px)" }}>
              <Reveal>
                <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-3" style={{ background: "rgba(34,197,94,0.18)", color: "#86efac", border: "1px solid rgba(34,197,94,0.35)" }}>
                  <span className="rounded-circle" style={{ width: 6, height: 6, background: "#86efac" }} />
                  Trading Platforms • Mobile App
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="display-5 fw-bold mb-3" style={{
                  background: "linear-gradient(90deg, #ffffff 0%, #86efac 50%, #22c55e 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}>Trade markets on the go with our mobile app</h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="lead text-white-50 mb-4 pe-lg-4">
                  Take the markets with you wherever you go. Our mobile app delivers powerful trading tools, real-time quotes, and secure execution—all in the palm of your hand.
                </p>
              </Reveal>
              <div className="d-flex flex-wrap gap-3">
                <Reveal as="a" href="#download" className="btn btn-success px-4 hover-lift d-flex align-items-center gap-2" delay={0.25}>
                  <ArrowDownTrayIcon className="h-5 w-5" />
                  Download App
                </Reveal>
                <Reveal as="a" href="#features" className="btn btn-outline-light px-4 hover-lift" delay={0.35}>
                  Explore Features
                </Reveal>
              </div>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <div className="px-3 py-2 rounded-3 bg-dark border border-opacity-25 small text-white-50">
                  <span className="text-white fw-semibold me-1">Real-time</span> quotes
                </div>
                <div className="px-3 py-2 rounded-3 bg-dark border border-opacity-25 small text-white-50">
                  <span className="text-white fw-semibold me-1">Advanced</span> charts
                </div>
                <div className="px-3 py-2 rounded-3 bg-dark border border-opacity-25 small text-white-50">
                  <span className="text-white fw-semibold me-1">Secure</span> trading
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <Reveal delay={0.2}>
              <div className="position-relative">
                <div className="position-absolute top-0 start-0 w-100 h-100 rounded-4" style={{ 
                  background: "radial-gradient(circle at center, rgba(34,197,94,0.2) 0%, rgba(34,197,94,0) 70%)",
                  filter: "blur(40px)",
                  zIndex: 0,
                  transform: "translateZ(0)"
                }} />
                <img 
                  src="/images/app-preview.png" 
                  alt="Trading app interface" 
                  className="img-fluid rounded-4 shadow-lg hover-lift position-relative" 
                  style={{ zIndex: 1 }}
                  onError={(e) => {
                    e.currentTarget.src = '/images/placeholder-app.png';
                  }}
                />
              </div>
            </Reveal>
          </div>
          <div className="mt-5 pt-2 d-flex flex-wrap align-items-center gap-4 text-white-50 small"></div>

        </div>
      </div>
    </section>
  );
};

export default TradingAppHero;

"use client";
import React from "react";
import Reveal from "components/Reveal";

const items = [
  { icon: "bi-phone", title: "Mobile-First Design", desc: "Optimized for trading on the go with an intuitive mobile interface." },
  { icon: "bi-lightning", title: "One-Tap Trading", desc: "Execute trades instantly with a single tap for maximum efficiency." },
  { icon: "bi-graph-up", title: "Advanced Analytics", desc: "Powerful charting tools and real-time market data at your fingertips." },
  { icon: "bi-shield-lock", title: "Secure Platform", desc: "Bank-grade security to protect your investments and personal data." },
];

const TradingAppHighlights: React.FC = () => {
  return (
    <section id="highlights" className="py-6 position-relative overflow-hidden" style={{ background: "radial-gradient(1200px 400px at 10% -20%, rgba(168, 85, 247, 0.12), transparent 60%)" }}>
      <div className="container">
        <div className="text-center mb-4 mb-lg-5">
          <Reveal>
            <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-2" style={{ background: "rgba(168, 85, 247, 0.12)", color: "#a855f7", border: "1px solid rgba(168, 85, 247, 0.35)" }}>
              <span className="rounded-circle" style={{ width: 6, height: 6, background: "#a855f7" }} />
              Trade Anywhere, Anytime
            </div>
            <h2 className="display-6 fw-bold m-0">Powerful Mobile Trading</h2>
          </Reveal>
        </div>
        <div className="row g-3 g-lg-4">
          {items.map((it, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-3">
              <Reveal delay={i * 0.07}>
                <div className="p-4 rounded-4 h-100" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(168, 85, 247, 0.35)", boxShadow: "0 10px 30px rgba(168, 85, 247, 0.15)", backdropFilter: "blur(8px)" }}>
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <div className="d-inline-flex align-items-center justify-content-center rounded-3" style={{ width: 40, height: 40, background: "rgba(168, 85, 247, 0.15)", color: "#c084fc" }}>
                      <i className={`bi ${it.icon} fs-5`} />
                    </div>
                    <div className="fw-semibold">{it.title}</div>
                  </div>
                  <p className="text-muted m-0">{it.desc}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingAppHighlights;

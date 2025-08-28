"use client";
import React from "react";
import Reveal from "components/Reveal";

const perks = [
  { title: "Higher Bonus", desc: "Unlock higher-tier promotions and trading perks." },
  { title: "Spread rebate", desc: "Earn rebates on spreads as you trade more." },
  { title: "Member's Benefits", desc: "Exclusive education, insights, and priority support." },
];

const MT4MarketsClub: React.FC = () => {
  return (
    <section className="py-5 mb-5 bg-transparent" aria-label="marketsClub">
      <div className="container">
        <div className="text-center mb-4">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-2" style={{ background: "rgba(155,81,224,0.12)", color: "#9b51e0", border: "1px solid rgba(155,81,224,0.35)" }}>
            <span className="rounded-circle" style={{ width: 6, height: 6, background: "#9b51e0" }} />
            marketsClub
          </div>
          <h2
            className="fw-bold m-0"
            style={{
              background: "linear-gradient(90deg, #5b21b6 0%, #7c3aed 35%, #a78bfa 70%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Member rewards that grow with you
          </h2>
        </div>
        <div className="row g-4">
          {perks.map((p, i) => (
            <div className="col-12 col-md-4" key={i}>
              <Reveal delay={i * 0.05}>
                <div
                  className="position-relative h-100 p-4 rounded-4 border bg-white hover-lift"
                  style={{
                    borderColor: "rgba(155,81,224,0.25)",
                    boxShadow: "0 4px 24px rgba(155,81,224,0.08)",
                    transition: "transform .25s ease, box-shadow .25s ease, border-color .25s ease",
                  }}
                >
                  {/* decorative purple glow */}
                  <div
                    aria-hidden="true"
                    className="position-absolute rounded-circle"
                    style={{
                      top: -24,
                      right: -24,
                      width: 100,
                      height: 100,
                      background: "radial-gradient(circle at center, rgba(155,81,224,0.25), rgba(155,81,224,0) 60%)",
                      filter: "blur(10px)",
                      pointerEvents: "none",
                    }}
                  />
                  <h5 className="mb-2">{p.title}</h5>
                  <p className="text-secondary m-0">{p.desc}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MT4MarketsClub;

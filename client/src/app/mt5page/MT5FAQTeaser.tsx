"use client";
import React from "react";
import Reveal from "components/Reveal";

const MT5FAQTeaser: React.FC = () => {
  return (
    <section className="py-5 mb-5 bg-transparent" aria-label="MT5 FAQs">
      <div className="container">
        <Reveal>
          <div
            className="position-relative p-4 p-md-5 rounded-4 border bg-white d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3 hover-lift"
            style={{
              borderColor: "rgba(155,81,224,0.25)",
              boxShadow: "0 6px 28px rgba(155,81,224,0.08)",
              transition: "transform .25s ease, box-shadow .25s ease, border-color .25s ease",
            }}
          >
            {/* decorative purple glow */}
            <div
              aria-hidden="true"
              className="position-absolute rounded-circle"
              style={{
                top: -28,
                right: -28,
                width: 120,
                height: 120,
                background: "radial-gradient(circle at center, rgba(155,81,224,0.25), rgba(155,81,224,0) 60%)",
                filter: "blur(12px)",
                pointerEvents: "none",
              }}
            />
            <div>
              <h3
                className="m-0"
                style={{
                  background: "linear-gradient(90deg, #5b21b6 0%, #7c3aed 35%, #a78bfa 70%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Need more trading information?
              </h3>
              <p className="m-0 mt-2" style={{ color: "#6b7280" }}>Find answers to common questions about using MetaTrader 5 with IVRFX.</p>
            </div>
            <div className="flex-shrink-0">
              <a
                className="btn px-4 hover-lift"
                style={{ border: "1px solid rgba(155,81,224,0.55)", color: "#7c3aed", background: "transparent" }}
                href="#faqs"
              >
                See all FAQs
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default MT5FAQTeaser;

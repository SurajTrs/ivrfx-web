"use client";
import React from "react";
import Reveal from "components/Reveal";

const MT4CTA: React.FC = () => {
  return (
    <section className="py-5 mb-5 bg-transparent" aria-label="Ready to trade CTA">
      <div className="container">
        <Reveal>
          <div
            className="position-relative p-5 rounded-4 border bg-white hover-lift"
            style={{
              borderColor: "rgba(155,81,224,0.25)",
              boxShadow: "0 8px 30px rgba(155,81,224,0.10)",
              transition: "transform .25s ease, box-shadow .25s ease, border-color .25s ease",
            }}
          >
            {/* decorative purple glow */}
            <div
              aria-hidden="true"
              className="position-absolute rounded-circle"
              style={{
                top: -36,
                right: -36,
                width: 150,
                height: 150,
                background: "radial-gradient(circle at center, rgba(155,81,224,0.25), rgba(155,81,224,0) 60%)",
                filter: "blur(14px)",
                pointerEvents: "none",
              }}
            />
            <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between gap-3">
              <div>
                <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-2" style={{ background: "rgba(155,81,224,0.12)", color: "#9b51e0", border: "1px solid rgba(155,81,224,0.35)" }}>
                  <span className="rounded-circle" style={{ width: 6, height: 6, background: "#9b51e0" }} />
                  Ready to trade?
                </div>
                <h2
                  className="h1 m-0"
                  style={{
                    background: "linear-gradient(90deg, #5b21b6 0%, #7c3aed 35%, #a78bfa 70%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Create an account
                </h2>
                <p className="text-secondary m-0 mt-2">Open an account and connect to MetaTrader 4 in minutes.</p>
              </div>
              <div className="d-flex gap-2 flex-shrink-0">
                <a
                  className="btn text-white px-4 hover-lift"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #a78bfa)", border: "1px solid rgba(155,81,224,0.55)" }}
                  href="#create-account"
                >
                  Create account
                </a>
                <a
                  className="btn px-4 hover-lift"
                  style={{ border: "1px solid rgba(155,81,224,0.55)", color: "#7c3aed", background: "transparent" }}
                  href="#faqs"
                >
                  See all FAQs
                </a>
              </div>
            </div>

            {/* Validation hints */}
            <div className="row g-4 mt-4">
              <div className="col-12 col-lg-6">
                <div
                  className="p-3 rounded-3 border bg-light-subtle"
                  style={{
                    borderColor: "rgba(155,81,224,0.25)",
                    background: "linear-gradient(180deg, rgba(155,81,224,0.06), rgba(155,81,224,0.02))",
                  }}
                >
                  <h6 className="mb-2">Email requirements</h6>
                  <ul className="m-0 text-secondary small">
                    <li>Enter valid email</li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div
                  className="p-3 rounded-3 border bg-light-subtle"
                  style={{
                    borderColor: "rgba(155,81,224,0.25)",
                    background: "linear-gradient(180deg, rgba(155,81,224,0.06), rgba(155,81,224,0.02))",
                  }}
                >
                  <h6 className="mb-2">Password requirements</h6>
                  <ul className="m-0 text-secondary small">
                    <li>Between 8 and 15 characters</li>
                    <li>Contain at least 1 numeric, 1 uppercase, 1 lowercase character</li>
                    <li>Include one of ~!@#£%^&amp;*()_-+=:;&lt;&gt;{"{"},[]?,.</li>
                    <li>No common passwords, spaces, or non‑Latin characters</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default MT4CTA;

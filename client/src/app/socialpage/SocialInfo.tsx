"use client";
import React from "react";

export default function SocialTradingPage() {
  return (
    <section>
      {/* Hero Banner */}
      <section
        className="py-5 py-md-6"
        style={{
          background:
            "radial-gradient(1200px 600px at 85% 10%, rgba(124,58,237,0.12), rgba(124,58,237,0) 70%), radial-gradient(800px 400px at 10% 20%, rgba(34,197,94,0.10), rgba(34,197,94,0) 60%)",
        }}
      >
        <div className="container">
          <div className="row g-4 align-items-center">
            {/* Left graphic placeholder */}
            <div className="col-12 col-lg-6">
              <div
                className="mx-auto rounded-circle position-relative"
                style={{
                  width: 360,
                  height: 360,
                  background:
                    "radial-gradient(circle at 60% 40%, rgba(255,255,255,1) 0%, rgba(243,244,246,1) 55%, rgba(243,244,246,0.9) 60%, rgba(243,244,246,0) 70%)",
                  boxShadow: "0 20px 60px rgba(16,24,40,0.08)",
                }}
              >
                {/* Floating brand chips */}
                <span
                  className="position-absolute d-inline-flex align-items-center justify-content-center rounded-circle bg-dark text-white"
                  style={{ left: -8, bottom: 56, width: 40, height: 40, fontWeight: 700 }}
                  aria-hidden
                >
                  
                </span>
                <span
                  className="position-absolute d-inline-flex align-items-center justify-content-center rounded-circle bg-white border"
                  style={{ left: 36, bottom: 20, width: 36, height: 36, fontWeight: 700 }}
                  aria-hidden
                >
                  G
                </span>
                <span
                  className="position-absolute d-inline-flex align-items-center justify-content-center rounded-3 bg-danger text-white"
                  style={{ right: 12, top: 24, width: 34, height: 34, fontWeight: 800 }}
                  aria-hidden
                >
                  T
                </span>
                <span
                  className="position-absolute d-inline-flex align-items-center justify-content-center rounded-3 bg-dark text-white"
                  style={{ right: 64, top: -8, width: 34, height: 34, fontWeight: 800 }}
                  aria-hidden
                >
                  N
                </span>
              </div>
            </div>

            {/* Right copy */}
            <div className="col-12 col-lg-6">
              <div className="mb-2 text-uppercase small fw-semibold text-secondary">Social Trading</div>
              <h1 className="display-5 fw-bold mb-3" style={{ lineHeight: 1.1 }}>
                Follow Trades from <span style={{ color: "#7c3aed" }}>Top Traders</span>
              </h1>
              <p className="lead text-muted mb-4">
                Trade alongside proven signal providers. Copy strategies, learn from real
                positions, and manage risk with full control.
              </p>

              <div className="d-flex gap-3 flex-wrap mb-4">
                <a className="btn btn-dark px-4 py-2 rounded-3" href="#" role="button">
                  Download on the App Store
                </a>
                <a className="btn btn-outline-dark px-4 py-2 rounded-3" href="#" role="button">
                  Get it on Google Play
                </a>
              </div>

              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <button className="w-100 btn btn-primary py-3 rounded-4 fw-semibold">
                    Follower
                  </button>
                </div>
                <div className="col-12 col-md-6">
                  <button className="w-100 btn btn-outline-secondary py-3 rounded-4 fw-semibold">
                    Signal Provider
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is social trading */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-6 order-2 order-lg-1">
              <h2 className="fw-bold mb-3">What is social trading?</h2>
              <p className="text-muted mb-3">
                Social trading blends community insight with practical learning. Discover top
                traders, replicate their strategies with transparent performance metrics, and
                gain insights designed for both beginners and experienced traders.
              </p>
              <div className="d-flex gap-3">
                <a className="btn btn-primary rounded-3" href="#">Get started</a>
                <a className="btn btn-outline-secondary rounded-3" href="#">Learn more</a>
              </div>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2">
              <div
                className="rounded-4 w-100"
                style={{
                  height: 320,
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.18), rgba(34,197,94,0.18))",
                  boxShadow: "0 16px 48px rgba(16,24,40,0.08)",
                }}
                aria-label="Social trading preview"
              />
            </div>
          </div>
        </div>
      </section>

    
    </section>
  );
}

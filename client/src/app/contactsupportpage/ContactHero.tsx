"use client";
import React from "react";
import Reveal from "components/Reveal";

export default function ContactHero() {
  return (
    <section
      className="py-5"
      style={{ background: "radial-gradient(1200px 500px at 20% -10%, #f3e8ff 0%, transparent 60%)" }}
    >
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-7">
            <Reveal>
              <h1 className="display-5 fw-bold mb-3" style={{ color: "#1f1333" }}>Contact Support</h1>
            </Reveal>
            <p className="text-muted mb-4" style={{ maxWidth: 700 }}>
              Connect with us and experience the IVRFX difference. Our support team is here to assist you with any inquiries or issues you may encounter, ensuring you receive the help you need.
            </p>
          </div>
          <div className="col-12 col-lg-5">
            <div className="p-4 rounded-4 shadow-sm border bg-white">
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-star-fill" style={{ color: "#7c3aed" }} />
                <span className="fw-semibold">Trustpilot</span>
              </div>
              <div className="d-flex align-items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="bi bi-star-fill" style={{ color: "#7c3aed" }} />
                ))}
              </div>
              <p className="mb-0 text-muted">
                Our customers say: <span className="fw-semibold" style={{ color: "#7c3aed" }}>Excellent</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

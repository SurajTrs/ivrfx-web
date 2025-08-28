"use client";
import React from "react";
import Reveal from "components/Reveal";

export default function Hero() {
  return (
    <section
      className="py-5"
      style={{ background: "radial-gradient(1200px 500px at 20% -10%, #f3e8ff 0%, transparent 60%)" }}
    >
      <div className="container text-center mb-4">
        <Reveal>
          <h1 className="display-6 fw-bold mb-2">Help Centre</h1>
        </Reveal>
        <p className="text-muted mb-0" style={{ maxWidth: 820, margin: "0 auto" }}>
          Step-by-step guides and quick solutions for common challenges to enhance and empower your CFD trading journey.
        </p>
      </div>
    </section>
  );
}

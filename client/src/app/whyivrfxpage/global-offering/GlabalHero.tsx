"use client";
import React from "react";
import Reveal from "components/Reveal";

export default function Hero() {
  return (
    <section
      className="py-6 d-flex align-items-center"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(111,66,193,0.85) 0%, rgba(123,92,255,0.82) 50%, rgba(155,107,255,0.78) 100%), url('/images/space-bg2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "50vh",
        color: "#fff",
      }}
    >
      <div className="container position-relative">
        <Reveal className="text-center">
          <h1 className="display-5 fw-bold mb-3">Global Offering</h1>
          <p className="lead mb-0">
            Trade with a leading global provider. IVRFX — the place to trade.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

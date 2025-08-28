"use client";
import React from "react";
import Reveal from "components/Reveal";

export default function Notice() {
  return (
    <section className="py-4" style={{ background: "#f7f5ff" }}>
      <div className="container">
        <Reveal className="small text-muted text-center">
          Notice: The below information represents an analysis of our IVRFX offering. Registration with each company is restricted to specific countries/territories/regions and differ per company.
        </Reveal>
      </div>
    </section>
  );
}

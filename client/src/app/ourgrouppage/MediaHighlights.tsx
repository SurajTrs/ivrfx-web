"use client";
import React from "react";
import Reveal from "components/Reveal";

type Media = { title: string; excerpt: string; image: string };

const highlights: Media[] = [
  {
    title: "Finalto Group's CCO Stavros Anastasiou Appointed IVRFX's CEO",
    excerpt:
      "Stavros Anastasiou, the Group Chief Compliance Officer (CCO) at Finalto, has been selected as the new Chief Executive Officer for the fintech company’s retail brokerage unit, IVRFX",
    image: "/images/space-bg2.jpg",
  },
  {
    title: "IVRFX Welcomes Luis Dos Santos to Lead Global Business Development",
    excerpt:
      "IVRFX has appointed Luis Dos Santos as the Global Business Development Head, according to Dos Santos' post on LinkedIn.",
    image: "/images/space-bg1.jpg",
  },
  {
    title: "IVRFX celebrates win in Middle East",
    excerpt:
      "IVRFX has been named the ‘Most Reliable and Secured Trading Platform Middle East 2024’.",
    image: "/images/bg-pattern.jpg",
  },
  {
    title:
      "IVRFX expands its presence in South Africa in 2024 by appointing Dany Mawas as the CEO.",
    excerpt:
      "IVRFX is delighted to announce the appointment of Dany Mawas as the new CEO of",
    image: "/images/aboutbg.png",
  },
];

export default function MediaHighlights() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <Reveal>
            <h2 className="fw-bold mb-0">Media Highlights</h2>
          </Reveal>
          <a href="#" className="text-primary text-decoration-none d-inline-flex align-items-center gap-1">
            <span className="fw-semibold">View all</span>
            <i className="bi bi-chevron-right" />
          </a>
        </div>

        <div className="row g-4">
          {highlights.map((m, idx) => (
            <div className="col-12 col-md-6 col-lg-3" key={idx}>
              <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden hover-lift">
                {/* Media image with gradient overlay */}
                <div
                  className="ratio ratio-16x9 position-relative"
                  style={{
                    background:
                      `linear-gradient(135deg, rgba(16,16,24,0.35), rgba(16,16,24,0.35)), linear-gradient(135deg, rgba(107,33,168,0.55), rgba(139,92,246,0.35)), url(${m.image}) center/cover no-repeat`,
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{m.title}</h5>
                  <p className="card-text text-muted mb-0">{m.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

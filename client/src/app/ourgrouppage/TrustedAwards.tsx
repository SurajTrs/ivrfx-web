"use client";
import React from "react";
import Reveal from "components/Reveal";

type Card = { title: string; excerpt: string; badge: string };

const cards: Card[] = [
  {
    title: "IVRFX Wins Excellence in Online Trading 2025",
    excerpt:
      "We're delighted to share that the prestigious Global Brands Magazine Awards have just...",
    badge: "Excellence in Online Trading",
  },
  {
    title: "IVRFX Celebrates Quadruple Win 2025",
    excerpt:
      "First and foremost, we're excited to receive these awards and want to express our heartfelt thanks...",
    badge: "Celebrating Our Awards",
  },
  {
    title: "Middle East's Leading Broker in 2024",
    excerpt:
      "We are honoured to have been named 'Best Broker Middle East 2024' by Forexing.com...",
    badge: "Best Broker Middle East",
  },
  {
    title: "Best Global Online Trading Broker 2025",
    excerpt: "We are thrilled to announce IVRFX has been awarded 'Best Global Online Trading Broker'...",
    badge: "Global Online Trading Broker",
  },
];

export default function TrustedAwards() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <Reveal>
            <h2 className="fw-bold mb-0">Company News</h2>
          </Reveal>
          <a href="#" className="text-primary text-decoration-none d-inline-flex align-items-center gap-1">
            <span className="fw-semibold">View All</span>
            <i className="bi bi-chevron-right" />
          </a>
        </div>

        <div className="row g-4">
          {cards.map((c, idx) => (
            <div className="col-12 col-md-6 col-lg-3" key={idx}>
              <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden hover-lift">
                {/* Media */}
                <div
                  className="ratio ratio-16x9 position-relative"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(16,16,24,0.2), rgba(16,16,24,0.2)), linear-gradient(135deg, #0ea5e9, #7c3aed)",
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <div className="position-absolute bottom-0 start-0 end-0 p-3 text-white">
                    <span className="badge bg-light text-dark mb-2">{c.badge}</span>
                    <div className="fw-semibold">{c.title.split(" ").slice(-4).join(" ")}</div>
                  </div>
                </div>

                {/* Body */}
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{c.title}</h5>
                  <p className="card-text text-muted mb-0">{c.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

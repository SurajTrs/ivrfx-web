"use client";
import React from "react";

interface HighlightItem {
  title: string;
  href?: string;
}

interface HighlightsGridProps {
  title?: string;
  items: HighlightItem[];
}

const HighlightsGrid: React.FC<HighlightsGridProps> = ({
  title = "Traders' Clinic Highlights",
  items,
}) => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="d-flex align-items-end justify-content-between mb-4">
          <div>
            <span className="text-uppercase small text-success fw-semibold d-inline-block mb-2">Highlights</span>
            <h2 className="h1 fw-bold m-0">{title}</h2>
          </div>
          <a className="btn btn-outline-secondary d-none d-md-inline-flex" href="#">View all</a>
        </div>

        <div className="row g-3 g-md-4">
          {items.map((it, idx) => (
            <div className="col-12 col-md-6 col-lg-4" key={idx}>
              <a href={it.href || '#'} className="card h-100 shadow-sm text-decoration-none border-0">
                <div className="card-body">
                  <h3 className="h5 text-dark mb-0">{it.title}</h3>
                </div>
                <div className="card-footer bg-transparent border-0 pt-0 pb-3 px-3">
                  <span className="text-success small">Read more →</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsGrid;

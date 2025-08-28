"use client";
import React from "react";
import TiltCard from "app/eventspage/TiltCard";

interface PastItem {
  title: string;
  duration?: string;
  imageUrl?: string;
  href?: string;
}

interface PastWebinarsProps {
  accentColor?: string;
  items: PastItem[];
}

const PastWebinars: React.FC<PastWebinarsProps> = ({ accentColor = "#6f42c1", items }) => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <div className="text-uppercase small fw-semibold" style={{ color: accentColor }}>Past Webinars</div>
            <h3 className="h1 fw-bold mb-0 text-dark">Upgrade your market knowledge</h3>
            <p className="text-muted mb-0">Explore our library of previous webinars.</p>
          </div>
          <a href="#" className="btn btn-outline-secondary">View all</a>
        </div>
        <div className="row g-4">
          {items.map((it, i) => (
            <div className="col-12 col-md-6 col-lg-4" key={i}>
              <a href={it.href || "#"} className="text-decoration-none text-dark">
                <TiltCard style={{ borderRadius: 12 }} shadowColor="rgba(111,66,193,0.22)" maxTilt={10}>
                  <div className="card h-100 bg-white border shadow-sm">
                    {it.imageUrl && (
                      <div className="ratio ratio-16x9 rounded-top overflow-hidden">
                        <img src={it.imageUrl} alt={it.title} className="object-fit-cover" />
                      </div>
                    )}
                    <div className="card-body">
                      <h4 className="h6 mb-2">{it.title}</h4>
                      {it.duration && <span className="badge" style={{ backgroundColor: `${accentColor}1a`, color: '#111', border: `1px solid ${accentColor}55` }}>{it.duration}</span>}
                    </div>
                  </div>
                </TiltCard>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastWebinars;

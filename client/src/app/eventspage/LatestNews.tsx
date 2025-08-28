"use client";
import React from "react";
import TiltCard from "app/eventspage/TiltCard";

interface NewsItem {
  date: string;
  readTime: string;
  title: string;
  href?: string;
}

interface LatestNewsProps {
  accentColor?: string;
  items: NewsItem[];
}

const LatestNews: React.FC<LatestNewsProps> = ({ accentColor = "#6f42c1", items }) => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <div className="text-uppercase small fw-semibold" style={{ color: accentColor }}>Latest</div>
            <h3 className="h1 fw-bold mb-0 text-dark">Market insights</h3>
          </div>
          <a href="/news" className="btn btn-outline-secondary">View all</a>
        </div>
        <div className="row g-4">
          {items.map((n, i) => (
            <div className="col-12 col-md-6 col-lg-4" key={i}>
              <a className="text-decoration-none text-dark" href={n.href || "#"}>
                <TiltCard style={{ borderRadius: 12 }} shadowColor="rgba(111,66,193,0.20)" maxTilt={10}>
                  <div className="card h-100 bg-white border shadow-sm">
                    <div className="card-body">
                      <div className="text-muted small mb-1">{n.date} • {n.readTime}</div>
                      <h4 className="h6 mb-0">{n.title}</h4>
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

export default LatestNews;

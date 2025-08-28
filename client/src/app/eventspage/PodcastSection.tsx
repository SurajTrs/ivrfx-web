"use client";
import React from "react";

interface Episode {
  title: string;
  description?: string;
  href?: string;
  duration?: string;
}

interface PodcastSectionProps {
  title?: string;
  subtitle?: string;
  coverImageUrl?: string;
  hosts?: string;
  episodes?: Episode[];
  accentColor?: string; // hex or css color
}

const PodcastSection: React.FC<PodcastSectionProps> = ({
  title = "Traders' Clinic Podcast",
  subtitle = "Master your trader's mindset with seasoned professionals.",
  coverImageUrl,
  hosts,
  episodes = [],
  accentColor = "#198754", // bootstrap success as default
}) => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-5">
            <div className="ratio ratio-1x1 rounded-3 overflow-hidden bg-dark">
              {coverImageUrl ? (
                <img src={coverImageUrl} alt="Podcast Cover" className="w-100 h-100 object-fit-cover" />
              ) : (
                <div className="d-flex align-items-center justify-content-center text-white-50">Podcast</div>
              )}
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <span className="text-uppercase small fw-semibold d-inline-block mb-2" style={{ color: accentColor }}>Podcast</span>
            <h2 className="h1 fw-bold mb-3">{title}</h2>
            {subtitle && <p className="lead text-muted mb-3">{subtitle}</p>}
            {hosts && <p className="mb-4"><strong>Hosts:</strong> {hosts}</p>}

            {episodes.length > 0 && (
              <div className="list-group list-group-flush mb-3">
                {episodes.map((ep, idx) => (
                  <a key={idx} href={ep.href || '#'} className="list-group-item list-group-item-action d-flex align-items-start gap-3 py-3">
                    <div className="rounded-pill align-self-start px-2 py-1 small" style={{ backgroundColor: `${accentColor}1a`, color: accentColor }}>Ep {idx + 1}</div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between">
                        <h3 className="h6 mb-1">{ep.title}</h3>
                        {ep.duration && <span className="text-muted small">{ep.duration}</span>}
                      </div>
                      {ep.description && <p className="mb-0 text-muted small">{ep.description}</p>}
                    </div>
                  </a>
                ))}
              </div>
            )}

            <div className="d-flex gap-3">
              <a href="#" className="btn" style={{ backgroundColor: accentColor, color: "#fff" }}>Listen Now</a>
              <a href="#" className="btn btn-outline-secondary">Subscribe</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;

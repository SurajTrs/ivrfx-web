"use client";
import React from "react";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  accentColor?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  accentColor = "#198754",
}) => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-4 p-4 p-lg-5 bg-white rounded-4 shadow-sm border">
          <div className="col-12 col-lg-8">
            <h2 className="display-6 fw-bold mb-2 text-dark">{title}</h2>
            {subtitle && <p className="lead text-muted mb-0">{subtitle}</p>}
          </div>
          <div className="col-12 col-lg-4 text-lg-end">
            <div className="d-flex gap-3 justify-content-start justify-content-lg-end">
              <a href={primaryHref} className="btn btn-lg" style={{ backgroundColor: accentColor, color: '#fff' }}>{primaryLabel}</a>
              {secondaryLabel && secondaryHref && (
                <a href={secondaryHref} className="btn btn-outline-secondary btn-lg">{secondaryLabel}</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

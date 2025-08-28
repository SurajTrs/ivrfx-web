"use client";
import React from "react";

interface EventHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  backgroundImageUrl?: string;
  overlay?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  align?: "left" | "center";
  minHeight?: string; // e.g., "60vh"
  accentColor?: string; // e.g., "#6f42c1"
}

const EventHero: React.FC<EventHeroProps> = ({
  eyebrow,
  title,
  subtitle,
  backgroundImageUrl,
  overlay = true,
  ctaLabel,
  ctaHref,
  align = "left",
  minHeight = "60vh",
  accentColor = "#198754",
}) => {
  return (
    <section
      className="position-relative text-white overflow-hidden"
      style={{
        backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight,
      }}
    >
      {/* Gradient backdrop for modern depth */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: backgroundImageUrl
            ? `radial-gradient(80% 80% at 50% 20%, ${accentColor}59 0%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,0.85) 100%)`
            : "linear-gradient(135deg, #0b0f14 0%, #0e1a14 45%, #0a0a0a 100%)",
        }}
      />

      {overlay && backgroundImageUrl && (
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "rgba(0,0,0,0.35)" }} />
      )}

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div
          className={`row py-5 py-lg-6 align-items-center justify-content-${align === "center" ? "center" : "start"}`}
          style={{ paddingTop: "4.5rem", paddingBottom: "4.5rem" }}
        >
          <div className={`col-12 ${align === "center" ? "col-lg-9 text-center mx-auto" : "col-lg-9"}`}>
            {eyebrow && (
              <span className="text-uppercase small fw-semibold d-inline-block mb-2 letter-spacing-1" style={{ color: accentColor }}>
                {eyebrow}
              </span>
            )}
            <h1 className="display-4 fw-bold mb-3">{title}</h1>
            {subtitle && <p className={`lead mb-4 ${align === "center" ? "mx-auto" : ""}`} style={{ maxWidth: 820 }}>
              <span className="opacity-90 d-inline-block">{subtitle}</span>
            </p>}
            {ctaLabel && ctaHref && (
              <div className={align === "center" ? "d-flex justify-content-center" : "d-flex"}>
                <a href={ctaHref} className="btn btn-lg shadow-lg px-4" style={{ backgroundColor: accentColor, color: '#fff' }}>
                  {ctaLabel}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHero;

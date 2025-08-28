"use client";
import React from "react";
import Reveal from "components/Reveal";
import TiltCard from "app/eventspage/TiltCard";

interface GlassHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  accentColor?: string; 
  bgPatternUrl?: string; 
  imageUrl?: string;
}

const GlassHero: React.FC<GlassHeroProps> = ({
  eyebrow,
  title,
  subtitle,
  primaryLabel = "Get Started",
  primaryHref = "#",
  secondaryLabel,
  secondaryHref,
  accentColor = "#42F5A4",
  bgPatternUrl = "/images/bg-pattern1.jpg",
  imageUrl,
}) => {
  return (
    <section
      className="py-6 py-lg-7 position-relative overflow-hidden mb-5"
      style={{
        backgroundImage: `url(${bgPatternUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label={title}
    >
      {/* Local keyframes for orb animations */}
      <style>{`
        @keyframes floatOrb {
          0% { transform: translate3d(0,0,0) scale(1); opacity: .6; }
          50% { transform: translate3d(0, -12px, 0) scale(1.03); opacity: .8; }
          100% { transform: translate3d(0,0,0) scale(1); opacity: .6; }
        }
      `}</style>
      <div
        className="position-absolute top-0 start-0 w-100 h-100 bg-black"
        style={{ opacity: 0.6 }}
        aria-hidden="true"
      />
      {/* Animated gradient orbs */}
      <div
        className="position-absolute rounded-circle"
        style={{
          width: 520,
          height: 520,
          filter: "blur(120px)",
          background: `radial-gradient(50% 50% at 50% 50%, ${accentColor}66 0%, rgba(0,0,0,0) 70%)`,
          top: -140,
          right: -140,
          pointerEvents: "none",
          animation: "floatOrb 6s ease-in-out infinite",
        }}
        aria-hidden="true"
      />
      <div
        className="position-absolute rounded-circle"
        style={{
          width: 360,
          height: 360,
          filter: "blur(100px)",
          background: `radial-gradient(50% 50% at 50% 50%, ${accentColor}44 0%, rgba(0,0,0,0) 70%)`,
          bottom: -100,
          left: -80,
          pointerEvents: "none",
          animation: "floatOrb 7.5s ease-in-out infinite",
        }}
        aria-hidden="true"
      />

      <div className="container position-relative">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-7">
            {/* Glass card */}
            <div
              className="p-4 p-lg-5 rounded-4 border border-opacity-25"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <Reveal delay={0.05}>
                {eyebrow && (
                  <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-3"
                    style={{ backgroundColor: `${accentColor}33`, color: "#fff", border: `1px solid ${accentColor}66` }}
                  >
                    <span className="rounded-circle" style={{ width: 6, height: 6, backgroundColor: accentColor }} />
                    {eyebrow}
                  </div>
                )}
                <h1
                  className="display-5 fw-bold mb-3"
                  style={{
                    background: `linear-gradient(90deg, #fff 0%, ${accentColor} 50%, #B0FFE2 100%)`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {title}
                </h1>
              </Reveal>

              {subtitle && (
                <Reveal delay={0.15}>
                  <p className="lead text-white-50 mb-4 pe-lg-4">{subtitle}</p>
                </Reveal>
              )}

              <div className="d-flex flex-wrap gap-3">
                {primaryLabel && (
                  <Reveal as="a" href={primaryHref} className="btn px-4 hover-lift" delay={0.25}
                    style={{ backgroundColor: accentColor, color: "#0b0f14", fontWeight: 600 }}
                  >
                    {primaryLabel}
                  </Reveal>
                )}
                {secondaryLabel && secondaryHref && (
                  <Reveal as="a" href={secondaryHref} className="btn btn-outline-light px-4 hover-lift" delay={0.35}>
                    {secondaryLabel}
                  </Reveal>
                )}
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            {imageUrl && (
              <Reveal delay={0.2}>
                <TiltCard style={{ borderRadius: 24 }} shadowColor="rgba(111,66,193,0.28)" maxTilt={10} scale={1.03}>
                  <img src={imageUrl} alt="Hero visual" className="img-fluid rounded-4" />
                </TiltCard>
              </Reveal>
            )}
          </div>
          <div className="mt-5 pt-2 d-flex flex-wrap align-items-center gap-4 text-white-50 small"></div>

        </div>
      </div>
    </section>
  );
};

export default GlassHero;

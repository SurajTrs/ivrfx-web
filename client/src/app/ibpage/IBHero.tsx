"use client";
import React, { useRef } from "react";

interface IBHeroProps {
  backgroundImage?: string;
  overlayOpacity?: number; // 0..1
  accentColor?: string;
}

const IBHero: React.FC<IBHeroProps> = ({
  backgroundImage = "/images/ib/hero.jpg",
  overlayOpacity = 0.55,
  accentColor = "#6f42c1",
}) => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const subtitle2Ref = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLAnchorElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const hero = heroRef.current;
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    // rotation range
    const rotX = ((y - midY) / midY) * -4; // tilt up/down
    const rotY = ((x - midX) / midX) * 4; // tilt left/right

    const depthMove = (node: HTMLElement | null, factor: number) => {
      if (!node) return;
      const tx = ((x - midX) / midX) * factor;
      const ty = ((y - midY) / midY) * factor;
      node.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    };

    if (contentRef.current) {
      contentRef.current.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    }
    depthMove(titleRef.current, 6);
    depthMove(subtitleRef.current, 10);
    depthMove(subtitle2Ref.current, 12);
    depthMove(ctaRef.current, 16);
  };

  const handleMouseLeave = () => {
    if (contentRef.current) {
      contentRef.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    }
    [titleRef.current, subtitleRef.current, subtitle2Ref.current, ctaRef.current].forEach((n) => {
      if (n) n.style.transform = "translate3d(0,0,0)";
    });
  };

  return (
    <section
      className="position-relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "72vh",
      }}
      aria-label="Introducing Broker Hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Local keyframes for floating orbs */}
      <style>{`
        @keyframes ibFloatOrb { 0% { transform: translate3d(0,0,0); opacity: .5; } 50% { transform: translate3d(0,-12px,0); opacity: .8; } 100% { transform: translate3d(0,0,0); opacity: .5; } }
      `}</style>

      {/* Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: `rgba(0,0,0,${overlayOpacity})` }} />

      {/* Accent floating orbs */}
      <div
        className="position-absolute rounded-circle"
        style={{
          width: 420,
          height: 420,
          filter: "blur(120px)",
          background: `radial-gradient(50% 50% at 50% 50%, ${accentColor}55 0%, rgba(0,0,0,0) 70%)`,
          top: -120,
          right: -120,
          pointerEvents: "none",
          animation: "ibFloatOrb 6.5s ease-in-out infinite",
        }}
        aria-hidden="true"
      />
      <div
        className="position-absolute rounded-circle"
        style={{
          width: 300,
          height: 300,
          filter: "blur(100px)",
          background: `radial-gradient(50% 50% at 50% 50%, ${accentColor}33 0%, rgba(0,0,0,0) 70%)`,
          bottom: -80,
          left: -70,
          pointerEvents: "none",
          animation: "ibFloatOrb 8s ease-in-out infinite",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container position-relative d-flex align-items-center justify-content-center" style={{ zIndex: 1, minHeight: "72vh" }}>
        <div ref={contentRef} className="py-6 py-lg-7 d-flex flex-column align-items-center text-center" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.35)", transition: "transform 120ms ease-out" }}>
          <h1 ref={titleRef} className="display-4 display-lg-3 fw-bold mb-3 text-white" style={{ letterSpacing: "0.2px", transition: "transform 120ms ease-out" }}>
            Become an<br />
            Introducing Broker
          </h1>
          <p ref={subtitleRef} className="lead mb-1 text-white" style={{ transition: "transform 120ms ease-out" }}>
            Join our <span className="fw-bold">$250k</span> Monthly Payouts!
          </p>
          <p ref={subtitle2Ref} className="lead mb-4 text-white" style={{ transition: "transform 120ms ease-out" }}>
            Earn unlimited commissions from qualified clients.
          </p>
          <a ref={ctaRef} href="#calculator" className="btn btn-primary btn-lg px-5" style={{ transition: "transform 120ms ease-out, box-shadow 120ms ease-out", boxShadow: "0 10px 30px rgba(111,66,193,.35)" }}>
            Start earning today
          </a>
        </div>
      </div>
    </section>
  );
};

export default IBHero;

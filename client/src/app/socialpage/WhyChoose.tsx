"use client";
import React from "react";
import {
  BoltIcon,
  AdjustmentsHorizontalIcon,
  GlobeAmericasIcon,
  StarIcon,
  ArrowsRightLeftIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const Feature: React.FC<{
  icon: React.ReactNode;
  title: string;
  desc: string;
}> = ({ icon, title, desc }) => (
  <div className="d-flex flex-column align-items-center text-center gap-2 p-3">
    <div
      className="d-inline-flex align-items-center justify-content-center rounded-4"
      style={{ width: 64, height: 64, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
      aria-hidden
    >
      <div style={{ width: 32, height: 32, color: "#e5e7eb" }}>{icon}</div>
    </div>
    <h6 className="text-white fw-semibold mb-1">{title}</h6>
    <p className="text-white-50 small mb-0" style={{ maxWidth: 280 }}>{desc}</p>
  </div>
);

const WhyChoose: React.FC = () => {
  return (
    <section className="py-5 py-md-6" aria-label="Why choose Markets Social Trading?">
      <div className="container">
        <div
          className="rounded-4 p-4 p-md-5 position-relative overflow-hidden"
          style={{
            background:
              "radial-gradient(1200px 600px at 20% 10%, rgba(59,130,246,0.18), rgba(59,130,246,0) 60%), linear-gradient(180deg, #0b1220, #0f172a)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2 className="text-center text-white fw-bold mb-4 mb-md-5">Why choose Markets Social Trading?</h2>

          <div className="row g-4 align-items-center">
            {/* Phones (left) */}
            <div className="col-12 col-lg-4 order-2 order-lg-1">
              <div className="position-relative mx-auto" style={{ maxWidth: 340 }}>
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{ background: "radial-gradient(circle at 40% 40%, rgba(59,130,246,0.35), rgba(59,130,246,0) 60%)", filter: "blur(40px)", zIndex: 0 }}
                  aria-hidden
                />
                <img
                  src="/images/trading-illustration1.png"
                  alt="App preview 1"
                  className="img-fluid rounded-4 shadow-lg position-relative"
                  style={{ transform: "rotate(-6deg) translateX(-10px)", zIndex: 1 }}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/images/trading-illustration.png"; }}
                />
                <img
                  src="/images/trading-illustration.png"
                  alt="App preview 2"
                  className="img-fluid rounded-4 shadow-lg position-absolute"
                  style={{ top: 28, left: 48, width: "82%", transform: "rotate(8deg)", zIndex: 2 }}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/images/trading-illustration1.png"; }}
                />
              </div>
            </div>

            {/* Features (right) */}
            <div className="col-12 col-lg-8 order-1 order-lg-2">
              <div className="row g-4">
                <div className="col-12 col-md-6 col-xl-4">
                  <Feature
                    icon={<BoltIcon className="w-8 h-8" />}
                    title="Real-time Trade"
                    desc="Follow top signal providers' moves instantly."
                  />
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                  <Feature
                    icon={<AdjustmentsHorizontalIcon className="w-8 h-8" />}
                    title="Intuitive Interface"
                    desc="User-friendly design suitable for all trader levels."
                  />
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                  <Feature
                    icon={<GlobeAmericasIcon className="w-8 h-8" />}
                    title="Global Markets Access"
                    desc="Trade a variety of instruments anytime."
                  />
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                  <Feature
                    icon={<StarIcon className="w-8 h-8" />}
                    title="Top Expert Rankings"
                    desc="Easily identify and follow top traders."
                  />
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                  <Feature
                    icon={<ArrowsRightLeftIcon className="w-8 h-8" />}
                    title="Flexible Trade Size"
                    desc="Choose a trade size that aligns with your strategy."
                  />
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                  <Feature
                    icon={<UsersIcon className="w-8 h-8" />}
                    title="Community Interaction"
                    desc="Join groups to share insights and enhance your trading experience."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

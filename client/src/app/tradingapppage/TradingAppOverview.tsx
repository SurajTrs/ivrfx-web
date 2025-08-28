"use client";
import React from "react";
import Reveal from "components/Reveal";

const rows = [
  {
    title: "Mobile-first design",
    body: "Trade on the go with our intuitive mobile app that puts powerful trading tools in the palm of your hand.",
    align: "left",
  },
  {
    title: "Lightning fast execution",
    body: "Experience ultra-fast trade execution with our high-performance mobile trading engine.",
    align: "right",
  },
  {
    title: "Advanced charting",
    body: "Access professional-grade charts with multiple timeframes and technical indicators.",
    align: "right",
  },
  {
    title: "Secure & reliable",
    body: "Trade with confidence using our bank-grade security and reliable infrastructure.",
    align: "left",
  },
];

const TradingAppOverview: React.FC = () => {
  return (
    <section id="overview" className="py-6 position-relative overflow-hidden">
      <div className="container">
        <div className="mb-4 mb-lg-5 text-center">
          <Reveal>
            <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-2" style={{ background: "rgba(34,197,94,0.12)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.35)" }}>
              <span className="rounded-circle" style={{ width: 6, height: 6, background: "#22c55e" }} />
              Mobile Trading App
            </div>
            <h2 className="display-6 fw-bold">Trade anytime, anywhere</h2>
            <p className="lead text-muted m-0" style={{ maxWidth: 900, marginInline: "auto" }}>
              The IVRFX mobile app brings powerful trading to your fingertips. Stay connected to global markets with real-time quotes, advanced charting, and lightning-fast execution—all from your mobile device.
            </p>
          </Reveal>
        </div>

        <div className="d-flex flex-column gap-5 gap-lg-6">
          {rows.map((row, i) => {
            const isImageLeft = row.align === "left";
            return (
              <div key={i} className="row align-items-center g-4 g-lg-5">
                <div className={`col-12 col-lg-6 ${isImageLeft ? "order-0" : "order-1 order-lg-0"}`}>
                  <Reveal delay={0.05}>
                    <div className="ratio ratio-16x9 rounded-4 overflow-hidden border" style={{ borderColor: "rgba(34,197,94,0.25)", boxShadow: "0 10px 30px rgba(34,197,94,0.15)" }}>
                      <img 
                        src={`/images/app-screenshot-${i + 1}.png`} 
                        alt={row.title} 
                        className="w-100 h-100 object-fit-cover" 
                        onError={(e) => {
                          e.currentTarget.src = '/images/placeholder-app.png';
                        }}
                      />
                    </div>
                  </Reveal>
                </div>
                <div className={`col-12 col-lg-6 ${isImageLeft ? "" : "order-0 order-lg-1"}`}>
                  <Reveal delay={0.12}>
                    <div className="p-4 p-lg-5 rounded-4 h-100" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)", border: "1px solid rgba(34,197,94,0.25)", backdropFilter: "blur(8px)" }}>
                      <h3 className="h2 fw-bold mb-2" style={{
                        background: "linear-gradient(90deg, #111 0%, #22c55e 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}>
                        {row.title}
                      </h3>
                      <p className="text-muted mb-3 mb-lg-4">{row.body}</p>
                      <ul className="text-muted small m-0 ps-3">
                        {i === 0 && (
                          <>
                            <li>Optimized for all mobile devices</li>
                            <li>Intuitive touch controls and gestures</li>
                            <li>Offline access to key features</li>
                          </>
                        )}
                        {i === 1 && (
                          <>
                            <li>Millisecond execution speeds</li>
                            <li>Real-time price alerts</li>
                            <li>One-tap trading</li>
                          </>
                        )}
                        {i === 2 && (
                          <>
                            <li>Multiple chart types and timeframes</li>
                            <li>50+ technical indicators</li>
                            <li>Custom drawing tools</li>
                          </>
                        )}
                        {i === 3 && (
                          <>
                            <li>Biometric authentication</li>
                            <li>End-to-end encryption</li>
                            <li>24/7 monitoring</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TradingAppOverview;

"use client";
import React from "react";
import Reveal from "components/Reveal";
import { ChartBarIcon, CurrencyDollarIcon, DevicePhoneMobileIcon, BoltIcon } from '@heroicons/react/24/outline';

const tools = [
  { 
    title: "Advanced Charting", 
    points: ["Multiple timeframes", "50+ indicators", "Drawing tools"], 
    icon: ChartBarIcon 
  },
  { 
    title: "Real-time Quotes", 
    points: ["Live market data", "Price alerts", "Watchlists"], 
    icon: CurrencyDollarIcon 
  },
  { 
    title: "Mobile Trading", 
    points: ["iOS & Android", "Biometric login", "Push notifications"], 
    icon: DevicePhoneMobileIcon 
  },
  { 
    title: "Fast Execution", 
    points: ["Millisecond speeds", "One-tap trading", "Price improvement"], 
    icon: BoltIcon 
  },
];

const TradingAppTools: React.FC = () => {
  return (
    <section id="tools" className="py-6 mt-5 position-relative overflow-hidden" style={{ background: "radial-gradient(1200px 400px at 85% -20%, rgba(168, 85, 247, 0.10), transparent 60%)" }}>
      <div className="container">
        <div className="text-center mb-4 mb-lg-5">
          <Reveal>
            <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-2" style={{ background: "rgba(168, 85, 247, 0.12)", color: "#a855f7", border: "1px solid rgba(168, 85, 247, 0.35)" }}>
              <span className="rounded-circle" style={{ width: 6, height: 6, background: "#a855f7" }} />
              Trading Tools
            </div>
            <h2 className="display-6 fw-bold m-0">Powerful mobile trading tools</h2>
            <p className="lead text-muted mt-3 mb-0 mx-auto" style={{ maxWidth: '700px' }}>
              Access professional trading tools designed specifically for mobile, with all the power you need to trade effectively on the go.
            </p>
          </Reveal>
        </div>

        <div className="row g-3 g-lg-4">
          {tools.map((tool, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-3">
              <Reveal delay={i * 0.07}>
                <div className="p-4 rounded-4 h-100" style={{ 
                  background: "rgba(255,255,255,0.04)", 
                  border: "1px solid rgba(168, 85, 247, 0.35)", 
                  boxShadow: "0 10px 30px rgba(168, 85, 247, 0.15)",
                  backdropFilter: "blur(8px)" 
                }}>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="d-inline-flex align-items-center justify-content-center rounded-3" style={{ 
                      width: 40, 
                      height: 40, 
                      background: "rgba(168, 85, 247, 0.15)", 
                      color: "#c084fc" 
                    }}>
                      <tool.icon className="h-5 w-5" />
                    </div>
                    <div className="h5 m-0 fw-semibold">{tool.title}</div>
                  </div>
                  <ul className="m-0 ps-3 text-muted small">
                    {tool.points.map((point, idx) => (
                      <li key={idx} className="mb-2">{point}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingAppTools;

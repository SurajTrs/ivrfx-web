"use client";

import React, { useState } from "react";
import TiltOnHover from "app/ibpage/anim/TiltOnHover";
import RevealOnScroll from "app/ibpage/anim/RevealOnScroll";

interface InstrumentOption {
  code: string;
  label: string;
  baseRate: number; // mock commission per lot multiplier for demo
}

const instruments: InstrumentOption[] = [
  { code: "XAG", label: "XAG", baseRate: 12 },
  { code: "US30", label: "US30", baseRate: 18 },
  { code: "US100", label: "US100", baseRate: 22 },
  { code: "FRA40", label: "FRA40", baseRate: 10 },
];

// Ensure consistent SSR/CSR rendering to avoid hydration issues.
// Use fixed locale and a plain "$" prefix instead of Intl currency which may yield "US$".
const currency = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;

const IBEarningsCalculator: React.FC = () => {
  const [instrument, setInstrument] = useState<InstrumentOption>(instruments[2]); // US100 default
  const [lots, setLots] = useState<number>(120); // default demo

  const estimated = Math.max(0, Math.round(instrument.baseRate * lots * 2.4));

  return (
    <section className="py-6 py-lg-7 bg-light">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          <div className="col-12 col-lg-7">
            <RevealOnScroll>
              <TiltOnHover className="h-100" shadowColor="rgba(111,66,193,0.25)">
                <div className="h-100 p-4 p-lg-5 bg-white rounded-4 shadow-sm border">
                  <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-3" style={{
                    backgroundColor: "#6f42c11a",
                    border: "1px solid #6f42c14d",
                    color: "#111",
                  }}>
                    <span className="rounded-circle" style={{ width: 6, height: 6, backgroundColor: "#6f42c1" }} />
                    Earn more as your clients trade more
                  </div>
                  <h3 className="h2 fw-bold mb-2">How much can I potentially make?</h3>
                  <p className="text-muted mb-4">Drag the slider to see your potential average monthly income from introducing qualified traders.</p>

                  <div className="row g-4">
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">Trading instrument of your client</label>
                      <div className="d-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
                        {instruments.map(opt => (
                          <button
                            key={opt.code}
                            type="button"
                            onClick={() => setInstrument(opt)}
                            className={`btn btn-sm ${instrument.code === opt.code ? "btn-primary" : "btn-outline-secondary"}`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">Your clients have traded (lot)</label>
                      <input
                        type="range"
                        className="form-range"
                        min={0}
                        max={500}
                        step={5}
                        value={lots}
                        onChange={(e) => setLots(parseInt(e.target.value || "0", 10))}
                      />
                      <div className="d-flex justify-content-between small text-muted">
                        <span>0</span>
                        <span>{lots} lots</span>
                        <span>500</span>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-4 p-3 p-lg-4 bg-light rounded-3 border">
                    <div className="fw-semibold">Commissions you get</div>
                    <div className="display-6 fw-bold text-primary">{currency(estimated)}</div>
                  </div>

                  <div className="mt-4">
                    <TiltOnHover as="div" style={{ display: "inline-block" }} shadowColor="rgba(111,66,193,0.35)">
                      <button className="btn btn-primary btn-lg">Become an IB partner</button>
                    </TiltOnHover>
                  </div>

                  <div className="mt-3 small text-muted">
                    *The calculation is for reference only.<br />
                    *The calculation is based on the average of the total.<br />
                    *Data may be different with the level in your account.
                  </div>
                </div>
              </TiltOnHover>
            </RevealOnScroll>
          </div>

          <div className="col-12 col-lg-5">
            <RevealOnScroll delay={100}>
              <TiltOnHover className="h-100" shadowColor="rgba(111,66,193,0.25)">
                <div className="h-100 p-4 p-lg-5 rounded-4 shadow-sm border" style={{ background: "linear-gradient(135deg, #f7f3ff 0%, #ffffff 100%)" }}>
                  <div className="small text-uppercase fw-semibold mb-2" style={{ color: "#6f42c1" }}>Become an
                  &nbsp;Introducing Broker</div>
                  <h4 className="h2 fw-bold mb-2">Join our <span className="text-primary">$250k</span> Monthly Payouts!</h4>
                  <p className="text-muted">Earn unlimited commissions from qualified clients.</p>
                  <div className="d-grid gap-2">
                    <TiltOnHover as="div" shadowColor="rgba(111,66,193,0.35)">
                      <button className="btn btn-primary btn-lg">Start earning today</button>
                    </TiltOnHover>
                  </div>
                </div>
              </TiltOnHover>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IBEarningsCalculator;

"use client";
import React from "react";
import Reveal from "components/Reveal";

const MT4Benefits: React.FC = () => {
  return (
    <section className="py-5 mb-5 bg-transparent" aria-label="Use MT4 with IVRFX">
      <div className="container">
        <Reveal>
          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7">
              <div
                className="position-relative h-100 p-4 p-md-5 rounded-4 border bg-white hover-lift"
                style={{
                  borderColor: "rgba(155,81,224,0.25)",
                  boxShadow: "0 6px 28px rgba(155,81,224,0.08)",
                  transition: "transform .25s ease, box-shadow .25s ease, border-color .25s ease",
                }}
              >
                {/* decorative purple glow */}
                <div
                  aria-hidden="true"
                  className="position-absolute rounded-circle"
                  style={{
                    top: -35,
                    left: -35,
                    width: 140,
                    height: 140,
                    background: "radial-gradient(circle at center, rgba(155,81,224,0.25), rgba(155,81,224,0) 60%)",
                    filter: "blur(14px)",
                    pointerEvents: "none",
                  }}
                />
                <h3
                  className="mb-3"
                  style={{
                    background: "linear-gradient(90deg, #5b21b6 0%, #7c3aed 35%, #a78bfa 70%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Use MT4 to trade with IVRFX
                </h3>
                <p className="text-secondary m-0">
                  If you already have an IVRFX account, you are all set. Simply install MT4 and add a trading account via your desktop IVRFX platform.
                  For more information on how to add a MetaTrader trading account please <a href="#connect-guide" className="text-decoration-underline" style={{ color: "#9b51e0" }}>click here</a>.
                  If you don’t have an IVRFX account yet, registering is easy and fast.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-5">
              <div
                className="position-relative h-100 p-4 p-md-5 rounded-4 border bg-white hover-lift"
                style={{
                  borderColor: "rgba(155,81,224,0.25)",
                  boxShadow: "0 6px 28px rgba(155,81,224,0.08)",
                  transition: "transform .25s ease, box-shadow .25s ease, border-color .25s ease",
                }}
              >
                {/* decorative purple glow */}
                <div
                  aria-hidden="true"
                  className="position-absolute rounded-circle"
                  style={{
                    bottom: -35,
                    right: -35,
                    width: 140,
                    height: 140,
                    background: "radial-gradient(circle at center, rgba(155,81,224,0.25), rgba(155,81,224,0) 60%)",
                    filter: "blur(14px)",
                    pointerEvents: "none",
                  }}
                />
                <h5
                  className="mb-3"
                  style={{ color: "#1f2937" }}
                >
                  Why choose IVRFX for MT4?
                </h5>
                <ul className="m-0" style={{ color: "#6b7280" }}>
                  <li className="mb-2">Pricing and regulation you can trust</li>
                  <li className="mb-2">Fast execution and low spreads</li>
                  <li className="mb-2">Dedicated support when you need it</li>
                  <li className="mb-0">Easy connection from your IVRFX account</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default MT4Benefits;

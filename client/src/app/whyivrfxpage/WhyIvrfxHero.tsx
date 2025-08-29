"use client";
import React from "react";
import { FaShieldAlt, FaBolt, FaMobileAlt, FaApple, FaGoogle, FaFacebook } from "react-icons/fa";
import dynamic from "next/dynamic";


export default function Hero() {
  return (
    <section className="py-5 py-lg-6">
      <div className="container">
        <div
          className="p-4 p-lg-5 rounded-4 position-relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #20c997 0%, #7b5cff 100%)",
            color: "#fff",
          }}
        >
       
          {/* Foreground content */}
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-7">
              <div className="small fw-semibold mb-3" style={{ opacity: 0.9 }}>
                Online Forex & Gold CFDs Trading Platform
              </div>
              <h1 className="display-4 fw-bold mb-2" style={{ lineHeight: 1.1 }}>
                Simply trading by
                <br />
                IVRFX
              </h1>
              <p className="lead mb-4" style={{ opacity: 0.95 }}>
                Online, On App, On Your Side.
              </p>

              <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                <div className="d-flex align-items-center gap-2 small" style={{ opacity: 0.95 }}>
                  <FaBolt /> Powerful tools
                </div>
                <div className="d-flex align-items-center gap-2 small" style={{ opacity: 0.95 }}>
                  <FaMobileAlt /> User-friendly
                </div>
                <div className="d-flex align-items-center gap-2 small" style={{ opacity: 0.95 }}>
                  <FaShieldAlt /> Regulated and authorised
                </div>
              </div>

              <div className="d-flex flex-wrap align-items-center gap-3">
                <button className="btn btn-dark btn-lg px-4">Start Trading</button>
                <button className="btn btn-outline-light btn-lg px-4">Free Demo</button>
              </div>
            </div>

            <div className="col-12 col-lg-5">
              <div className="position-relative text-center">
                <img
                  src="/images/trading-illustration.png"
                  alt="Trading platforms"
                  className="img-fluid rounded-3 shadow"
                />
                {/* Floating platform icons */}
                <div className="position-absolute" style={{ top: 12, right: 16 }}>
                  <span className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle shadow" style={{ width: 40, height: 40 }}>
                    <FaApple className="text-dark" />
                  </span>
                </div>
                <div className="position-absolute" style={{ bottom: 16, right: 32 }}>
                  <span className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle shadow" style={{ width: 40, height: 40 }}>
                    <FaGoogle className="text-success" />
                  </span>
                </div>
                <div className="position-absolute" style={{ top: 50, left: 0 }}>
                  <span className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle shadow" style={{ width: 40, height: 40 }}>
                    <FaFacebook className="text-primary" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";

export default function CFDTradingInfoSections() {
  return (
    <section className="bg-white" id="learn">
      <div className="container py-5 py-md-6">
        {/* 1. Left text / Right image */}
        <div className="row align-items-center g-4 g-lg-5 mb-5">
          <div className="col-12 col-lg-6">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-3" style={{ background: "rgba(139,92,246,0.12)", color: "#5b21a8", border: "1px solid rgba(139,92,246,0.25)" }}>CFD Trading</div>
            <h2 className="fw-bold mb-3 gradient-text">CFD Trading</h2>
            <p className="text-dark">Take a position on thousands of global markets by trading CFDs on shares, indices, forex, commodities, bonds and cryptocurrencies. Join us for a total trading experience with a powerful multi-asset platform, low costs and expert support.</p>
            <h5 className="fw-semibold mt-4 mb-2" style={{ color: "#6b21a8" }}>Why Trade CFDs with us</h5>
            <ul className="text-dark mb-0">
              <li>Multi-asset trading platform with informative, customisable charts and alerts</li>
              <li>Go long or short on thousands of financial instruments</li>
              <li>Lower spreads and speedy execution</li>
              <li>Trade with leverage* to make your capital go further</li>
            </ul>
            <p className="small text-dark mt-2 mb-0">* Leverage magnifies both profits and losses</p>
          </div>
          <div className="col-12 col-lg-6">
            <div className="illustration-box rounded-4 border overflow-hidden hover-lift">
              <img src="/images/trading-illustration.png" alt="Trade CFDs across markets" className="w-100 h-100 object-cover" onError={(e) => { e.currentTarget.src = "/images/trading-illustration1.png"; }} />
            </div>
          </div>
        </div>

        {/* 2. Right text / Left image */}
        <div className="row align-items-center g-4 g-lg-5 mb-5 flex-lg-row-reverse" id="markets">
          <div className="col-12 col-lg-6">
            <h2 className="fw-bold mb-3 gradient-text">What markets can I trade?</h2>
            <div className="vstack gap-2 text-dark">
              <div>
                <strong>Shares</strong> — Thousands of stocks from around the world, from Apple to Zoom. <a href="#" className="text-decoration-none" style={{ color: "#6b21a8" }}>Trade Shares</a>
              </div>
              <div>
                <strong>Forex</strong> — A selection of FX pairs with low spreads starting at 0.6 pips on EUR/USD. <a href="#" className="text-decoration-none" style={{ color: "#6b21a8" }}>Trade Forex</a>
              </div>
              <div>
                <strong>Commodities</strong> — Metals, energies and soft commodities with gold from 0.35pts. <a href="#" className="text-decoration-none" style={{ color: "#6b21a8" }}>Trade Commodities</a>
              </div>
              <div>
                <strong>Indices</strong> — Trade over the stock markets 24/5 with cash and futures CFDs on indices. <a href="#" className="text-decoration-none" style={{ color: "#6b21a8" }}>Trade Indices</a>
              </div>
              <div>
                <strong>Cryptocurrencies</strong> — Go long or short on our selection of the largest crypto* assets. <a href="#" className="text-decoration-none" style={{ color: "#6b21a8" }}>Trade Crypto</a>
              </div>
              <div>
                <strong>Other markets</strong> — Find out some of our other markets including ETFs and Bonds. <a href="#" className="text-decoration-none" style={{ color: "#6b21a8" }}>Go to the market</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="illustration-box rounded-4 border overflow-hidden hover-lift">
              <img src="/images/trading-illustration1.png" alt="Markets you can trade with CFDs" className="w-100 h-100 object-cover" onError={(e) => { e.currentTarget.src = "/images/trading-illustration.png"; }} />
            </div>
          </div>
        </div>

        {/* 3. Left text / Right image */}
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-6">
            <h2 className="fw-bold mb-3 gradient-text">Join IVRFX in 3 steps and start trading</h2>
            <ol className="text-dark mb-3">
              <li>Create your account</li>
              <li>Fund your account</li>
              <li>Start trading straight away</li>
            </ol>
            <p className="text-dark mb-1">Need more information? <a href="#" className="text-decoration-none" style={{ color: "#6b21a8" }}>See all FAQs</a></p>
            <p className="text-dark small mb-0">Ready to trade?</p>
          </div>
          <div className="col-12 col-lg-6">
            <div className="illustration-box rounded-4 border overflow-hidden hover-lift">
              <img src="/images/trading-illustration.png" alt="Get started in minutes" className="w-100 h-100 object-cover" onError={(e) => { e.currentTarget.src = "/images/trading-illustration1.png"; }} />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .illustration-box { min-height: 280px; background: #f8f9fb; border-color: #ecebf1; box-shadow: 0 6px 18px rgba(17,24,39,.05); }
        .object-cover { object-fit: cover; object-position: center; display: block; }
        @media (min-width: 992px) { .illustration-box { min-height: 340px; } }
      `}</style>
    </section>
  );
}

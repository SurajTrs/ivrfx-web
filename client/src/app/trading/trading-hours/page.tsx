"use client";
import AsianPacificAfricanIndicesSection from "app/tradinghourspage/AsianPacificAfricanIndicesSection";
import CashIndicesSection from "app/tradinghourspage/CashIndicesSection";
import MetalsSection from "app/tradinghourspage/MetalsSection";
import SoftAgriSection from "app/tradinghourspage/SoftAgriSection";
import GovernmentBondsSection from "app/tradinghourspage/GovernmentBondsSection";
import EnergySection from "app/tradinghourspage/EnergySection";
import ForexSection from "app/tradinghourspage/ForexSection";
import CryptoSection from "app/tradinghourspage/CryptoSection";
import StocksSection from "app/tradinghourspage/StocksSection";
import TradingHourHero from "app/tradinghourspage/TradingHourHero";
import React from "react";

// Root-level sections


// Sections inside the nested folder


export default function TradingHoursPage() {
  return (
    <main className="bg-white text-black" aria-label="Trading Central page">

  
        <TradingHourHero />
      <header className="text-center mb-5">
        <h1 className="fw-bold" style={{ color: "#4c1d95" }}>Stay updated with market trading hours to be ahead of the curve</h1>
        <p className="mt-2" style={{ color: "#6b21a8" }}>All times shown are in GMT</p>
      </header>
      <div className="container pb-5">
        <div className="accordion" id="tradingHoursAccordion">
          {/* Stocks */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingStocks">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseStocks" aria-expanded="true" aria-controls="collapseStocks">
                Stocks
              </button>
            </h2>
            <div id="collapseStocks" className="accordion-collapse collapse show" aria-labelledby="headingStocks" data-bs-parent="#tradingHoursAccordion">
              <div className="accordion-body">
                <StocksSection />
              </div>
            </div>
          </div>

          {/* Indices */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingIndices">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIndices" aria-expanded="false" aria-controls="collapseIndices">
                Indices
              </button>
            </h2>
            <div id="collapseIndices" className="accordion-collapse collapse" aria-labelledby="headingIndices" data-bs-parent="#tradingHoursAccordion">
              <div className="accordion-body">
                <AsianPacificAfricanIndicesSection />
                <CashIndicesSection />
              </div>
            </div>
          </div>

          {/* Commodities */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingCommodities">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCommodities" aria-expanded="false" aria-controls="collapseCommodities">
                Commodities
              </button>
            </h2>
            <div id="collapseCommodities" className="accordion-collapse collapse" aria-labelledby="headingCommodities" data-bs-parent="#tradingHoursAccordion">
              <div className="accordion-body">
                <MetalsSection />
                <SoftAgriSection />
                <EnergySection />
              </div>
            </div>
          </div>

          {/* Bonds */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingBonds">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBonds" aria-expanded="false" aria-controls="collapseBonds">
                Government Bonds
              </button>
            </h2>
            <div id="collapseBonds" className="accordion-collapse collapse" aria-labelledby="headingBonds" data-bs-parent="#tradingHoursAccordion">
              <div className="accordion-body">
                <GovernmentBondsSection />
              </div>
            </div>
          </div>

          {/* Forex */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingForex">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseForex" aria-expanded="false" aria-controls="collapseForex">
                Forex
              </button>
            </h2>
            <div id="collapseForex" className="accordion-collapse collapse" aria-labelledby="headingForex" data-bs-parent="#tradingHoursAccordion">
              <div className="accordion-body">
                <ForexSection />
              </div>
            </div>
          </div>

          {/* Crypto */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingCrypto">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCrypto" aria-expanded="false" aria-controls="collapseCrypto">
                Crypto
              </button>
            </h2>
            <div id="collapseCrypto" className="accordion-collapse collapse" aria-labelledby="headingCrypto" data-bs-parent="#tradingHoursAccordion">
              <div className="accordion-body">
                <CryptoSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

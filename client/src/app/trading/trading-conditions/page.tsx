"use client";
import React from "react";

import ConditionsTable, { ConditionRow } from "app/TradingConditionPage/ConditionsTable";
import ToolsStrip from "app/auth/cfdassetlistpage/ToolsStrip";
import TradingConditionsHero from "app/TradingConditionPage/TradingConditionsHero";
import { Accordion, AccordionItem } from "app/TradingConditionPage/Accordion";
import { useLiveIndexPrice } from "app/TradingConditionPage/useLiveIndexPrice";
import { useLiveEtfPrice } from "app/TradingConditionPage/useLiveEtfPrice";

function EtfLiveTable() {
  const etfs = [
    { asset: "S&P 500 ETF Trust - SPDR", spread: "3.89", leverage: "1:10", minQty: "-", rolloverSell: "-0.0292 %", rolloverBuy: "-0.0597 %", viewHref: "#" },
    { asset: "QQQ", spread: "5.00", leverage: "1:200", minQty: "-", rolloverSell: "-0.0160 %", rolloverBuy: "-0.0451 %", viewHref: "#" },
    { asset: "GLD", spread: "1.90", leverage: "1:5", minQty: "-", rolloverSell: "-0.0292 %", rolloverBuy: "-0.0597 %", viewHref: "#" },
    { asset: "Technology Select Sector SPDR", spread: "1.59", leverage: "1:10", minQty: "-", rolloverSell: "-0.0292 %", rolloverBuy: "-0.0597 %", viewHref: "#" },
  ];
  const rows = etfs.map((row) => {
    const { price, loading, error } = useLiveEtfPrice(row.asset);
    return {
      ...row,
      sell: loading ? "Loading..." : error ? "-" : price !== null ? `$${price.toLocaleString(undefined, { maximumFractionDigits: 2 })}` : "-",
      buy: loading ? "Loading..." : error ? "-" : price !== null ? `$${price.toLocaleString(undefined, { maximumFractionDigits: 2 })}` : "-",
    };
  });
  return <ConditionsTable id="etfs" title="ETFs" rows={rows} />;
}

export default function Page() {
  // Demo rows assembled from the user's provided content
  const bonds: ConditionRow[] = [
    { asset: "US TBond 30Y", spread: "0.08", leverage: "1:100", minQty: 10, rolloverSell: "0.0049 %", rolloverBuy: "-0.0257 %", viewHref: "#" },
    { asset: "Gilt 10Y Bond", spread: "0.06", leverage: "1:100", minQty: 10, rolloverSell: "-0.0069 %", rolloverBuy: "-0.0139 %", viewHref: "#" },
    { asset: "US TNote 10Y", spread: "0.08", leverage: "1:100", minQty: 10, rolloverSell: "0.0049 %", rolloverBuy: "-0.0257 %", viewHref: "#" },
    { asset: "GER 10Y Bond", spread: "0.06", leverage: "1:100", minQty: 10, rolloverSell: "-0.0083 %", rolloverBuy: "-0.0125 %", viewHref: "#" },
  ];

  const commodities: ConditionRow[] = [
    { asset: "Palladium - Cash", spread: "5.00", leverage: "1:100", minQty: 1, rolloverSell: "-0.0042 %", rolloverBuy: "-0.0347 %", viewHref: "#" },
    { asset: "Brent Oil", spread: "0.06", leverage: "1:33", minQty: 10, rolloverSell: "-0.0042 %", rolloverBuy: "-0.0347 %", viewHref: "#" },
    { asset: "Crude Oil", spread: "0.13", leverage: "1:33", minQty: 10, rolloverSell: "-0.0042 %", rolloverBuy: "-0.0347 %", viewHref: "#" },
    { asset: "Gold", spread: "0.29", leverage: "1:1000", minQty: 1, rolloverSell: "-0.0042 %", rolloverBuy: "-0.0347 %", viewHref: "#" },
    { asset: "Natural Gas", spread: "0.008", leverage: "1:10", minQty: 100, rolloverSell: "-0.0264 %", rolloverBuy: "-0.0569 %", viewHref: "#" },
  ];

  const crypto: ConditionRow[] = [
    { asset: "Bitcoin", spread: "158.15", leverage: "1:1000", minQty: "-", rolloverSell: "-0.1500 %", rolloverBuy: "-0.1500 %", viewHref: "#" },
    { asset: "Ethereum", spread: "4.50", leverage: "1:1000", minQty: "-", rolloverSell: "-0.1500 %", rolloverBuy: "-0.1500 %", viewHref: "#" },
    { asset: "Litecoin", spread: "0.80", leverage: "1:100", minQty: "-", rolloverSell: "-0.1500 %", rolloverBuy: "-0.1500 %", viewHref: "#" },
    { asset: "Ripple", spread: "0.0060", leverage: "1:200", minQty: "-", rolloverSell: "-0.2000 %", rolloverBuy: "-0.2000 %", viewHref: "#" },
    { asset: "Dogecoin", spread: "0.0005", leverage: "1:100", minQty: "-", rolloverSell: "-0.2000 %", rolloverBuy: "-0.2000 %", viewHref: "#" },
  ];

  const currency: ConditionRow[] = [
    { asset: "EUR/USD", spread: "1.30", leverage: "1:500", minQty: 1, rolloverSell: "-0.0075 %", rolloverBuy: "-0.0144 %", viewHref: "#" },
    { asset: "USD/JPY", spread: "1.20", leverage: "1:500", minQty: 1, rolloverSell: "-0.0253 %", rolloverBuy: "0.0033 %", viewHref: "#" },
    { asset: "GBP/USD", spread: "1.50", leverage: "1:500", minQty: 1, rolloverSell: "-0.0103 %", rolloverBuy: "-0.0117 %", viewHref: "#" },
    { asset: "USD/CHF", spread: "2.90", leverage: "1:500", minQty: 1, rolloverSell: "-0.0264 %", rolloverBuy: "-0.0013 %", viewHref: "#" },
    { asset: "USD/CAD", spread: "1.80", leverage: "1:500", minQty: 1, rolloverSell: "-0.0124 %", rolloverBuy: "-0.0096 %", viewHref: "#" },
  ];

  const etfs: ConditionRow[] = [
    { asset: "S&P 500 ETF Trust - SPDR", spread: "3.89", leverage: "1:10", minQty: "-", rolloverSell: "-0.0292 %", rolloverBuy: "-0.0597 %", viewHref: "#" },
    { asset: "QQQ", spread: "5.00", leverage: "1:200", minQty: "-", rolloverSell: "-0.0160 %", rolloverBuy: "-0.0451 %", viewHref: "#" },
    { asset: "GLD", spread: "1.90", leverage: "1:5", minQty: "-", rolloverSell: "-0.0292 %", rolloverBuy: "-0.0597 %", viewHref: "#" },
    { asset: "Technology Select Sector SPDR", spread: "1.59", leverage: "1:10", minQty: "-", rolloverSell: "-0.0292 %", rolloverBuy: "-0.0597 %", viewHref: "#" },
  ];

  const { price, loading, error } = useLiveIndexPrice();

  return (
    <main>
      <TradingConditionsHero />
      <section id="conditions" className="py-4">
        <div className="container">
          <div className="row g-3">
            <div className="col-12">
              <div className="alert alert-info small m-0">
                Below you can view the trading conditions per instrument on each of the MetaTrader platforms we offer.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mb-5">
        <div className="mb-3">
          <div className="alert alert-success d-flex align-items-center gap-2" role="alert">
            <span className="fw-semibold">S&P 500 Live Price:</span>
            {loading ? (
              <span>Loading...</span>
            ) : error ? (
              <span className="text-danger">{error}</span>
            ) : price !== null ? (
              <span>${price.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
            ) : (
              <span>No data</span>
            )}
          </div>
        </div>
        <Accordion id="tc-accordion">
          <AccordionItem parentId="tc-accordion" itemId="acc-bonds" title="Bonds" defaultOpen>
            <ConditionsTable id="bonds" title="Bonds" rows={bonds} />
          </AccordionItem>
          <AccordionItem parentId="tc-accordion" itemId="acc-commodities" title="Commodities">
            <ConditionsTable id="commodities" title="Commodity" rows={commodities} />
          </AccordionItem>
          <AccordionItem parentId="tc-accordion" itemId="acc-crypto" title="Crypto">
            <ConditionsTable id="crypto" title="Crypto" rows={crypto} />
          </AccordionItem>
          <AccordionItem parentId="tc-accordion" itemId="acc-currency" title="Currency">
            <ConditionsTable id="currency" title="Currency" rows={currency} />
          </AccordionItem>
          <AccordionItem parentId="tc-accordion" itemId="acc-etfs" title="ETFs">
            <ConditionsTable id="etfs" title="ETFs" rows={etfs} />
          </AccordionItem>
          <AccordionItem parentId="tc-accordion" itemId="acc-indices" title="Indices (coming soon)">
            <div className="p-4 text-muted">We will populate Indices data next.</div>
          </AccordionItem>
          <AccordionItem parentId="tc-accordion" itemId="acc-shares" title="Shares (coming soon)">
            <div className="p-4 text-muted">We will populate Shares data next.</div>
          </AccordionItem>
          <AccordionItem parentId="tc-accordion" itemId="acc-mt4" title="MetaTrader 4 Trading Conditions (coming soon)">
            <div className="p-4 text-muted">Detailed MT4 tables will be added here.</div>
          </AccordionItem>
          <AccordionItem parentId="tc-accordion" itemId="acc-mt5" title="MetaTrader 5 Trading Conditions (coming soon)">
            <div className="p-4 text-muted">Detailed MT5 tables will be added here.</div>
          </AccordionItem>
        </Accordion>
      </div>

      <ToolsStrip />
    </main>
  );
}

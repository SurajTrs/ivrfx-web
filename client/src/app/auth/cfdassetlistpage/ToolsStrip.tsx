"use client";

import Reveal from "components/Reveal";

function ToolsStrip() {
    const items = [
      { href: "/tools/cfd-trading-calculator", icon: "bi-calculator", title: "CFD Trading Calculator" },
      { href: "/trading/trading-hours", icon: "bi-clock-history", title: "Trading Hours" },
      { href: "/trading/expiration-dates", icon: "bi-calendar2-week", title: "Expiration Dates" },
      { href: "/trading/upcoming-trading-holidays", icon: "bi-calendar-event", title: "Upcoming Holidays" },
    ];
    return (
      <section id="tools" className="bg-light" style={{ background: "#f8f9fb" }}>
        <div className="container py-5 py-md-6">
          <Reveal><h2 className="fw-bold mb-3">Trading tools & info</h2></Reveal>
          <div className="row g-3 g-lg-4">
            {items.map((it, i) => (
              <div className="col-12 col-md-6 col-lg-3" key={it.title}>
                <Reveal delay={0.06 * i}>
                  <a href={it.href} className="text-decoration-none d-block">
                    <div className="p-4 rounded-4 border bg-white hover-lift shine-sweep h-100"
                         style={{ borderColor: "#ecebf1", boxShadow: "0 6px 18px rgba(17,24,39,.05)" }}>
                      <div className="chip mb-2"><i className={`bi ${it.icon}`} /></div>
                      <div className="fw-semibold">{it.title}</div>
                    </div>
                  </a>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          .chip { width: 42px; height: 42px; border-radius: 12px; display:inline-flex; align-items:center; justify-content:center; background:#eef2ff; color:#6366f1; border:1px solid #c7d2fe; }
        `}</style>
      </section>
    );
}
export default ToolsStrip;
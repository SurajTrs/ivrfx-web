import React from "react";

export default function InterestedPlatforms() {
  const items = [
    {
      title: "TradingView. Elevate your trading experience.",
      body:
        "TradingView is an empowering charting platform with premier technical analysis tools and a vibrant community of traders.",
      cta: "Learn more",
      image: "/images/trading-illustration.png",
    },
    {
      title: "MetaTrader 4. The pro way to trade forex.",
      body:
        "In-app advisors, micro-lots, hedging capabilities and one-click trading. MT4 is trusted by thousands of traders.",
      cta: "Learn more",
      image: "/images/placeholder-app.png",
    },
    {
      title: "MetaTrader 5. Multi-asset trading at the highest level",
      body:
        "Everything that makes MT4 so popular, distilled into a powerful multi-asset package. The gold standard for traders.",
      cta: "Learn more",
      image: "/images/trading-illustration1.png",
    },
  ];

  return (
    <section className="py-6 bg-light">
      <div className="container">
        <div className="text-center mt-5 mb-5">
          <h2 className="h1 fw-bold">You might also be interested in…</h2>
        </div>
        <div className="d-flex flex-column gap-5 mt-4 mb-4">
          {items.map((card, idx) => (
            <div key={card.title} className="rounded-4" style={{ background: '#f2f3f7' }}>
              <div className={`row g-0 align-items-center p-4 p-lg-5 ${idx % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                <div className="col-12 col-md-6">
                  <h3 className="h4 fw-bold mb-2">{card.title}</h3>
                  <p className="text-muted mb-3 fs-5">{card.body}</p>
                  <a href="#" className="fw-semibold text-primary text-decoration-none">{card.cta} <span aria-hidden>›</span></a>
                </div>
                <div className={`col-12 col-md-6 d-flex ${idx % 2 === 1 ? 'justify-content-md-start' : 'justify-content-md-end'} justify-content-start mt-4 mt-md-0`}>
                  {/* Illustration with layered shadow look */}
                  <div className="position-relative my-3" style={{ width: 320, height: 220 }}>
                    <div className="position-absolute rounded-3" style={{ width: '92%', height: '88%', background: '#2d2a32', bottom: -10, left: 16 }} />
                    <div className="position-absolute rounded-3" style={{ width: '92%', height: '88%', background: '#55d0b5', bottom: 8, left: 8 }} />
                    <div className="position-absolute rounded-3 bg-white d-flex align-items-center justify-content-center overflow-hidden" style={{ width: '92%', height: '88%', boxShadow: '0 6px 12px rgba(0,0,0,0.12)' }}>
                      <img src={card.image} alt={card.title} style={{ maxWidth: '92%', maxHeight: '92%', objectFit: 'contain' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

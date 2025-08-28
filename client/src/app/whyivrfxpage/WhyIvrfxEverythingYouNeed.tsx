import React from "react";

export default function EverythingYouNeed() {
  const items = [
    {
      title: "Expert market analysis to guide your trading decisions",
      body:
        "Our analysts have been featured in the BBC, CNBC and Bloomberg. When you trade with IVRFX, you get their insight and analysis on the markets before anyone else. Become a more knowledgeable trader from day 1.",
      cta: "Find out more",
      image: "/images/trading-illustration.png",
    },
    {
      title: "Customisable trading platforms tailored to suit your needs",
      body:
        "Beginner-friendly demo trading right the way through to pro-level platforms MetaTrader 4 and MetaTrader 5. Wherever you are in your trading journey, we have the tools to help you become a more knowledgeable and confident trader.",
      cta: "Find out more",
      image: "/images/placeholder-app.png",
    },
    {
      title: "Trade at your best with our professional software tools",
      body:
        "Buy/sell alerts, risk management, and market sentiment analysis to help you act on price moves that matter.",
      cta: "Find out more",
      image: "/images/trading-illustration1.png",
    },
    {
      title: "Fully regulated in your area",
      body:
        "Regulated by the FSCA in South Africa and CySEC in the EU.",
      cta: "Find out more",
      image: "/images/logo.jpg",
    },
  ];

  return (
    <section className="py-6">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="h1 fw-bold">Everything you need to trade effectively, in one place</h2>
        </div>
        <div className="row g-4">
          {items.map((card) => (
            <div key={card.title} className="col-12 col-md-6">
              <div className="h-100 p-4 p-lg-5 bg-white rounded-4 border" style={{ borderColor: '#eee' }}>
                <div className="rounded-4 mb-4 d-flex align-items-center justify-content-center overflow-hidden" style={{ height: 200, background: 'linear-gradient(135deg, #7b5cff 0%, #7ee8fa 100%)' }}>
                  <img src={card.image} alt={card.title} style={{ maxWidth: '85%', maxHeight: '85%', objectFit: 'contain' }} />
                </div>
                <h3 className="h4 fw-bold mb-3">{card.title}</h3>
                <p className="text-muted mb-4">{card.body}</p>
                <a href="#" className="fw-semibold text-primary text-decoration-none">{card.cta} <span aria-hidden>›</span></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

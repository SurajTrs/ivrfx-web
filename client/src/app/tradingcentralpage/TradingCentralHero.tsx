"use client";

export default function TradingCentralHero() {
  return (
    <section className="tc-hero bg-white">
      <div className="container py-4">
        <div className="mb-3 text-center small text-muted">Trading › Trading Central</div>

        <div className="tc-hero-card rounded-4 shadow-sm overflow-hidden mx-auto">
          <div className="tc-hero-overlay p-4 p-sm-5">
            <div className="text-center mx-auto" style={{maxWidth: 880}}>
              <h1 className="fw-bold display-6 mb-2 text-dark">Trading Central</h1>
              <p className="lead text-secondary mb-4">Your Gateway to Award‑Winning Trading Insights</p>

              <div className="d-inline-flex align-items-center gap-4 py-3 px-4 rounded-4 bg-white border">
                <div className="text-center tc-metric">
                  <div className="fw-bold h3 mb-0 tc-metric-number">100K</div>
                  <div className="small text-muted">Sources</div>
                </div>
                <div className="vr" />
                <div className="text-center tc-metric">
                  <div className="fw-bold h3 mb-0 tc-metric-number">50K</div>
                  <div className="small text-muted">Instruments</div>
                </div>
                <div className="vr" />
                <div className="text-center tc-metric">
                  <div className="fw-bold h3 mb-0 tc-metric-number">600+</div>
                  <div className="small text-muted">Events</div>
                </div>
              </div>

              <div className="mt-4">
                <a href="#insights" className="btn btn-primary rounded-pill px-4 py-2 tc-cta">Explore now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

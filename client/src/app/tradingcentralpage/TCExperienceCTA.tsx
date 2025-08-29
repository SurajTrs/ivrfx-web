export default function TCExperienceCTA() {
  return (
    <section className="bg-white">
      <div className="container py-5 py-md-5">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <div className="tc-showcase position-relative mx-auto">
              <img className="tc-card-img tc-img-main rounded-4" src="/images/trading-illustration.png" alt="Trading app preview" />
            </div>
          </div>

          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <div className="text-center text-lg-start">
              <h2 className="display-5 fw-bold text-dark mb-3">Experience Trading Central's Award‑Winning Insights</h2>
              <p className="lead text-secondary mb-4">Start now to unlock real‑time market data, actionable ideas, and expert analysis integrated into your trading workflow.</p>
              <a href="/trade" className="btn tc-cta-green rounded-pill px-4 py-2 fw-semibold">Start Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

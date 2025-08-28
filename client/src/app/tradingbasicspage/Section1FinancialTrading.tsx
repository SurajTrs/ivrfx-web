export default function Section1FinancialTrading() {
  return (
    <section className="container py-5">
      <div className="row align-items-center g-5">
        <div className="col-lg-6 order-lg-2">
          <div className="d-inline-flex align-items-center gap-2 mb-2">
            <span className="badge rounded-pill" style={{ background: "#7c3aed" }}>1</span>
            <span className="text-muted small">Basics</span>
          </div>
          <h2 className="display-6 fw-bold mb-3">What is financial trading?</h2>
          <p className="text-muted fs-5">
            Financial trading involves the buying and selling of securities such as
            stocks, currencies, commodities, bonds and even cryptocurrencies. Unlike
            traditional buy-and-hold investing, CFD trading can be as short-term as you
            like, with trades lasting anything from weeks to just a few seconds.
          </p>
        </div>
        <div className="col-lg-6 order-lg-1">
          {/* Placeholder image */}
          <div
            className="ratio ratio-1x1 rounded-circle border"
            style={{ borderColor: "#e9d5ff", background: "#faf5ff" }}
          >
            <div className="d-flex align-items-center justify-content-center">
              <span className="text-muted">Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

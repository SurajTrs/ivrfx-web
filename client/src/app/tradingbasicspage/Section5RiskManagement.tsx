import Link from "next/link";

export default function Section5RiskManagement() {
  return (
    <section className="container py-5">
      <div className="row align-items-center g-5">
    
       
        <div className="col-lg-6">
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
        <div className="col-lg-6">
          <div className="d-inline-flex align-items-center gap-2 mb-2">
            <span className="badge rounded-pill" style={{ background: "#7c3aed" }}>5</span>
          </div>
          <h2 className="display-6 fw-bold mb-3">How to minimise risk</h2>
          <p className="text-muted fs-5">
            Trading is inherently risky — markets can rise and fall and no one can predict
            the future with certainty. However, there are ways to mitigate risk.
          </p>
          <p className="text-muted fs-5">
            A sound risk management strategy starts by carefully analysing the markets,
            applying position sizing that is appropriate to your financial situation
            (not staking too much on one trade), and using platform tools such as
            stop-loss orders and take-profit orders to help minimise drawdowns and
            lock in potential profits.
          </p>
          <p>
            <Link href="/forexmargincalculator" className="fw-semibold" style={{ color: "#7c3aed" }}>
              Calculate your margin ›
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

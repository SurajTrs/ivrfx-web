import Link from "next/link";

export default function Section4Instruments() {
  return (
    <section className="container py-5">
      <div className="row align-items-center g-5">
        <div className="col-lg-6 order-lg-1">
          <div className="d-inline-flex align-items-center gap-2 mb-2">
            <span className="badge rounded-pill" style={{ background: "#7c3aed" }}>4</span>
          </div>
          <h2 className="display-6 fw-bold mb-3">What instruments can you trade?</h2>
          <p className="text-muted fs-5">
            A variety of assets are available for trading with CFDs. You can trade on
            shares, indices, ETFs, currencies, commodities, bonds and cryptocurrencies.
            Currency trading, often referred to as forex (foreign exchange), is among the most
            popular ways to trade online. This can all be done using a single multi-asset platform
            with a single currency account.
          </p>
          <p>
            <Link href="/instruments" className="fw-semibold" style={{ color: "#7c3aed" }}>
              Discover more ›
            </Link>
          </p>
        </div>
        <div className="col-lg-6 order-lg-2">
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

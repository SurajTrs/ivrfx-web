import Link from "next/link";

export default function Section2CFD() {
  return (
    <section className="container py-5">
      <div className="row align-items-center g-5">
        <div className="col-lg-6">
          <div className="d-inline-flex align-items-center gap-2 mb-2">
            <span className="badge rounded-pill" style={{ background: "#7c3aed" }}>2</span>
          </div>
          <h2 className="display-6 fw-bold mb-3">What is a CFD?</h2>
          <p className="text-muted fs-5">
            A CFD stands for Contract-for-Difference, which is a type of derivative. A
            CFD is a contract between a broker and trader to exchange the difference in
            value of the security between the start of the contract – when you open the
            position – and the end of the contract; when you close the position.
          </p>
          <p className="text-muted fs-5">
            With CFDs you do not need to own the underlying asset and can enable you to
            profit whether an asset is rising or falling. Simply open a long (buy) or
            short (sell) position depending on whether you think the price of the
            underlying asset will rise or fall. CFD trading involves the use of
            leverage, enabling traders to open larger positions. However, it is
            important to note that this is a double-edged sword – magnifying the
            potential for both profits and losses.
          </p>
          <p>
            <Link href="/learn/glossary" className="fw-semibold" style={{ color: "#7c3aed" }}>
              Go to the glossary page ›
            </Link>
          </p>
        </div>
        <div className="col-lg-6">
          {/* Placeholder image */}
          <div
            className="ratio ratio-1x1 rounded-circle border position-relative"
            style={{ borderColor: "#c4b5fd", background: "#faf5ff" }}
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

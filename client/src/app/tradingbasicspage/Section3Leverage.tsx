import Link from "next/link";

export default function Section3Leverage() {
  return (
    <section className="container py-5">
      <div className="row align-items-center g-5">
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
        <div className="col-lg-6 order-lg-2">
          <div className="d-inline-flex align-items-center gap-2 mb-2">
            <span className="badge rounded-pill" style={{ background: "#7c3aed" }}>3</span>
          </div>
          <h2 className="display-6 fw-bold mb-3">Benefits of trading with leverage</h2>
          <p className="text-muted fs-5">
            Leverage enables traders to control larger positions with a smaller initial
            outlay. Essentially you put down a deposit with the broker, called margin,
            which is a fraction of the actual trade size. The more leverage you have,
            the bigger positions you can take, and the bigger your swings of profit and
            loss can be. Leverage magnifies losses as well as profits, so needs to be
            treated with caution.
          </p>
          <p>
            <Link href="/learn/more" className="fw-semibold" style={{ color: "#7c3aed" }}>
              Find out more ›
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

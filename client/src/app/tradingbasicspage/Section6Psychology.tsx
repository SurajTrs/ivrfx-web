import Link from "next/link";

export default function Section6Psychology() {
  return (
    <section className="container py-5">
      <div className="row align-items-center g-5">
        <div className="col-lg-6 order-lg-1">
          <div className="d-inline-flex align-items-center gap-2 mb-2">
            <span className="badge rounded-pill" style={{ background: "#7c3aed" }}>6</span>
          </div>
          <h2 className="display-6 fw-bold mb-3">Understand the psychology of trading</h2>
          <p className="text-muted fs-5">
            Emotions can affect our decisions, so it is important to learn how certain
            biases and feelings can impact our trading habits. Trading psychology refers
            to your ability to handle risks and deal with gains and losses in an appropriate
            manner.
          </p>
          <p className="text-muted fs-5">
            If you understand the risks and learn how to master trading psychology, you
            may find it easier to keep your head and execute transactions strategically.
          </p>
          <p>
            <Link href="/learn/academy" className="fw-semibold" style={{ color: "#7c3aed" }}>
              Find out more ›
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

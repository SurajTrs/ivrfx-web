import Link from "next/link";

export default function TradingBasicsHero() {
  return (
    <section className="container py-5 py-lg-6">
      <div className="row align-items-center g-4">
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold mb-3">Trading: Learn The Basics</h1>
          <p className="lead text-muted mb-4">
            We believe trading should be accessible to everyone. Here are some
            trading basics you need to know to help get you started on your
            trading journey.
          </p>
          <div className="d-flex gap-3">
            <Link href="/tools" className="btn btn-success btn-lg px-4">
              Practice Trading on Demo
            </Link>
          </div>
        </div>
        <div className="col-lg-6 text-center">
          {/* Placeholder hero graphic - replace with your asset */}
          <div
            className="rounded-circle mx-auto"
            style={{
              width: 320,
              height: 320,
              background:
                "radial-gradient(120px 120px at 30% 30%, #e9d5ff 0%, #ffffff 60%)",
              border: "6px solid #e9d5ff",
            }}
          />
        </div>
      </div>
    </section>
  );
}

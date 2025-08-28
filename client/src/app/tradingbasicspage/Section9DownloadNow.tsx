import Link from "next/link";

export default function Section9DownloadNow() {
  return (
    <section className="container py-5">
      <div className="row align-items-center g-5">
        {/* Text left */}
        <div className="col-lg-6">
          <h2 className="display-6 fw-bold mb-3">Download now and make your move.</h2>
          <p className="text-muted fs-5 mb-4">
            Who better to enter the markets with than IVRFX?
          </p>
          <div className="d-flex gap-3 flex-wrap">
            <Link href="#" className="btn btn-dark px-4 py-2 rounded-3">
              Download on the App Store
            </Link>
            <Link href="#" className="btn btn-outline-dark px-4 py-2 rounded-3">
              Get it on Google Play
            </Link>
          </div>
        </div>

        {/* Image right */}
        <div className="col-lg-6">
          <div
            className="ratio ratio-1x1 rounded-circle border"
            style={{ borderColor: "#e9d5ff", background: "#faf5ff" }}
          >
            <div className="d-flex align-items-center justify-content-center">
              <span className="text-muted">Phone Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

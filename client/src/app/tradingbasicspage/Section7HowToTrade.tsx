import Link from "next/link";

export default function Section7HowToTrade() {
  return (
    <section className="container py-5">
      <div className="text-center mb-4">
        <span className="badge rounded-pill me-2" style={{ background: "#7c3aed" }}>7</span>
        <h2 className="display-6 fw-bold d-inline-block mb-2">How to make a trade</h2>
        <div className="text-muted">Easy as 1,2,3</div>
      </div>

      <div className="p-4 p-lg-5 rounded-4" style={{ background: "#f3f4f6" }}>
        {/* Step 1: image left, text right */}
        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-6">
            <div
              className="ratio ratio-4x3 rounded-4 border d-flex align-items-center justify-content-center"
              style={{ borderColor: "#e5e7eb", background: "#ffffff" }}
            >
              <span className="text-muted">Illustration</span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="badge rounded-pill" style={{ background: "#a78bfa" }}>1</span>
            </div>
            <p className="text-muted fs-5 mb-3">
              First you need to open an account with IVRFX, and either download the app or use the desktop version.
            </p>
            <p className="text-muted fs-5 mb-4">
              Opening an account is simple; just provide us with a few details so we can do our checks, answer some questions about trading to check you are suitable for leveraged products, and then deposit funds.
            </p>
            <Link href="/auth/signup" className="btn btn-dark px-4 py-2">
              Open Account
            </Link>
          </div>
        </div>

        {/* Step 2: image right, text left */}
        <div className="row align-items-center g-5 mb-5 flex-lg-row-reverse">
          <div className="col-lg-6">
            <div
              className="ratio ratio-4x3 rounded-4 border d-flex align-items-center justify-content-center"
              style={{ borderColor: "#e5e7eb", background: "#ffffff" }}
            >
              <span className="text-muted">Illustration</span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="badge rounded-pill" style={{ background: "#a78bfa" }}>2</span>
            </div>
            <p className="text-muted fs-5 mb-0">
              Select an asset you’d like to trade, for instance Apple CFD shares. Type the name into the search bar, or look for it in the shares list, and find out more about the price history and other useful information like financials and what analysts are saying about the stock.
            </p>
          </div>
        </div>

        {/* Step 3: image left, text right */}
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div
              className="ratio ratio-4x3 rounded-4 border d-flex align-items-center justify-content-center"
              style={{ borderColor: "#e5e7eb", background: "#ffffff" }}
            >
              <span className="text-muted">Illustration</span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="badge rounded-pill" style={{ background: "#a78bfa" }}>3</span>
            </div>
            <p className="text-muted fs-5 mb-2">
              Then open a deal ticket and choose whether to go long (buy) or short (sell). Decide how much you’d like to stake and think about adding stop-loss orders and/or take-profit orders.
            </p>
            <p className="text-muted fs-5 mb-0">
              Always think about your time horizon – how long do you want the trade to last, and how much drawdown (paper loss) are you willing to absorb.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

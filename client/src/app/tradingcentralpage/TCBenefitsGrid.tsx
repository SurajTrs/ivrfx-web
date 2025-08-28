export default function TCBenefitsGrid() {
  return (
    <section className="tc-news-section bg-white" id="insights">
      <div className="container py-5 py-md-5">
        <h2 className="text-center fw-bold display-6 text-dark mb-2">Stay Ahead of Market‑Moving News</h2>
        <p className="text-center text-secondary lead mb-5">Curated intelligence and tools designed for smarter, faster trading decisions</p>

        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-7">
            <div className="tc-list d-flex flex-column gap-3">
              <div className="tc-card p-3 p-md-4 rounded-4 border bg-white">
                <div className="d-flex align-items-start gap-3">
                  <span className="tc-badge rounded-3"><i className="bi bi-newspaper"/></span>
                  <div>
                    <h3 className="h6 fw-bold text-dark mb-1">Real‑Time Global News with Newsdesk & Economic Calendar</h3>
                    <p className="text-secondary small mb-0">Access <a className="tc-link" href="#">accurate and live updates</a> from global sources, empowering you to make informed decisions</p>
                  </div>
                </div>
              </div>

              <div className="tc-card p-3 p-md-4 rounded-4 border bg-white">
                <div className="d-flex align-items-start gap-3">
                  <span className="tc-badge rounded-3"><i className="bi bi-graph-up-arrow"/></span>
                  <div>
                    <h3 className="h6 fw-bold text-dark mb-1">Decode the Financial Markets with Market Buzz</h3>
                    <p className="text-secondary small mb-0">Make well‑informed trading decisions with key insights from <a className="tc-link" href="#">100K+ sources</a>, <a className="tc-link" href="#">50K+ instruments</a>, and <a className="tc-link" href="#">600+ financial events</a>, all within an intuitive interface</p>
                  </div>
                </div>
              </div>

              <div className="tc-card p-3 p-md-4 rounded-4 border bg-white">
                <div className="d-flex align-items-start gap-3">
                  <span className="tc-badge rounded-3"><i className="bi bi-bar-chart-line"/></span>
                  <div>
                    <h3 className="h6 fw-bold text-dark mb-1">Intuitive Analysis with Fundamental Insight</h3>
                    <p className="text-secondary small mb-0">Simplify complex financial data with <a className="tc-link" href="#">AI‑driven trade ideas</a>, and <a className="tc-link" href="#">straightforward live chart analysis</a>, easily accessible on any device</p>
                  </div>
                </div>
              </div>

              <div className="tc-card p-3 p-md-4 rounded-4 border bg-white">
                <div className="d-flex align-items-start gap-3">
                  <span className="tc-badge rounded-3"><i className="bi bi-activity"/></span>
                  <div>
                    <h3 className="h6 fw-bold text-dark mb-1">Real‑Time Market Analysis with Economic Insight</h3>
                    <p className="text-secondary small mb-0">Gain insights into market trends with extensive <a className="tc-link" href="#">real‑time data</a>, <a className="tc-link" href="#">volatility analysis</a>, and <a className="tc-link" href="#">interactive charts</a>, enhancing your ability to assess market impacts and act on potential opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="tc-showcase position-relative mx-auto">
              <img className="tc-card-img tc-img-main rounded-4" src="/images/placeholder-app.png" alt="App preview" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

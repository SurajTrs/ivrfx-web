export default function TCNewsHighlights() {
  const items = [
    {
      title: 'Decode the Financial Markets with Market Buzz',
      desc: 'Make well‑informed trading decisions with key insights sourced from 100K+ sources, 50K+ instruments, and 600+ events.',
      iconClass: 'bi bi-lightbulb'
    },
    {
      title: 'Intuitive Analysis with Fundamental Insight',
      desc: 'Simplify complex financial data with AI‑driven ideas and straightforward live chart analysis.',
      iconClass: 'bi bi-bar-chart-line'
    },
    {
      title: 'Real‑Time Market Analysis with Economic Insight',
      desc: 'Leverage extensive real‑time data, volatility analysis, and interactive charts to track trends.',
      iconClass: 'bi bi-activity'
    },
    {
      title: 'Actionable Trade Ideas',
      desc: 'Identify potential opportunities with timely alerts, commentary, and risk controls.',
      iconClass: 'bi bi-bullseye'
    }
  ];

  return (
    <section className="bg-white">
      <div className="container py-4 py-md-5">
        <div className="row g-3 g-md-4">
          {items.map((i, idx) => (
            <div className="col-12 col-md-6" key={idx}>
              <div className="tc-card p-3 p-md-4 rounded-4 border bg-white h-100">
                <div className="d-flex align-items-start gap-3">
                  <div className="tc-card-icon rounded-3"><i className={i.iconClass}/></div>
                  <div>
                    <h3 className="h6 fw-bold text-dark mb-1">{i.title}</h3>
                    <p className="text-secondary small mb-0">{i.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

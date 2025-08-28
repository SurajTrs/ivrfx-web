"use client";

export default function FeaturedNewsSection() {
  const headlines = [
    "Brazil Considers Legal Action Over US Tariffs Amid Trade Tensions",
    "Trump's Legacy & Fed Control: An Uphill Battle for Influence?",
    "Berkshire Hathaway Increases Stakes in Japanese Trading Houses: A Strategic Move",
    "Denmark Summons US Envoy Over Greenland Influence Concerns",
    "US Companies' Stock Buyback Surge: Nvidia Joins the Trillion-Dollar Trend",
    "Trump's White House Meeting: Post-War Gaza Plans & Hamas Negotiation Efforts",
    "E3 Considers Snapback Sanctions on Iran: A Diplomatic Tightrope Walk",
    "Nvidia's Q2 Earnings: Growth Slows Amid China Concerns and Supply Constraints",
    "EU Eyes Tariff Removal on US Goods Amid",
  ];
  return (
    <section className="container py-4 py-lg-5">
      <div className="row g-4">
        {/* Left: Featured grid */}
        <div className="col-lg-8">
          <div className="row g-3 g-lg-4">
            {/* Hero feature */}
            <div className="col-12">
              <article className="position-relative overflow-hidden rounded-4 shadow-sm">
                <div className="ratio ratio-16x9 bg-dark">
                  <div className="d-flex align-items-center justify-content-center text-white">Featured image</div>
                </div>
                <div
                  className="position-absolute top-0 start-0 end-0 bottom-0 d-flex flex-column justify-content-end"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.65) 100%)",
                    color: "#fff",
                  }}
                >
                  <div className="p-3 p-lg-4">
                    <span
                      className="badge rounded-pill mb-2"
                      style={{ background: "#a78bfa" }}
                    >
                      Featured
                    </span>
                    <h3 className="h4 fw-semibold mb-1">
                      Nvidia's Competitors News: China AI Chipmaker Cambricon Sees Revenue Surge
                    </h3>
                    <div className="small text-white-50">Gkho B · about 17 hours ago</div>
                  </div>
                </div>
              </article>
            </div>

            {/* Two supporting tiles */}
            <div className="col-sm-6">
              <article className="rounded-4 overflow-hidden border shadow-sm h-100">
                <div className="ratio ratio-16x9 bg-light">
                  <div className="d-flex align-items-center justify-content-center text-secondary">
                    Tile image
                  </div>
                </div>
                <div className="p-3">
                  <div className="small text-secondary mb-1">Morning Note</div>
                  <h4 className="h6 m-0">Nvidia's Q2 Earnings; UK Inflation; Oil Prices</h4>
                </div>
              </article>
            </div>
            <div className="col-sm-6">
              <article className="rounded-4 overflow-hidden border shadow-sm h-100">
                <div className="ratio ratio-16x9 bg-light">
                  <div className="d-flex align-items-center justify-content-center text-secondary">
                    Tile image
                  </div>
                </div>
                <div className="p-3">
                  <div className="small text-secondary mb-1">BTCSUD Market Outlook</div>
                  <h4 className="h6 m-0">What's going on with Crypto Market...</h4>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* Right: News list panel */}
        <div className="col-lg-4">
          <aside className="border rounded-4 p-3 p-lg-4 shadow-sm" style={{maxHeight:520, overflowY:'auto'}}>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h3 className="h6 fw-bold m-0">News</h3>
              <a className="small text-decoration-none" href="#" style={{color:'#7c3aed'}}>View all</a>
            </div>
            <ul className="list-unstyled m-0">
              {headlines.map((title)=> (
                <li key={title} className="py-2">
                  <a href="#" className="d-flex align-items-start gap-2 link-dark text-decoration-none">
                    <span className="text-primary" style={{fontSize:10, lineHeight:1}}>●</span>
                    <span className="flex-grow-1">
                      <span className="d-block">{title}</span>
                      <span className="small text-secondary">2 min read · Markets</span>
                    </span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5l7 7-7 7" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <hr className="my-2 border-0" style={{height:1, background:'#eee'}} />
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

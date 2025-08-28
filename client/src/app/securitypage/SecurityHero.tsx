import React from "react";

export default function SecurityHero({ id }: { id?: string }) {
  return (
    <section id={id} className="py-5" style={{ background: "radial-gradient(900px 400px at 20% -10%, #f3e8ff 0%, transparent 60%)" }}>
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-8">
            <h1 className="display-5 fw-bold" style={{ color: "#1f1333" }}>Staying Protected Online</h1>
            <p className="lead text-muted mb-3">Important information about how to stay safe online</p>
            <p className="mb-0 text-muted">
              IVRFX operates globally in multiple languages and is regulated by the Financial Sector
              Conduct Authority (FSCA) in South Africa and the Cyprus Securities and Exchange Commission (CySEC) in the EU.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

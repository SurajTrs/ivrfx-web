import React from "react";

export default function LegalHero({ id }: { id?: string }) {
  return (
    <section id={id} className="py-5" style={{ background: "radial-gradient(900px 400px at 20% -10%, #f3e8ff 0%, transparent 60%)" }}>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-lg-8">
            <h1 className="display-5 fw-bold" style={{ color: "#1f1333" }}>Legal Pack</h1>
            <p className="lead text-muted">
              Please take the time to carefully read and understand all documents related to the services offered by IVRFX.
              Before completing your registration, ensure that you are fully familiar with the contents of these documents.
            </p>
            <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
              <a className="btn btn-success fw-semibold" href="#" role="button">Start trading now</a>
              <a className="btn btn-outline-secondary fw-semibold" href="#" role="button">Try risk free demo account</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

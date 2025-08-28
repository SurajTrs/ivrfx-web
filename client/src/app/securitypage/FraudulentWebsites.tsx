import React from "react";

export default function FraudulentWebsites({ id }: { id?: string }) {
  const sites = ["uxcoins.io", "promarketsfinance.com"];
  return (
    <section id={id} className="py-5 bg-white">
      <div className="container">
        <h2 className="h4 fw-bold" style={{ color: "#1f1333" }}>Fraudulent Websites</h2>
        <p className="text-muted">
          We provide below a list with the fraudulent websites that we have identified over the years, however it is important to note that this list is not exhaustive:
        </p>
        <ul className="list-unstyled mb-3">
          {sites.map((s) => (
            <li key={s} className="d-flex align-items-center gap-2"><span className="badge text-bg-danger">Alert</span> {s}</li>
          ))}
        </ul>
        <p className="text-muted mb-0">You should avoid engaging in any communications with the above websites.</p>
      </div>
    </section>
  );
}

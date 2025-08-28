import React from "react";

export default function HighRiskWarning({ id }: { id?: string }) {
  return (
    <section id={id} className="py-5" style={{ background: "#fff7f7" }}>
      <div className="container">
        <div className="p-4 border rounded-4 border-danger-subtle">
          <h2 className="h5 fw-bold text-danger mb-2">High Risk Investment Warning</h2>
          <p className="mb-0 text-muted">
            No profits are promised. CFDs are complex instruments and come with a high risk of losing money.
          </p>
        </div>
      </div>
    </section>
  );
}

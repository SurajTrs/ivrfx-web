import React from "react";

type Doc = { label: string; href?: string };

const awardsLeft: Doc[] = [
  { label: "T&C for Incentives and Loyalty Rewards" },
  { label: "Refer a Friend Program" },
  { label: "Extra Deposit Bonus Program – 20% for Existing Clients" },
];

const awardsRight: Doc[] = [
  { label: "IVRFX Club Program" },
  { label: "First-Time Deposit Bonus Program" },
];

function Item({ d }: { d: Doc }) {
  return (
    <a
      className="d-flex align-items-center gap-2 px-3 py-3 bg-white rounded-3 border text-decoration-none"
      href={d.href || "#"}
      role="button"
    >
      <span className="text-danger"><i className="bi bi-file-earmark-pdf" /></span>
      <span className="text-body" style={{ fontWeight: 500 }}>{d.label}</span>
    </a>
  );
}

export default function LegalAwards({ id }: { id?: string }) {
  return (
    <section id={id} className="py-5" style={{ background: "#f5f6f8" }}>
      <div className="container">
        <div className="p-4 p-lg-5 rounded-4" style={{ background: "#eef0f3" }}>
          <h2 className="h3 fw-bold mb-4" style={{ color: "#1f1333" }}>Terms and Conditions for Awards</h2>
          <div className="row g-3">
            <div className="col-12 col-lg-6 d-flex flex-column gap-3">
              {awardsLeft.map((d) => <Item key={d.label} d={d} />)}
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column gap-3">
              {awardsRight.map((d) => <Item key={d.label} d={d} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

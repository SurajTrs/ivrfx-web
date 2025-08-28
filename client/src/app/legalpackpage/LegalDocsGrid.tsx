import React from "react";

type Doc = { label: string; href?: string };

const left: Doc[] = [
  { label: "Terms & Conditions" },
  { label: "Risk Disclosure Statement" },
  { label: "Conflicts of Interest Policy" },
  { label: "Order Execution Policy" },
];

const right: Doc[] = [
  { label: "Cost and Charges Schedule" },
  { label: "Privacy Policy Statement" },
  { label: "Clients Complaints Handling Policy" },
];

function DocItem({ d }: { d: Doc }) {
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

export default function LegalDocsGrid({ id }: { id?: string }) {
  return (
    <section id={id} className="py-4" style={{ background: "#f5f6f8" }}>
      <div className="container">
        <div className="p-4 p-lg-5 rounded-4" style={{ background: "#eef0f3" }}>
          <div className="row g-3">
            <div className="col-12 col-lg-6 d-flex flex-column gap-3">
              {left.map((d) => <DocItem key={d.label} d={d} />)}
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column gap-3">
              {right.map((d) => <DocItem key={d.label} d={d} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

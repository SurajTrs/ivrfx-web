import React from "react";

const items = [
  { id: "hero", label: "Overview" },
  { id: "protect", label: "Protect Yourself" },
  { id: "suspicious", label: "Suspicious Contacts" },
  { id: "risk", label: "High Risk Warning" },
  { id: "fraud", label: "Fraudulent Websites" },
  { id: "methods", label: "Impersonation Methods" },
  { id: "report", label: "Report Suspicion" },
  { id: "channels", label: "Official Channels" },
  { id: "summary", label: "Safety Summary" },
  { id: "protect-info", label: "How We Protect Info" },
  { id: "monitor", label: "Keep Monitoring" },
  { id: "assist", label: "Need Assistance" },
];

export default function SecurityTOC() {
  return (
    <nav className="position-sticky" style={{ top: 96 }} aria-label="Security page sections">
      <div className="p-3 rounded-4 border bg-white">
        <div className="fw-semibold mb-2" style={{ color: "#1f1333" }}>On this page</div>
        <ul className="list-unstyled mb-0 small">
          {items.map((i) => (
            <li key={i.id} className="mb-1">
              <a className="text-decoration-none" href={`#${i.id}`} style={{ color: "#6b7280" }}>
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

"use client";
import React from "react";
import type { FAQ } from "./data";

export default function FaqAccordion({ items }: { items: FAQ[] }) {
  const idBase = "faq-accordion";
  return (
    <div className="accordion" id={idBase}>
      {items.map((faq, idx) => (
        <div className="accordion-item rounded-3 overflow-hidden mb-3 border-0 shadow-sm" key={faq.id}>
          <h2 className="accordion-header" id={`${idBase}-heading-${idx}`}>
            <button
              className={`accordion-button ${idx === 0 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${idBase}-collapse-${idx}`}
              aria-expanded={idx === 0 ? "true" : "false"}
              aria-controls={`${idBase}-collapse-${idx}`}
            >
              <i className="bi bi-question-circle me-2 text-primary" />
              <span className="fw-semibold">{faq.q}</span>
            </button>
          </h2>
          <div
            id={`${idBase}-collapse-${idx}`}
            className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
            aria-labelledby={`${idBase}-heading-${idx}`}
            data-bs-parent={`#${idBase}`}
          >
            <div className="accordion-body bg-white">
              <p className="mb-0 text-muted">{faq.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

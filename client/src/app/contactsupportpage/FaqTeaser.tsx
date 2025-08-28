"use client";
import React from "react";
import Link from "next/link";

const faqs = [
  {
    q: "Do you handle tax reporting?",
    a: "We provide downloadable statements to help you with tax reporting. Please consult your local tax advisor for guidance.",
  },
  {
    q: "My account has been disabled, what do I need to do?",
    a: "Please contact support via chat or email to verify your details and restore access.",
  },
  {
    q: "I forgot my password, what do I do?",
    a: "Use the Forgot Password link on the login page to reset your password securely.",
  },
  {
    q: "How can I extract my Account Statement?",
    a: "Go to your profile > Statements and select the date range to export as PDF.",
  },
];

export default function FaqTeaser() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-12 col-lg-5">
            <h2 className="display-6 fw-bold mb-3" style={{ color: "#1f1333" }}>
              Get the info you're
              <br />
              looking for right now
            </h2>
            <Link href="/support/faq" className="text-decoration-none fw-semibold" style={{ color: "#7c3aed" }}>
              Explore all FAQs ›
            </Link>
          </div>
          <div className="col-12 col-lg-7">
            <div className="accordion" id="faqAccordion">
              {faqs.map((f, idx) => (
                <div className="accordion-item border-0 border-bottom" key={idx}>
                  <h2 className="accordion-header" id={`faq-h-${idx}`}>
                    <button
                      className={`accordion-button ${idx === 0 ? "" : "collapsed"}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq-c-${idx}`}
                      aria-expanded={idx === 0}
                      aria-controls={`faq-c-${idx}`}
                      style={{ color: "#1f1333" }}
                    >
                      {f.q}
                    </button>
                  </h2>
                  <div
                    id={`faq-c-${idx}`}
                    className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                    aria-labelledby={`faq-h-${idx}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body text-muted">{f.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

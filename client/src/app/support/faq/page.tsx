"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import Reveal from "components/Reveal";
import FaqAccordion from "../../faqpage/FaqAccordion";
import { categories, faqs } from "../../faqpage/data";

export default function FAQLandingPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return faqs.filter(
      (f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <main>
      {/* Hero */}
      <section className="py-5" style={{ background: "radial-gradient(1200px 500px at 20% -10%, #f3e8ff 0%, transparent 60%)" }}>
        <div className="container text-center">
          <Reveal>
            <h1 className="display-5 fw-bold mb-3">FAQs</h1>
          </Reveal>
          <p className="text-muted mb-4" style={{ maxWidth: 760, margin: "0 auto" }}>
            We're dedicated to providing the information you need, when you need it.
          </p>
          <div className="d-flex align-items-center justify-content-center mb-4">
            <div className="input-group" style={{ maxWidth: 640 }}>
              <span className="input-group-text bg-white border-end-0"><i className="bi bi-search text-primary" /></span>
              <input
                className="form-control border-start-0"
                placeholder="Search our FAQs"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category tiles */}
          <div className="row g-3 justify-content-center">
            {categories.map((c) => (
              <div key={c.key} className="col-12 col-md-6 col-lg-4 col-xl-3">
                <Link href={`/faqpage/${c.key}`} className="text-decoration-none">
                  <div className="p-3 border rounded-4 bg-white text-dark text-center fw-semibold hover-lift" style={{ borderColor: "#e9d5ff" }}>
                    {c.label}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search results */}
      {query && (
        <section className="py-5">
          <div className="container">
            <h5 className="fw-semibold mb-3">Search results</h5>
            {filtered.length ? (
              <FaqAccordion items={filtered} />
            ) : (
              <p className="text-muted mb-0">No FAQs found for your query.</p>
            )}
          </div>
        </section>
      )}

      {/* Still have a question */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-3">
            <h2 className="fw-bold mb-2">Still have a question?</h2>
            <p className="text-muted mb-0" style={{ maxWidth: 820, margin: "0 auto" }}>
              If you have questions or need assistance, talk to our team, get your questions answered,
              or need more insight into how to trade on our platforms – we’ve got you covered.
            </p>
          </div>
          <div className="d-flex justify-content-center gap-3">
            <Link href="/support" className="btn px-4" style={{ backgroundColor: "#7c3aed", borderColor: "#7c3aed", color: "#fff" }}>
              Contact Support
            </Link>
            <a href="mailto:support@example.com" className="btn btn-outline-primary px-4">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

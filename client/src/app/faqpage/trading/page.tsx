"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import Reveal from "components/Reveal";
import FaqAccordion from "../FaqAccordion";
import { categories, faqs } from "../data";

export default function FAQTradingPage() {
  const label = categories.find((c) => c.key === "trading")?.label ?? "Trading & Platform";
  const all = useMemo(() => faqs.filter((f) => f.category === "trading"), []);
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return all;
    return all.filter((f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q));
  }, [all, query]);

  return (
    <main>
      <section className="py-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <Reveal>
              <h1 className="h2 fw-bold mb-0">{label}</h1>
            </Reveal>
            <Link href="/faqpage" className="text-decoration-none">
              <span className="d-inline-flex align-items-center gap-1"><i className="bi bi-arrow-left"/> Back</span>
            </Link>
          </div>
          <div className="input-group mb-4" style={{ maxWidth: 520 }}>
            <span className="input-group-text bg-white border-end-0"><i className="bi bi-search" /></span>
            <input className="form-control border-start-0" placeholder={`Search in ${label}`} value={query} onChange={(e)=>setQuery(e.target.value)} />
          </div>
          <FaqAccordion items={filtered} />
        </div>
      </section>
    </main>
  );
}

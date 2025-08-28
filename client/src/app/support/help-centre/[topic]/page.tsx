"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Reveal from "components/Reveal";
import { articles, topics, type TopicKey } from "../data";

export default function HelpCentreTopicPage() {
  const params = useParams<{ topic: TopicKey }>();
  const topic = (params?.topic || "account") as TopicKey;
  const meta = topics.find((t) => t.key === topic) || topics[0];
  const all = useMemo(() => articles.filter((a) => a.topic === topic), [topic]);

  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return all;
    return all.filter((a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q));
  }, [all, query]);

  return (
    <main>
      <section className="py-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <Reveal>
              <h1 className="h2 fw-bold mb-0">{meta.label}</h1>
            </Reveal>
            <Link href="/support/help-centre" className="text-decoration-none">
              <span className="d-inline-flex align-items-center gap-1"><i className="bi bi-arrow-left"/> Back</span>
            </Link>
          </div>

          <p className="text-muted" style={{ maxWidth: 820 }}>{meta.blurb}</p>

          <div className="input-group mb-4" style={{ maxWidth: 520 }}>
            <span className="input-group-text bg-white border-end-0"><i className="bi bi-search" /></span>
            <input className="form-control border-start-0" placeholder={`Search in ${meta.label}`} value={query} onChange={(e)=>setQuery(e.target.value)} />
          </div>

          <div className="row g-4">
            {filtered.map((a) => (
              <div key={a.id} className="col-12 col-md-6 col-lg-4">
                <Link href={a.href || "#"} className="text-decoration-none">
                  <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift">
                    <div className="card-body">
                      <h5 className="fw-semibold mb-2">{a.title}</h5>
                      <p className="text-muted mb-0">{a.excerpt}</p>
                    </div>
                    <div className="card-footer bg-transparent border-0 pt-0 px-3 pb-3">
                      <span className="text-primary fw-semibold">Read more</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            {!filtered.length && (
              <div className="col-12">
                <p className="text-muted mb-0">No articles found.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

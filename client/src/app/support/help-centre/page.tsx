"use client";
import React, { useMemo, useState } from "react";
import HelpHero from "../../helpcentrepage/HelpHero";
import PopularArticles from "../../helpcentrepage/PopularArticles";
import BrowseByTopic from "../../helpcentrepage/BrowseByTopic";
import TrainingCTA from "../../helpcentrepage/TrainingCTA";
import { articles } from "./data";



export default function HelpCentrePage(): JSX.Element {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return articles;
    return articles.filter(
      (a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q)
    );
  }, [query]);

  const hasQuery = query.trim().length > 0;

  return (
    <main className="min-vh-100">
      <HelpHero />
      <section className="py-5">
        <div className="container">
          <div className="mb-4" style={{ maxWidth: 620 }}>
            <label className="form-label fw-semibold">Ask your question</label>
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0"><i className="bi bi-search" /></span>
              <input
                className="form-control border-start-0"
                placeholder="Search articles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          <PopularArticles items={filtered} title={hasQuery ? "Results" : "Popular articles"} />
          <BrowseByTopic />
        </div>
      </section>
      <TrainingCTA />
    </main>
  );
}

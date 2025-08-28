"use client";
import React from "react";
import Link from "next/link";
import { articles as defaultArticles, type Article } from "../support/help-centre/data";

export default function PopularArticles({
  items,
  title = "Popular articles",
}: {
  items?: Article[];
  title?: string;
}) {
  const list = items ?? defaultArticles;
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h5 className="fw-semibold mb-0">{title}</h5>
        <Link href="/support/faq" className="text-decoration-none">See all FAQs</Link>
      </div>
      {list.length ? (
        <div className="row g-4">
          {list.map((a) => (
            <div className="col-12 col-md-6 col-lg-4" key={a.id}>
              <Link href={a.href || "#"} className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm rounded-4 hover-lift">
                  <div className="card-body">
                    <h6 className="text-primary mb-2 text-uppercase small">{a.topic.replace("-", " ")}</h6>
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
        </div>
      ) : (
        <p className="text-muted mb-0">No results found.</p>
      )}
    </div>
  );
}

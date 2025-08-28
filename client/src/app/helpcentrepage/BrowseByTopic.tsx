"use client";
import React from "react";
import Link from "next/link";
import { topics } from "app/support/help-centre/data";

export default function BrowseByTopic() {
  return (
    <div className="mt-5">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h5 className="fw-semibold mb-0">Browse by topic</h5>
      </div>
      <div className="row g-4">
        {topics.map((t) => (
          <div key={t.key} className="col-12 col-md-6 col-lg-4">
            <div className="p-4 border rounded-4 h-100 bg-white">
              <h5 className="fw-semibold mb-2">{t.label}</h5>
              <p className="text-muted mb-3">{t.blurb}</p>
              <Link href={`/support/help-centre/${t.key}`} className="text-decoration-none fw-semibold">
                View all <i className="bi bi-chevron-right" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

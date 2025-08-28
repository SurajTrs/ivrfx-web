"use client";
import React from "react";
import Reveal from "components/Reveal";

export default function FSCA() {
  return (
    <Reveal>
      <div className="row g-4">
        <div className="col-12 col-lg-8">
          <div className="p-4 p-lg-5 rounded-4 bg-white shadow-sm h-100">
            <h2 className="h4 fw-bold mb-3">FSCA (ZA)</h2>
            <p className="mb-4 text-muted">markets.com, operated by Markets (South Africa) Pty Limited Regulated by Financial Sector Conduct Authority (‘FSCA’) under the licence no. 46860.</p>
            <ul className="list-unstyled mb-0">
              <li className="mb-3 d-flex align-items-start"><i className="bi bi-shield-check text-primary me-2"></i> Client’s funds kept in segregated bank accounts</li>
              <li className="mb-3 d-flex align-items-start"><i className="bi bi-fingerprint text-primary me-2"></i> Electronic Verification</li>
              <li className="mb-3 d-flex align-items-start"><i className="bi bi-emoji-neutral text-primary me-2"></i> Negative Balance Protection</li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="p-4 rounded-4 bg-primary text-white shadow-sm h-100">
            <h3 className="h5 fw-semibold mb-3">Products</h3>
            <div className="d-flex flex-wrap gap-2">
              <span className="badge bg-light text-primary px-3 py-2">CFD</span>
            </div>
            <div className="mt-4 small text-white-50">
              Selecting one of these regulators will display the corresponding information across the entire website. If you would like to display information for a different regulator, please select it. For more information <a className="text-white" href="#">click here</a>.
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

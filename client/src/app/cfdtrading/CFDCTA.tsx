"use client";

import React from "react";

export default function CFDCTA() {
  return (
    <section className="py-6 py-lg-7 position-relative overflow-hidden" style={{backgroundImage: "url(/images/bg-pattern2.jpg)", backgroundSize: "cover", backgroundPosition: "center"}}>
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-black" style={{ opacity: 0.6 }} aria-hidden="true" />
      <div className="container position-relative">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-lg-8">
            <h2 className="fw-bold text-white mb-3">Start trading CFDs today</h2>
            <p className="text-white-50 mb-4">Open an account in minutes and access global markets with competitive pricing and powerful tools.</p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a href="/register" className="btn btn-success px-4 hover-lift">Create account</a>
              <a href="/demo" className="btn btn-outline-light px-4 hover-lift">Try demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

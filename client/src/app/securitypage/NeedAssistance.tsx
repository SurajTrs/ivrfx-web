import React from "react";

export default function NeedAssistance({ id }: { id?: string }) {
  return (
    <section id={id} className="py-5">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-lg-7">
            <h2 className="h3 fw-bold" style={{ color: "#1f1333" }}>Need further assistance?</h2>
            <p className="text-muted mb-0">We've got you covered. Here's how to reach us for personalized help.</p>
          </div>
          <div className="col-12 col-lg-5">
            <div className="p-4 border rounded-4">
              <div className="d-flex align-items-center gap-3">
                <div className="flex-grow-1">
                  <div className="fw-semibold">CONTACT US</div>
                  <div className="text-muted small">support@ivrfx.com</div>
                  <div className="text-muted small">+27 104470539</div>
                </div>
                <a
                  className="btn fw-semibold"
                  href="/support/contact-support"
                  style={{ background: "linear-gradient(90deg, #7c3aed, #a855f7)", color: "#fff" }}
                >
                  Customer Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function KeepMonitoring({ id }: { id?: string }) {
  return (
    <section id={id} className="py-5 bg-light">
      <div className="container">
        <div className="p-4 rounded-4" style={{ background: "linear-gradient(90deg,#f3e8ff,#fff)" }}>
          <h2 className="h5 fw-bold mb-2" style={{ color: "#1f1333" }}>Keep monitoring this page</h2>
          <p className="text-muted mb-0">We update it with additional fraudulent websites identified to be impersonating the Company, the IVRFX brand or our holding company.</p>
        </div>
      </div>
    </section>
  );
}

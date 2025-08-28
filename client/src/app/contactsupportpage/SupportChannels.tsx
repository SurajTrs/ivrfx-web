"use client";
import React from "react";

const channels = [
  {
    icon: "bi-envelope",
    title: "Email Support",
    blurb: "Get help via email for detailed queries and follow-ups.",
    cta: { label: "support@ivrfx.com", href: "mailto:support@ivrfx.com" },
  },
  {
    icon: "bi-telephone",
    title: "Phone Support",
    blurb: "Talk to our specialists for quick assistance.",
    cta: { label: "+44 20 0000 0000", href: "tel:+442000000000" },
  },
  {
    icon: "bi-whatsapp",
    title: "WhatsApp Support",
    blurb: "Message us on WhatsApp for convenient, on-the-go help.",
    cta: { label: "Chat on WhatsApp", href: "#" },
  },
  {
    icon: "bi-chat-dots",
    title: "Dedicated Live Chat",
    blurb: "Chat with our customer support team in real time.",
    cta: { label: "Start chat", href: "#" },
  },
];

export default function SupportChannels() {
  return (
    <section className="py-5" style={{ background: "radial-gradient(900px 400px at 80% -10%, #f3e8ff 0%, transparent 60%)" }}>
      <div className="container">
        <div className="row g-4">
          {channels.map((c) => (
            <div className="col-12 col-md-6 col-lg-3" key={c.title}>
              <div className="h-100 p-4 rounded-4 border shadow-sm bg-white hover-shadow" style={{ transition: "transform .2s" }}>
                <div className="display-6 mb-3" style={{ color: "#7c3aed" }}>
                  <i className={`bi ${c.icon}`} />
                </div>
                <h5 className="fw-semibold mb-2">{c.title}</h5>
                <p className="text-muted mb-3">{c.blurb}</p>
                <a href={c.cta.href} className="text-decoration-none fw-semibold" style={{ color: "#7c3aed" }}>
                  {c.cta.label} <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

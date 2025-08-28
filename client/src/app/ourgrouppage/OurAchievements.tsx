"use client";
import React from "react";
import Reveal from "components/Reveal";

const items = [
  {
    title: "Best and Most Secured Trading Platform",
    desc:
      "Recognising our advanced trading tools, robust security measures, and user-friendly interface.",
  },
  {
    title: "Exceptional Trading Experience",
    desc:
      "Honouring our dedication to providing a seamless trading experience with personalised customer service.",
  },
  { title: "Best and Most Trusted Broker", desc: "Acknowledging our commitment to transparency and trust." },
  { title: "Best Trading Conditions", desc: "Highlighting our superior trading conditions and competitive pricing." },
  { title: "Best Forex Provider", desc: "Recognizing our excellence in providing top-tier forex trading services." },
  {
    title: "Excellence in Education and Research",
    desc: "Commending our contributions to trader education and research resources.",
  },
  {
    title: "Best Partnership Programme",
    desc: "Recognising our outstanding partner programme and exceptional support.",
  },
];

export default function OurAchievements() {
  return (
    <section className="py-5">
      <div className="container">
        <Reveal className="text-center mb-4">
          <h2 className="fw-bold mb-2">Our Achievements</h2>
          <p className="text-muted mb-0" style={{ maxWidth: 820, margin: "0 auto" }}>
            Recognition from respected awarding bodies for excellence across platforms, service, and education.
          </p>
        </Reveal>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="accordion" id="achievementsAccordion">
              {items.map((item, idx) => {
                const headingId = `achieve-heading-${idx}`;
                const collapseId = `achieve-collapse-${idx}`;
                const isFirst = idx === 0;
                const icons = [
                  "bi-shield-lock", // Secured Platform
                  "bi-stars", // Exceptional Experience
                  "bi-award", // Trusted Broker
                  "bi-graph-up-arrow", // Trading Conditions
                  "bi-currency-exchange", // Forex Provider
                  "bi-mortarboard", // Education & Research
                  "bi-people" // Partnership Programme
                ];
                const icon = icons[idx % icons.length];
                return (
                  <div
                    className="accordion-item rounded-4 overflow-hidden mb-3 border-0"
                    style={{ background: "#f6f7fb" }}
                    key={idx}
                  >
                    <h2 className="accordion-header" id={headingId}>
                      <button
                        className={`accordion-button py-3 ${isFirst ? "" : "collapsed"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded={isFirst ? "true" : "false"}
                        aria-controls={collapseId}
                        style={{ background: "transparent" }}
                      >
                        <span
                          className="me-3 d-inline-flex align-items-center justify-content-center rounded-3"
                          style={{ width: 36, height: 36, background: "rgba(139,92,246,0.12)", color: "#7c3aed" }}
                        >
                          <i className={`bi ${icon}`} />
                        </span>
                        <div className="d-flex flex-column">
                          <span className="fw-semibold" style={{ fontSize: "1.1rem" }}>{item.title}</span>
                          <small className="text-muted">
                            {item.desc}
                          </small>
                        </div>
                      </button>
                    </h2>
                    <div
                      id={collapseId}
                      className={`accordion-collapse collapse ${isFirst ? "show" : ""}`}
                      aria-labelledby={headingId}
                      data-bs-parent="#achievementsAccordion"
                    >
                      <div className="accordion-body bg-white">
                        <hr className="text-muted" style={{ opacity: 0.25 }} />
                        <p className="mb-0 text-muted">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

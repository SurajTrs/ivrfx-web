"use client";
import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Create Your Account", description: "Sign up for an IVRFX live account and create your TradingView profile." },
  { number: "02", title: "Connect Your Accounts", description: "Find IVRFX on TradingView and click 'Connect' to link your accounts." },
  { number: "03", title: "Start Trading", description: "Access charts and execute trades directly from TradingView." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-transparent mb-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">How it works</h2>
          <p className="mt-2 text-dark">Three simple steps to get you trading on TradingView with IVRFX</p>
        </div>

        {/* Timeline wrapper */}
        <div className="position-relative">
          {/* Central line (vertical on mobile, horizontal on md+) */}
          <div className="d-none d-md-block position-absolute start-50 translate-middle-x" style={{ top: 36, bottom: 36, width: 2, background: "linear-gradient(180deg, rgba(124,58,237,0), rgba(124,58,237,0.55), rgba(124,58,237,0))" }} aria-hidden="true" />
          <div className="d-md-none position-absolute" style={{ left: 16, right: 16, top: 36, height: 2, background: "linear-gradient(90deg, rgba(124,58,237,0), rgba(124,58,237,0.55), rgba(124,58,237,0))" }} aria-hidden="true" />

          <div className="row g-4 g-lg-5">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="col-12 col-md-6 col-lg-4"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="h-100 position-relative">
                  {/* Connector dots */}
                  <div className="d-none d-md-flex align-items-center justify-content-center position-absolute top-0 start-50 translate-middle z-1" aria-hidden="true">
                    <span className="rounded-circle" style={{ width: 10, height: 10, background: "#7c3aed", boxShadow: "0 0 0 6px rgba(124,58,237,0.15)" }} />
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 250, damping: 18 }}
                    className="p-4 p-md-5 rounded-4 shadow-sm h-100 bg-white"
                    style={{ border: "1px solid rgba(124,58,237,0.18)" }}
                  >
                    {/* Badge with number */}
                    <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill mb-3" style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.28)", color: "#7c3aed" }}>
                      <span className="fw-bold" style={{ letterSpacing: 1 }}>{step.number}</span>
                      <span className="rounded-circle" style={{ width: 6, height: 6, background: "#7c3aed" }} />
                    </div>

                    <h4 className="mb-2 text-dark">{step.title}</h4>
                    <p className="mb-0 text-secondary">{step.description}</p>

                    {/* Subtle bottom accent */}
                    <div className="mt-4" aria-hidden="true">
                      <div style={{ height: 2, width: "40%", background: "linear-gradient(90deg, rgba(124,58,237,0.55), rgba(124,58,237,0))" }} />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";

const steps = [
  { id: 1, title: "Sign up for an IVRFX account", note: "If you already have an MT4/MT5 account, skip to step 3." },
  { id: 2, title: "Login to create your MT4 or MT5 account", note: "Create the platform account inside your IVRFX profile." },
  { id: 3, title: "Download the IVRFX Social Trading App", note: "Available on iOS and Android." },
  { id: 4, title: "Set up your profile", note: "Add avatar, trading style, risk preferences." },
  { id: 5, title: "Verify your account via email", note: "Complete verification for full access." },
];

const linkSteps = [
  { id: 6, title: "Select ‘Account’", note: "Go to the Accounts section in the app." },
  { id: 7, title: "Click ‘Link an account’", note: "Begin linking your MT4/MT5 account." },
  { id: 8, title: "Select the appropriate server", note: "Match the server in your MT4/MT5 account details." },
  { id: 9, title: "Input your trading account number", note: "Enter your MT4/MT5 login." },
  { id: 10, title: "Enter your password", note: "Authenticate securely to finish linking." },
  { id: 11, title: "Choose 'Copy trades' and Start Trading", note: "Follow top traders or share your signals." },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 160, damping: 18 },
  },
};

const glow: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

const StepPill: React.FC<{ index: number; title: string; note?: string; showConnector?: boolean }> = ({ index, title, note, showConnector = true }) => (
  <motion.div variants={item} className="d-flex flex-column align-items-center text-center position-relative">
    {/* connector */}
    {showConnector && (
      <span
        aria-hidden
        className="d-none d-lg-block position-absolute"
        style={{
          top: 24,
          left: "calc(100% + 12px)",
          width: 80,
          height: 2,
          borderTop: "2px dashed rgba(59,130,246,0.35)",
        }}
      />
    )}
    {/* number circle */}
    <div
      className="d-inline-flex align-items-center justify-content-center rounded-circle shadow-sm"
      style={{
        width: 48,
        height: 48,
        background: "linear-gradient(180deg, #e0e7ff, #dbeafe)",
        color: "#1d4ed8",
        fontWeight: 800,
        border: "1px solid rgba(29,78,216,0.25)",
      }}
    >
      {index}
    </div>
    <div className="mt-3" style={{ maxWidth: 220 }}>
      <h6 className="mb-1 fw-semibold" style={{ lineHeight: 1.35 }}>{title}</h6>
      {note && (
        <p className="text-secondary small mb-0" style={{ lineHeight: 1.5 }}>{note}</p>
      )}
    </div>
  </motion.div>
);

const HowToStart: React.FC = () => {
  return (
    <section className="py-5 py-md-6 bg-transparent" aria-label="How to start social trading">
      <div className="container">
        <div className="text-center mb-4">
          <h2
            className="fw-bold"
            style={{
              background:
                "linear-gradient(90deg, #5b21b6 0%, #7c3aed 35%, #a78bfa 70%, #22c55e 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            How to start social trading?
          </h2>
          <p className="m-0" style={{ color: "#6b7280" }}>
            Onboard in minutes, then link your MT4/MT5 to start copying or sharing strategies.
          </p>
        </div>

        {/* Top hero-like row with horizontal stepper and phone image */}
        <div className="row align-items-center g-4 g-lg-5 mb-4">
          <div className="col-12 col-lg-7">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="d-grid gap-4"
            >
              {/* horizontal stepper (wraps on small screens) */}
              <div className="d-flex flex-wrap gap-4 gap-lg-5 position-relative">
                {steps.map((s, i) => (
                  <StepPill
                    key={s.id}
                    index={i + 1}
                    title={s.title}
                    note={undefined}
                    showConnector={i < steps.length - 1}
                  />
                ))}
              </div>
              <p className="text-secondary small mb-0">
                <em>If you already have an MT4 or MT5 account, skip to step 3.</em>
              </p>
            </motion.div>
          </div>
          <div className="col-12 col-lg-5">
            <motion.div variants={glow} initial="hidden" whileInView="show" viewport={{ once: true }} className="position-relative">
              <div
                className="position-absolute top-0 start-0 w-100 h-100 rounded-4"
                style={{
                  background: "radial-gradient(circle at center, rgba(34,197,94,0.18) 0%, rgba(34,197,94,0) 65%)",
                  filter: "blur(36px)",
                  zIndex: 0,
                }}
                aria-hidden
              />
              <img
                src="/images/trading-illustration1.png"
                alt="Social trading app preview"
                className="img-fluid rounded-4 shadow-lg position-relative"
                style={{ zIndex: 1 }}
                onError={(e) => {
                  e.currentTarget.src = "/images/trading-illustration.png";
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Linking section as ordered list */}
        <div className="pt-2">
          <h5 className="fw-semibold mb-3">Linking your MT4/MT5 account to IVRFX Social Trading App:</h5>
          <ol className="text-secondary" style={{ lineHeight: 1.8 }}>
            {linkSteps.map((s) => (
              <li key={s.id} className="mb-1">
                <span className="text-dark fw-semibold me-1">{s.title}</span>
                {s.note && <span className="text-secondary">{s.note}</span>}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HowToStart;

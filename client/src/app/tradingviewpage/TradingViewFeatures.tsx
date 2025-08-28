"use client";
import { motion } from "framer-motion";
import { BarChart3, Users, Bell, Zap } from "lucide-react";

const features = [
  {
    icon: <BarChart3 size={32} className="text-white" />,
    title: "Advanced Charting Tools",
    description: "Powerful customization with extensive charts, indicators, and drawing tools.",
  },
  {
    icon: <Users size={32} className="text-white" />,
    title: "Thriving Community",
    description: "Connect with over 60 million traders in our active community.",
  },
  {
    icon: <Bell size={32} className="text-white" />,
    title: "Real-time Alerts",
    description: "Stay ahead of markets with real-time data and alerts.",
  },
  {
    icon: <Zap size={32} className="text-white" />,
    title: "Lightning Fast Execution",
    description: "Enjoy ultra-low latency execution and tight spreads.",
  },
];

export default function Features() {
  return (
    <section className="py-20 features-section bg-transparent mb-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">The Ultimate Trading Experience</h2>
          <p className="text-secondary">Powerful tools to elevate your trading workflow</p>
        </div>
        <div className="row g-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="col-md-6 col-lg-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Gradient border wrapper */}
              <div className="rounded-4 p-1 h-100" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.9), rgba(168,85,247,0.9))" }}>
                <div className="rounded-4 h-100 p-4 p-md-5 shadow-sm bg-white d-flex flex-column" style={{ boxShadow: "0 10px 24px rgba(124,58,237,0.10)" }}>
                  {/* Icon badge */}
                  <div className="mb-3 d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: 56, height: 56, background: "linear-gradient(135deg, #6d28d9, #a855f7)", color: "#fff", boxShadow: "0 8px 18px rgba(124,58,237,0.25)" }}>
                    {/* Render icon with white fill */}
                    <div className="d-flex align-items-center justify-content-center" style={{ lineHeight: 0 }}>
                      {feature.icon}
                    </div>
                  </div>
                  <h5 className="mt-1 text-dark fw-semibold">{feature.title}</h5>
                  <p className="mb-0 text-secondary">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

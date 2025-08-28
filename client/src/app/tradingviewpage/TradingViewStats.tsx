"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "4.6/5", label: "User Rating" },
  { value: "60M+", label: "Active Traders" },
  { value: "$3T+", label: "Monthly Volume" },
  { value: "170+", label: "Countries" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-transparent mb-5">
      <div className="container">
        <div className="row g-4 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="col-6 col-md-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Gradient border wrapper */}
              <div
                className="rounded-4 p-1 h-100"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.9), rgba(168,85,247,0.9))",
                }}
              >
                <div
                  className="rounded-4 h-100 d-flex flex-column justify-content-center align-items-center"
                  style={{
                    background: "#ffffff",
                    padding: "1.25rem",
                    boxShadow: "0 10px 24px rgba(124,58,237,0.12)",
                  }}
                >
                  <h3
                    className="fw-bold mb-1"
                    style={{
                      fontSize: "1.75rem",
                      background:
                        "linear-gradient(90deg, #6d28d9, #a855f7)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {stat.value}
                  </h3>
                  <p className="small mb-0" style={{ color: "#6b7280" }}>{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

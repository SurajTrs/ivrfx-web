import React from "react";
import { FaStar, FaUsers, FaChartBar } from "react-icons/fa";

export default function Stats() {
  const items = [
    { label: "On TrustPilot", value: "4.3/5", icon: <FaStar className="text-success" /> },
    { label: "users", value: "4.7M+", icon: <FaUsers className="text-primary" /> },
    { label: "positions opened", value: "68M+", icon: <FaChartBar className="text-warning" /> },
  ];
  return (
    <section className="py-6 bg-white">
      <div className="container">
      
        <div className="row g-4 text-center">
          {items.map((it) => (
            <div key={it.label} className="col-12 col-md-4">
              <div className="d-inline-flex align-items-center justify-content-center rounded-3 mb-2" style={{ width: 56, height: 56, backgroundColor: "#f3f6ff" }}>
                <span className="fs-4">{it.icon}</span>
              </div>
              <div className="h3 fw-bold mb-1">{it.value}</div>
              <div className="text-muted small">{it.label}</div>
              
            </div>
            
          ))}
        </div>
        <div className="text-center mt-5 mb-5 pt-2">
          <h2 className="display-6 fw-bold mb-2">17 years in business, and counting</h2>
          <p className="lead text-muted mb-0">
            We’ve been in business since 2008, and we’re fully regulated in different major markets. If you want to trade backed by a serious broker with more than a decade’s experience helping traders just like you, then you’ve come to the right place.
          </p>
        </div>
      </div>
    </section>
  );
}

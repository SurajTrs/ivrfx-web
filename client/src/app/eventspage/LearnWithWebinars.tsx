"use client";
import React from "react";
import TiltCard from "app/eventspage/TiltCard";

interface LearnWithWebinarsProps {
  accentColor?: string;
  imageUrl?: string;
}

const LearnWithWebinars: React.FC<LearnWithWebinarsProps> = ({ accentColor = "#6f42c1", imageUrl = "/images/events/learn-webinars.jpg" }) => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-4 p-4 p-lg-5 bg-white rounded-4 shadow-sm border">
          <div className="col-12 col-lg-6">
            <div className="text-uppercase small fw-semibold mb-2" style={{ color: accentColor }}>Learn with Webinars</div>
            <h3 className="h2 fw-bold text-dark">Spend your time wisely</h3>
            <p className="text-muted">Join global market experts as they guide you through a broad range of topics to increase your understanding whilst answering any questions you may have.</p>
            <a href="#" className="btn btn-lg" style={{ backgroundColor: accentColor, color: "#fff" }}>View Schedule</a>
          </div>
          <div className="col-12 col-lg-6">
            <TiltCard style={{ borderRadius: 16 }} shadowColor="rgba(111,66,193,0.22)" maxTilt={10}>
              <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm border">
                <img src={imageUrl} alt="Learn with webinars" className="object-fit-cover" />
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnWithWebinars;

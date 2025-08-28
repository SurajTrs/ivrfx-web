"use client";
import React from "react";
import TiltCard from "app/eventspage/TiltCard";

interface FeaturedWebinarProps {
  title: string;
  date: string;
  time: string;
  topic: string;
  author: string;
  accentColor?: string;
  videoUrl?: string; // YouTube embed or MP4 source
  posterUrl?: string;
}

const FeaturedWebinar: React.FC<FeaturedWebinarProps> = ({
  title,
  date,
  time,
  topic,
  author,
  accentColor = "#6f42c1",
  videoUrl,
  posterUrl = "/images/events/webinar-poster.jpg",
}) => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row g-4 align-items-center p-4 p-lg-5 bg-white rounded-4 shadow-sm border">
          <div className="col-12 col-lg-6">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-3" style={{ backgroundColor: `${accentColor}1a`, border: `1px solid ${accentColor}4d`, color: '#111' }}>
              <span className="rounded-circle" style={{ width: 6, height: 6, backgroundColor: accentColor }} />
              Markets Trading Webinars
            </div>
            <h2 className="display-6 fw-bold mb-2 text-dark">{title}</h2>
            <div className="text-muted mb-3">
              <div>{date}</div>
              <div>{time}</div>
            </div>
            <div className="mb-3">
              <div className="fw-semibold text-uppercase small" style={{ color: accentColor }}>From Theory to Practice</div>
              <div className="h5 mb-1 text-dark">{topic}</div>
              <div className="text-muted">Written by: {author}</div>
            </div>
            <p className="text-muted mb-0">Watch this space for more webinars coming very soon.</p>
          </div>
          <div className="col-12 col-lg-6">
            <TiltCard style={{ borderRadius: 16 }} shadowColor="rgba(111,66,193,0.24)" maxTilt={10}>
              <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm border" style={{ borderColor: `${accentColor}55` }}>
                {videoUrl ? (
                  videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be") ? (
                    <iframe src={videoUrl} title="Webinar video" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
                  ) : (
                    <video className="w-100 h-100" controls poster={posterUrl}>
                      <source src={videoUrl} />
                    </video>
                  )
                ) : (
                  <img src={posterUrl || "/images/events/featured-webinar.jpg"} alt="Featured webinar" className="object-fit-cover" />
                )}
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWebinar;

"use client";
import React, { useEffect } from "react";
import TiltCard from "app/eventspage/TiltCard";

interface TweetsEmbedProps {
  handle?: string; // e.g. marketscomSA
}

const TweetsEmbed: React.FC<TweetsEmbedProps> = ({ handle = "marketscomSA" }) => {
  useEffect(() => {
    if (!(window as any).twttr) {
      const s = document.createElement("script");
      s.src = "https://platform.twitter.com/widgets.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <TiltCard style={{ borderRadius: 16 }} shadowColor="rgba(111,66,193,0.20)" maxTilt={8}>
          <div className="p-4 p-lg-5 bg-white rounded-4 shadow-sm border">
            <div className="d-flex justify-content-between align-items-end mb-3">
              <h3 className="h2 fw-bold mb-0 text-dark">Tweets by @{handle}</h3>
              <a className="btn btn-outline-secondary" href={`https://twitter.com/${handle}`} target="_blank" rel="noreferrer">Open on X</a>
            </div>
            <a className="twitter-timeline" data-height="520" href={`https://twitter.com/${handle}?ref_src=twsrc%5Etfw`}>Tweets by @{handle}</a>
          </div>
        </TiltCard>
      </div>
    </section>
  );
};

export default TweetsEmbed;

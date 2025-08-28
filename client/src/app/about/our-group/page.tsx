"use client";
import React from "react";
import Reveal from "components/Reveal";
import { useRegulator } from "components/RegulatorContext";
import RegulatorSelector from "../../ourgrouppage/RegulatorSelector";
import FSCA from "../../ourgrouppage/FSCA";
import CySEC from "../../ourgrouppage/CySEC";
import FSA from "../../ourgrouppage/FSA";
import TrustedAwards from "../../ourgrouppage/TrustedAwards";
import OurAchievements from "../../ourgrouppage/OurAchievements";
import MediaHighlights from "../../ourgrouppage/MediaHighlights";

export default function OurGroupPage() {
  const { regulator } = useRegulator();

  return (
    <main>
      {/* Hero */}
      <section
        className="py-5 d-flex align-items-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(16,16,24,0.7) 0%, rgba(39,17,84,0.7) 40%, rgba(67,29,126,0.7) 100%), url('/images/aboutbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "40vh",
          color: "#fff",
        }}
      >
        <div className="container">
          <Reveal className="text-center">
            <h1 className="display-6 fw-bold mb-2">Our Group</h1>
            <p className="lead mb-0">Select a regulator to view applicable information sitewide.</p>
          </Reveal>
        </div>
      </section>

      {/* Selector */}
      <section className="py-4 bg-light">
        <div className="container">
          <RegulatorSelector />
        </div>
      </section>

      {/* Trusted by Traders, Awarded for Excellence */}
    

      {/* Content by regulator */
      }
      <section className="py-5">
        <div className="container">
          {regulator === "ZA" && <FSCA />}
          {regulator === "EU" && <CySEC />}
          {regulator === "SVG" && <FSA />}
        </div>
      </section>
      <TrustedAwards />
      <MediaHighlights />
      <OurAchievements />
    </main>
  );
}

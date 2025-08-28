"use client";
import AnalysisSection from "app/academypage/AnalysisSection";
import FeaturedNewsSection from "app/academypage/FeaturedNewsSection";
import React from "react";

export default function AcademyPage() {
  return (
    <main className="bg-white text-black" aria-label="Academy page">
            <FeaturedNewsSection />
        <AnalysisSection />
    

      <div className="container pb-5">
        <hr className="mt-0" />
      </div>
    </main>
  );
}

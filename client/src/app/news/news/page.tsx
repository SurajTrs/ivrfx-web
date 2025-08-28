"use client";

import FeaturedNewsSection from "app/academypage/FeaturedNewsSection";
import NewsAnalysisSection from "app/newspage/NewsAnalysisSection";
import React from "react";

export default function NewsAnalysisPage() {
  return (
    <main className="bg-white text-black" aria-label="News Analysis page">
        <FeaturedNewsSection />

        <NewsAnalysisSection />
      
      <div className="container pb-5">
        <hr className="mt-0" />
      </div>
    </main>
  );
}

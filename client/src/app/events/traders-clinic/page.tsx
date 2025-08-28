import CTASection from "app/eventspage/CTASection";
import GlassHero from "app/eventspage/GlassHero";
import HighlightsGrid from "app/eventspage/HighlightsGrid";
import PodcastSection from "app/eventspage/PodcastSection";
import SignupForm from "app/eventspage/SignupForm";
import React from "react";


export default function TradersClinicPage() {
  return (
    <main>
      <GlassHero
        eyebrow="Learn with ivrfx"
        title="Traders' Clinic"
        subtitle="Learn how to master your traders' mindset with seasoned professionals. Gain valuable insights on how to overcome common mistakes and better understand markets and finance."
        primaryLabel="Listen to the Podcast"
        primaryHref="podcast"
        secondaryLabel="Contact Support"
        secondaryHref="/support/contact-support"
        accentColor="#42F5A4"
        bgPatternUrl="/images/bg-pattern1.jpg"
        imageUrl="/images/trading-illustration1.png"
      />

      <section id="podcast">
        <PodcastSection
          hosts="Charlie Burton & Ali Crooks"
          subtitle="Gain your knowledge through their true stories and insights, from overtrading and fear of losing profit to psychological blocks and mood fluctuations."
          coverImageUrl="/images/events/podcast-cover.jpg"
          accentColor="#6f42c1"
          episodes={[
            {
              title: "Is the stock market rigged?",
              description: "Exploring market structure and perception vs. reality.",
              duration: "18:43",
            },
            {
              title: "We don’t trade just for fun",
              description: "Discipline and purpose behind every trade.",
              duration: "22:10",
            },
            {
              title: "Automatic stop-loss vs. expertise",
              description: "When rules help and when they hurt.",
              duration: "16:02",
            },
            {
              title: "Ability vs. reality in trading",
              description: "Bridging the gap between expectation and execution.",
              duration: "21:18",
            },
            {
              title: "What traders don’t tell you",
              description: "Unspoken truths of trading psychology.",
              duration: "19:04",
            },
          ]}
        />
      </section>

      <HighlightsGrid
        items={[
          { title: "Is the #stockmarket rigged?" },
          { title: "We don’t trade just for fun" },
          { title: "When everyone's using automatic stop-loss, but you're too much of an expert for that" },
          { title: "Ability VS reality in trading" },
          { title: "Traders DON’T tell you?" },
        ]}
      />
 <SignupForm accentColor="#6f42c1" />
      <CTASection
        title="Ready to trade?"
        subtitle="Join ivrfx and start your journey with professional tools, platforms, and support."
        primaryLabel="Create an account"
        primaryHref="/auth/register"
        secondaryLabel="Contact us"
        secondaryHref="/support/contact-support"
        accentColor="#6f42c1"
      />

     
    </main>
  );
}

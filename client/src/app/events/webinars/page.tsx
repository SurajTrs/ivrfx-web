import GlassHero from "app/eventspage/GlassHero";
import FeaturedWebinar from "app/eventspage/FeaturedWebinar";
import PastWebinars from "app/eventspage/PastWebinars";
import LearnWithWebinars from "app/eventspage/LearnWithWebinars";
import AssetListTeaser from "app/eventspage/AssetListTeaser";
import LatestNews from "app/eventspage/LatestNews";
import TweetsEmbed from "app/eventspage/TweetsEmbed";
import CTASection from "app/eventspage/CTASection";
import React from "react";

export default function WebinarsPage() {
  return (
    <main>
      <GlassHero
        eyebrow="Markets Trading Webinars"
        title="Maximize Your Trading Skills with Markets Trading Webinars"
        subtitle="Join our upcoming live sessions to learn strategies, platforms, and market insights from experts."
        primaryLabel="Register Now"
        primaryHref="#featured"
        secondaryLabel="View Past Webinars"
        secondaryHref="#past"
        accentColor="#6f42c1"
        bgPatternUrl="/images/bg-pattern1.jpg"
        imageUrl="/images/trading-illustration1.png"
      />

      <div id="featured" />
      <FeaturedWebinar
        title="Maximize Your Trading Skills with Markets Trading Webinars"
        date="28 August 2025 (Thursday)"
        time="16:00 (GMT+3)"
        topic="Can You Rely on the MACD? A Live Market Test."
        author="Darius Anucauskas"
        accentColor="#6f42c1"
        posterUrl="/images/events/webinar-macd.jpg"
        // videoUrl can be a YouTube embed like: https://www.youtube.com/embed/VIDEO_ID
        // videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />

      <div id="past" />
      <PastWebinars
        accentColor="#6f42c1"
        items={[
          { title: "Midweek Review: RBNZ Cuts, UK CPIs rise - Markets Talk with Darius Anucauskas Ep. 7", imageUrl: "/images/events/past-1.jpg" },
          { title: "Weekly Wrap-up: Cryptos are down, PCE is on the watch - MarketsTalk with Darius Anucauskas Ep. 11", imageUrl: "/images/events/past-2.jpg" },
          { title: "Weekly Wrap-up: Gold and DAX Bulls Are Enjoying It - Markets Talk with Darius Anucauskas Ep. 5", imageUrl: "/images/events/past-3.jpg" },
          { title: "Week Ahead: Japanese Data, US CPIs & BoC Rates - MarketsTalk with Darius Anucauskas Ep. 14", imageUrl: "/images/events/past-4.jpg" },
          { title: "Weekly Wrap-up: Japanese CPIs rise, US data on the watch - Markets Talk with Darius Anucauskas Ep. 8", imageUrl: "/images/events/past-5.jpg" },
          { title: "Midweek Review: Gold drop, NVDA & the crypto ride - MarketsTalk with Darius Anucauskas Ep. 10", imageUrl: "/images/events/past-6.jpg" },
        ]}
      />

      <LearnWithWebinars accentColor="#6f42c1" imageUrl="/images/events/learn-webinars.jpg" />

      <AssetListTeaser accentColor="#6f42c1" />

      <TweetsEmbed handle="marketscomSA" />

      <LatestNews
        accentColor="#6f42c1"
        items={[
          { date: "Thursday, 28 August 2025", readTime: "4 min", title: "Trump's White House Meeting: Post-War Gaza Plans & Hamas Negotiation Efforts" },
          { date: "Thursday, 28 August 2025", readTime: "2 min", title: "E3 Considers Snapback Sanctions on Iran: A Diplomatic Tightrope Walk" },
          { date: "Wednesday, 27 August 2025", readTime: "2 min", title: "Nvidia's Q2 Earnings: Growth Slows Amid China Concerns and Supply Constraints" },
        ]}
      />

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

import CTASection from "app/eventspage/CTASection";
import React from "react";
import IBEarningsCalculator from "app/ibpage/IBEarningsCalculator";
import IBBenefits from "app/ibpage/IBBenefits";
import IBTestimonials from "app/ibpage/IBTestimonials";
import IBHowItWorks from "app/ibpage/IBHowItWorks";
import IBWhyChooseUs from "app/ibpage/IBWhyChooseUs";
import IBHero from "app/ibpage/IBHero";
import { globalStyles } from "./theme";

export default function IBPage() {
  return (
    <main>
      <style
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: globalStyles }}
      />
      {/* 3D Animated Hero */}
      <IBHero backgroundImage="/images/ib/hero.jpg" accentColor="#6f42c1" />

      <div id="calculator" />
      <IBEarningsCalculator />

      <IBBenefits />
      <IBTestimonials />
      <IBHowItWorks />
      <IBWhyChooseUs />

      <CTASection
        title="Become an IB partner"
        subtitle="For personalised partnership options, connect with our Account Managers."
        primaryLabel="Start earning today"
        primaryHref="#calculator"
        secondaryLabel="Contact us"
        secondaryHref="/support/contact-support"
        accentColor="#6f42c1"
      />
    </main>
  );
}

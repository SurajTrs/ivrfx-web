import React from "react";
import ContactHero from "./ContactHero";
import SupportChannels from "./SupportChannels";
import FaqTeaser from "./FaqTeaser";
import QueryForm from "./QueryForm";

export default function ContactSupportPage() {
  return (
    <main>
      <ContactHero />
      <SupportChannels />
      <FaqTeaser />
      <QueryForm />
    </main>
  );
}

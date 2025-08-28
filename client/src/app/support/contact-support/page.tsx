import React from "react";
import ContactHero from "../../contactsupportpage/ContactHero";
import SupportChannels from "../../contactsupportpage/SupportChannels";
import QueryForm from "../../contactsupportpage/QueryForm";
import FaqTeaser from "app/contactsupportpage/FaqTeaser";

export default function ContactSupportPage() {
  return (
    <main>
      <ContactHero />
      <SupportChannels />
      <QueryForm />
      <FaqTeaser/>
    </main>
  );
}

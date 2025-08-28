import React from "react";
import LegalHero from "../../legalpackpage/LegalHero";
import LegalDocsGrid from "../../legalpackpage/LegalDocsGrid";
import LegalAwards from "../../legalpackpage/LegalAwards";

export const metadata = {
  title: "Legal Pack | IVRFX",
  description:
    "Read key documents: Terms & Conditions, Risk Disclosure, Privacy Policy, Conflicts of Interest, Order Execution, Awards T&Cs, and more.",
};

export default function LegalPackPage() {
  return (
    <main>
      <LegalHero id="hero" />
      <LegalDocsGrid id="docs" />
      <LegalAwards id="awards" />
    </main>
  );
}

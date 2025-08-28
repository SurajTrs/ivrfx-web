import React from "react";
import SecurityHero from "../../securitypage/SecurityHero";
import ProtectYourself from "../../securitypage/ProtectYourself";
import SuspiciousContacts from "../../securitypage/SuspiciousContacts";
import HighRiskWarning from "../../securitypage/HighRiskWarning";
import FraudulentWebsites from "../../securitypage/FraudulentWebsites";
import ImpersonationMethods from "../../securitypage/ImpersonationMethods";
import ReportSuspicion from "../../securitypage/ReportSuspicion";
import OfficialChannels from "../../securitypage/OfficialChannels";
import SafetySummary from "../../securitypage/SafetySummary";
import ProtectInfo from "../../securitypage/ProtectInfo";
import KeepMonitoring from "../../securitypage/KeepMonitoring";
import NeedAssistance from "../../securitypage/NeedAssistance";
import SecurityTOC from "../../securitypage/SecurityTOC";

export const metadata = {
  title: "Security & Staying Safe Online | IVRFX Support",
  description:
    "Learn how to protect yourself online: phishing, secure browsing, malware, data disclosure, impersonation methods, and reporting suspicious activity.",
};

export default function SupportSecurityPage() {
  return (
    <main>
      <SecurityHero id="hero" />
      <section className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3 ms-lg-auto">
              <SecurityTOC />
            </div>
          </div>
        </div>
      </section>
      <ProtectYourself id="protect" />
      <SuspiciousContacts id="suspicious" />
      <HighRiskWarning id="risk" />
      <FraudulentWebsites id="fraud" />
      <ImpersonationMethods id="methods" />
      <ReportSuspicion id="report" />
      <OfficialChannels id="channels" />
      <SafetySummary id="summary" />
      <ProtectInfo id="protect-info" />
      <KeepMonitoring id="monitor" />
      <NeedAssistance id="assist" />
    </main>
  );
}

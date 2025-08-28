import React from "react";

export default function ProtectInfo({ id }: { id?: string }) {
  return (
    <section id={id} className="py-5">
      <div className="container">
        <h2 className="h4 fw-bold" style={{ color: "#1f1333" }}>How does IVRFX protect your information?</h2>
        <p className="text-muted">
          We have a strong team of professionals constantly monitoring unusual and irregular activities in online activities and payments. They are ready to respond to any request or incident that may occur.
          Please contact Customer Support for any suspicious activity happening to your account.
        </p>
        <p className="text-muted">
          Our Data Protection Officer is ensuring GDPR compliance within IVRFX. The company is regularly audited by internal and external parties against all controls and monitoring tools used to protect our systems and data.
          Please contact our Data Protection Office at <a href="mailto:privacy@ivrfx.com">privacy@ivrfx.com</a>.
        </p>
        <p className="text-muted mb-0">
          Keep monitoring this page for additional fraudulent websites identified to be impersonating the Company, the IVRFX brand or our holding company.
        </p>
      </div>
    </section>
  );
}

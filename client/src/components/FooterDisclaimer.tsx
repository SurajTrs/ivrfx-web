"use client";
import React from "react";

export default function FooterDisclaimer() {
  return (
    <section className="footer-legal-wrap">
      <div className="footer-inner">
        <div className="legal-text">
          <p>
            The website <strong>www.ivrfx.com</strong> is operated by{" "}
            <strong>IVRFX</strong>, a company incorporated under the
            International Business Companies (Amendment and Consolidation) Act,
            Chapter 149 of the Revised Laws of Saint Vincent and the Grenadines
            2009, with registration number <strong>27030 BC2023</strong>. The
            company’s registered office is located at{" "}
            <strong>
              Suite 310, Griffith Corporate Center, Beachmont, Kingstown, St.
              Vincent and the Grenadines
            </strong>
            .
          </p>

          <p>
            <strong>Risk Warning:</strong> Trading Foreign Exchange (Forex) and
            Contracts For Difference (CFDs) involves a high level of risk and
            may not be suitable for all investors. You should carefully consider
            your investment objectives, financial situation, level of experience
            and risk appetite before trading. Seek independent financial advice
            if necessary. Please read our full{" "}
            <a href="/legal/legal-pack">Terms and Conditions</a>. For
            privacy or data protection related concerns, contact us at{" "}
            <a href="mailto:privacy@ivrfx.com">privacy@ivrfx.com</a>. More
            details about how we handle your personal data are available in our{" "}
            <a href="/legal/data-security">Privacy Policy</a>.
          </p>

          <p>
            <strong>Disclaimer:</strong> IVRFX does not provide services to
            residents of certain jurisdictions or any
            jurisdiction where such distribution would be contrary to local laws
            or regulations.
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer-legal-wrap {
          position: relative;
          background: radial-gradient(
              1200px 300px at 50% 0%,
              rgba(124, 58, 237, 0.12),
              transparent 60%
            ),
            #000;
          color: #cbd5e1;
          padding: 2rem 0 2.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .footer-legal-wrap::before {
          content: "";
          position: absolute;
          inset: 0 0 auto 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(124, 58, 237, 0.6),
            rgba(56, 189, 248, 0.6)
          );
          opacity: 0.9;
        }
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .legal-text {
          font-size: 0.98rem;
          line-height: 1.8;
          letter-spacing: 0.2px;
          color: #cbd5e1;
        }
        @media (min-width: 768px) {
          .legal-text {
            font-size: 1rem;
          }
        }
        .legal-text p {
          margin-bottom: 1rem;
          color: #b8c2d1;
        }
        .legal-text a {
          color: #e2e8f0;
          text-decoration: none;
          background-image: linear-gradient(90deg, #7c3aed, #1ea7fd);
          background-size: 100% 1px;
          background-repeat: no-repeat;
          background-position: 0 100%;
          transition: color 0.2s ease, background-size 0.2s ease;
        }
        .legal-text a:hover {
          color: #fff;
          background-size: 100% 2px;
        }
        .legal-text a:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.35);
          border-radius: 3px;
        }
      `}</style>
    </section>
  );
}

"use client";
import React from "react";

export default function FooterDisclaimer() {
  return (
    <section className="footer-legal-wrap">
      <div className="footer-inner">


        <div className="legal-text">
          <p>
            The www.ivrfx.com site is operated by Markets International Ltd (“Markets SVG”), a company existing under the International Business Companies (Amendment and Consolidation) Act, Chapter 149 of the Revised Laws of Saint Vincent and Grenadines 2009, with registration number 27030 BC2023. Markets SVG has its registered address at Suite 310, Griffith Corporate Center, Beachmont, Kingstone, St. Vincent and the Grenadines.
          </p>
          <p>
            Risk Warning: Trading Foreign Exchange (Forex) and Contracts For Difference (CFD) is not appropriate for every investor. Before deciding to trade Forex/CFDs offered by ivrfx, you should carefully consider your objectives, financial situation, needs and level of experience, and consider seeking independent professional advice. Please read the full Terms and Conditions. For privacy and data protection related complaints please contact us at privacy@ivrfx.com. Please read our Privacy Policy for more information on handling of personal data.
          </p>
          <p>
            IVRFX operates through the following subsidiaries:
          </p>
          <ul className="legal-list">
            <li>
              Safecap Investments Limited, which is regulated by the Cyprus Securities and Exchange Commission (“CySEC”) under license no. 092/08. Safecap is incorporated in the Republic of Cyprus under company number ΗΕ186196.
            </li>
            <li>
              Markets South Africa (Pty) Ltd is regulated by the Financial Sector Conduct Authority (“FSCA”) under license no. 46860 and licensed to operate as an Over-the-Counter Derivatives Provider (“ODP”) in terms of the Financial Markets Act no.19 of 2012.
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .footer-legal-wrap {
          position: relative;
          background: radial-gradient(1200px 300px at 50% 0%, rgba(124,58,237,0.12), transparent 60%), #000;
          color: #cbd5e1; /* slate-300 */
          padding: 2rem 0 2.5rem;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .footer-legal-wrap::before {
          content: "";
          position: absolute; inset: 0 0 auto 0; height: 1px;
          background: linear-gradient(90deg, rgba(124,58,237,0.6), rgba(56,189,248,0.6));
          opacity: .9;
        }
        .footer-inner { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
        .legal-text { font-size: .98rem; line-height: 1.8; letter-spacing: .2px; color: #cbd5e1; }
        @media (min-width: 768px) { .legal-text { font-size: 1rem; } }
        .legal-text p { margin-bottom: 1rem; color: #b8c2d1; }
        .legal-text a {
          color: #e2e8f0;
          text-decoration: none;
          background-image: linear-gradient(90deg, #7c3aed, #1ea7fd);
          background-size: 100% 1px; background-repeat: no-repeat; background-position: 0 100%;
          transition: color .2s ease, background-size .2s ease;
        }
        .legal-text a:hover { color: #fff; background-size: 100% 2px; }
        .legal-text a:focus-visible { outline: none; box-shadow: 0 0 0 3px rgba(124,58,237,.35); border-radius: 3px; }
        .legal-list { margin: .75rem 0 0; padding: 0; color: #cbd5e1; list-style: none; display: grid; gap: .5rem; }
        .legal-list li { position: relative; padding-left: 1.25rem; }
        .legal-list li::before {
          content: ""; position: absolute; left: 0; top: .6rem; width: 8px; height: 8px; border-radius: 999px;
          background: conic-gradient(from 0deg, #ff6b6b, #f59e0b, #22c55e, #1ea7fd, #7c3aed, #ff6b6b);
          box-shadow: 0 0 0 2px rgba(255,255,255,0.06);
        }
      `}</style>
    </section>
  );
}

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGooglePlay, FaApple, FaGlobe, FaCcVisa, FaUniversity, FaMoneyCheckAlt, FaMoneyBillWave, FaWallet, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { SiTradingview } from "react-icons/si";

export default function TrustFooter() {
  const cols: Array<{ title: string; items: string[] }> = [
    { title: "Markets", items: ["Forex", "Shares", "Commodities", "Indices", "Crypto", "ETFs", "Bonds"] },
    { title: "Trading", items: ["Trading Tools", "Web Platform", "App", "TradingView", "MT4", "MT5"] },
    { title: "Learn", items: ["News", "Trading Basics", "Glossary", "Webinars", "Traders' Clinic", "Education Centre"] },
    { title: "About", items: ["Why us", "Global Offering", "Our Group", "Legal Pack", "Complaints", "Contact Support", "Help Centre" ] },
  ];

  const linkMap: Record<string, Record<string, string>> = {
    Markets: {
      Forex: "/markets/forex",
      Shares: "/markets/shares",
      Commodities: "/markets/commodities",
      Indices: "/markets/indices",
      Crypto: "/markets/crypto",
      ETFs: "/markets/etfs",
      Bonds: "/markets/bonds",
    },
    Trading: {
      "Trading Tools": "/tools",
      "Web Platform": "/platform/web",
      App: "/app",
      TradingView: "/platform/tradingview",
      MT4: "/platform/mt4",
      MT5: "/platform/mt5",
    },
    Learn: {
      News: "/news/news",
      "Trading Basics": "/learn/basics",
      Glossary: "/learn/glossary",
      Webinars: "/learn/webinars",
    },
    About: {
      "Why us": "/about/why-us",
      "Global Offering": "/about/global",
      "Our Group": "/about/our-group",
      "Legal Pack": "/legal/legal-pack",
      "Safety Online": "/legal/data-security",
      Complaints: "/legal/complaints",
      "Contact Support": "/support/contact-support",
      "Help Centre": "/support/help-centre",
    },
  };

  return (
    <footer className="footer-wrap">
      <div className="footer-inner">
        {/* Top area */}
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="footer-logo" aria-label="IVRFX Home">ivrfx<span className="brand-dot">●</span>com</Link>
            <div className="footer-stores">
              <a className="store-btn gp" href="#" aria-label="Get it on Google Play"><FaGooglePlay /></a>
              <a className="store-btn as" href="#" aria-label="Download on the App Store"><FaApple /></a>
              <a className="store-btn wt" href="#" aria-label="Trade on Web Trader"><FaGlobe /></a>
              <a className="store-btn tv" href="#" aria-label="Trade on TradingView"><SiTradingview /></a>
            </div>
            <div className="footer-contact">
              <div className="fc-h">Contact us</div>
              <a href="mailto:support@ivrfx.com" className="fc-link">support@ivrfx.com</a>
              <a href="tel:+12845680155" className="fc-link">+1 284 568 0155</a>
            </div>
            <div className="footer-social">
              <a href="#" aria-label="Facebook" className="soc fb"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter" className="soc tw"><FaTwitter /></a>
              <a href="#" aria-label="Instagram" className="soc ig"><FaInstagram /></a>
              <a href="#" aria-label="YouTube" className="soc yt"><FaYoutube /></a>
              <a href="#" aria-label="LinkedIn" className="soc li"><FaLinkedinIn /></a>
              <a href="#" aria-label="TikTok" className="soc tt"><FaTiktok /></a>
            </div>
          </div>

          <div className="footer-cols">
            {cols.map((c) => (
              <div key={c.title} className="footer-col">
                <h4 className="footer-col-title">{c.title}</h4>
                <ul className="footer-col-list">
                  {c.items.map((i) => {
                    const href = linkMap[c.title]?.[i] ?? "#";
                    return (
                      <li key={i}>
                        <Link href={href} className="footer-link">{i}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <a href="#">Legal Pack</a>
            <a href="#">Cookie Disclosure</a>
            <a href="#">Safety Online</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="footer-payments">
            <span className="pm visa" aria-label="Visa"><FaCcVisa /></span>
            <span className="pm net" aria-label="Neteller"><FaMoneyBillWave /></span>
            <span className="pm skrill" aria-label="Skrill"><FaWallet /></span>
            <span className="pm wire" aria-label="Wire Transfer"><FaUniversity /></span>
            <span className="pm zota" aria-label="Zotapay"><FaMoneyCheckAlt /></span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer-wrap {
          background:rgb(0, 0, 0);
          color: #cbd5e1;
          padding-top: 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          position: relative;
          overflow: hidden;
        }
        .footer-wrap:before {
          content: "";
          position: absolute; inset: -20% -20% auto -20%; height: 260px;
          background: radial-gradient(60% 80% at 30% 0%, rgba(124,58,237,0.25), rgba(124,58,237,0) 60%),
                      radial-gradient(40% 60% at 80% 0%, rgba(14,165,233,0.18), rgba(14,165,233,0) 60%);
          pointer-events: none; filter: blur(20px);
        }
        .footer-wrap:after {
          content: "";
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, rgba(124,58,237,.5), rgba(14,165,233,.4), rgba(124,58,237,.5));
          opacity: .35;
        }
        .footer-inner { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
        .footer-top {
          display: flex; flex-direction: column; gap: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        @media (min-width: 992px) {
          .footer-top { flex-direction: row; align-items: flex-start; justify-content: space-between; }
        }
        .footer-brand { max-width: 360px; }
        .footer-logo { font-weight: 800; font-size: 1.5rem; letter-spacing: .5px; background: linear-gradient(90deg, #7c3aed, #1ea7fd, #22c55e); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; text-decoration: none; }
        .brand-dot { margin: 0 .15rem; background: conic-gradient(from 0deg, #ff6b6b, #f59e0b, #22c55e, #1ea7fd, #7c3aed, #ff6b6b); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; display: inline-block; animation: spinDot 4s linear infinite; }
        @keyframes spinDot { to { transform: rotate(360deg); } }
        .footer-stores { display: flex; flex-wrap: wrap; gap: .5rem; margin: 1rem 0; }
        .store-btn { width: 44px; height: 44px; display: inline-flex; align-items: center; justify-content: center; border-radius: .5rem; border: 1px solid rgba(255,255,255,0.12); color: #e2e8f0; text-decoration: none; background: rgba(255,255,255,0.02); transition: all .2s ease; box-shadow: 0 0 0 rgba(124,58,237,0); }
        .store-btn:hover { background: rgba(124,58,237,.12); border-color: rgba(124,58,237,.35); color: #fff; transform: translateY(-1px); }
        .store-btn :global(svg) { width: 20px; height: 20px; }
        .store-btn:focus-visible, .footer-link:focus-visible, .soc:focus-visible, .pm:focus-visible { outline: none; box-shadow: 0 0 0 3px rgba(124,58,237,0.35); border-color: rgba(124,58,237,0.6); }
        /* Store brand colors */
        .store-btn.gp { color: #34a853; background: rgba(52,168,83,0.1); border-color: rgba(52,168,83,0.35); }
        .store-btn.gp:hover { background: rgba(52,168,83,0.18); border-color: rgba(52,168,83,0.6); color: #34a853; }
        .store-btn.as { color: #a3aaae; background: rgba(163,170,174,0.1); border-color: rgba(163,170,174,0.35); }
        .store-btn.as:hover { background: rgba(163,170,174,0.18); border-color: rgba(163,170,174,0.6); color: #d1d5db; }
        .store-btn.wt { color: #0ea5e9; background: rgba(14,165,233,0.1); border-color: rgba(14,165,233,0.35); }
        .store-btn.wt:hover { background: rgba(14,165,233,0.18); border-color: rgba(14,165,233,0.6); color: #38bdf8; }
        .store-btn.tv { color: #1e90ff; background: rgba(30,144,255,0.1); border-color: rgba(30,144,255,0.35); }
        .store-btn.tv:hover { background: rgba(30,144,255,0.18); border-color: rgba(30,144,255,0.6); color: #60a5fa; }
        .footer-contact { margin-top: .75rem; }
        .fc-h { color: #94a3b8; font-weight: 600; margin-bottom: .25rem; }
        .fc-link { display: block; color: #e2e8f0; text-decoration: none; font-weight: 500; }
        .fc-link:hover { color: #fff; text-decoration: underline; }
        .footer-social { display: flex; gap: .5rem; margin-top: .75rem; }
        .footer-social .soc { width: 36px; height: 36px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.14); background: rgba(255,255,255,0.02); display: inline-flex; align-items:center; justify-content:center; transition: all .2s ease; color: #cbd5e1; }
        .footer-social .soc:hover { background: rgba(124,58,237,.14); border-color: rgba(124,58,237,.5); transform: translateY(-1px); box-shadow: 0 0 0 3px color-mix(in oklab, currentColor 30%, transparent); }
        .footer-social .soc :global(svg) { width: 16px; height: 16px; }
        .soc.fb { color: #1877F2; }
        .soc.tw { color: #1DA1F2; }
        .soc.ig { color: #E1306C; }
        .soc.yt { color: #FF0000; }
        .soc.li { color: #0A66C2; }
        .soc.tt { color: #25F4EE; }

        .footer-cols { display: grid; gap: 1.5rem; }
        @media (min-width: 576px) { .footer-cols { grid-template-columns: repeat(2, minmax(0,1fr)); } }
        @media (min-width: 992px) { .footer-cols { grid-template-columns: repeat(4, minmax(0,1fr)); } }
        .footer-col-title { color: #f8fafc; font-weight: 700; font-size: 1rem; margin-bottom: .75rem; letter-spacing: .2px; position: relative; padding-left: .75rem; }
        .footer-col-title::before { content: ""; position: absolute; left: 0; top: 0.2rem; bottom: 0.2rem; width: 4px; border-radius: 4px; background: linear-gradient(180deg, #7c3aed, #1ea7fd); }
        .footer-col-list { list-style: none; padding: 0; margin: 0; display: grid; gap: .5rem; }
        .footer-link { color: #cbd5e1; text-decoration: none; position: relative; transition: color .2s ease, background-size .25s ease; background-image: linear-gradient(90deg, #7c3aed, #1ea7fd); background-position: left 100%; background-repeat: no-repeat; background-size: 0% 2px; }
        .footer-link:hover { color: #fff; background-size: 100% 2px; }
        .footer-col-list .footer-link { padding: 6px 8px; border-radius: 6px; display: inline-block; }
        .footer-col-list .footer-link:hover { background-color: rgba(255,255,255,0.04); }

        .footer-bottom { display: flex; flex-direction: column; gap: 1rem; padding: 1.25rem 0; }
        @media (min-width: 768px) { .footer-bottom { flex-direction: row; align-items: center; justify-content: space-between; } }
        .footer-legal { display: flex; flex-wrap: wrap; gap: 1rem; }
        .footer-legal a { color: #94a3b8; text-decoration: none; font-size: .95rem; }
        .footer-legal a:hover { color: #e2e8f0; text-decoration: underline; }
        .footer-payments { display: flex; flex-wrap: wrap; gap: .5rem; }
        .pm { width: 44px; height: 32px; display: inline-flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.14); border-radius: .375rem; background: rgba(255,255,255,0.03); transition: transform .2s ease, box-shadow .2s ease; }
        .pm :global(svg) { width: 24px; height: 24px; }
        .pm:hover { transform: translateY(-1px); box-shadow: 0 0 0 3px color-mix(in oklab, currentColor 28%, transparent); }
        /* Brand colors */
        .pm.visa { color: #1a1f71; background: rgba(26,31,113,0.08); }
        .pm.net { color: #00b050; background: rgba(0,176,80,0.08); }
        .pm.skrill { color: #811453; background: rgba(129,20,83,0.08); }
        .pm.wire { color: #38bdf8; background: rgba(56,189,248,0.08); }
        .pm.zota { color: #f59e0b; background: rgba(245,158,11,0.08); }
      `}</style>
    </footer>
  );
}

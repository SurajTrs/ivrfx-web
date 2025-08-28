"use client";
import React, { useState } from "react";
import Reveal from "components/Reveal";

type FAQItem = {
  q: string;
  a: string;
};

const faqs: FAQItem[] = [
  {
    q: "How do I download the trading app?",
    a: "You can download our trading app from the App Store for iOS devices or Google Play Store for Android devices. Search for 'IVRFX' and tap install."
  },
  {
    q: "What devices are supported?",
    a: "Our mobile app is available for both iOS (iOS 13.0+) and Android (6.0+) devices. It's optimized for both smartphones and tablets."
  },
  {
    q: "Is there a minimum deposit required?",
    a: "The minimum deposit varies by region and account type. You can start trading with as little as $100, but we recommend checking our website for specific requirements in your country."
  },
  {
    q: "How do I fund my account?",
    a: "You can fund your account via credit/debit cards, bank transfers, and popular e-wallets. All options are available in the app's deposit section."
  },
  {
    q: "Is the app secure?",
    a: "Yes, we use bank-level encryption, two-factor authentication, and biometric login to ensure your account and personal information remain secure."
  },
  {
    q: "Can I access the same features as the web platform?",
    a: "The mobile app provides core trading functionality including real-time quotes, charting, and order execution. Some advanced features may be limited compared to the web platform."
  }
];

const TradingAppFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-6" aria-label="Trading App FAQs">
      <div className="container">
        <div className="text-center mb-4">
          <Reveal>
            <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mt-3 mb-2" style={{ background: "rgba(168, 85, 247, 0.12)", color: "#a855f7", border: "1px solid rgba(168, 85, 247, 0.35)" }}>
              <span className="rounded-circle" style={{ width: 6, height: 6, background: "#a855f7" }} />
              Need more information?
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-6 fw-bold mb-3">Frequently asked questions</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead text-muted m-0 mx-auto" style={{ maxWidth: '700px' }}>
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
          </Reveal>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-12 col-lg-10">
            <div className="accordion" id="tradingAppFaqs">
              {faqs.map((faq, i) => {
                const id = `faq-${i}`;
                const isOpen = openIndex === i;
                
                return (
                  <div key={i} className="accordion-item border-0 mb-3 rounded-3 overflow-hidden" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(168, 85, 247, 0.25)" }}>
                    <h2 className="accordion-header m-0" id={`${id}-heading`}>
                      <button 
                        className={`accordion-button ${isOpen ? '' : 'collapsed'} bg-transparent shadow-none`} 
                        type="button" 
                        onClick={() => toggleFAQ(i)}
                        aria-expanded={isOpen}
                        aria-controls={`${id}-collapse`}
                        style={{ color: isOpen ? '#a855f7' : 'inherit' }}
                      >
                        {faq.q}
                      </button>
                    </h2>
                    <div 
                      id={`${id}-collapse`} 
                      className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`} 
                      aria-labelledby={`${id}-heading`}
                    >
                      <div className="accordion-body text-muted">{faq.a}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <Reveal className="text-center mt-5">
              <p className="mb-3">Still have questions?</p>
              <a 
                href="#contact" 
                className="btn"
                style={{
                  color: '#a855f7',
                  border: '1px solid #a855f7',
                  borderRadius: '0.375rem',
                  padding: '0.5rem 1rem',
                  transition: 'all 0.2s ease-in-out'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#a855f7';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#a855f7';
                }}
              >
                Contact Support
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingAppFAQ;

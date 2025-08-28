import React from 'react';
import TiltOnHover from 'app/ibpage/anim/TiltOnHover';
import RevealOnScroll from 'app/ibpage/anim/RevealOnScroll';
import { FaShieldAlt, FaChartLine, FaCoins, FaBolt, FaGlobe, FaCreditCard } from 'react-icons/fa';

const features = [
  {
    icon: <FaShieldAlt className="display-6 text-primary mb-3" />,
    title: "Regulated & Licenced",
    description: "Regulated by the Financial Sector Conduct Authority (FSCA) in South Africa and the Cyprus Securities and Exchange Commission (CySEC) in the EU."
  },
  {
    icon: <FaChartLine className="display-6 text-primary mb-3" />,
    title: "High leverage options",
    description: "Benefit from up to 1:500 leverage."
  },
  {
    icon: <FaCoins className="display-6 text-primary mb-3" />,
    title: "Low entry point",
    description: "Start trading with a minimum deposit of just $20."
  },
  {
    icon: <FaBolt className="display-6 text-primary mb-3" />,
    title: "Instant execution",
    description: "Average trade execution times of 0.35 milliseconds."
  },
  {
    icon: <FaGlobe className="display-6 text-primary mb-3" />,
    title: "Global market offerings",
    description: "Over 400 products including CFDs on ETFs and Bonds."
  },
  {
    icon: <FaCreditCard className="display-6 text-primary mb-3" />,
    title: "Fast deposit & withdrawal",
    description: "From various payment methods including online banking, local wallets and cryptocurrencies across 170+ countries."
  }
];

const IBWhyChooseUs = () => {
  return (
    <section className="py-6 py-lg-7">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Why your clients will choose us</h2>
          <p className="lead text-muted">Powerful tools and features for successful trading</p>
        </div>
        
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <RevealOnScroll delay={index * 80}>
                <TiltOnHover className="h-100" shadowColor="rgba(111,66,193,0.2)">
                  <div className="h-100 p-4 bg-white rounded-3 shadow-sm">
                    <div className="d-flex">
                      <div className="me-4">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="h4 mb-3">{feature.title}</h3>
                        <p className="text-muted mb-0">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </TiltOnHover>
              </RevealOnScroll>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-5 text-center">
          <RevealOnScroll>
            <TiltOnHover as="div" className="d-inline-block" shadowColor="rgba(111,66,193,0.25)">
              <div className="p-4 p-lg-5 bg-light rounded-4">
                <h3 className="h2 fw-bold mb-4">Ready to start earning?</h3>
                <p className="lead mb-4">Join our network of successful introducing brokers today</p>
                <button className="btn btn-primary btn-lg px-5">Become an IB partner</button>
                
                <div className="mt-4 small text-muted">
                  *Each payment provider has their own restrictions for available countries/locations.<br />
                  These limitations are not set by IVRFX.
                </div>
              </div>
            </TiltOnHover>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default IBWhyChooseUs;

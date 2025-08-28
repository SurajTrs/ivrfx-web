import React from 'react';
import TiltOnHover from 'app/ibpage/anim/TiltOnHover';
import RevealOnScroll from 'app/ibpage/anim/RevealOnScroll';
import { FaChartLine, FaMoneyBillWave, FaHeadset, FaChartBar, FaGlobe } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaChartLine className="display-4 text-primary mb-3" />,
    title: "Unlimited earnings",
    description: "Receive up to 50% commission on referrals with no cap on income potential per client."
  },
  {
    icon: <FaMoneyBillWave className="display-4 text-primary mb-3" />,
    title: "Quick monthly payments",
    description: "Receive your earnings swiftly every month."
  },
  {
    icon: <FaHeadset className="display-4 text-primary mb-3" />,
    title: "24/5 Dedicated account manager",
    description: "Our dedicated account managers are always ready to assist you."
  },
  {
    icon: <FaChartBar className="display-4 text-primary mb-3" />,
    title: "Advanced IB portal",
    description: "Intuitive dashboard, custom widgets, comprehensive reporting, and real-time stats."
  },
  {
    icon: <FaGlobe className="display-4 text-primary mb-3" />,
    title: "Multilingual marketing toolkit",
    description: "Boost your reach with our extensive marketing support including banners, landing pages and widgets."
  }
];

const IBBenefits = () => {
  return (
    <section className="py-6 py-lg-7 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Why become an IB with us?</h2>
          <p className="lead text-muted">Join our network of successful introducing brokers</p>
        </div>
        
        <div className="row g-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <RevealOnScroll delay={index * 80}>
                <TiltOnHover className="h-100" shadowColor="rgba(111,66,193,0.25)">
                  <div className="h-100 p-4 bg-white rounded-3 shadow-sm text-center">
                    {benefit.icon}
                    <h3 className="h4 mb-3">{benefit.title}</h3>
                    <p className="text-muted mb-0">{benefit.description}</p>
                  </div>
                </TiltOnHover>
              </RevealOnScroll>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <div className="d-inline-flex align-items-center bg-primary bg-opacity-10 p-3 rounded-pill mb-4">
            <span className="badge bg-primary rounded-pill me-2">4.7★</span>
            <span className="small">Trusted by Traders since 2008</span>
          </div>
          <p className="lead mb-4">Choice of <strong>4.7M+</strong> users.</p>
          <p className="text-muted">For personalised partnership options, connect with our <strong>Account Managers</strong>.</p>
        </div>
      </div>
    </section>
  );
};

export default IBBenefits;

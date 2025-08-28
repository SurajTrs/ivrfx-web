import React from 'react';
import TiltOnHover from 'app/ibpage/anim/TiltOnHover';
import RevealOnScroll from 'app/ibpage/anim/RevealOnScroll';
import { FaShare, FaUserPlus, FaMoneyBillWave, FaGift } from 'react-icons/fa';

const steps = [
  {
    icon: <FaShare className="display-4 text-primary mb-3" />,
    title: "Promote",
    description: "Share your partner link on your website, blog, social media or ads."
  },
  {
    icon: <FaUserPlus className="display-4 text-primary mb-3" />,
    title: "Engage",
    description: "Use your link to attract and inform potential clients of the benefits and easy account setup."
  },
  {
    icon: <FaMoneyBillWave className="display-4 text-primary mb-3" />,
    title: "Earn",
    description: "Earn from every trade your referrals make."
  },
  {
    icon: <FaGift className="display-4 text-primary mb-3" />,
    title: "Rewards",
    description: "Receive your commissions directly in your account daily."
  }
];

const IBHowItWorks = () => {
  return (
    <section className="py-6 py-lg-7">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">How to unlock your rewards</h2>
          <p className="lead text-muted">Start earning with just a few simple steps</p>
        </div>
        
        <div className="row g-4">
          {steps.map((step, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <RevealOnScroll delay={index * 80}>
                <TiltOnHover className="h-100" shadowColor="rgba(111,66,193,0.2)">
                  <div className="h-100 p-4 text-center rounded-3 bg-white shadow-sm">
                    <div className="position-relative d-inline-block mb-3">
                      {step.icon}
                      <div className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="h4 mb-3">{step.title}</h3>
                    <p className="text-muted mb-0">{step.description}</p>
                  </div>
                </TiltOnHover>
              </RevealOnScroll>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <TiltOnHover as="div" style={{ display: 'inline-block' }} shadowColor="rgba(111,66,193,0.3)">
            <button className="btn btn-primary btn-lg px-5">Start earning now</button>
          </TiltOnHover>
        </div>
      </div>
    </section>
  );
};

export default IBHowItWorks;

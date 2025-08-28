"use client";

import React, { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion, Variants } from 'framer-motion';
import { theme } from '../partnerships/ib/theme';
import TiltOnHover from 'app/ibpage/anim/TiltOnHover';
import RevealOnScroll from 'app/ibpage/anim/RevealOnScroll';

const testimonials = [
  {
    id: 1,
    name: 'Jameson Keefe',
    role: 'IB Partner',
    content: 'Partnering with IVRFX has been a game-changer for my business. The 50% commission structure and unlimited commission makes it so worthwhile. The daily payments are also a major plus!',
    time: '10 hours ago',
    rating: 5
  },
  {
    id: 2,
    name: 'Ahmed Wadiya',
    role: 'IB Partner',
    content: 'I can\'t recommend IVRFX\'s IB program enough. The withdrawal process is quick, and the low entry point meant I was able to start earning almost immediately.',
    time: '16 hours ago',
    rating: 5
  },
  {
    id: 3,
    name: 'Robert Weaver',
    role: 'IB Partner',
    content: 'The extensive marketing tools provided by IVRFX makes it much easier for me to promote and grow my client base. They really made an effort to give us the resources to succeed.',
    time: '18 hours ago',
    rating: 5
  }
];

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  time: string;
  rating: number;
}

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const IBTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused]);

  const renderStars = (count: number) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={i < count ? 'text-warning' : 'text-muted'}>&#9733;</span>
    ));
  };

  return (
    <section className="py-6 py-lg-7" style={{ backgroundColor: theme.colors.light }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Hear what our partners have to say</h2>
          <p className="lead text-muted">Join thousands of satisfied partners worldwide</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <RevealOnScroll>
              <TiltOnHover className="position-relative p-4 p-lg-5 bg-white rounded-4 shadow-sm" shadowColor="rgba(111,66,193,0.25)"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <FaQuoteLeft className="display-1" style={{ 
                  color: theme.colors.primary,
                  opacity: 0.1,
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  margin: '1rem'
                }} />
                
                <div className="position-relative">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <div className="mb-4">
                        <p className="lead mb-4">"{testimonials[activeIndex].content}"</p>
                        <div className="d-flex align-items-center">
                          <div className="me-3">
                            <div style={{
                              backgroundColor: `${theme.colors.primary}1a`,
                              borderRadius: '50%',
                              width: '60px',
                              height: '60px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <span className="h4 mb-0 text-primary fw-bold">
                                {testimonials[activeIndex].name.charAt(0)}
                              </span>
                            </div>
                          </div>
                          <div>
                            <h5 className="mb-1">{testimonials[activeIndex].name}</h5>
                            <div className="text-muted small">
                              {testimonials[activeIndex].role} • {testimonials[activeIndex].time}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center text-md-end">
                      <div className="d-inline-flex flex-column align-items-center">
                        <div className="display-4 fw-bold text-primary mb-2">
                          {testimonials[activeIndex].rating}.0
                        </div>
                        <div className="h5 mb-3">
                          {renderStars(testimonials[activeIndex].rating)}
                        </div>
                        <div className="text-muted small">
                          Based on 1,200+ reviews
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="d-flex justify-content-center mt-4" style={{ gap: '0.5rem' }}>
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        className={`btn btn-sm p-0 ${index === activeIndex ? 'text-primary' : 'text-muted'}`}
                        onClick={() => setActiveIndex(index)}
                        style={{
                          width: '12px',
                          height: '12px',
                          minWidth: '12px',
                          padding: 0,
                          borderRadius: '50%',
                          backgroundColor: index === activeIndex ? theme.colors.primary : 'transparent',
                          border: `1px solid ${index === activeIndex ? theme.colors.primary : theme.colors.text.secondary}`,
                          transition: 'all 0.3s ease',
                          color: index === activeIndex ? theme.colors.primary : theme.colors.text.secondary
                        }}
                        aria-label={`View testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </TiltOnHover>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IBTestimonials;

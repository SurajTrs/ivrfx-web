import React from "react";

export default function CTAContact() {
  return (
    <section className="py-6 mb-5">
      <div className="container">
        <div
          className="p-4 p-lg-5 rounded-4 text-white shadow-lg"
          style={{
            background: "linear-gradient(135deg, #20c997 0%, #7b5cff 100%)",
          }}
        >
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-8">
              <h2 className="display-6 fw-bold mb-2">So, are you ready to trade?</h2>
              <p className="lead mb-0" style={{ opacity: 0.95 }}>
                Since 2009, we’ve helped hundreds of thousands of traders tap into the trading markets. Now, it’s your turn.
              </p>
            </div>
            <div className="col-12 col-lg-4 text-lg-end">
              <a className="btn btn-light btn-lg px-4 fw-semibold" href="#contact">Contact us</a>
            </div>
          </div>
          <div id="contact" className="mt-4 small" style={{ opacity: 0.85 }}>
            support@ivrfx.com · +27 104470539
          </div>
        </div>
      </div>
    </section>
  );
}

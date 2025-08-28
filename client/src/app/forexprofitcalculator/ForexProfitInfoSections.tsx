"use client";

import React from "react";

export default function ForexProfitInfoSections() {
  return (
    <section className="bg-white" id="learn">
      <div className="container py-5 py-md-6">
        {/* 1. Left text / Right image */}
        <div className="row align-items-center g-4 g-lg-5 mb-5">
          <div className="col-12 col-lg-6">
            <h2 className="fw-bold mb-3">How Does a Forex Profit Calculator Work?</h2>
            <p className="text-secondary">You might find yourself asking, ‘How Can I Calculate Profit in Forex?’, or ‘How do you calculate profit or loss in forex trading?’. Well fortunately for you, the IVRFX forex profit calculator makes things easy.</p>
            <p className="text-secondary">The calculator is designed to help you calculate potential gains and losses on each currency trade. Simply input the values requested: the currency pair being traded, the position size, entry price, and the exit price to accurately determine potential gains or losses. The IVRFX calculators already include spreads when determining the outcome and the 0% commission we offer on the platform. With this information, the calculator can quickly and accurately determine how much you would hypothetically make or lose on a trade.</p>
          </div>
          <div className="col-12 col-lg-6">
            <div className="illustration-box rounded-4 border overflow-hidden">
              <img src="/images/forex-1.jpg" alt="How Forex Profit Calculator works" className="w-100 h-100 object-cover" />
            </div>
          </div>
        </div>

        {/* 2. Right text / Left image */}
        <div className="row align-items-center g-4 g-lg-5 mb-5 flex-lg-row-reverse">
          <div className="col-12 col-lg-6">
            <h2 className="fw-bold mb-3">How is Profit Calculated in Forex Trading?</h2>
            <p className="text-secondary">Profit in forex trading is calculated by subtracting the entry price from the exit price of a trade. This can be in either a positive or negative value depending on whether the trade resulted in a loss or gain. Forex traders will look to open a trade at a lower price and close it at a higher price, in order to turn a profit.</p>
            <p className="text-secondary">However, you don't need to do these calculations manually as IVRFX offers a commodity calculator that does the job for you. You simply need to input the necessary information, and the calculator will provide you with the estimate profit or loss amount. This makes the process simple and convenient, allowing you to focus on making informed trading decisions.</p>
          </div>
          <div className="col-12 col-lg-6">
            <div className="illustration-box rounded-4 border overflow-hidden">
              <img src="/images/forex-2.jpg" alt="How profit is calculated in Forex" className="w-100 h-100 object-cover" />
            </div>
          </div>
        </div>

        {/* 3. Left text / Right image */}
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-6">
            <h2 className="fw-bold mb-3">Conclusion</h2>
            <p className="text-secondary">In conclusion, forex trading can be a complex and risky business, but with the help of a Forex Profit Calculator, traders and investors can make informed decisions and manage their risks. The calculator provides quick and accurate profit/loss estimates, taking into account various input parameters such as the current market price, quantity, and any transaction fees or spreads.</p>
            <p className="text-secondary">The ivrfx.com/vc forex calculator is an example of such a tool, and it can make the task of risk management much more digestible. By using a Forex Profit Calculator, traders can focus on making informed decisions, without having to worry about the complexities and inaccuracies of manual calculations.</p>
          </div>
          <div className="col-12 col-lg-6">
            <div className="illustration-box rounded-4 border overflow-hidden">
              <img src="/images/forex-3.jpg" alt="Make informed Forex decisions" className="w-100 h-100 object-cover" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .illustration-box { min-height: 280px; background: #f8f9fb; border-color: #ecebf1; box-shadow: 0 6px 18px rgba(17,24,39,.05); }
        .object-cover { object-fit: cover; object-position: center; display: block; }
        @media (min-width: 992px) { .illustration-box { min-height: 340px; } }
      `}</style>
    </section>
  );
}

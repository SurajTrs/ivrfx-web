"use client";
import React from "react";
import Reveal from "components/Reveal";

export default function Overview() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <Reveal as="div" className="mx-auto" style={{ maxWidth: 900 }}>
          <p className="lead mb-3">
            IVRFX operates in more than 170 countries and is regulated by the Financial Sector Conduct Authority (FSCA) in South Africa. The IVRFX group is also registered in Saint Vincent and Grenadines.
          </p>
          <p className="mb-3">
            Our size and scale allow us to offer traders global access to popular assets such as CFDs on shares, forex, commodities, bonds, crypto, ETFs, and indices.
          </p>
          <p className="mb-3">
            We continue to grow and as a global brand we have accumulated the resources and rightfully earned the expertise necessary to deliver the best trading experience to our clients. We invest in your knowledge and focus on creating new trading tools to assist your decision making and to allow you to make more informed trades.
          </p>
          <p className="mb-0">
            Wherever you are in the world, some things don’t change; you’ll still enjoy a competitive trading experience on our advanced and intuitive trading platform.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

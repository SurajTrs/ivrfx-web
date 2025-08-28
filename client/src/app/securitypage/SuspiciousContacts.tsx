import React from "react";

export default function SuspiciousContacts({ id }: { id?: string }) {
  return (
    <section id={id} className="py-5">
      <div className="container">
        <h2 className="h3 fw-bold mb-3" style={{ color: "#1f1333" }}>Suspicious contacts impersonating IVRFX</h2>
        <p className="text-muted">
          IVRFX does not engage in any type of investment or trading advice.
        </p>
        <p className="text-muted">
          Our services do not extend to asset management or guaranteeing profits or any types of returns on investments.
          Employees of IVRFX will never contact you to persuade you to invest or open a specific position or guarantee any profits.
          If you receive this type of communication, cross-check the information with our company details in the website footer and
          inform them you will report it to the local authorities.
        </p>
        <p className="text-muted mb-0">
          Under no circumstances will any employees of IVRFX ever contact you requesting to make a deposit and wire your money anywhere.
          The decision to fund your account is entirely yours and we can assist by contacting Customer Support. The only time we will
          contact you directly about payment is if your account funds fall below necessary margin requirements (margin call).
        </p>
      </div>
    </section>
  );
}

import React from "react";

export default function ImpersonationMethods({ id }: { id?: string }) {
  const methods = [
    "Promise guaranteed profit returns and urge investors to deposit funds via wire transfers to various bank accounts with different beneficiaries.",
    "Request investors to make additional deposits for tax purposes in order to proceed with withdrawals.",
    "Provide fake documentation such as brochures, contracts and/or bank guarantees with unauthorised and unverified electronic signatures.",
    "Ask investors to share bank account or credit card details or other personal data over the phone (we will never ask you to do this).",
    "Present themselves as the client's assigned asset manager and contact person (only clients manage their own accounts).",
    "Falsely inform investors that the Company is closing retail client accounts and upgrading all accounts to corporate/professional accounts, enticing deposits.",
    "Falsely inform you that the Company is transferring your account to another group entity and request bank and personal details to complete the transfer.",
  ];
  return (
    <section id={id} className="py-5">
      <div className="container">
        <h2 className="h4 fw-bold" style={{ color: "#1f1333" }}>Common impersonation methods</h2>
        <ul className="mt-3">
          {methods.map((m, i) => (
            <li key={i} className="text-muted mb-2">{m}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

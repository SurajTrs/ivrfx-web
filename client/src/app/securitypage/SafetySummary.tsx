import React from "react";

export default function SafetySummary({ id }: { id?: string }) {
  const tips = [
    "Be cautious of unsolicited approaches via email, calls, social media etc.",
    "Never give out your personal and financial information via telephone, social media platforms or emails.",
    "Never transfer money to a bank account at the request of a person who states they are acting on behalf of IVRFX.",
    "Always check whether the email address appears slightly different to the official one.",
    "Always check that the website is ‘https://secured’.",
    "Always consult the Regulator’s website for licensed entities websites.",
    "Do not download any files or programs from unknown sources to any of your devices.",
    "Do not share your password and account details with anyone.",
    "Reputable companies will never request personal account or payment information.",
    "Help us tackle online fraud by getting in touch with us immediately if you have any suspicions.",
  ];
  return (
    <section id={id} className="py-5 bg-white">
      <div className="container">
        <h2 className="h4 fw-bold" style={{ color: "#1f1333" }}>Summary of how to stay safe online</h2>
        <ul className="mt-3">
          {tips.map((t, i) => (
            <li key={i} className="text-muted mb-2">{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

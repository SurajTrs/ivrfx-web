import React from "react";

export default function ReportSuspicion({ id }: { id?: string }) {
  return (
    <section id={id} className="py-5 bg-white">
      <div className="container">
        <h2 className="h4 fw-bold" style={{ color: "#1f1333" }}>Report a Suspicion</h2>
        <p className="text-muted">
          Immediately report any suspicious activity to <a href="mailto:legal@ivrfx.com">legal@ivrfx.com</a>, <a href="mailto:privacy@ivrfx.com">privacy@ivrfx.com</a> and your local police.
        </p>
        <p className="text-muted mb-0">
          This is in case you receive any unsolicited telephone calls, emails or SMS from those trying to impersonate Markets or any other reputable third parties we engage with.
          For further details on the third parties in which we provide some of your information to, please see our Privacy Policy. Please also contact us should you notice any
          unauthorised transactions in your account or suspect that a third party may have access to your account information.
        </p>
      </div>
    </section>
  );
}

import React from "react";

export default function ProtectYourself({ id }: { id?: string }) {
  return (
    <section id={id} className="py-5 bg-white">
      <div className="container">
        <h2 className="h3 fw-bold mb-4" style={{ color: "#1f1333" }}>How to protect yourself online</h2>

        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div className="p-4 border rounded-4 h-100">
              <h3 className="h5 fw-semibold">Phishing</h3>
              <p className="text-muted mb-0">
                Fraudsters commonly attempt to obtain your personal information by impersonating a trusted company and/or
                presenting themselves as its employees, using similar email domains. Watch out for suspicious emails
                where the domains appear similar to an official source but with a tweak. These emails often contain
                spelling mistakes or improper formatting.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="p-4 border rounded-4 h-100">
              <h3 className="h5 fw-semibold">Secure browsing</h3>
              <p className="text-muted mb-0">
                Check that the website's domain always starts with <code>https://secured</code>.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="p-4 border rounded-4 h-100">
              <h3 className="h5 fw-semibold">Viruses and malware</h3>
              <p className="text-muted mb-0">
                Do not download files or programs from unknown sources to any of your devices.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="p-4 border rounded-4 h-100">
              <h3 className="h5 fw-semibold">Disclosing data</h3>
              <p className="text-muted mb-0">
                Never share your password details or sensitive account information with anyone (such as credit card details).
                IVRFX or other reputable companies would never ask for these details. Ensure that your personal data
                is not kept on unprotected hardware where it can become available to third party malware or hackers.
              </p>
            </div>
          </div>

          <div className="col-12">
            <div className="p-4 border rounded-4 h-100">
              <h3 className="h5 fw-semibold">Consult Regulators</h3>
              <p className="text-muted mb-0">
                We urge you to consult the respective country’s regulator website, before conducting business with any investment
                firms, to ascertain which entities are licensed to provide investment services and their approved domains. Most
                regulators maintain approved and non-approved domains to help you verify legitimacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

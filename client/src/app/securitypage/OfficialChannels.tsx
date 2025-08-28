import React from "react";

export default function OfficialChannels({ id }: { id?: string }) {
  return (
    <section id={id} className="py-5">
      <div className="container">
        <h2 className="h4 fw-bold" style={{ color: "#1f1333" }}>Official Websites & Channels of Communication</h2>
        <p className="text-muted">
          When following links from Social Media pages, please ensure you are directed to one of the official websites above, as scammers may also set up fake Social Media profiles
          in an attempt to direct users to false websites. Our official mobile applications are only available through the Apple App Store and Google Play Store.
        </p>
        <p className="text-muted mb-0">
          To get in touch with us directly, click on <strong>Customer Support</strong> to access our Live Chat function.
        </p>
      </div>
    </section>
  );
}

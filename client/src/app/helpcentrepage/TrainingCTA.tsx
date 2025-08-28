"use client";
import React, { useState } from "react";

export default function TrainingCTA() {
  const [show, setShow] = useState(false);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-6">
            <h3 className="fw-bold mb-2">Get Started the Right Way</h3>
            <p className="text-muted mb-0">
              Book a free 1:1 training session for focused education and platform navigation to begin your journey with IVRFX
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <form className="p-3 p-md-4 bg-white rounded-4 shadow-sm">
              {/* Email */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <div className="input-group input-group-lg">
                  <span className="input-group-text bg-white border-end-0"><i className="bi bi-envelope" /></span>
                  <input type="email" className="form-control border-start-0" placeholder="you@example.com" required />
                </div>
                <div className="form-text">Enter a valid email address</div>
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <div className="input-group input-group-lg">
                  <span className="input-group-text bg-white border-end-0"><i className="bi bi-shield-lock" /></span>
                  <input
                    type={show ? "text" : "password"}
                    className="form-control border-start-0"
                    placeholder="Create a strong password"
                    required
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShow((s) => !s)}
                    aria-label={show ? "Hide password" : "Show password"}
                  >
                    <i className={`bi ${show ? "bi-eye-slash" : "bi-eye"}`} />
                  </button>
                </div>
                <ul className="small text-muted mb-0 mt-2 ps-3">
                  <li>Please enter a valid password</li>
                  <li>8–15 characters, including at least 1 number</li>
                  <li>At least 1 uppercase and 1 lowercase letter</li>
                  <li>
                    Must include one of: ~!@#£%^&amp;*()_-+=:;&lt;&gt;&#123;,[]?,.&#125;
                  </li>
                  <li>Not commonly used; Latin characters only; no spaces</li>
                </ul>
              </div>

              {/* Agreement */}
              <div className="form-check mb-4">
                <input className="form-check-input" type="checkbox" id="agree" required />
                <label className="form-check-label" htmlFor="agree">
                  By creating an account, you agree to our
                  {" "}
                  <a href="#" className="text-decoration-none">Privacy Policy</a>,
                  {" "}
                  <a href="#" className="text-decoration-none">Cookie Policy</a>{" "}
                  and receiving marketing emails.
                </label>
              </div>

              {/* CTA */}
              <button
                type="submit"
                className="btn w-100 py-2 fw-semibold"
                style={{
                  background: "linear-gradient(90deg, #7c3aed, #a855f7)",
                  borderColor: "#7c3aed",
                  color: "#fff",
                }}
              >
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

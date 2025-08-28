"use client";
import React, { useState } from "react";

interface SignupFormProps {
  accentColor?: string;
}

const SignupForm: React.FC<SignupFormProps> = ({ accentColor = "#198754" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4 p-md-5">
                <h2 className="h3 fw-bold mb-3">Ready to trade?</h2>
                <p className="text-muted mb-4">Create an account!</p>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter valid email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter a strong password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={8}
                      maxLength={15}
                    />
                    <div className="form-text">
                      Passwords must be 8-15 chars, include upper & lower case, number, and symbol.
                    </div>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                      id="agreePolicy"
                      required
                    />
                    <label className="form-check-label" htmlFor="agreePolicy">
                      By creating an account, you agree to our
                      {" "}
                      <a href="/legal/privacy-policy" className="link-underline" style={{ color: accentColor }}>Privacy Policy</a>,
                      {" "}
                      <a href="/legal/cookie-disclosure" className="link-underline" style={{ color: accentColor }}>Cookie Policy</a>,
                      {" "}and receive marketing emails.
                    </label>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-lg" style={{ backgroundColor: accentColor, color: '#fff' }} disabled={!agree}>Create account</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;

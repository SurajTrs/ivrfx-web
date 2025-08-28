"use client";
import React, { useCallback, useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  type: string;
  subject: string;
  description: string;
};

const MAX_DESC = 500;

export default function QueryForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<null | "ok" | "error">(null);
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    name: false,
    email: false,
    phone: false,
    type: false,
    subject: false,
    description: false,
  });
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    type: "",
    subject: "",
    description: "",
  });

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const list = Array.from(e.dataTransfer.files || []);
    if (!list.length) return;
    setFiles((prev) => [...prev, ...list].slice(0, 10));
  }, []);

  const onSelectFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const list = Array.from(e.target.files || []);
    if (!list.length) return;
    setFiles((prev) => [...prev, ...list].slice(0, 10));
  };

  const removeFile = (idx: number) => setFiles((prev) => prev.filter((_, i) => i !== idx));

  const setField = (k: keyof FormState, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const markTouched = (k: keyof FormState) => setTouched((t) => ({ ...t, [k]: true }));

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!/^[0-9\s+()-]{7,}$/.test(form.phone)) e.phone = "Enter a valid phone";
    if (!form.type) e.type = "Select a query type";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.description.trim()) e.description = "Description is required";
    if (form.description.length > MAX_DESC) e.description = `Max ${MAX_DESC} characters`;
    return e;
  }, [form]);

  const hasError = (k: keyof FormState) => Boolean(errors[k] && touched[k]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // mark all touched
    setTouched({ name: true, email: true, phone: true, type: true, subject: true, description: true });
    if (Object.keys(errors).length) return;
    try {
      setSubmitting(true);
      setSubmitted(null);
      // Simulate request
      await new Promise((r) => setTimeout(r, 900));
      setSubmitted("ok");
      // reset form
      setForm({ name: "", email: "", phone: "", type: "", subject: "", description: "" });
      setFiles([]);
      setTouched({ name: false, email: false, phone: false, type: false, subject: false, description: false });
    } catch {
      setSubmitted("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-5" style={{ background: "radial-gradient(900px 400px at 20% -10%, #f3e8ff 0%, transparent 60%)" }}>
      <div className="container">
        <h2 className="h3 fw-bold mb-4" style={{ color: "#1f1333" }}>Online Query Form</h2>

        {submitted === "ok" && (
          <div className="alert alert-success" role="alert">Thank you! Your query has been submitted.</div>
        )}
        {submitted === "error" && (
          <div className="alert alert-danger" role="alert">Something went wrong. Please try again.</div>
        )}

        <form className="row g-3" onSubmit={onSubmit} noValidate>
          {/* Full name & Email */}
          <div className="col-12 col-md-6">
            <label className="form-label fw-semibold">Full Name<span className="text-danger">*</span></label>
            <div className="input-group input-group-lg">
              <span className="input-group-text bg-white border-end-0"><i className="bi bi-person" /></span>
              <input
                type="text"
                className={`form-control border-start-0 ${hasError("name") ? "is-invalid" : ""}`}
                placeholder="Enter your full name"
                value={form.name}
                onChange={(e) => setField("name", e.target.value)}
                onBlur={() => markTouched("name")}
                required
              />
              <div className="invalid-feedback">{errors.name}</div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <label className="form-label fw-semibold">E-mail address<span className="text-danger">*</span></label>
            <div className="input-group input-group-lg">
              <span className="input-group-text bg-white border-end-0"><i className="bi bi-envelope" /></span>
              <input
                type="email"
                className={`form-control border-start-0 ${hasError("email") ? "is-invalid" : ""}`}
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setField("email", e.target.value)}
                onBlur={() => markTouched("email")}
                required
              />
              <div className="invalid-feedback">{errors.email}</div>
            </div>
          </div>

          {/* Phone & Type of query */}
          <div className="col-12 col-md-6">
            <label className="form-label fw-semibold">Phone<span className="text-danger">*</span></label>
            <div className="input-group input-group-lg">
              <span className="input-group-text bg-white border-end-0">🇮🇳 +91</span>
              <input
                type="tel"
                className={`form-control border-start-0 ${hasError("phone") ? "is-invalid" : ""}`}
                placeholder="000 000 00 00"
                value={form.phone}
                onChange={(e) => setField("phone", e.target.value)}
                onBlur={() => markTouched("phone")}
                required
              />
              <div className="invalid-feedback">{errors.phone}</div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <label className="form-label fw-semibold">Type of Query</label>
            <select
              className={`form-select form-select-lg ${hasError("type") ? "is-invalid" : ""}`}
              value={form.type}
              onChange={(e) => setField("type", e.target.value)}
              onBlur={() => markTouched("type")}
              required
            >
              <option value="">Select your type</option>
              <option>Account</option>
              <option>Deposits & Withdrawals</option>
              <option>Platform</option>
              <option>Technical</option>
              <option>Other</option>
            </select>
            <div className="invalid-feedback">{errors.type}</div>
          </div>

          {/* Subject */}
          <div className="col-12">
            <label className="form-label fw-semibold">Subject</label>
            <input
              type="text"
              className={`form-control form-control-lg ${hasError("subject") ? "is-invalid" : ""}`}
              placeholder="Let us know how we can help you"
              value={form.subject}
              onChange={(e) => setField("subject", e.target.value)}
              onBlur={() => markTouched("subject")}
              required
            />
            <div className="invalid-feedback">{errors.subject}</div>
          </div>

          {/* Description */}
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-between">
              <label className="form-label fw-semibold mb-1">Description</label>
              <small className={`mb-1 ${form.description.length > MAX_DESC ? "text-danger" : "text-muted"}`}>
                {Math.min(form.description.length, MAX_DESC)} / {MAX_DESC}
              </small>
            </div>
            <textarea
              className={`form-control ${hasError("description") ? "is-invalid" : ""}`}
              rows={4}
              placeholder="Describe your question"
              value={form.description}
              onChange={(e) => setField("description", e.target.value)}
              onBlur={() => markTouched("description")}
              maxLength={MAX_DESC + 1}
              required
            />
            <div className="invalid-feedback">{errors.description}</div>
          </div>

          {/* Attachments */}
          <div className="col-12">
            <div
              className="border rounded-4 p-4 bg-light text-center"
              onDragOver={(e) => e.preventDefault()}
              onDrop={onDrop}
            >
              <p className="mb-2">Drag and drop or <label htmlFor="attach" className="text-decoration-underline" role="button" style={{ color: "#7c3aed" }}>browse files</label></p>
              <input id="attach" type="file" className="d-none" multiple onChange={onSelectFiles} />
              <small className="text-muted d-block">Files must be less than 5MB. Allowed file types: GIF, JPG, JPEG, PNG, TXT, RTF, PDF, DOC, DOCX.</small>
              {files.length > 0 && (
                <div className="mt-3 text-start d-flex flex-wrap gap-2">
                  {files.map((f, idx) => (
                    <span key={`${f.name}-${idx}`} className="badge rounded-pill text-bg-light border">
                      <i className="bi bi-paperclip me-1" /> {f.name}
                      <button
                        type="button"
                        className="btn btn-sm btn-link ms-2 p-0 text-danger"
                        onClick={() => removeFile(idx)}
                        aria-label={`Remove ${f.name}`}
                      >
                        <i className="bi bi-x-circle" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className="col-12">
            <button
              type="submit"
              className="btn px-4 fw-semibold"
              disabled={submitting}
              style={{
                background: "linear-gradient(90deg, #7c3aed, #a855f7)",
                borderColor: "#7c3aed",
                color: "#fff",
                minWidth: 140,
              }}
            >
              {submitting ? (
                <span className="d-inline-flex align-items-center gap-2">
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                  Submitting...
                </span>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

import { useState } from "react";

/* ── Icons ───────────────────────── */
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="18" height="18">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="18" height="18">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.49 5.49l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="18" height="18">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ── Input class ─────────────────── */
const inputCls =
  "w-full px-4 py-3 rounded-xl border border-[#cbd5e1] bg-white text-[#1e3a5f] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/30 focus:border-[#2563eb] transition text-sm";

export default function BookConsultation() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    organization: "", phone: "", role: "",
    topic: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const reset = () => {
    setForm({ firstName: "", lastName: "", email: "", organization: "", phone: "", role: "", topic: "", message: "" });
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen pt-[var(--nav-height)] bg-white">
      <div className="container-wide py-16">

        {/* ── Header ── */}
        <div className="max-w-2xl mb-14">
          <p className="text-[#2563eb] text-sm font-semibold mb-2 tracking-wide uppercase">
            Book Consultation
          </p>
          <h1 className="text-4xl font-display font-bold mb-4 tracking-tight text-[#0f2d5e]">
            Let's Work Together
          </h1>
          <p className="text-[#4a6080] leading-relaxed">
            Share your details and I'll personally review your request.
            You'll receive a confirmation within 24–48 hours.
          </p>
        </div>

        {/* ── Two Columns ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── LEFT: Form ── */}
          <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8 shadow-sm">

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-[#1e3a5f]">First Name</label>
                    <input
                      type="text"
                      placeholder="Jane"
                      required
                      value={form.firstName}
                      onChange={set("firstName")}
                      className={inputCls}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-[#1e3a5f]">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      required
                      value={form.lastName}
                      onChange={set("lastName")}
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-[#1e3a5f]">Official Email</label>
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    required
                    value={form.email}
                    onChange={set("email")}
                    className={inputCls}
                  />
                </div>

                {/* Organization */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-[#1e3a5f]">Organization</label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    value={form.organization}
                    onChange={set("organization")}
                    className={inputCls}
                  />
                </div>

                {/* Phone + Role */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-[#1e3a5f]">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={set("phone")}
                      className={inputCls}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-[#1e3a5f]">Your Role</label>
                    <input
                      type="text"
                      placeholder="CEO, Founder…"
                      value={form.role}
                      onChange={set("role")}
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Topic */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-[#1e3a5f]">Topic / Area of Interest</label>
                  <select
                    value={form.topic}
                    onChange={set("topic")}
                    className={inputCls}
                  >
                    <option value="" disabled>Select a topic…</option>
                    <option>Business Strategy</option>
                    <option>Investment Advisory</option>
                    <option>Product &amp; Growth</option>
                    <option>Career Coaching</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-[#1e3a5f]">What would you like to discuss?</label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your goals or the challenges you're facing…"
                    value={form.message}
                    onChange={set("message")}
                    className={inputCls}
                    style={{ resize: "none" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white py-3 rounded-full font-semibold transition mt-2"
                >
                  Request Consultation →
                </button>

              </form>
            ) : (
              <div className="flex flex-col items-center text-center gap-4 py-8">
                <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <IconCheck />
                </div>
                <h3 className="text-xl font-bold text-[#0f2d5e]">Request Submitted!</h3>
                <p className="text-[#4a6080] text-sm leading-relaxed max-w-xs">
                  Thanks! I'll get back to you at{" "}
                  <strong className="text-[#1e3a5f]">{form.email}</strong> within{" "}
                  <strong className="text-[#1e3a5f]">24–48 hours</strong>.
                </p>
                <button
                  onClick={reset}
                  className="text-[#2563eb] text-sm font-semibold underline underline-offset-4 mt-2"
                >
                  Submit another request
                </button>
              </div>
            )}
          </div>

          {/* ── RIGHT: Contact Info ── */}
          <div className="space-y-6">

            <h3 className="text-lg font-semibold text-[#0f2d5e]">Contact Details</h3>

            <div className="space-y-3">

              <a
                href="mailto:hello@jeetsingh.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-[#e2e8f0] bg-white hover:bg-[#eff6ff] hover:border-[#bfdbfe] transition"
              >
                <span className="text-[#2563eb]"><IconMail /></span>
                <div>
                  <p className="text-xs text-[#64748b] mb-0.5">Email</p>
                  <p className="font-medium text-sm text-[#1e3a5f]">hello@jeetsingh.com</p>
                </div>
              </a>

              <a
                href="tel:+919800000000"
                className="flex items-center gap-4 p-4 rounded-xl border border-[#e2e8f0] bg-white hover:bg-[#eff6ff] hover:border-[#bfdbfe] transition"
              >
                <span className="text-[#2563eb]"><IconPhone /></span>
                <div>
                  <p className="text-xs text-[#64748b] mb-0.5">Phone / WhatsApp</p>
                  <p className="font-medium text-sm text-[#1e3a5f]">+91 98000 00000</p>
                </div>
              </a>

              <a
                href="https://calendly.com/jeetsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-[#e2e8f0] bg-white hover:bg-[#eff6ff] hover:border-[#bfdbfe] transition"
              >
                <span className="text-[#2563eb]"><IconCalendar /></span>
                <div>
                  <p className="text-xs text-[#64748b] mb-0.5">Direct Booking</p>
                  <p className="font-medium text-sm text-[#1e3a5f]">calendly.com/jeetsingh</p>
                </div>
              </a>

            </div>

            {/* Availability */}
            <div className="flex items-center gap-3 p-5 rounded-xl bg-[#eff6ff] border border-[#bfdbfe]">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <div>
                <p className="font-semibold text-sm text-[#0f2d5e]">Currently accepting consultations</p>
                <p className="text-xs text-[#4a6080] mt-0.5">Mon – Fri · 9 AM – 6 PM IST</p>
              </div>
            </div>

            {/* Info note */}
            <div className="flex gap-3 p-4 rounded-xl bg-[#eff6ff] border border-[#bfdbfe]">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" className="flex-shrink-0 mt-0.5">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <p className="text-xs text-[#1e40af] leading-relaxed">
                All requests are reviewed personally. You'll receive a confirmation within 24–48 hours with a proposed time slot.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
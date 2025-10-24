import { useState } from "react";
import { ICONS } from "../assets/Icons";

const Contact = ({
  lat = 40.748817,
  lng = -73.985428,
  placeQuery = "CharitUs, New York",
  apiPath = "/api/contact",
}) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    subscribe: false,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (form.phone && !/^[0-9+\-\s()]{6,20}$/.test(form.phone))
      e.phone = "Enter a valid phone number";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim() || form.message.length < 10)
      e.message = "Message should be at least 10 characters";
    return e;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length) return;

    setSubmitting(true);
    try {
      const res = await fetch(apiPath, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => ({}));
        throw new Error(payload.message || "Failed to send message");
      }

      setStatus({ type: "success", message: "Message sent — thank you!" });
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        subscribe: false,
      });
      setErrors({});
    } catch (err) {
      setStatus({
        type: "error",
        message: err.message || "Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const mapSrc = lat && lng
    ? `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`
    : `https://www.google.com/maps?q=${encodeURIComponent(placeQuery)}&z=15&output=embed`;

  return (
    <main className="bg-gray-50 text-gray-900">
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="bg-white p-6 rounded-xl shadow-md lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <ICONS.Heart className="w-8 h-8 text-emerald-600" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Contact CharitUs</h2>
                <p className="text-sm text-gray-600">Send us a message or visit our office. We’re here to help.</p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm text-gray-800">
              <div className="flex items-start gap-3">
                <ICONS.Mail className="w-5 h-5 text-emerald-500 mt-1" />
                <div>
                  <div className="text-xs text-gray-500">Email</div>
                  <a href="mailto:info@charitus.org" className="hover:text-emerald-600">info@charitus.org</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ICONS.Phone className="w-5 h-5 text-emerald-500 mt-1" />
                <div>
                  <div className="text-xs text-gray-500">Phone</div>
                  <a href="tel:+15551234567" className="hover:text-emerald-600">+1 (555) 123-4567</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ICONS.MapPin className="w-5 h-5 text-emerald-500 mt-1" />
                <div>
                  <div className="text-xs text-gray-500">Office</div>
                  <address className="not-italic">123 Charity Lane, New York, NY 10001</address>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ICONS.Clock className="w-5 h-5 text-emerald-500 mt-1" />
                <div>
                  <div className="text-xs text-gray-500">Office Hours</div>
                  <div>Mon — Fri: 09:00 — 17:00</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t text-xs text-gray-600 uppercase font-medium">
              Follow us
              <div className="flex gap-3 mt-3">
                {[ICONS.Facebook, ICONS.Twitter, ICONS.Instagram, ICONS.Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="text-gray-500 hover:text-emerald-600 transition">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-xl shadow-md lg:col-span-2">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Send us a message</h3>
            <p className="text-sm text-gray-600 mb-6">
              Questions about donations, volunteering, or partnerships? We'll reply within 48 hours.
            </p>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Full name", name: "name", type: "text", placeholder: "Your name" },
                { label: "Email", name: "email", type: "email", placeholder: "you@domain.com" },
                { label: "Phone (optional)", name: "phone", type: "tel", placeholder: "+1 555 123 4567" },
                { label: "Subject", name: "subject", type: "text", placeholder: "Subject" },
              ].map(({ label, name, type, placeholder }) => (
                <div key={name} className="col-span-2 md:col-span-1">
                  <label className="text-xs text-gray-600 mb-1 block">{label}</label>
                  <input
                    name={name}
                    type={type}
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className={`w-full rounded-lg px-4 py-2 border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                      errors[name] ? "border-red-400" : "border-gray-300"
                    }`}
                  />
                  {errors[name] && (
                    <div className="text-red-500 text-xs mt-1">{errors[name]}</div>
                  )}
                </div>
              ))}

              {/* Message Textarea */}
              <div className="col-span-2">
                <label className="text-xs text-gray-600 mb-1 block">Message</label>
                <textarea
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className={`w-full rounded-lg px-4 py-3 border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    errors.message ? "border-red-400" : "border-gray-300"
                  }`}
                />
                {errors.message && (
                  <div className="text-red-500 text-xs mt-1">{errors.message}</div>
                )}
              </div>

              {/* Subscribe checkbox */}
              <div className="col-span-2 flex items-center gap-3">
                <input
                  id="subscribe"
                  name="subscribe"
                  type="checkbox"
                  checked={form.subscribe}
                  onChange={handleChange}
                  className="w-4 h-4 text-emerald-600 border-gray-300 rounded"
                />
                <label htmlFor="subscribe" className="text-sm text-gray-700">
                  Subscribe to updates and newsletter
                </label>
              </div>

              {/* Submit button and status */}
              <div className="col-span-2 flex items-center gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2 rounded-lg disabled:opacity-60 transition-all"
                >
                  {submitting ? "Sending..." : "Send message"}
                </button>
                {status && (
                  <p
                    className={`text-sm ${
                      status.type === "success" ? "text-emerald-600" : "text-red-500"
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-10 rounded-xl overflow-hidden shadow border">
          <iframe
            title="CharitUs location"
            src={mapSrc}
            width="100%"
            height="300"
            loading="lazy"
            className="w-full border-0"
          />
          <div className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between bg-gray-100">
            <div>
              <div className="text-sm text-gray-500">Visiting hours</div>
              <div className="text-sm font-medium text-gray-800">Mon — Fri: 09:00 — 17:00</div>
            </div>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                placeQuery
              )}`}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-emerald-600 hover:underline mt-2 md:mt-0"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

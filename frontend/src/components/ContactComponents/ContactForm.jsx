
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { ICONS } from "../../assets/Icons";

const ContactForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    subscribe: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (form.phone && !/^[0-9+\-\s()]{6,20}$/.test(form.phone))
      e.phone = "Enter a valid phone number";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim() || form.message.length < 5)
      e.message = "Message should be at least 5 characters";
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
    if (Object.keys(eobj).length) {
      toast.error(Object.values(eobj)[0]);
      return;
    }

    setSubmitting(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/contact/create-message`,
        form
      );
      if (res.status !== 201) {
        throw new Error(res.data?.message || "Failed to send message");
      }

      setStatus({ type: "success", message: "Message sent — thank you!" });
      setForm({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        subscribe: false,
      });
      toast.success("Message sent — thank you!");
    } catch (err) {
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-12 px-4 w-full bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/90 rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
            <span>{ICONS.Mail && <ICONS.Mail className="w-7 h-7 text-green-600" />}</span>
            Send us a message
          </h3>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Questions about donations, volunteering, or partnerships? We’ll reply within 48 hours.
          </p>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Input fields */}
            {[
              {
                label: "Full name",
                name: "fullName",
                type: "text",
                placeholder: "Your name",
              },
              {
                label: "Email",
                name: "email",
                type: "email",
                placeholder: "you@domain.com",
              },
              {
                label: "Phone (optional)",
                name: "phone",
                type: "tel",
                placeholder: "+1 555 123 4567",
              },
              {
                label: "Subject",
                name: "subject",
                type: "text",
                placeholder: "Subject",
              },
            ].map(({ label, name, type, placeholder }) => (
              <div key={name} className="col-span-2 md:col-span-1">
                <label className="text-xs text-black mb-1 block font-semibold">
                  {label}
                </label>
                <input
                  name={name}
                  type={type}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className={`w-full rounded-xl px-4 py-2 border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 transition`}
                />
              </div>
            ))}

            {/* Message Textarea */}
            <div className="col-span-2">
              <label className="text-xs text-black mb-1 block font-semibold">
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className={`w-full rounded-xl px-4 py-3 border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 transition`}
              />
            </div>

            <div className="col-span-2 flex items-center justify-center gap-4 mt-2">
              <button
                type="submit"
                disabled={submitting}
                className="btn btn-green px-8 py-2 text-lg font-semibold rounded-xl shadow hover:scale-105 transition-all"
              >
                {submitting ? "Sending..." : "Send message"}
              </button>
            </div>
          </form>
          {status?.type === "success" && (
            <div className="mt-6 text-green-700 text-center font-semibold animate-fade-in">
              {status.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

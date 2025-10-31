import React from "react";
import { useState } from "react";
import axios from "axios";
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
    <div>
      <main className=" text-gray-900">
          <div className="">
            {/* <div className="bg-white p-6 rounded-xl shadow-md lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <ICONS.Heart className="w-8 h-8 text-(--main-green-color)" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Contact Sunamganj Jela Welfare
                  </h2>
                  <p className="text-sm text-gray-600">
                    Send us a message or visit our office. We’re here to help.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm text-gray-800">
                <div className="flex items-start gap-3">
                  <ICONS.Mail className="w-5 h-5 text-(--main-green-color) mt-1" />
                  <div>
                    <div className="text-xs text-gray-500">Email</div>
                    <a
                      className="flex items-center gap-2"
                      href="mailto:SJWA.UK@gmail.com"
                    >
                      <span>SJWA.UK@gmail.com</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ICONS.MapPin className="w-5 h-5 text-(--main-green-color) mt-1" />
                  <div>
                    <div className="text-xs text-gray-500">Office</div>
                    <a
                      className="flex items-center gap-2"
                      href="https://www.google.com/maps/place/304+Commercial+Road,+London,+England,+E1+2PY"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      304 Commercial Road, London, England, E1 2PY
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ICONS.Clock className="w-5 h-5 text-(--main-green-color) mt-1" />
                  <div>
                    <div className="text-xs text-gray-500">Office Hours</div>
                    <div>Mon — Fri: 09:00 — 17:00</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t text-xs text-gray-600 uppercase font-medium">
                Follow us
                <div className="flex gap-3 mt-3">
                  {[
                    ICONS.Facebook,
                    ICONS.Twitter,
                    ICONS.Instagram,
                    ICONS.Linkedin,
                  ].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="text-gray-500 hover:text-(--main-green-color) transition"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div> */}

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-xl ">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Send us a message
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Questions about donations, volunteering, or partnerships? We'll
                reply within 48 hours.
              </p>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
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
                    <label className="text-xs text-gray-600 mb-1 block">
                      {label}
                    </label>
                    <input
                      name={name}
                      type={type}
                      value={form[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className={`w-full rounded-lg px-4 py-2 border text-gray-900 placeholder-gray-400 focus:outline-none `}
                    />
                  </div>
                ))}

                {/* Message Textarea */}
                <div className="col-span-2">
                  <label className="text-xs text-gray-600 mb-1 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className={`w-full rounded-lg px-4 py-3 border text-gray-900 placeholder-gray-400 focus:outline-none `}
                  />
                </div>

                <div className="col-span-2 flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-green"
                  >
                    {submitting ? "Sending..." : "Send message"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* <div className="mt-10 rounded-xl overflow-hidden shadow border">
            <iframe
              title="Sunamganj Jela Welfare Office Location"
              src="https://www.google.com/maps?q=304+Commercial+Road,+London,+England,+E1+2PY&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full border-0"
            />
            <div className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between bg-gray-100">
              <div>
                <div className="text-sm text-gray-500">Visiting hours</div>
                <div className="text-sm font-medium text-gray-800">
                  Mon — Fri: 09:00 — 17:00
                </div>
              </div>
              <a
                href="https://www.google.com/maps/place/304+Commercial+Road,+London,+England,+E1+2PY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-(--main-green-color) hover:underline mt-2 md:mt-0"
              >
                Open in Google Maps
              </a>
            </div>
          </div> */}
      </main>
    </div>
  );
};

export default ContactForm;

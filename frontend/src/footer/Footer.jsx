import axios from "axios";
import { ICONS } from "../assets/Icons";
import { IMAGES } from "../assets/Images";
import { NAV_LINKS } from "../constants/Data";
import toast from "react-hot-toast";
import { useState } from "react";

const Footer = () => {
  const [form, setForm] = useState({ email: "", subscribe: true });
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/contact/create-message`,
      form
    );
    toast.success("Subscribed successfully!");
    setForm({ email: "", subscribe: true }); // Clear form
  } catch (error) {
    console.log(error);
    toast.error("Subscription failed. Please try again.");
  }
};
  const socialLinks = [
    {
      icon: ICONS.Facebook,
      href: "https://www.facebook.com/people/Sunamganj-jela-welfare-Association-Uk/100064737004572/",
    },
    { icon: ICONS.Twitter, href: "#" },
    { icon: ICONS.Instagram, href: "#" },
    { icon: ICONS.Linkedin, href: "#" },
  ];

  return (
    <footer className="relative bg-black text-gray-100 py-8">
      <div className="absolute inset-0 bg-[url('/texture.svg')] opacity-5 pointer-events-none" />

      <div className="relative z-10 2xl:max-w-[1780px] lg:max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={IMAGES.Logo} height={100} width={100} alt="" />
            <span className="text-lg text-(--main-orange-color) font-semibold ">
              Sunamganj Jela Welfare
            </span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Empowering communities through compassion, sustainability, and
            direct action. Together, we make lasting change.
          </p>
          <div className="flex gap-4 mt-6">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-(--main-green-color) transition-all"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-(--main-green-color) transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
          <div className="space-y-3">
            <a
              className="flex items-center gap-2"
              href="mailto:SJWA.UK@gmail.com"
            >
              <ICONS.Mail size={18} className="text-(--main-green-color)" />
              <span>SJWA.UK@gmail.com</span>
            </a>
            <a
              className="flex items-center gap-2"
              href="https://www.google.com/maps/place/304+Commercial+Road,+London,+England,+E1+2PY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ICONS.MapPin size={25} className="text-(--main-green-color)" />
              304 Commercial Road, London, England, E1 2PY
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Subscribe to our newsletter and never miss updates on upcoming
            campaigns.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex items-stretch bg-white/10 border border-white/20 rounded-full overflow-hidden w-full max-w-sm"
          >
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Your email"
              required
              className="flex-1 bg-transparent px-4 py-2 text-sm text-gray-200 placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-(--main-green-color) cursor-pointer  text-white text-sm font-semibold px-4 py-2 rounded-r-full transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 text-center text-gray-400 text-sm">
        <p>
          &copy; {new Date().getFullYear()}
          <span className="text-white font-medium ml-1">
            Sunamganj Jela Welfare
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

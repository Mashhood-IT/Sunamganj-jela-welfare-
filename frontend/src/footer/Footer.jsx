import { ICONS } from "../assets/Icons";
import { NAV_LINKS } from "../constants/Data";

const Footer = () => {
  const socialLinks = [
    { icon: ICONS.Facebook, href: "#" },
    { icon: ICONS.Twitter, href: "#" },
    { icon: ICONS.Instagram, href: "#" },
    { icon: ICONS.Linkedin, href: "#" },
  ];

  return (
    <footer className="relative bg-linear-to-b from-[#064e3b] to-[#022c22] text-gray-100 py-8">
      <div className="absolute inset-0 bg-[url('/texture.svg')] opacity-5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <ICONS.Heart className="w-7 h-7 text-emerald-400" />
            <span className="text-2xl font-semibold text-white">CharitUs</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Empowering communities through compassion, sustainability, and direct action.
            Together, we make lasting change.
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
                  className="p-2 rounded-full bg-white/10 hover:bg-emerald-500 transition-all"
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
                  className="hover:text-emerald-400 transition-all"
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
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <ICONS.Mail size={18} className="text-emerald-400" />
              <span>info@charitus.org</span>
            </li>
            <li className="flex items-center gap-2">
              <ICONS.Phone size={18} className="text-emerald-400" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-2">
              <ICONS.MapPin size={18} className="text-emerald-400" />
              <span>123 Charity Lane, NY 10001</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Subscribe to our newsletter and never miss updates on upcoming campaigns.
          </p>
          <form className="flex items-center bg-white/10 border border-white/20 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-transparent px-4 py-2 text-sm text-gray-200 placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-r-full text-sm font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 text-center text-gray-400 text-sm">
        <p>
          &copy; {new Date().getFullYear()} <span className="text-white font-medium">CharitUs</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

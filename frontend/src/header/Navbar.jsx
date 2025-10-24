import { useEffect, useState } from "react";
import { ICONS } from "../assets/Icons";
import { NAV_LINKS } from "../constants/Data";
import { Link } from "react-router-dom";
import { IMAGES } from "../assets/Images";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? ' shadow-lg py-3' : ' backdrop-blur-sm py-4'
    }`}>
      {/* #00A162 green  */}
      {/* #FEAA53 orange  */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
          {/* <img src={IMAGES.Logo} alt="" height={150} width={150} /> */}

  <h1 className=" font-semibold text-[#FEAA53] w-64">Sunamgonj Jela Welfare Association UK</h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-gray-700 font-medium transition-colors duration-300 hover:text-[#065f46] group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#065f46] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link to="/support-form">
          <button className="hidden lg:flex items-center gap-2 bg-[#065f46] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#064e3b] transition-all duration-300 hover:shadow-lg hover:shadow-[#065f46]/30 hover:scale-105">
            Donate Now
            <ICONS.Heart className="w-4 h-4" fill="currentColor" />
          </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#065f46] transition-colors duration-300"
          >
            {isOpen ? <ICONS.X size={28} /> : <ICONS.Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col gap-2 pb-4">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-gray-700 font-medium hover:bg-[#065f46]/5 hover:text-[#065f46] rounded-lg transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
            <button className="mt-2 bg-[#065f46] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#064e3b] transition-all duration-300 flex items-center justify-center gap-2">
              Donate Now
              <ICONS.Heart className="w-4 h-4" fill="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar
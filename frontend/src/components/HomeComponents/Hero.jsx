import { useState } from "react";
import { IMAGES } from "../../assets/Images";
import { ICONS } from "../../assets/Icons";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate short delay, then navigate with query params
    setTimeout(() => {
      setIsSubmitting(false);
      navigate(`/donation-form?name=${formData.name}&email=${formData.email}`);
    }, 600);
  };

  return (
    <section id="home" className="relative h-[100vh] flex items-center overflow-hidden">
      <div
        className="absolute h-full inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.hero1})` }}
      ></div>

      <div className="relative z-20 grid grid-cols-12 gap-12 items-center px-4 sm:px-6 lg:px-16 pt-32 pb-16">
        {/* Left Side */}
        <div className="col-span-6 text-white">
          <img src={IMAGES.Logo} alt="Logo" className="mb-6 max-w-xs" />
          <h1 className="text-4xl lg:text-5xl text-black/70 font-bold mb-6 leading-tight">
            Together, We Can Bring Hope and Change
          </h1>

          <ul className="flex place-items-center space-x-6 text-white font-medium">
            <li className="hover:bg-green-600 border px-5 py-1 rounded-md transition">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-green-600 border px-5 py-1 rounded-md transition">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:bg-green-600 border px-5 py-1 rounded-md transition">
              <Link to="/donations">Our Causes</Link>
            </li>
            <li className="hover:bg-green-600 border px-5 py-1 rounded-md transition">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Right Side - Simple Form */}
        <div className="col-span-6 flex justify-end">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Support Our Mission
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
              >
                {isSubmitting ? "Processing..." : "Continue to Donate"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { useState } from "react";
import { IMAGES } from "../../assets/Images";
import { ICONS } from "../../assets/Icons";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    amount: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (!formData.amount) {
      newErrors.amount = "Amount is required";
    } else if (isNaN(formData.amount) || Number(formData.amount) <= 0) {
      newErrors.amount = "Please enter a valid amount";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Redirect to support-form URL
      window.location.href = "/support-form";
    }, 1000);
  };

  return (
    <section
      id="home"
      className="relative h-full flex items-center overflow-hidden"
    >
      <div  
        className="absolute inset-0 bg-contain bg-center"
        style={{ backgroundImage: `url(${IMAGES.hero1})` }}
      ></div>

      <div className="relative z-20 grid grid-cols-12 gap-12 items-center px-4 sm:px-6 lg:px-16 pt-32 pb-16">
        {/* Left Side - Text Content */}
        <div className="col-span-6 lg:col-span-6 text-white">
          <img src={IMAGES.Logo} alt="Logo" className="mb-6 max-w-xs" />
          <h1 className="text-4xl lg:text-5xl text-black/70 font-bold mb-6 leading-tight">
            Together, We Can Bring Hope and Change
          </h1>

          <ul className="flex place-items-center space-x-6 text-white font-medium">
            <li className="hover:bg-(--main-green-color) hover:border-transparent transition-colors border px-5 py-1 text-md rounded-md cursor-pointer">
              Home
            </li>
            <li className="hover:bg-[var(--main-green-color)] hover:border-transparent transition-colors border px-5 py-1 text-md rounded-md cursor-pointer">
              About Us
            </li>
            <li className="hover:bg-[var(--main-green-color)] hover:border-transparent transition-colors border px-5 py-1 text-md rounded-md cursor-pointer">
              Our Causes
            </li>
            <li className="hover:bg-[var(--main-green-color)] hover:border-transparent transition-colors border px-5 py-1 text-md rounded-md cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Right Side - Donation Form */}
        <div className="col-span-12 lg:col-span-6 flex  justify-end">
          <div className=" bg-white rounded-2xl shadow-2xl p-5 w-md ">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Support Our Mission
            </h2>

            <div className="space-y-5">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-1.5 border-2 rounded-lg  focus:outline-none transition-all ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-1.5 border-2 rounded-lg focus:outline-none  transition-all ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Amount Field */}
              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Donation Amount ($)
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className={`w-full  px-3 py-1.5 border-2 rounded-lg focus:outline-none  transition-all ${
                    errors.amount ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter amount"
                  min="1"
                  step="0.01"
                />
                {errors.amount && (
                  <p className="mt-1 text-sm text-red-600">{errors.amount}</p>
                )}
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="btn btn-green "
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      "Processing..."
                    ) : (
                      <>
                        Donate Now
                        <ICONS.ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

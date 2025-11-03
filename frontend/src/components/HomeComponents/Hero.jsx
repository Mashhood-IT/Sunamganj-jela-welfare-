// import { useEffect, useState } from "react";
// import { IMAGES } from "../../assets/Images";
// import { Link, useNavigate } from "react-router-dom";

// const Hero = () => {
//   const navigate = useNavigate()
//   const [formData, setFormData] = useState({ name: "", email: "" });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     IMAGES.hero,
//     // IMAGES.hero1,
//     IMAGES.hero2,
//     IMAGES.hero3,
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 4000);

//     return () => clearInterval(timer);
//   }, [slides.length]);

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
//   };
// const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setIsSubmitting(true);

//     setTimeout(() => {
//       setIsSubmitting(false);
//       navigate(`/donation-form?name=${formData.name}&email=${formData.email}`);
//     }, 600);
//   };

//   return (
//     <section
//       id="home"
//       className="relative h-screen flex items-center overflow-hidden"
//     >
//       {/* Slider Container */}
//       <div className="absolute h-full w-full inset-0">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="absolute h-full w-full inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
//             style={{
//               backgroundImage: `url(${slide})`,
//               opacity: currentSlide === index ? 1 : 0,
//               zIndex: currentSlide === index ? 1 : 0,
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center px-4 sm:px-6 lg:px-16 pt-32 pb-16">
//         <div className="col-span-1 lg:col-span-6 text-white text-center lg:text-left">
//           <img
//             src={IMAGES.Logo}
//             alt="Logo"
//             className="mb-6 max-w-xs mx-auto lg:mx-0"
//           />
//           <h1 className="text-3xl lg:text-4xl xl:text-5xl text-white font-bold mb-6 leading-tight">
//             Together for Humanity, Hope, and Progress
//           </h1>
//         </div>

//         <div className="col-span-1 lg:col-span-6 flex justify-center lg:justify-end">
//           <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">
//               Support Our Mission
//             </h2>

//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-semibold mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none ${
//                     errors.name ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Enter your name"
//                 />
//                 {errors.name && (
//                   <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none ${
//                     errors.email ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Enter your email"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//                 )}
//               </div>

//               <button
//                 onClick={handleSubmit}
//                 disabled={isSubmitting}
//                 className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
//               >
//                 {isSubmitting ? "Processing..." : "Continue to Donate"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { Link, useNavigate } from "react-router-dom";
import { IMAGES } from "../../assets/Images";

const Hero = () => {
  const navigate = useNavigate();


  return (
    <section className="relative h-screen lg:mt-16 flex overflow-hidden">
      <div className="w-1/2 flex flex-col bg-gray-100 text-black justify-center items-start px-12 lg:px-20">
        <img
          src={IMAGES.Logo}
          alt="Logo"
          className="mb-2 max-w-md mx-auto lg:mx-0"
        />

        <h1 className="text-5xl font-bold text-black mb-2 leading-tight">
          Together for Humanity, Hope,
          <br />
          and Progress
        </h1>

        <p className="text-black text-lg mb-5 opacity-90 max-w-lg">
          Supporting communities from Bangladesh to the UK, making a difference
          one step at a time.
        </p>

        <Link to="/donation-form">
          <button className="group cursor-pointer relative px-6 py-3 bg-[#065f46] text-white rounded-full font-semibold overflow-hidden hover:shadow-xl hover:shadow-[#065f46]/30 transition-all duration-300 hover:scale-105">
            <span className="relative z-10">Donate Now</span>
            <div className="absolute inset-0 bg-[#064e3b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </Link>
      </div>

      <div
        className="w-1/2 flex items-center  justify-center p-8"
        style={{ backgroundColor: "#FEAA53" }}
      >
        <div className="">
          <img
            src={IMAGES.hero3}
            alt="Sunamganj Jela Welfare"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
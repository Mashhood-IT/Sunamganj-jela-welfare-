import React from "react";

const HeroSection = ({ title, description }) => {
  return (
    <section className="bg-linear-to-br from-[#00A162] via-[#008a54] to-[#1a8d5f] py-32 px-4">
      <div className="max-w-7xl mx-auto text-center mt-4 space-y-4">
        <h1 className="md:text-4xl text-2xl font-bold text-white pt-[55px] ">{title}</h1>
        <p className="md:text-xl text-lg text-gray-100 max-w-2xl mx-auto">{description}</p>
      </div>
    </section>
  );
};
export default HeroSection;

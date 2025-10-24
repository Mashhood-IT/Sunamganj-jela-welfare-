import React from "react";

const HeroSection = ({title, description}) => {
  return (
    <section className="bg-(--main-green-color) py-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
        <p className="text-xl text-gray-100 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
};
export default HeroSection
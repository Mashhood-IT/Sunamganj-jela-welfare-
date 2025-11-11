import React from "react";

const AboutHero = () => {
  return (
    <div>
      <div className="bg-[url('/BMG4.webp')] bg-cover mt-12 relative bg-center h-[70vh] flex items-center justify-center">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10 flex flex-col items-center gap-2">
          <h1 className="text-white font-bold text-4xl md:text-5xl">
            About Us
          </h1>
          <p className="text-white text-lg md:text-xl">
            Kindness at the Heart of Every Action
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;

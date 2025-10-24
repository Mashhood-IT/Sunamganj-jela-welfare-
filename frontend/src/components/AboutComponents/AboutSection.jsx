import React from "react";
import { ICONS } from "../../assets/Icons";
const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2014, Sunamganj Jela Welfare emerged from a simple belief: everyone deserves access to basic necessities and opportunities for growth. What started as a small community initiative has grown into a global movement.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we connect generous donors with meaningful causes, ensuring transparency and maximum impact. Every donation creates ripples of positive change across communities worldwide.
            </p>
          </div>
          <img 
            src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Our Mission" 
            className="rounded-lg shadow-lg w-full h-80 object-cover"
          />
        </div>

    
      </div>
    </section>
  );
};

export default AboutSection
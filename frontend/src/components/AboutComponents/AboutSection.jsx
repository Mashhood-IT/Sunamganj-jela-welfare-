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
              In Sunamganj Jela Welfare Association UK, we are of the opinion
              that we can make the world a better place through kindness. It all
              started with a simple desire, as we wanted to make people live
              with dignity and peace.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our family is based in the Sunamganj District of Bangladesh. Most
              of us are now residing around the United Kingdom, yet we still
              have our clogs in the soil of home. We were motivated by the fact
              that we love our place of birth. We just did not want to lose
              touch and wanted to contribute back.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We created this association to connect with other people who have
              the same sentiment, that being a caregiver is not a choice but a
              responsibility. We are friends, neighbors, and families
              collaborating to bring comfort, education, and hope to our needy
              neighbors.
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

export default AboutSection;

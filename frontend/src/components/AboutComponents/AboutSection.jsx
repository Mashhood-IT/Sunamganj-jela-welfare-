import React from "react";
import { ICONS } from "../../assets/Icons";
import { IMAGES } from "../../assets/Images";

const AboutSection = () => {
  return (
    <section className="py-12 md:py-14 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-6 bg-white">
      <div className="2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Our Story</h2>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center mb-12 md:mb-16">
          <div className="max-w-2xl mx-auto lg:mx-0 w-full">
            <p className="text-gray-600 mb-4 leading-relaxed text-base md:text-lg px-2 sm:px-0">
              In Sunamganj Jela Welfare Association UK, we are of the opinion
              that we can make the world a better place through kindness. It all
              started with a simple desire, as we wanted to make people live
              with dignity and peace.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed text-base md:text-lg px-2 sm:px-0">
              Our family is based in the Sunamganj District of Bangladesh. Most
              of us are now residing around the United Kingdom, yet we still
              have our clogs in the soil of home. We were motivated by the fact
              that we love our place of birth. We just did not want to lose
              touch and wanted to contribute back.
            </p>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg px-2 sm:px-0">
              We created this association to connect with other people who have
              the same sentiment, that being a caregiver is not a choice but a
              responsibility. We are friends, neighbors, and families
              collaborating to bring comfort, education, and hope to our needy
              neighbors.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 w-full max-w-2xl mx-auto lg:max-w-none">
{/* // new images added shere */}
<img src={IMAGES.OurStory} alt="" />
          </div>
        </div>  
      </div>
    </section>
  );
};

export default AboutSection;
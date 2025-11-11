import React from "react";
import SectionHeader from "../../constants/SectionHeader";

const AboutSection = () => {
  return (
    <section className="py-12 md:py-14 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-6 bg-white">
      <div className="2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl mx-auto">
        <SectionHeader
          tag={"Our Story"}
          heading={"Journey of Our Association"}
        />
        <div>
          <div className=" text-center w-full">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

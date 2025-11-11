import React from "react";
import { ICONS } from "../assets/Icons";

const SectionHeader = ({ heading,  date, tag  }) => {
  return (
    <div className="text-center mb-16">
      {/* Tag / Slogan Badge */}
      {tag && (
        <div className="inline-block mb-4">
          <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold tracking-wide uppercase border border-green-300">
            {tag}
          </span>
        </div>
      )}

      {/* Heading */}
      <h2 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4">
        {heading}
      </h2>

   

      {/* Orange line */}
      <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />

      {/* Optional Date */}
      {date && (
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200">
            <ICONS.Calendar className="w-5 h-5 text-green-600" />
            <span className="text-gray-700 font-medium">
              {date}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;

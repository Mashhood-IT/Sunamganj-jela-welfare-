import React from "react";
import { ICONS } from "../../assets/Icons";

const ForSupportersAndDonors = () => (
  <div className="w-full  py-2 px-4">
      <div className="bg-white rounded-lg p-8  border-l-4 border-(--main-orange-color)]shadow-sm">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-(--main-orange-color) rounded-full flex items-center justify-center mr-4">
            <ICONS.Heart className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">For Supporters and Donors</h2>
        </div>
        <p className="text-gray-700 leading-relaxed text-md mb-4">
          Whatever we do is based on your kindness. Your support is going to real people when you give it. It provides food, medicine, and education to needy families.
        </p>
        <p className="text-gray-700 leading-relaxed text-md mb-4">
          You may also query us with regard to any project or program. We exchange information with complete sincerity. Any pound, any gift giving, is a part of someone's new beginning.
        </p>
        <p className="text-gray-700 leading-relaxed text-md">
          When you are interested in sponsoring a cause or initiation a community project with us, we welcome your ideas. We can also give hope to families and students relying on us on a long-term basis.
        </p>
      </div>
  </div>
);

export default ForSupportersAndDonors;

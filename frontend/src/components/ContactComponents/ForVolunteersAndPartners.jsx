import React from "react";
import { ICONS } from "../../assets/Icons";

const ForVolunteersAndPartners = () => (
  <div className="w-full bg-white py-16 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-50 rounded-lg p-8 md:p-12 border-l-4 border-(--main-green-color)">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-(--main-green-color) rounded-full flex items-center justify-center mr-4">
            <ICONS.Handshake className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">For Volunteers and Partners</h2>
        </div>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          We are convinced that we all have something to offer. You need no experience, you need a good heart, and the desire to do so. Our volunteers are of every kind. Certain aid is provided in the UK, and others in Sunamganj, and numerous others assist online. Every individual has a role to play in the development of stronger communities.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          Other charities, schools, and welfare groups are also among our partners. With the unification, we will be able to access a greater number of people. You can contact us in case you would like to partner.
        </p>
      </div>
    </div>
  </div>
);

export default ForVolunteersAndPartners;

import React from "react";
import { ICONS } from "../../assets/Icons";

const ForFamiliesAndCommunity = () => (
  <div>
      <div className="bg-gray-50 rounded-lg p-8  border-l-4 border-(--main-green-color)">
        <div className="flex items-center mb-6">
          <div className="lg:size-12 w-14 h-10 bg-(--main-green-color) rounded-full flex items-center justify-center mr-4">
            <ICONS.Users className="lg:size-6 size-5 text-white" />
          </div>
          <h2 className="lg:text-xl text-md font-bold text-gray-900">For Families and the Community</h2>
        </div>
        <p className="text-gray-700 leading-relaxed text-md mb-4">
          In case of any need, contact us in the UK. We are part of your community. We assist the families of Bangladeshi people who struggle with the language barrier, loneliness or hardships. You may discuss with us welfare assistance, community activities, or personal advice. We know what it is like to become new in a new country. This is the reason why we are concerned with care, not paperwork.
        </p>
        <p className="text-gray-700 leading-relaxed text-md">
          You can count on the fact that even when you live in Sunamganj, you are not forgotten. This is because we still give education assistance, health assistance, and emergency support with the help of trusted volunteers back home. We are all one family, though oceans are in between.
        </p>
      </div>
  </div>
);


export default ForFamiliesAndCommunity;

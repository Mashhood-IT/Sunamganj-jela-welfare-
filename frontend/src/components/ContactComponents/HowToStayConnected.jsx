import React from "react";
import { ICONS } from "../../assets/Icons";

const HowToStayConnected = () => (
  <div className="w-full bg-white py-16 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-50 rounded-lg p-8 md:p-12 border-l-4 border-(--main-green-color)">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-(--main-green-color) rounded-full flex items-center justify-center mr-4">
            <ICONS.Mail className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">How to Stay Connected</h2>
        </div>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          We prize contact more highly than action. You may contact us via our webpage, telephone, or via social media. Keep up with us to see how your contribution to change can take place.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          We post actual stories, project photography, and news. Every post is a commentary on our lives. By spreading our word, you would be helping us to reach out to one more family that needs hope.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          Being in touch involves than passing words. It is about becoming more like each other, getting to know each other, and sharing care regardless of distance.
        </p>
      </div>
    </div>
  </div>
);
export default HowToStayConnected;

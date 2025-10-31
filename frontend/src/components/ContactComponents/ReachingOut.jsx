import React from "react";
import { ICONS } from "../../assets/Icons";

const ReachingOut = () => (
  <div className="w-full py-16 px-4">
      <div className="bg-white rounded-lg p-8  border-l-4 border-(--main-orange-color) shadow-sm">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-(--main-orange-color) rounded-full flex items-center justify-center mr-4">
            <ICONS.MessageCircle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Reaching Out</h2>
        </div>
        <p className="text-gray-700 leading-relaxed text-md mb-4">
          You can contact us in the manner that you find comfortable. Visit us, call us, or write to us. We also remain active online and share our stories and progress. By texting us, you are talking to an individual and not a computer.
        </p>
        <p className="text-gray-700 leading-relaxed text-md">
          We read all our messages with the attention we accord to our community. We respond in an understandable and gracious manner. In our opinion, trust can be built by means of open and honest communication. We are interested in hearing your idea, question or suggestion. You have to think, and you make us do better. Each dialogue will result in something good.
        </p>
      </div>
    </div>
);
export default ReachingOut;

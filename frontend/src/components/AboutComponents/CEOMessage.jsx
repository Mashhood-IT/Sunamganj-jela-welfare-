import React from "react";
import { IMAGES } from "../../assets/Images";
const CEOMessage = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img 
              src={IMAGES.Chairperson} 
              alt="CEO" 
              className="rounded-full object-contain shadow-md"
            />
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Message from Our Chairperson</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                "I am determined to look ahead, seek opportunities, prospects and progress. We should not be looking back, except to learn from our shortcomings and press ahead to build a brighter future. We must uphold constitutional rule, bring amendments where necessary, respect the traditions and long-lasting practices of the organisation. The past practices often set the direction for the future."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Arman Ali</p>
                <p className="text-gray-500">Chairperson</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CEOMessage
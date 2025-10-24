import React from "react";
const CEOMessage = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img 
              src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="CEO" 
              className="w-48 h-48 rounded-full object-cover shadow-md"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Message from Our CEO</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                "At CharitUs, we believe in the power of collective action. Every contribution, no matter the size, creates meaningful change. I'm constantly inspired by our donors' generosity and the resilience of communities we serve."
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                "Our commitment is simple: transparency, impact, and dignity for all. Together, we're not just changing lives—we're building a more compassionate world."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Sarah Mitchell</p>
                <p className="text-gray-500">Chief Executive Officer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CEOMessage
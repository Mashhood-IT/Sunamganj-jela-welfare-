import { GraduationCap, Heart, Users, Award } from "lucide-react";

export default function Impact() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Our Achievements
          </h2>
          <p className="text-gray-600 text-lg">
            Through the years, we have touched many lives. Each success gives us
            more strength to serve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg text-center border-l-4 border-(--main-green-color)">
            <div className="w-16 h-16 bg-(--main-green-color) rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Education Support
            </h3>
            <p className="text-gray-600">
              Helped students in Sunamganj continue their studies
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg text-center border-l-4 border-(--main-orange-color)">
            <div className="w-16 h-16 bg-(--main-orange-color) rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Relief Services
            </h3>
            <p className="text-gray-600">
              Provided medical and flood relief to affected families.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg text-center border-l-4 border-(--main-green-color)">
            <div className="w-16 h-16 bg-(--main-green-color) rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Community Events
            </h3>
            <p className="text-gray-600">
              Organized community and cultural events in the UK.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg text-center border-l-4 border-(--main-orange-color)">
            <div className="w-16 h-16 bg-(--main-orange-color) rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Honoring Leaders
            </h3>
            <p className="text-gray-600">
              Recognized distinguished community leaders
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Distinguished Leaders Honored
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <p className="text-gray-800 font-semibold">
                Mr. Dobirul Islam Chowdhury OBE
              </p>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <p className="text-gray-800 font-semibold">Mr. Sajjad Miah MBE</p>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <p className="text-gray-800 font-semibold">
                Mr. Zillur Hussain MBE
              </p>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-6 italic">
            These moments remind us that together, we can achieve great things.
          </p>
        </div>
      </div>
    </div>
  );
}

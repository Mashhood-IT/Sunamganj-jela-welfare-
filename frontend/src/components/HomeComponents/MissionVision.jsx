import { ICONS } from "../../assets/Icons";

export default function MissionVision() {
  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Our Mission & Vision
          </h2>
          <p className="text-gray-600 text-lg">
            Committed to serving humanity with compassion and integrity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-(--main-green-color)">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-(--main-green-color) rounded-full flex items-center justify-center mr-4">
                <ICONS.Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our mission is simple. Our mission is to improve the lives of the
              needy. We specialise in community care, cultural unity, education,
              and health.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The two worlds are the UK and Bangladesh. Our work brings together
              people who have abandoned Sunamganj and the people who consider it
              their home.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold ">
              In our opinion, service is an obligation and not a decision. Every
              action that we take brings us to peace and development.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-(--main-orange-color)">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-(--main-orange-color) rounded-full flex items-center justify-center mr-4">
                <ICONS.Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We dream of a world where everyone feels safe and valued. No child
              should be left without school. No family should live in fear or
              poverty.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our vision is to spread hope. We want to build bridges between
              generations and between lands. We want to grow kindness and carry
              it from one heart to another.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold ">
              At Sunamganj Jela Welfare Association UK, humanity always comes
              first.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

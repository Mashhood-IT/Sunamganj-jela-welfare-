import { ICONS } from "../../assets/Icons";

const values = [
  {
    icon: (
      <ICONS.HeartHandshake className="w-8 h-8 text-(--main-green-color)" />
    ),
    title: "Kindness",
    description: "We treat everyone with compassion.",
  },
  {
    icon: <ICONS.ShieldCheck className="w-8 h-8 text-(--main-green-color)" />,
    title: "Integrity",
    description: "We stay honest and humble in every act.",
  },
  {
    icon: <ICONS.Users className="w-8 h-8 text-(--main-green-color)" />,
    title: "Unity",
    description: "We work together as one family.",
  },
  {
    icon: <ICONS.HandHeart className="w-8 h-8 text-(--main-green-color)" />,
    title: "Service",
    description: "Helping others is our shared responsibility.",
  },
  {
    icon: <ICONS.Sun className="w-8 h-8 text-(--main-green-color)" />,
    title: "Hope",
    description: "Every small effort can change a life.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 text-center">
          Our Core Values
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Our daily work follows simple, human principles that guide each
          project and remind us why we began this journey.
        </p>

        {/* Minimalist horizontal timeline, no cards */}
        <div className="relative flex flex-col md:flex-row lg:items-start  items-center justify-center w-full gap-0 md:gap-0">
          {/* Connecting line */}

          {values.map((value, idx) => (
            <div key={idx}>
                {idx === 1 && (
                  <div className="hidden md:block absolute left-0 right-0 top-10 h-0.5 bg-indigo-200 z-0 w-full"></div>
                )}
              <div
                className="relative flex flex-col items-center justify-start md:justify-center text-center px-2 md:px-0"
                style={{ zIndex: 1, minWidth: 120 }}
              >
                <div className="bg-white p-0 mb-2 relative">
                  <span
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full"
                    style={{ background: "none" }}
                  >
                    {value.icon}
                  </span>
                </div>
                <h3 className="text-base font-bold text-black mb-1 mt-1">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-2 max-w-[140px]">
                  {value.description}
                </p>
                {/* Dot on the line */}
                <span
                  className="hidden md:block absolute top-10 left-1/2 -translate-x-1/2 w-3 h-3 bg-(--main-green-color) rounded-full border-2 border-white"
                  style={{ zIndex: 2 }}
                ></span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-12 italic">
          These values guide each project and remind us why we began this
          journey.
        </p>
      </div>
    </section>
  );
}

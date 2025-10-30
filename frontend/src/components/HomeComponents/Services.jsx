import { BookOpen, HeartPulse, Home, Globe } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Education and Youth",
    description:
      "Education opens doors. We help children in Sunamganj go to school. We provide books, fees, and support. In the UK, we guide young people to stay proud of their heritage and build strong futures.",
    color: "var(--main-green-color)",
  },
  {
    icon: HeartPulse,
    title: "Health and Relief",
    description:
      "We help families during floods, illness, and hardship. During the COVID-19 pandemic, our volunteers gave food and medicine to those in need. We still offer relief when emergencies strike.",
    color: "var(--main-orange-color)",
  },
  {
    icon: Home,
    title: "Community Growth",
    description:
      "We help rebuild homes, support small projects, and improve safety. We believe that strong communities grow from shared effort.",
    color: "var(--main-green-color)",
  },
  {
    icon: Globe,
    title: "Culture and Unity",
    description:
      "In the UK, we give parties to celebrate our identity. These shows preserve our culture and make the new generations remain in touch with the Bangladeshi background.",
    color: "var(--main-orange-color)",
  },
];

export default function Services() {
  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">What We Do</h2>
          <p className="text-gray-600 text-lg">
            Serving communities through care, compassion, and commitment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                  style={{ backgroundColor: service.color }}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 pt-2">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h1>Leadership with Heart</h1>
          <p>
            Our leaders serve with care. The chairperson, Arman Ali, and the
            General Secretary, Neazul Islam Chowdhury, lead by example. They
            make us remember that we start the process of progress by being
            compassionate. Our members are volunteers who devote their time and
            affection. We are a single team, single family, and single vision.
          </p>
          <p className="text-gray-700 mt-8 text-lg italic">
            "We rise by lifting others."
          </p>
        </div>
        <div className="text-right ">
            <span className="text-gray-700 text-lg italic"> — Arman Ali, Chairperson</span>
        </div>
      </div>
    </div>
  );
}

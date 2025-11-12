import { ICONS } from "../../assets/Icons";
import { services } from "../../constants/Data";



const Services = () => {
  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
            What We Do
          </h2>
          <p className="text-gray-600 lg:text-lg text-md">
            Serving communities through care, compassion, and commitment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mr-4 shrink-0"
                  style={{ backgroundColor: service.color }}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-gray-800 pt-2">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-700 lg:text-lg text-md leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="lg:text-center lg:text-lg text-md mt-12">
          <h1 className="text2xl md:text-3xl font-bold mb-3">Leadership with Heart</h1>
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
          <span className="text-gray-700 text-lg italic">
            {" "}
            — Arman Ali, Chairperson
          </span>
        </div>
      </div>
    </div>
  );
}

export default Services;
import { teamMembers } from "../../constants/Data";
import SectionHeader from "../../constants/SectionHeader";

const Team = () => {
  return (
    <section className="py-10 lg:px-24 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <SectionHeader tag={"Our Team"} heading={"Meet Our Team"} />
        <p className="text-slate-600 text-lg mt-3 max-w-2xl mx-auto leading-relaxed">
          We&apos;re a group of passionate professionals committed to building
          high-quality digital solutions. Our diverse skills and collaborative
          spirit drive innovation.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-8 mt-10 ">
        {teamMembers.map(({ name, role, img }) => (
          <div
            key={name}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
          >
            <div className="relative">
              <img
                src={img}
                alt={name}
                className="w-28 h-28 rounded-full object-contain border-4 border-gray-100 shadow-md"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="text-lg font-bold text-gray-900">{name}</h4>
              <p className="text-sm text-gray-600">{role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;

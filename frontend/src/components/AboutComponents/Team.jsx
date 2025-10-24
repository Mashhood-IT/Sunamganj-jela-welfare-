import { teamMembers } from "../../constants/Data";
import { ICONS } from "../../assets/Icons";

const Team = () => {
  return (
    <section className="py-10 lg:px-24 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900">Meet our team</h2>
        <p className="text-slate-600 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">
          We&apos;re a group of passionate professionals committed to building
          high-quality digital solutions. Our diverse skills and collaborative
          spirit drive innovation.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 2xl:grid-cols-5 md:grid-cols-2 gap-6 mt-10 ">
        {teamMembers.map(({ name, role, img, bio }) => (
          <div
            key={name}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >
            <img
              src={img}
              alt={name}
              height={300}
              width={340}
              className="  object-contain "
            />
            <div className="p-3">
              <h4 className="text-sm font-semibold text-slate-900">{name}</h4>
              <p className="text-xs text-slate-500 mt-0.5">{role}</p>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                {bio}
              </p>

              <div className="flex gap-2 mt-3">
                <button className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700">
                  <ICONS.Facebook className="w-3.5 h-3.5 text-white" />
                </button>
                <button className="w-6 h-6 flex items-center justify-center rounded-full bg-sky-400 hover:bg-sky-500">
                  <ICONS.Twitter className="w-3.5 h-3.5 text-white" />
                </button>
                <button className="w-6 h-6 flex items-center justify-center rounded-full bg-[#0077b5] hover:bg-[#0055b5]">
                  <ICONS.Linkedin className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;

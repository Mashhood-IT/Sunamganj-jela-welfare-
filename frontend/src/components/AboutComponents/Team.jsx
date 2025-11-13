import { ICONS } from "../../assets/Icons";
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

      <div className="grid lg:grid-cols-3 2xl:grid-cols-4  md:grid-cols-2 grid-cols-1 gap-8 mt-10">
        {teamMembers.map(
          ({ name, role, img, address, village, phone, "P/O": postOffice }) => (
            <div
              key={name}
              className="group relative bg-white rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-br from-(--main-green-color) to-teal-600  transition-opacity duration-300" />
              <div className="relative p-6">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <img
                      src={img}
                      alt={name}
                      height={100}
                      width={100}
                      className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl ring-4 ring-gray-100 group-hover:ring-emerald-200 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors">
                    {name}
                  </h3>
                  <p className="text-sm font-semibold text-(--main-green-color) uppercase tracking-wide">
                    {role}
                  </p>
                </div>
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  {address && (
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-(--main-green-color) font-semibold mt-0.5">
                        <ICONS.Home size={15} />
                      </span>
                      <div className="flex items-center space-x-3">
                        <p className="text-gray-600 text-xs font-semibold mb-0.5">
                          Address:
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          {address}
                        </p>
                      </div>
                    </div>
                  )}
                  {village && (
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-teal-600 font-semibold mt-0.5">
                        <ICONS.MapPin size={15} />
                      </span>
                      <div className="flex items-center space-x-3">
                        <p className="text-gray-600 text-xs font-semibold mb-0.5">
                          Origin:
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          {village}
                        </p>
                      </div>
                    </div>
                  )}
                  {postOffice && (
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-(--main-green-color) font-semibold mt-0.5">
                        <ICONS.Mail size={15} />
                      </span>
                      <div className="flex items-center space-x-3">
                        <p className="text-gray-600 text-xs font-semibold mb-0.5">
                          P/O:
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          {postOffice}
                        </p>
                      </div>
                    </div>
                  )}

                  {phone && (
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-(--main-green-color) font-semibold">
                        <ICONS.Phone size={15} />
                      </span>
                      <div className="flex items-center space-x-3">
                        <p className="text-gray-600 text-xs font-semibold mb-0.5">
                          Phone:
                        </p>
                        <a
                          href={`tel:${phone}`}
                          className="text-gray-700 hover:text-(--main-green-color) transition-colors font-medium"
                        >
                          {phone}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Team;

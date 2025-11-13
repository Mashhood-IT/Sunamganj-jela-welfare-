import { Link } from "react-router-dom";

const GetInvolved = () => {
  return (
    <div className="w-full bg-linear-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center lg:mb-12 mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Get Involved
          </h2>
          <p className="text-gray-700 leading-relaxed lg:text-lg text-md">
            You can be part of our journey. With each assisted hand, one counts.
            You may volunteer, donate, or give out your skills. With your help,
            we manage to educate children, offering healthcare and saving lives.
            Small actions will result in big change. Working with love, even the
            slightest action, makes sense.
          </p>
        </div>
        <Link
          to="/contact"
          className="w-full flex justify-center items-center sm:w-auto"
        >
          <button className="mt-4 group cursor-pointer relative px-6 py-3 bg-[#065f46] text-white rounded-full font-semibold overflow-hidden hover:shadow-xl hover:shadow-[#065f46]/30 transition-all duration-300 hover:scale-105">
            <span className="relative z-10">Learn Our Story</span>
            <div className="absolute inset-0 bg-[#064e3b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </Link>
      </div>
    </div>
  );
};
export default GetInvolved;

import { ICONS } from "../../assets/Icons";

export default function OurJourney() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-(--main-orange-color) rounded-full flex items-center justify-center">
            <ICONS.MapPin className="w-8 h-8 text-white" />
          </div>
        </div>

        <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Journey</h2>

        <p className="text-gray-700 leading-relaxed text-lg mb-6">
          Decades ago, some individuals in our society realized that little
          could do a lot. They started to assist silently, assist families,
          finance school books, pay sick people visits, and advise young people.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg mb-6">
          That slow beginning developed into
          <span className="font-bold text-(--main-green-color)">
            Sunamganj Jela Welfare Association UK
          </span>
          . What started as a group of volunteers has developed to be a reliable
          organization that serves more than one community, now the people in
          Sunamganj and the Bangladeshi families in the UK.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg font-semibold ">
          We still just do good, be honest, and we never forget our origin,
          which makes our trip as simple as ever.
        </p>
      </div>
    </div>
  );
}

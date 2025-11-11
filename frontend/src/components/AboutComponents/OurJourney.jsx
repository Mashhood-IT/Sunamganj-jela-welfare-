import SectionHeader from "../../constants/SectionHeader";

const OurJourney =() => {
  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeader tag={"Our Journey"} heading={"The Path We Took"} />

        <p className="text-gray-700 leading-relaxed text-lg mb-6">
          Decades ago, some individuals in our society realized that little
          could do a lot. They started to assist silently, assist families,
          finance school books, pay sick people visits, and advise young people.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg mb-6">
          That slow beginning developed into{" "}
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

export default OurJourney
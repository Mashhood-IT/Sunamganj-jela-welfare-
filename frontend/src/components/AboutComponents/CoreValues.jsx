import { ICONS } from "../../assets/Icons";

const CoreValues = () => {
  return (
    <section className="bg-white  xl:pt-12 xl:pb-40 py-6 px-6">
      <div className="font-semibold text-2xl   mb-12 lg:mb-0 flex items-center justify-center">
        <h1>
          <span className="relative bg-black mr-1 text-white px-2 py-0 rounded-tl-md rounded-bl-md shadow-[0_0_20px_4px_rgba(0,0,255,0.2)]">
            Core
          </span>
          Values
        </h1>
      </div>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 mb-3" />


      <div className="grid grid-cols-1 pb-12   place-items-center md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* first  */}
        <div className="relative w-64 card-sm lg:h-64 h-52 ">
          <h1 className="text-[200px] card-number leading-none  absolute -right-5 lg:bottom-4 bottom-12 font-bold opacity-10">
            1
          </h1>

          <div className="lg:absolute space-y-4 lg:top-20 ">
            <div className="bg-linear-to-r text-white from-(--main-green-color) to-green-400 p-4 w-12 rounded-lg">
              <ICONS.HeartHandshake size={20} />
            </div>
            <div>
              <p className="text-xl font-bold tracking-wide">Kindness</p>
              <span className="text-md text-gray-900">
                We treat everyone with compassion.
              </span>
            </div>
          </div>
          <img
            src="./swati.webp"
            alt="swati design"
            className=" hidden card-line-image lg:block absolute top-[182px] left-64"
            height={100}
            width={100}
          />
        </div>
        {/* 2nd  */}
        <div className="relative card-sm   w-64 lg:h-64 h-52 lg:top-32 xl:left-12 2xl:-left-16">
          <h1 className="text-[200px] card-number leading-none absolute right-0 lg:bottom-4 bottom-[60px] font-bold opacity-10">
            2
          </h1>
          <div className="lg:absolute space-y-4 lg:top-20 lg:">
            <div className="bg-linear-to-r text-white from-(--main-green-color) to-green-400 p-4 w-12 rounded-lg">
              <ICONS.ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-xl font-bold tracking-wide">Integrity</p>
              <span className="text-md text-gray-900">
                We stay honest and humble in every act.
              </span>
            </div>
          </div>
          <img
            src="./swati.webp"
            alt="swati design"
            className=" hidden card-line-image lg:block absolute top-[53px] rotate-105 left-[265px]"
            height={100}
            width={100}
          />
        </div>
        {/* 3  */}
        <div className="relative card-sm  w-64 lg:h-64 h-52 xl:left-24 2xl:-left-36">
          <h1 className="text-[200px] card-number leading-none  absolute right-3 lg:bottom-4 -bottom-5 font-bold opacity-10">
            3
          </h1>
          <div className="absolute space-y-4 top-20 ">
            <div className="bg-linear-to-r text-white from-(--main-green-color) to-green-400 p-4 w-12 rounded-lg">
              <ICONS.Users size={20} />
            </div>
            <div>
              <p className="text-xl font-bold tracking-wide">Unity</p>
              <span className="text-md text-gray-900">
                We work together as one family.
              </span>
            </div>
          </div>
          <img
            src="./swati.webp"
            alt="swati design"
            className=" hidden card-line-image lg:block absolute top-[183px]  left-60"
            height={100}
            width={100}
          />
        </div>
        <div className="relative card-sm  h-64 w-64  lg:top-32 xl:left-5 2xl:-left-60">
          <h1 className="text-[200px] card-number leading-none absolute right-0 bottom-4 font-bold opacity-10">
            4
          </h1>
          <div className="absolute space-y-4 top-20 ">
            <div className="bg-linear-to-r text-white from-(--main-green-color) to-green-400 p-4 w-12 rounded-lg">
              <ICONS.Sun size={20} />
            </div>
            <div>
              <p className="text-xl font-bold tracking-wide">Hope</p>
              <span className="text-md text-gray-900">
                Every small effort can change a life.{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 1024px) and (max-width: 1536px) {
          .card-sm {
          position: relative !important;
          left: 0 !important;

            width: 13rem !important;
            height: 11rem !important;
          }
          .card-number {
            position: absolute !important;
            top: 2.5rem !important;
          }
          .card-line-image {
            position: absolute !important;
            left: 13rem !important;
          }
        }
      `}</style>
    </section>
  );
};
export default CoreValues;

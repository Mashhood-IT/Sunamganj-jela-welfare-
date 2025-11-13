import { Link } from "react-router-dom";
import { IMAGES } from "../../assets/Images";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isMobileScreen, setIsmMobileScreen] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsmMobileScreen(true);
    } else {
      setIsmMobileScreen(false);
    }
  }, [isMobileScreen]);
  return (
    <section className={`relative  mt-24 lg:pt-0 pt-12 ${isMobileScreen ? "h-[85vh]" :"h-screen" }  bg-gray-100 lg:mt-16 flex flex-col lg:flex-row overflow-hidden py-8 lg:py-0`}>
      <div className="w-full lg:ml-3 lg:w-1/2  flex flex-col text-black justify-center lg:items-start items-center px-6 sm:px-8 lg:px-20 mb-8 lg:mb-0">
        <img
          src={IMAGES.Logo1}
          alt="Logo"
          height={130}
          width={130}
          className="mb-2 max-w-xs sm:max-w-md mx-auto lg:mx-0"
        />

        <h1 className="text-2xl  lg:text-5xl font-bold text-black mb-2 2xl:ml-3.5  leading-tight text-center lg:text-left">
          Together for Humanity, Hope,
          <br />
          and Progress
        </h1>

        <p className="text-black text-base sm:text-lg mb-5 opacity-90 2xl:ml-3.5 max-w-lg text-center lg:text-left">
          Supporting communities from Bangladesh to the UK, making a difference
          one step at a time.
        </p>
        <div className="flex gap-4 2xl:ml-3.5">
          <Link to="/donation-form">
            <button className="group cursor-pointer relative  px-6 py-3 bg-[#065f46] text-white rounded-full font-semibold  hover:shadow-xl hover:shadow-[#065f46]/30 transition-all duration-300 hover:scale-105">
              <span className="relative z-10 md:text-md text-xs">Donate Now</span>
              <div className="absolute inset-0 bg-[#064e3b] transform scale-x-0  group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </Link>
          {isMobileScreen && (
            <Link to="/membershipform">
              <button className="btn btn-transparent">
                <span className="relative z-10 md:text-md text-xs">Become a Member</span>
              </button>
            </Link>
          )}
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex space-x-4 sm:space-x-8 items-center justify-center px-4 relative">
        <div className="z-50 rounded-t-full bg-(--main-orange-color) px-2 pt-4 lg:mb-24 2xl:mb-44">
          <img
            src="./girlpic.webp"
            alt="Sunamganj Jela Welfare"
            className="w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 2xl:w-96 2xl:h-[440px] object-cover"
          />
        </div>
        <div className="z-50 lg:mt-40 2xl:mt-64 relative">
          <img
            src="./new.png"
            alt="Sunamganj Jela Welfare"
            className="rounded-b-full w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 2xl:w-96 2xl:h-[440px] object-cover"
          />
        </div>

        <img
          src="/blob-haikei.svg"
          alt="blob-background"
          className="absolute hidden lg:block  -top-56 opacity-10  -right-10  w-5/3 h-3/2 "
        />
      </div>
    </section>
  );
};

export default Hero;

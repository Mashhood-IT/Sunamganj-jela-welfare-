  import { useState, useEffect, useRef } from "react";
  import { IMAGES } from "../../assets/Images";
  import { stats } from "../../constants/Data";
  import { Link } from "react-router-dom";

  const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [counters, setCounters] = useState({
      people: 0,
      projects: 0,
      funds: 0,
    });
    const sectionRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.2 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const animate = (key, target) => {
        let current = 0;
        const increment = target / steps;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }, interval);
      };

      animate("people", 50000);
      animate("projects", 200);
      animate("funds", 2000000);
    }, [isVisible]);

    const formatNumber = (num) => {
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + "M";
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(0) + "K";
      }
      return num.toString();
    };

    return (
      <section id="about" className=" bg-white overflow-hidden" ref={sectionRef}>
        <div className=" px-4 sm:px-6 lg:px-24">
          <div className=" text-center max-w-7xl w-full mx-auto  gap-12 items-center">
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              <div className="inline-block lg:mb-4 mb-2">
                <span className="text-(--main-green-color) font-semibold lg:text-sm text-xs uppercase tracking-wider bg-[#065f46]/10 px-4 py-1 rounded-full">
                  About Us
                </span>
              </div>

              <h2 className="text-2xl lg:text-3xl  font-bold text-gray-900 lg:mb-6 mb-3 leading-tight">
                <span className="relative inline-block">
                  <span className="relative  z-10 bg-linear-to-br from-[#065f46] to-[#10b981] bg-clip-text text-transparent">
                    Sunamganj Jela Welfare
                  </span>
                  <span className=" hidden md:hidden xl:block absolute bottom-2 left-0 w-full h-3 bg-[#10b981]/20 z-0" />
                </span>
              </h2>

              <p className="text-gray-600 lg:text-lg text-md leading-relaxed mb-4">
                We have a motto at Sunamganj Jela Welfare Association UK, and that
                is that kindness changes lives. We started with the dream to
                assist other people. Our place of origin is the Sunamganj District
                of Bangladesh, and we are currently residing in the United
                Kingdom. We are still close to our roots when we are way back
                home.
              </p>

              <p className="text-gray-600 text-md leading-relaxed mb-8">
                It is this association that we established to unite people. We aim
                to achieve the creation of dignified and hopeful living for
                families. Our clients are the Bangladeshi population in the UK and
                the people of Sunamganj. We start our every action with care. We
                minister with integrity, solidarity, and affection.
              </p>

              <div className="grid grid-cols-3   max-w-7xl w-full mx-auto gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  const displayValue =
                    stat.key === "funds"
                      ? `$${formatNumber(counters[stat.key])}${stat.suffix}`
                      : `${formatNumber(counters[stat.key])}${stat.suffix}`;

                  return (
                    <div
                      key={index}
                      className={`group p-4  rounded-xl cursor-pointer bg-linear-to-br from-gray-50 to-white border border-gray-100 hover:border-[#065f46]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: `${100 + index * 100}ms` }}
                    >
                      <span className="w-10 h-10 bg-[#065f46]/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#065f46] transition-colors duration-300">
                        <Icon className="w-5 h-5 text-(--main-green-color) group-hover:text-white transition-colors duration-300" />
                      </span>
                      <span className="text-2xl font-bold text-gray-900 mb-1">
                        {displayValue}
                      </span>
                      <div className="text-xs text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 flex flex-col items-center justify-center sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <Link to="/about" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto group cursor-pointer relative px-6 py-3 bg-[#065f46] text-white rounded-full font-semibold overflow-hidden hover:shadow-xl hover:shadow-[#065f46]/30 transition-all duration-300 hover:scale-105">
                    <span className="relative z-10">Learn Our Story</span>
                    <div className="absolute inset-0 bg-[#064e3b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </button>
                </Link>
                <Link to="/donations" className="w-full sm:w-auto">
                  <button className="btn btn-transparent">
                    View Impact Report
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default About;

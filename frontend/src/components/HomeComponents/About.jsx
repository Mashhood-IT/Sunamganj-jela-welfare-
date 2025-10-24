import { useState, useEffect, useRef } from "react";
import { Users, Target, TrendingUp } from "lucide-react";
import { IMAGES } from "../../assets/Images";
import { stats } from "../../constants/Data";



const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ people: 0, projects: 0, funds: 0 });
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
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, interval);
    };

    animate('people', 50000);
    animate('projects', 200);
    animate('funds', 2000000);
  }, [isVisible]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  return (
    <section id="about" className="py-20 bg-white overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-linear-to-r from-[#065f46] to-[#10b981] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.about}
                  alt="Our mission"
                  loading="lazy"
                  className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="inline-block mb-4">
              <span className="text-[#065f46] font-semibold text-sm uppercase tracking-wider bg-[#065f46]/10 px-4 py-2 rounded-full">
                About Us
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              About{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-linear-to-br from-[#065f46] to-[#10b981] bg-clip-text text-transparent">
                  CharitUs
                </span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#10b981]/20 z-0" />
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              CharitUs is a nonprofit organization dedicated to improving lives through sustainable community development programs. Founded in 2018, we work tirelessly to address critical issues like education, healthcare, and access to clean water.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our mission is to empower communities by providing resources, support, and opportunities for growth. We believe that everyone deserves access to basic necessities and the chance to build a better future.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const displayValue = stat.key === 'funds' 
                  ? `$${formatNumber(counters[stat.key])}${stat.suffix}`
                  : `${formatNumber(counters[stat.key])}${stat.suffix}`;

                return (
                  <div
                    key={index}
                    className={`group p-4 rounded-xl cursor-pointer bg-linear-to-br from-gray-50 to-white border border-gray-100 hover:border-[#065f46]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${100 + index * 100}ms` }}
                  >
                    <div className="w-10 h-10 bg-[#065f46]/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#065f46] transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#065f46] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {displayValue}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex gap-4">
              <button className="group cursor-pointer relative px-6 py-3 bg-[#065f46] text-white rounded-full font-semibold overflow-hidden hover:shadow-xl hover:shadow-[#065f46]/30 transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Learn Our Story</span>
                <div className="absolute inset-0 bg-[#064e3b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
              
              <button className="px-6 py-3 cursor-pointer border-2 border-[#065f46] text-[#065f46] rounded-full font-semibold hover:bg-[#065f46] hover:text-white transition-all duration-300 hover:scale-105">
                View Impact Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
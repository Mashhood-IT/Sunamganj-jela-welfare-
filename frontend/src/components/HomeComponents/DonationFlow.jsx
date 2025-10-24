import { useEffect, useRef, useState } from "react";
import { Heart, Shield, Users, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

const DonationFlow = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const sectionRef = useRef(null);

  const steps = [
    {
      id: 1,
      title: "You Donate",
      icon: Heart,
      position: "left"
    },
    {
      id: 2,
      title: "Verification",
      icon: Shield,
      position: "right"
    },
    {
      id: 3,
      title: "Distribution",
      icon: Users,
      position: "left"
    },
    {
      id: 4,
      title: "Impact Created",
      icon: Sparkles,
      position: "right"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...new Set([...prev, index])]);
              }, index * 400);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A transparent journey from your heart to those in need
          </p>
        </div>

        {/* Flowchart */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-[#065f46] via-[#059669] to-[#065f46] transform -translate-x-1/2" />

          {/* Animated Flow Indicator */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 overflow-hidden">
            <div className="w-full h-32 bg-linear-to-b from-transparent via-white to-transparent animate-flow-down" />
          </div>

          {/* Steps */}
          <div className="relative space-y-16 py-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = step.position === "left";
              
              return (
                <div key={step.id} className="relative">
                  {/* Connection Node on Line */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className={`w-6 h-6 rounded-full bg-[#065f46] border-4 border-white shadow-lg transition-all duration-500 ${
                      visibleSteps.includes(index) ? "scale-100" : "scale-0"
                    }`} />
                  </div>

                  {/* Horizontal Connector Line */}
                  <div className={`absolute top-1/2 ${isLeft ? "right-1/2 left-0" : "left-1/2 right-0"} h-0.5 bg-[#065f46] transform -translate-y-1/2 transition-all duration-700 origin-${isLeft ? "right" : "left"} ${
                    visibleSteps.includes(index) ? "scale-x-100" : "scale-x-0"
                  }`} />

                  {/* Content */}
                  <div className={`flex items-center ${isLeft ? "justify-start pr-1/2" : "justify-end pl-1/2"}`}>
                    <div className={`w-full md:w-5/12 transition-all duration-700 transform ${
                      visibleSteps.includes(index)
                        ? "opacity-100 translate-x-0"
                        : `opacity-0 ${isLeft ? "-translate-x-12" : "translate-x-12"}`
                    }`}>
                      <div className="relative group">
                        {/* Icon Circle */}
                        <div className={`flex items-center gap-6 ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
                          <div className="relative">
                            <div className="w-24 h-24 rounded-full bg-linear-to-br from-[#065f46] to-[#059669] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                              <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                            </div>
                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-full bg-[#065f46] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300" />
                            
                            {/* Step Number Badge */}
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-[#065f46] rounded-full flex items-center justify-center font-bold text-[#065f46] shadow-lg">
                              {step.id}
                            </div>
                          </div>

                          {/* Text */}
                          <div className={`flex-1 ${isLeft ? "text-right" : "text-left"}`}>
                            <h3 className="text-2xl font-bold mb-8 text-gray-900 group-hover:text-[#065f46] transition-colors duration-300">
                              {step.title}
                            </h3>
                          </div>
                        </div>

                        {/* Arrow Between Steps */}
                        {index < steps.length - 1 && (
                          <div className={`absolute ${isLeft ? "right-0" : "left-0"} top-full mt-8 transform ${isLeft ? "-translate-x-12" : "translate-x-12"} transition-all duration-700 ${
                            visibleSteps.includes(index) ? "opacity-100" : "opacity-0"
                          }`}>
                            <ArrowRight className="w-6 h-6 text-[#065f46] rotate-90" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Success Checkmark at Bottom */}
          <div className={`absolute left-1/2 -bottom-8 transform -translate-x-1/2 transition-all duration-700 delay-1000 ${
            visibleSteps.includes(3) ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}>
            <div className="w-16 h-16 bg-linear-to-br from-[#065f46] to-[#059669] rounded-full flex items-center justify-center shadow-2xl">
              <CheckCircle2 className="w-10 h-10 text-white" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Impact Banner */}
        <div className="mt-32 text-center">
          <div className="inline-block bg-linear-to-r from-[#065f46] to-[#059669] text-white px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <p className="text-2xl font-bold">
              100% Transparent • 24hr Delivery • 500+ Partners
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes flow-down {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(600%);
          }
        }
        .animate-flow-down {
          animation: flow-down 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default DonationFlow;
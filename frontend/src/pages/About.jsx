import React from "react";
import HeroSection from "../constants/HeroSection";
import AboutSection from "../components/AboutComponents/AboutSection";
import CEOMessage from "../components/AboutComponents/CEOMessage";
import Team from "../components/AboutComponents/Team";
import HowYouCanHelp from "../components/AboutComponents/HowYouCanHelp";
import OurJourney from "../components/AboutComponents/OurJourney";
import CoreValues from "../components/AboutComponents/CoreValues";

const About = () => {
  React.useEffect(() => {
    // Load Facebook SDK
    if (!window.FB) {
      const script = document.createElement("script");
      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);

      script.onload = () => {
        if (window.FB) {
          window.FB.XFBML.parse();
        }
      };
    } else {
      // If SDK already loaded, parse again
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div>
      <HeroSection
        title="About Us"
        description="Kindness at the Heart of Every Action"
      />
      <AboutSection />
      <OurJourney />
      <Team />
      <CEOMessage />
      <CoreValues />
      
      {/* Facebook Page Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 text-gray-900">
            Stay Connected
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto text-base md:text-lg px-4">
            Follow our latest updates and activities on Facebook
          </p>
          
          <div className="flex justify-center items-center">
            <div className="w-full max-w-[500px] px-4 sm:px-0">
              {/* Facebook Page Plugin */}
              <div 
                className="fb-page shadow-lg rounded-lg overflow-hidden bg-white" 
                data-href="https://www.facebook.com/people/Sunamganj-jela-welfare-Association-Uk/100064737004572/"
                data-tabs="timeline"
                data-width="500"
                data-height="600"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote 
                  cite="https://www.facebook.com/people/Sunamganj-jela-welfare-Association-Uk/100064737004572/" 
                  className="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/people/Sunamganj-jela-welfare-Association-Uk/100064737004572/">
                    Sunamganj Jela Welfare Association UK
                  </a>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <HowYouCanHelp />
    </div>
  );
};

export default About;
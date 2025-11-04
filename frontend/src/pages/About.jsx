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
      <CoreValues />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Stay Connected
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Follow our latest updates and activities on Facebook
          </p>
          <div className="flex justify-center items-center">
            <div className="w-full max-w-[500px]">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpeople%2FSunamganj-jela-welfare-Association-Uk%2F100064737004572%2F&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="500"
                height="600"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="shadow-lg rounded-lg w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <HowYouCanHelp />
      <CEOMessage />
      <Team />
    </div>
  );
};

export default About;

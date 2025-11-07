import React from "react";
import HeroSection from "../constants/HeroSection";
import AboutSection from "../components/AboutComponents/AboutSection";
import CEOMessage from "../components/AboutComponents/CEOMessage";
import Team from "../components/AboutComponents/Team";
import HowYouCanHelp from "../components/AboutComponents/HowYouCanHelp";
import OurJourney from "../components/AboutComponents/OurJourney";
import CoreValues from "../components/AboutComponents/CoreValues";
import MeetingGallerySection from "../components/AboutComponents/MeetingsGallerySection";

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
      <MeetingGallerySection />
      <Team />
      <CEOMessage />
      <CoreValues />

      <HowYouCanHelp />
    </div>
  );
};

export default About;
import React from "react";
import HeroSection from "../constants/HeroSection";
import AboutSection from "../components/AboutComponents/AboutSection";
import CEOMessage from "../components/AboutComponents/CEOMessage";
import Team from "../components/AboutComponents/Team";
import HowYouCanHelp from "../components/AboutComponents/HowYouCanHelp";
import OurJourney from "../components/AboutComponents/OurJourney";
import CoreValues from "../components/AboutComponents/CoreValues";

const About = () => {
  return (
    <div>
      <HeroSection  title="About Us" description="Kindness at the Heart of Every Action"/>
      <AboutSection />
      <OurJourney />
      <CoreValues />
  <HowYouCanHelp />
  <CEOMessage />
  <Team />
    </div>  
  );
};

export default About;

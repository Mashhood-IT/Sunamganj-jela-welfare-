import HeroSection from "../constants/HeroSection";
import toast from "react-hot-toast";
import ForFamiliesAndCommunity from "../components/ContactComponents/ForFamiliesAndCommunity";
import ForSupportersAndDonors from "../components/ContactComponents/ForSupportersAndDonors";
import HowToStayConnected from "../components/ContactComponents/HowToStayConnected";
import JoinUs from "../components/ContactComponents/JoinUs";
import OurHeartfeltMessage from "../components/ContactComponents/OurHeartfeltMessage";
import OurPromise from "../components/ContactComponents/OurPromise";
import ReachingOut from "../components/ContactComponents/ReachingOut";
import WeAreAlwaysHere from "../components/ContactComponents/WeAreAlwaysHere";
import ForVolunteersAndPartners from "../components/ContactComponents/ForVolunteersAndPartners";
import ContactForm from "../components/ContactComponents/ContactForm";

const Contact = ({}) => {
  return (
    <>
      <HeroSection
        title="Contact Us"
        description="Let's Connect and Make a Difference Together"
      />
      <WeAreAlwaysHere />
      <ContactForm />

      <div className="flex items-center justify-center">
        <ForFamiliesAndCommunity />
        <ForSupportersAndDonors />
      </div>
      <OurPromise />
      <div className="flex items-center justify-center">
        <ForVolunteersAndPartners />
        <ReachingOut />
      </div>
      <HowToStayConnected />
      <div className="flex items-center justify-center">
        <OurHeartfeltMessage />
        <JoinUs />
      </div>
    </>
  );
};

export default Contact;

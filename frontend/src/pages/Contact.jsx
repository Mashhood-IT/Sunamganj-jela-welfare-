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
      <div className="lg:px-24">
        <WeAreAlwaysHere />
        <div className="flex  lg:flex-row flex-col items-center w-full  ">
          <div className="flex flex-col px-4 md:px-12 space-y-4 mb-4 lg:w-2/3  items-center justify-center">
            <ForFamiliesAndCommunity />
            <ForSupportersAndDonors />
          </div>
          <div className="">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="px-0">
        <OurPromise />
      </div>
      <div className="lg:px-24">
        <div className="grid lg:grid-cols-2 mt-6 px-4 md:px-12 space-y-4  items-center justify-center">
          <ForVolunteersAndPartners />
          <ReachingOut />
          <HowToStayConnected />
        </div>
        <OurHeartfeltMessage />
      </div>
        <JoinUs />
    </>
  );
};

export default Contact;

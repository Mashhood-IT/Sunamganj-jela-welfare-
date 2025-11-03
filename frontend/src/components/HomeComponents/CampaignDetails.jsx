import React, { useState } from "react";
import { Heart, ArrowRight } from "lucide-react";
import HeroSection from "../../constants/HeroSection";
import { campaignContent } from "../../constants/Data";
import StripeCheckout from "../StripeCheckout";
import toast from "react-hot-toast";

const CampaignDetails = ({ campaign, onBack }) => {
  const [donationAmount, setDonationAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [showStripeCheckout, setShowStripeCheckout] = useState(false);

  const handleDonate = () => {
    if (!donationAmount || !donorName || !donorEmail) {
      toast.error("Please fill in all fields");
      return;
    }
    setShowStripeCheckout(true);
  };

  const handlePaymentSuccess = () => {
    setShowStripeCheckout(false);
    setDonationAmount("");
    setDonorName("");
    setDonorEmail("");
    toast.success("Thank you for your donation!");
  };

  const quickAmounts = [50, 100, 250, 500];



  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div>
        <HeroSection title={campaign.title} description={campaign.description} />
      </div>
        <button 
          onClick={onBack} 
          className=" ml-12 mt-12 bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-lg cursor-pointer flex items-center gap-2 hover:bg-white transition-all shadow-lg font-semibold"
        >
          <ArrowRight className="w-5 h-5 rotate-180" />
          Back
        </button>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-4 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Campaign Info */}
          <div className="lg:col-span-2 space-y-6">
            
       

            {/* About Campaign */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="lg:text-3xl text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-1 h-8 rounded-full" style={{ backgroundColor: 'var(--main-green-color)' }}></div>
                About This Campaign
              </h2>
              <div className="space-y-4">
                {campaignContent[campaign.id].text.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 lg:text-lg text-md leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Shared Mission Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mt-6">
              <h2 className="text-2xl font-bold text-green-700 mb-4">A Shared Mission</h2>
              <p className="text-gray-700 lg:text-lg text-md leading-relaxed mb-2">
                Everything we have is united by the one cause to care. It is kindness that spawns flood relief, it is kindness that brings about healthcare, it is kindness that leads to education, it is kindness that leads to empowerment, it is kindness that is kindness. The Sunamganj Jela Welfare Association UK is a meeting point of hearts. It links the community of Bangladeshi in the UK to the populace of Sunamganj. All of our projects are promises to serve, to uplift and bring hope where it is most needed.
              </p>
              <p className="text-gray-700 lg:text-lg text-md leading-relaxed mb-2">
                People like you are the driving force of our business. Every gift, every message, every prayer makes us move on. We are separated by miles and miles, yet love holds us united. When we act with care, we don’t just create change — we create belonging.
              </p>
            </div>

            {/* Join Hands Section */}
            <div className="bg-white rounded-2xl mb-8 shadow-xl p-8 mt-6">
              <h2 className="text-2xl font-bold text-green-700 mb-4">Join Hands with Us</h2>
              <p className="text-gray-700 lg:text-lg text-md leading-relaxed mb-2">
                You can be part of this journey. Your support can rebuild a home, bring clean water, or save a life. Every kind gesture leaves a mark that lasts. Helping others is not about how much we give. It’s about how deeply we care. Each act of kindness adds light to someone’s life.
              </p>
              <p className="text-gray-700 lg:text-lg text-md leading-relaxed mb-2">
                Together, we can make sure no family faces hardship alone. Together, we can keep building hope, one cause at a time. At Sunamganj Jela Welfare Association UK, our heart is simple — serve with love, act with honesty, and never stop believing in people.
              </p>
              <p className="text-green-700 lg:text-lg text-md font-semibold leading-relaxed">
                Join us. Care with us. Let&apos;s make tomorrow better for everyone.
              </p>
            </div>
          </div>

          {/* Right Column - Donation Form */}
          <div className="lg:col-span-1 mb-5">
            <div className="bg-white rounded-2xl shadow-xl p-8 ">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h2>

    {showStripeCheckout ? (
  <div className="space-y-4">
    <StripeCheckout
      amount={Number(donationAmount)}
      currency="gbp"
      name={donorName}
      email={donorEmail}
      isRecurring={false}
      onSuccess={handlePaymentSuccess}
    />
    <button
      onClick={() => setShowStripeCheckout(false)}
      className="w-full mt-4 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
    >
      Cancel
    </button>
  </div>
) : (
  <>
    {/* Quick Amount Buttons */}
    <div className="grid grid-cols-2 gap-3 mb-6">
      {quickAmounts.map((amount) => (
        <button
          key={amount}
          onClick={() => setDonationAmount(amount.toString())}
          className="py-1 border-2 rounded-xl font-bold text-lg transition-all hover:scale-105"
          style={{
            borderColor:
              donationAmount === amount.toString()
                ? "var(--main-green-color)"
                : "#e5e7eb",
            backgroundColor:
              donationAmount === amount.toString()
                ? "var(--main-green-color)"
                : "white",
            color:
              donationAmount === amount.toString()
                ? "white"
                : "#374151",
          }}
        >
          ${amount}
        </button>
      ))}
    </div>

    {/* Form Fields */}
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">
          Custom Amount ($)
        </label>
        <input
          type="number"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
          placeholder="Enter amount"
          className="w-full px-4 py-1 border-2 border-gray-300 rounded-xl focus:outline-none text-lg"
          min="1"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          value={donorName}
          onChange={(e) => setDonorName(e.target.value)}
          placeholder="Enter your name"
          className="w-full px-4 py-1 border-2 border-gray-300 rounded-xl focus:outline-none text-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          value={donorEmail}
          onChange={(e) => setDonorEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-1 border-2 border-gray-300 rounded-xl focus:outline-none text-lg"
        />
      </div>

      <div className="flex items-center justify-center">
        <button
          onClick={handleDonate}
          className="flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-xl"
          style={{ backgroundColor: "var(--main-green-color)" }}
        >
          <Heart className="w-6 h-6" />
          Donate ${donationAmount || "0"}
        </button>
      </div>
    </div>
  </>
)}

              </div>
            </div>
          </div>
      </div>

      {/* Bottom Spacer */}
    </div>
  );
};

export default CampaignDetails;
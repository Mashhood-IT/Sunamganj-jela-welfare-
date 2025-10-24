import React, { useState } from "react";
import { Heart, ArrowRight, Droplets, Briefcase, Wind, Hospital, Users, Calendar, MapPin, Target, TrendingUp } from "lucide-react";
import HeroSection from "../../constants/HeroSection";
import { campaignContent } from "../../constants/Data";

const CampaignDetails = ({ campaign, onBack }) => {
  const [donationAmount, setDonationAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");

  const handleDonate = () => {
    if (!donationAmount || !donorName || !donorEmail) {
      alert("Please fill in all fields");
      return;
    }
    alert(`Thank you for your donation of $${donationAmount}!`);
  };

  const quickAmounts = [50, 100, 250, 500];



  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <div className="">

        <HeroSection title= {campaign.title} description={campaign.description} />
        

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
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-1 h-8 rounded-full" style={{ backgroundColor: 'var(--main-green-color)' }}></div>
                About This Campaign
              </h2>
              <div className="space-y-4">
                {campaignContent[campaign.id].text.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Impact Stats */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Your Impact</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <Heart className="w-5 h-5" style={{ color: 'var(--main-green-color)' }} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg">$50</p>
                        <p className="text-gray-600 text-sm">Feeds a family for one week</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <Heart className="w-5 h-5" style={{ color: 'var(--main-green-color)' }} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg">$100</p>
                        <p className="text-gray-600 text-sm">Provides emergency shelter</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Donation Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h2>

              {/* Quick Amount Buttons */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {quickAmounts.map(amount => (
                  <button
                    key={amount}
                    onClick={() => setDonationAmount(amount.toString())}
                    className="py-1 border-2 rounded-xl font-bold text-lg transition-all hover:scale-105"
                    style={{
                      borderColor: donationAmount === amount.toString() ? 'var(--main-green-color)' : '#e5e7eb',
                      backgroundColor: donationAmount === amount.toString() ? 'var(--main-green-color)' : 'white',
                      color: donationAmount === amount.toString() ? 'white' : '#374151'
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
                    className="w-full px-4 py-1.5  border-2 border-gray-300 rounded-xl focus:outline-none text-lg"
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
                    className="w-full px-4 py-1.5 border-2 border-gray-300 rounded-xl focus:outline-none "
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
                    className="w-full px-4 py-1.5 border-2 border-gray-300 rounded-xl focus:outline-none "
                  />
                </div>
<div className="flex items-center justify-center">
                <button
  
  onClick={handleDonate}
  className="btn btn-green"
  style={{ backgroundColor: 'var(--main-green-color)' }}
  >
                  <Heart className="w-6 h-6" />
                  Donate ${donationAmount || '0'}
                </button>
                  </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="h-20"></div>
    </div>
  );
};

export default CampaignDetails;
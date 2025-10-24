import React, { useState } from "react";
import { ICONS } from "../../assets/Icons";
const CampaignDetails = ({ campaign, onBack }) => {
  const [donationAmount, setDonationAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");

  const Icon = campaign.icon;
  const progress = (campaign.raised / campaign.goal) * 100;

  const handleDonate = () => {
    if (!donationAmount || !donorName || !donorEmail) {
      alert("Please fill in all fields");
      return;
    }
    alert(`Thank you for your donation of $${donationAmount}!`);
  };

  const quickAmounts = [50, 100, 250, 500];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="mb-6 text-gray-600 hover:text-gray-900 flex items-center gap-2">
          <ICONS.ArrowRight className="w-5 h-5 rotate-180" />
          Back to Campaigns
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img src={campaign.image} alt={campaign.title} className="w-full h-96 object-cover" />

          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
<Icon className="w-8 h-8" style={{ color: 'var(--main-green-color)' }} />
              <h1 className="text-3xl font-bold text-gray-900">{campaign.title}</h1>
            </div>

            <div className="mb-8">
              <div className="flex justify-between text-lg mb-3">
                <span className="text-gray-600">Raised: ${campaign.raised.toLocaleString()}</span>
                <span className="font-bold text-gray-900">Goal: ${campaign.goal.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="h-3 rounded-full" style={{ width: `${progress}%`, backgroundColor: 'var(--main-green-color)' }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">{Math.round(progress)}% funded</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Campaign</h2>
              {campaign.id === 1 && (
                <div>
                  <p className="text-gray-700 mb-4">Devastating floods have displaced thousands of families, destroying homes and livelihoods. Your donation helps provide immediate relief including emergency shelter, food supplies, and clean water.</p>
                  <p className="text-gray-700 mb-4">Funds will be used for temporary housing, food packages, medical assistance, and rebuilding essential infrastructure in affected areas.</p>
                </div>
              )}
              {campaign.id === 2 && (
                <div>
                  <p className="text-gray-700 mb-4">Our Self Reliance Program trains individuals in sustainable skills like tailoring, carpentry, and small business management. We provide tools and mentorship to help families become financially independent.</p>
                  <p className="text-gray-700 mb-4">Your support creates lasting change by breaking the cycle of poverty through education and entrepreneurship.</p>
                </div>
              )}
              {campaign.id === 3 && (
                <div>
                  <p className="text-gray-700 mb-4">Millions lack access to clean drinking water, leading to preventable diseases. We install solar-powered water pumps in remote villages, providing reliable access to safe water year-round.</p>
                  <p className="text-gray-700 mb-4">Each pump serves an entire community and includes maintenance training for local residents to ensure long-term sustainability.</p>
                </div>
              )}
              {campaign.id === 4 && (
                <div>
                  <p className="text-gray-700 mb-4">Winter brings life-threatening cold to vulnerable families living in temporary shelters. Your donation provides warm blankets, winter clothing, and heating supplies to protect children and elderly from harsh conditions.</p>
                  <p className="text-gray-700 mb-4">Each blanket donation package includes thermal blankets, warm clothes, and basic heating materials for a family of five.</p>
                </div>
              )}
              {campaign.id === 5 && (
                <div>
                  <p className="text-gray-700 mb-4">Healthcare remains inaccessible for many underprivileged communities. We provide free medical camps, essential medicines, and emergency treatments for those who cannot afford basic healthcare.</p>
                  <p className="text-gray-700 mb-4">Your contribution funds mobile health clinics, medication supplies, and specialist consultations in underserved areas.</p>
                </div>
              )}
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Make Your Donation</h2>

              <div className="grid grid-cols-4 gap-3 mb-6">
                {quickAmounts.map(amount => (
                  <button key={amount} onClick={() => setDonationAmount(amount.toString())} className="py-3 border-2 rounded-lg font-semibold hover:border-green-500 transition-colors" style={{ borderColor: donationAmount === amount.toString() ? 'var(--main-green-color)' : '#d1d5db' }}>
                    ${amount}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Custom Amount ($)</label>
                  <input type="number" value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)} placeholder="Enter amount" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none" min="1" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input type="text" value={donorName} onChange={(e) => setDonorName(e.target.value)} placeholder="Enter your name" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input type="email" value={donorEmail} onChange={(e) => setDonorEmail(e.target.value)} placeholder="Enter your email" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none" />
                </div>

                <button onClick={handleDonate} className="w-full py-4 rounded-lg font-bold text-white text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity" style={{ backgroundColor: 'var(--main-green-color)' }}>
                  <ICONS.Heart className="w-6 h-6" />
                  Donate ${donationAmount || '0'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CampaignDetails
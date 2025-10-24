import { useState } from "react";
import { DONATIONS_DATA } from "./constants/Data";
import CampaignDetails from "./components/HomeComponents/CampaignDetails";
import { ICONS } from "./assets/Icons";
import HeroSection from "./constants/HeroSection";

const Donations = () => {
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  if (selectedCampaign) {
    return (
      <CampaignDetails
        campaign={selectedCampaign}
        onBack={() => setSelectedCampaign(null)}
      />
    );
  }

  return (
    <>
      <HeroSection
        title="Our Campaigns"
        description="this is sample description for Campaigns page"
      />
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Donation Campaigns
            </h1>
            <p className="text-lg text-gray-600">
              Choose a cause that matters to you and make a difference today
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DONATIONS_DATA.map((campaign) => {
              const Icon = campaign.icon;
              const progress = (campaign.raised / campaign.goal) * 100;

              return (
                <div
                  key={campaign.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold"
                      style={{ color: "var(--main-green-color)" }}
                    >
                      {campaign.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon
                        className="w-6 h-6"
                        style={{ color: "var(--main-green-color)" }}
                      />
                      <h3 className="text-xl font-bold text-gray-900">
                        {campaign.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-4">{campaign.description}</p>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">
                          Raised: ${campaign.raised.toLocaleString()}
                        </span>
                        <span className="font-semibold text-gray-900">
                          Goal: ${campaign.goal.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full"
                          style={{
                            width: `${progress}%`,
                            backgroundColor: "var(--main-green-color)",
                          }}
                        ></div>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedCampaign(campaign)}
                      className="btn btn-green"
                    >
                      Learn More & Donate
                      <ICONS.ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Donations;

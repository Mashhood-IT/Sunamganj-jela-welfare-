import { ArrowRight, Coins } from "lucide-react";

const amounts = [10, 25, 50, 100, 200];

const DonationAmount = ({ formData, updateFormData, onNext }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-center gap-3">
        {["one-time", "weekly", "monthly"].map((type) => (
          <button
            key={type}
            onClick={() => updateFormData({ donationType: type })}
            className={`px-4 py-1 rounded-lg font-semibold transition-all ${
              formData.donationType === type
                ? "text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            style={formData.donationType === type ? { backgroundColor: 'var(--main-green-color)' } : {}}
          >
            {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {amounts.map((amt) => (
          <button
            key={amt}
            onClick={() => updateFormData({ amount: amt, customAmount: "" })}
            className={`py-1  border-2 rounded-xl font-bold text-lg transition-all ${
              formData.amount === amt
                ? "text-white shadow-lg scale-105"
                : "border-gray-300 text-gray-700 hover:border-gray-400 hover:scale-102"
            }`}
            style={formData.amount === amt ? { backgroundColor: 'var(--main-green-color)', borderColor: 'var(--main-green-color)' } : {}}
          >
            £{amt}
          </button>
        ))}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Custom Amount</label>
        <input
          type="number"
          placeholder="Enter custom amount"
          className="w-full border-2 border-gray-300 rounded-lg px-4 py-1 text-lg focus:outline-none "
          value={formData.customAmount}
          onChange={(e) =>
            updateFormData({
              customAmount: e.target.value,
              amount: "",
            })
          }
        />
      </div>
<div className="flex items-center justify-center">

      <button
        onClick={onNext}
        className="btn btn-green"
        style={{ backgroundColor: 'var(--main-green-color)' }}
        >
        Continue
        <ArrowRight className="w-5 h-5" />
      </button>
          </div>
    </div>
  );
};

export default DonationAmount;
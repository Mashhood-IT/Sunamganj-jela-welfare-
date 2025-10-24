import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../constants/HeroSection";

const DonationForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name");
  const email = queryParams.get("email");

  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [error, setError] = useState("");

  const handleNext = (e) => {
    e.preventDefault();

    const finalAmount = amount || customAmount;
    if (!finalAmount || Number(finalAmount) <= 0) {
      setError("Please enter a valid donation amount");
      return;
    }

    // Proceed to payment (Stripe step integration later)
    alert(
      `Thank you ${name}! You are donating £${finalAmount} (${isRecurring ? "Recurring" : "One-time"})`
    );
  };

  const presetAmounts = [10, 25, 50, 100];

  return (<>
  <HeroSection title="Support Us" description='this is sample description for support page' />
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Choose Your Donation
        </h2>

        <p className="text-center text-gray-600 mb-6">
          Donating as <span className="font-semibold">{name}</span> ({email})
        </p>

        <form onSubmit={handleNext} className="space-y-5">
          {/* Preset Amounts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {presetAmounts.map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => {
                  setAmount(amt);
                  setCustomAmount("");
                }}
                className={`py-3 border rounded-lg text-center transition ${
                  amount === amt
                    ? "bg-green-600 text-white border-green-600"
                    : "border-gray-300 text-gray-700 hover:bg-green-50"
                }`}
              >
                £{amt}
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <input
            type="number"
            placeholder="£ Custom Amount"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setAmount("");
            }}
            className="w-full border rounded-lg p-2"
          />

          {/* Recurring Checkbox */}
          <div className="flex items-center space-x-2 mt-2">
            <input
              type="checkbox"
              id="recurring"
              checked={isRecurring}
              onChange={() => setIsRecurring((prev) => !prev)}
              className="w-4 h-4"
            />
            <label htmlFor="recurring" className="text-gray-700 text-sm">
              Make this a recurring monthly donation
            </label>
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button
            type="submit"
            className="w-full mt-4 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Continue →
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default DonationForm;

import React, { useState } from 'react';
import { Heart, DollarSign, CreditCard, Mail, User } from 'lucide-react';

const DonationForm = () => {
  const [amount, setAmount] = useState('25');
  const [custom, setCustom] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const presets = [25, 50, 100, 250];

  const handleDonate = () => {
    const finalAmount = amount === 'custom' ? custom : amount;
    if (!finalAmount || !name || !email) {
      alert('Please fill all fields');
      return;
    }
    alert(`Thank you ${name} for donating $${finalAmount}!`);
  };

 return (
  <section id="donate" className="py-20 px-6 bg-gray-50">
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const finalAmount = amount === "custom" ? custom : amount;
          if (!finalAmount || !name || !email) {
            alert("Please fill in all required fields.");
            return;
          }
          alert(`Thank you ${name} for donating $${finalAmount}!`);
        }}
        className="p-8 space-y-8"
      >
        <div >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Choose your donation amount
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {[25, 50, 100, 250].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setAmount(preset.toString())}
                className={`py-3 rounded-lg border-2 font-semibold transition-all
                  ${
                    amount === preset.toString()
                      ? "bg-[#065f46] text-white border-[#065f46]"
                      : "bg-white text-gray-800 border-gray-300 hover:border-[#065f46]"
                  }`}
              >
                ${preset}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setAmount("custom")}
            className={`w-full py-3 px-4 rounded-lg border-2 font-semibold transition-all
              ${
                amount === "custom"
                  ? "bg-[#065f46] text-white border-[#065f46]"
                  : "bg-white text-gray-800 border-gray-300 hover:border-[#065f46]"
              }`}
          >
            Enter Custom Amount
          </button>

          {amount === "custom" && (
            <div className="mt-3 relative">
              <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="number"
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                placeholder="Enter custom amount"
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#065f46] focus:outline-none"
              />
            </div>
          )}
        </div>

        {/* Step 2: Recurring Option */}
        <div className="flex items-center gap-3">
          <input type="checkbox" id="recurring" className="w-5 h-5 accent-[#065f46]" />
          <label htmlFor="recurring" className="text-gray-700 font-medium">
            Make this a recurring monthly donation
          </label>
        </div>

        {/* Step 3: Donor Information */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Information</h3>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="relative">
              <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#065f46] focus:outline-none"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#065f46] focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-gray-700 font-medium mb-2">Message (optional)</label>
            <textarea
              rows={3}
              placeholder="Leave a message with your donation"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#065f46] focus:outline-none"
            />
          </div>
        </div>

        {/* Step 4: Payment Info */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h3>

          <div className="relative mb-4">
            <CreditCard className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Card Number"
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#065f46] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="MM/YY"
              className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#065f46] focus:outline-none"
            />
            <input
              type="text"
              placeholder="CVV"
              className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#065f46] focus:outline-none"
            />
          </div>
        </div>

        {/* Step 5: Final CTA */}
        <div className="pt-6">
          <button
            type="submit"
            className="w-full bg-[#065f46] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#064e3b] transition-all"
          >
            Complete Donation
          </button>
          <p className="text-xs text-gray-500 mt-3 text-center">
            🔒 Secure transaction — your data is protected with 256-bit encryption.
          </p>
        </div>
      </form>
    </div>
  </section>
);

};

export default DonationForm;
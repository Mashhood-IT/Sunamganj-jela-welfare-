
// Payment.jsx
import { ArrowLeft, CreditCard, Lock } from "lucide-react";

const Payment = ({ formData, updateFormData, onBack }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Ready to integrate Stripe!");
  };

  return (
    <div className="space-y-6">


      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Card Number</label>
          <div className="relative">
            <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="1234 5678 9012 3456"

              className="w-full border-2 border-gray-300 rounded-lg pl-11 pr-4 py-1 focus:outline-none "
              value={formData.cardNumber}
              onChange={(e) => updateFormData({ cardNumber: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Expiry Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-1 focus:outline-none "
              value={formData.expiryDate}
              onChange={(e) => updateFormData({ expiryDate: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">CVV</label>
            <input
              type="text"
              placeholder="123"
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-1 focus:outline-none "
              value={formData.cvv}
              onChange={(e) => updateFormData({ cvv: e.target.value })}
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
          <Lock className="w-5 h-5 text-gray-600 mt-0.5" />
          <p className="text-sm text-gray-600">
            Your payment information is encrypted and secure. We never store your card details.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={onBack}
          className="flex px-6 py-1.5 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors  items-center justify-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-green"
        >
          <Lock className="w-5 h-5" />
           Send
        </button>
      </div>
    </div>
  );
};

export default Payment;
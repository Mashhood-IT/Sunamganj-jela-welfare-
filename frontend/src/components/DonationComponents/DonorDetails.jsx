
import { ArrowLeft, ArrowRight, User, Mail, MessageSquare } from "lucide-react";

const DonorDetails = ({ formData, updateFormData, onNext, onBack }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border-2 border-gray-300 rounded-lg pl-11 pr-4  px-4 py-1 focus:outline-none "
              value={formData.name}
              onChange={(e) => updateFormData({ name: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-2 border-gray-300 rounded-lg pl-11 pr-4 px-4 py-1 focus:outline-none "
              value={formData.email}
              onChange={(e) => updateFormData({ email: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Message (Optional)</label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <textarea
              placeholder="Write a message of support"
              className="w-full border-2 border-gray-300 rounded-lg pl-11 pr-4  px-4 py-1 focus:outline-none  resize-none"
              rows="4"
              value={formData.message}
              onChange={(e) => updateFormData({ message: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={onBack}
          className=" px-6 py-1.5 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        <button
          onClick={onNext}
          className="btn btn-green"
        >
          Continue
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default DonorDetails;
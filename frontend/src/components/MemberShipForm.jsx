import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import StripeCheckout from "./StripeCheckout";
import SignatureInput from "./SignatureInput";
const  MembershipForm = () => {
  const [formData, setFormData] = useState({
    title: "Mr",
    fullName: "",
    gender: "Male",
    picture: null,
    ukAddress: "",
    postcode: "",
    email: "",
    mobile: "",
    landline: "",
    village: "",
    postOffice: "",
    upazela: "",
    membershipFee: 20,
    receivedBy: "",
    signatureOfApplicant: null,
    signatureOfApprover: null,
    declarationAccepted: false,
  });

  const [picturePreview, setPicturePreview] = useState(null);
  const [pictureIsPDF, setPictureIsPDF] = useState(false);
  const [picturePDFName, setPicturePDFName] = useState("");
  const [signaturePreview, setSignaturePreview] = useState(null);
  const [signatureIsPDF, setSignatureIsPDF] = useState(false);
  const [signaturePDFName, setSignaturePDFName] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const [pendingFormData, setPendingFormData] = useState(null);
  const isCompanyUser = false;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));

      if (name === "picture") {
        if (files[0].type === "application/pdf") {
          setPictureIsPDF(true);
          setPicturePreview(null);
          setPicturePDFName(files[0].name);
        } else {
          setPictureIsPDF(false);
          setPicturePDFName("");
          const reader = new FileReader();
          reader.onloadend = () => setPicturePreview(reader.result);
          reader.readAsDataURL(files[0]);
        }
      } else if (name === "signatureOfApplicant") {
        if (files[0].type === "application/pdf") {
          setSignatureIsPDF(true);
          setSignaturePreview(null);
          setSignaturePDFName(files[0].name);
        } else {
          setSignatureIsPDF(false);
          setSignaturePDFName("");
          const reader = new FileReader();
          reader.onloadend = () => setSignaturePreview(reader.result);
          reader.readAsDataURL(files[0]);
        }
      }
    }
  };

  const validateFileSize = () => {
    const maxSize = 5 * 1024 * 1024;
    const files = [
      { file: formData.picture, name: "Profile Picture" },
      { file: formData.signatureOfApplicant, name: "Signature of Applicant" },
      { file: formData.signatureOfApprover, name: "Signature of Approver" },
    ];

    for (const { file, name } of files) {
      if (file && file.size > maxSize) {
        toast.error(`${name} is too large. Maximum size is 5MB.`, {
          duration: 4000,
        });
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.declarationAccepted) {
      toast("You must accept the declaration.", {
        icon: "⚠️",
        style: {
          background: "#fff7e6",
          color: "#b45309",
          border: "1px solid #facc15",
        },
      });
      return;
    }

    // Validate file sizes before proceeding to payment
    if (!validateFileSize()) {
      return;
    }

    // Store form data and show payment form
    setPendingFormData(formData);
    setShowPayment(true);
  };
  const handlePaymentSuccess = async () => {
    try {
      const formDataToSend = new FormData();

      formDataToSend.append("title", pendingFormData.title);
      formDataToSend.append("fullName", pendingFormData.fullName);
      formDataToSend.append("gender", pendingFormData.gender);
      formDataToSend.append("ukAddress", pendingFormData.ukAddress);
      formDataToSend.append("postcode", pendingFormData.postcode);
      formDataToSend.append("email", pendingFormData.email);
      formDataToSend.append("mobile", pendingFormData.mobile);
      formDataToSend.append("landline", pendingFormData.landline);
      formDataToSend.append("membershipFee", pendingFormData.membershipFee);
      formDataToSend.append("receivedBy", pendingFormData.receivedBy);
      formDataToSend.append(
        "declarationAccepted",
        pendingFormData.declarationAccepted
      );

      formDataToSend.append(
        "bangladeshAddress[village]",
        pendingFormData.village
      );
      formDataToSend.append(
        "bangladeshAddress[postOffice]",
        pendingFormData.postOffice
      );
      formDataToSend.append(
        "bangladeshAddress[upazela]",
        pendingFormData.upazela
      );

      if (pendingFormData.picture) {
        formDataToSend.append("picture", pendingFormData.picture);
      }
      if (pendingFormData.signatureOfApplicant) {
        formDataToSend.append(
          "signatureOfApplicant",
          pendingFormData.signatureOfApplicant
        );
      }
      if (pendingFormData.signatureOfApprover) {
        formDataToSend.append(
          "signatureOfApprover",
          pendingFormData.signatureOfApprover
        );
      }

      await axios.post(
        `${import.meta.env.VITE_API_URL}/create-member`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Payment successful! Application submitted.");

      // Reset form
      setFormData({
        title: "Mr",
        fullName: "",
        gender: "Male",
        picture: null,
        ukAddress: "",
        postcode: "",
        email: "",
        mobile: "",
        landline: "",
        village: "",
        postOffice: "",
        upazela: "",
        membershipFee: 20,
        receivedBy: "",
        signatureOfApplicant: null,
        declarationAccepted: false,
      });
      setPicturePreview(null);
      setSignaturePreview(null);
      setShowPayment(false);
      setPendingFormData(null);
    } catch (error) {
      console.error("Error submitting membership:", error);
      toast.error("Error submitting form: " + error.message);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      {showPayment ? (
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-6 text-green-700">
            Complete Payment
          </h2>
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700">
              <strong>Name:</strong> {pendingFormData?.fullName}
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> {pendingFormData?.email}
            </p>
            <p className="text-gray-700 text-lg font-semibold mt-2">
              <strong>Amount:</strong> £{formData.membershipFee}
            </p>
          </div>
          <StripeCheckout
            amount={formData.membershipFee}
            currency="gbp"
            name={pendingFormData?.fullName}
            email={pendingFormData?.email}
            isRecurring={false}
            onSuccess={handlePaymentSuccess}
          />
          <button
            onClick={() => setShowPayment(false)}
            className="mt-4 w-full text-gray-600 hover:text-gray-800 underline"
          >
            Back to form
          </button>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h2 className="text:2xl md:text-3xl font-bold mb-2 text-green-700">
            Membership Application
          </h2>
          <p className="text-gray-600 mb-8">
            Please fill out all required fields marked with *
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-green-700 border-b-2 border-green-700 pb-2">
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block mb-2 text-gray-700 font-medium">
                    Title *
                  </label>
                  <select
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Ms</option>
                    <option>Others</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block mb-2 text-gray-700 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 text-gray-700 font-medium">
                    Gender *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-medium">
                    Profile Picture
                  </label>
                  <input
                    type="file"
                    name="picture"
                    onChange={handleFileChange}
                    accept="image/*,.pdf"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-sm file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                  />
                  {pictureIsPDF ? (
                    <div className="mt-2 flex items-center text-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-600 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16h8M8 12h8m-8-4h8M4 6h16v12H4V6z"
                        />
                      </svg>
                      <span>
                        PDF file selected:{" "}
                        <span className="font-semibold">{picturePDFName}</span>
                      </span>
                    </div>
                  ) : (
                    picturePreview && (
                      <img
                        src={picturePreview}
                        alt="Preview"
                        className="mt-2 w-24 h-24 object-cover rounded-md border border-gray-300"
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-green-700 border-b-2 border-green-700 pb-2">
                UK Contact Information
              </h3>

              <div className="mb-4">
                <label className="block mb-2 text-gray-700 font-medium">
                  UK Address *
                </label>
                <textarea
                  name="ukAddress"
                  value={formData.ukAddress}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  placeholder="Enter your full UK address"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 text-gray-700 font-medium">
                    Postcode
                  </label>
                  <input
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="e.g., SW1A 1AA"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-gray-700 font-medium">
                    Mobile *
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="e.g., 07XXX XXXXXX"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-medium">
                    Landline
                  </label>
                  <input
                    type="tel"
                    name="landline"
                    value={formData.landline}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="e.g., 020 XXXX XXXX"
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-green-700 border-b-2 border-green-700 pb-2">
                Bangladesh Address
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block mb-2 text-gray-700 font-medium">
                    Village
                  </label>
                  <input
                    type="text"
                    name="village"
                    value={formData.village}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Village name"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-medium">
                    Post Office
                  </label>
                  <input
                    type="text"
                    name="postOffice"
                    value={formData.postOffice}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Post office"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-medium">
                    Upazila
                  </label>
                  <input
                    type="text"
                    name="upazela"
                    value={formData.upazela}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Upazila name"
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-green-700 border-b-2 border-green-700 pb-2">
                Membership Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 text-gray-700 font-medium">
                    Membership Fee (£)
                  </label>
                  <input
                    type="number"
                    disabled={!isCompanyUser}
                    name="membershipFee"
                    value={formData.membershipFee}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-medium">
                    Received By
                  </label>
                  <input
                    type="text"
                    name="receivedBy"
                    value={formData.receivedBy}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Name of receiver"
                  />
                </div>
              </div>

              <div>
                <SignatureInput
                  name="signatureOfApplicant"
                  label="Signature of Applicant"
                  value={formData.signatureOfApplicant}
                  onChange={handleChange}
                  preview={signaturePreview}
                  onPreviewChange={setSignaturePreview}
                />
              </div>
              <div className="mt-6">
                <SignatureInput
                  name="signatureOfApprover"
                  label={
                    <>
                      Signature of Approver / Receiver{" "}
                      <span className="text-xs text-gray-500">
                        (Company use only)
                      </span>
                    </> 
                  }
                  value={formData.signatureOfApprover}
                  onChange={handleChange}
                  disabled={!isCompanyUser}
                  preview={null}
                  onPreviewChange={() => {}}
                />
              </div>
              {formData.signatureOfApprover &&
                formData.signatureOfApprover.type !== "application/pdf" && (
                  <img
                    src={URL.createObjectURL(formData.signatureOfApprover)}
                    alt="Approver Signature Preview"
                    className="mt-2 w-48 h-24 object-contain border border-gray-300 rounded-md bg-gray-50"
                  />
                )}

              <div className="mt-4">
                <label className="block mb-2 text-gray-700 font-medium">
                  Approved By Full Name{" "}
                  <span className="text-xs text-gray-500">
                    (Company use only)
                  </span>
                </label>
                <input
                  type="text"
                  name="approvedByFullName"
                  disabled={!isCompanyUser}
                  value={formData.approvedByFullName || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter approver's full name"
                />
              </div>
            </div>

            <div className="mb-8 bg-green-50 p-6 rounded-lg border border-green-200">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="declarationAccepted"
                  checked={formData.declarationAccepted}
                  onChange={handleChange}
                  className="mt-1 mr-3 w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500 cursor-pointer"
                  id="declaration"
                />
                <label
                  htmlFor="declaration"
                  className="text-gray-700 leading-relaxed cursor-pointer"
                >
                  <span className="font-semibold">Declaration:</span> I solemnly
                  declare that I support the aims and objectives of this
                  organization and agree to abide by the rules and constitution.
                </label>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="py-1.5 px-6 cursor-pointer bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}


export default MembershipForm
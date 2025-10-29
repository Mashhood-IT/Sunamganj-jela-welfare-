const Membership = require("../models/membershipForm");
const sendMembershipEmail = require("../utils/sendMembershipEmail");

const createMembership = async (req, res) => {
  try {
    const {
      title,
      fullName,
      gender,
      ukAddress,
      postcode,
      email,
      mobile,
      landline,
      bangladeshAddress,
      declarationAccepted,
      receivedBy,
      membershipFee,
      approvedBy,
      dateOfRegistration,
    } = req.body;

    // Handle nested address (if sent as JSON string)
    let addressData = bangladeshAddress;
    if (typeof addressData === "string") {
      try {
        addressData = JSON.parse(addressData);
      } catch {
        addressData = {};
      }
    }

    // Handle uploaded files (image/pdf)
    // Expecting fields: picture, signatureOfApplicant, signatureOfApprover
    const pictureFile = req.files?.picture?.[0];
    const applicantSignatureFile = req.files?.signatureOfApplicant?.[0];
    const approverSignatureFile = req.files?.signatureOfApprover?.[0];

    const newMembership = new Membership({
      title,
      fullName,
      gender,
      picture: pictureFile ? `/uploads/${pictureFile.filename}` : "",
      ukAddress,
      postcode,
      email,
      mobile,
      landline,
      bangladeshAddress: addressData,
      declarationAccepted: declarationAccepted === "true" || declarationAccepted === true,
      membershipFee: membershipFee || 20,
      receivedBy,
      signatureOfApplicant: applicantSignatureFile
        ? `/uploads/${applicantSignatureFile.filename}`
        : "",
      approvedBy: approvedBy
        ? typeof approvedBy === "string"
          ? JSON.parse(approvedBy)
          : approvedBy
        : {},
      "approvedBy.signature": approverSignatureFile
        ? `/uploads/${approverSignatureFile.filename}`
        : "",
      dateOfRegistration: dateOfRegistration || null,
    });

    const savedMembership = await newMembership.save();
    await sendMembershipEmail(savedMembership);
    res.status(201).json({
      success: true,
      message: "✅ Membership created successfully",
      data: savedMembership,
    });
  } catch (error) {
    console.error("❌ Error creating membership:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

module.exports = { createMembership };

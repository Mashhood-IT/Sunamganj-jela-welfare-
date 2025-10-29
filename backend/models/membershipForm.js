// models/Membership.js
const mongoose = require("mongoose")

const membershipSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      enum: ["Mr", "Mrs", "Ms", "Others"],
    },
    fullName: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    picture: {
      type: String,
      default: "",
    },
    ukAddress: {
      type: String,
    },
    postcode: {
      type: String,
    },
    email: {
      type: String,
    },
    mobile: {
      type: String,
    },
    landline: {
      type: String,
    },

    bangladeshAddress: {
      village: { type: String },
      postOffice: { type: String },
      upazela: { type: String },
    },

    declarationAccepted: {
      type: Boolean,
      default: false,
    },
    membershipFee: {
      type: Number,
      default: 20,
    },
    receivedBy: {
      type: String,
    },
    signatureOfApplicant: {
      type: String,
      default: ""
    },
    dateOfApplication: {
      type: Date,
      default: Date.now,
    },

    approvedBy: {
      fullName: { type: String },
      signature: { type: String, default: "" },
    },
    dateOfRegistration: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Membership = mongoose.model("Membership", membershipSchema);
module.exports = Membership;

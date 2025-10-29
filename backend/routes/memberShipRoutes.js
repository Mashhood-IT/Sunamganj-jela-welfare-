const express = require("express")
const { upload } = require("../config/multer")
const { createMembership } = require("../controllers/membershipFrom")
const router = express.Router()

router.post("/create-member",   upload.fields([ { name: "picture", maxCount: 1 }, { name: "signatureOfApplicant", maxCount: 1 }, { name: "signatureOfApprover", maxCount: 1 }]), createMembership)

module.exports = router
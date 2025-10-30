const express = require("express");
const {
  createMessage,
  getAllMessages,
  getMessageById,
  deleteMessage,
} =  require("../controllers/contactMessage.js");

const router = express.Router();

router.post("/create-message", createMessage);
router.get("/get-message", getAllMessages);
router.get("/getmessage/:id", getMessageById);
router.delete("/delete/:id", deleteMessage);

module.exports = router;

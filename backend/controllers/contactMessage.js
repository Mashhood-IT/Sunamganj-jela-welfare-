const ContactMessage = require("../models/contactMessageSchema");

 const createMessage = async (req, res) => {
  try {
    const newMessage = new ContactMessage(req.body);
    await newMessage.save();
    try {
      const sendEmail = require("../utils/sendEmail");
      const html = `
        <div style="font-family: Arial, sans-serif; color: #222;">
          <h2>New Contact Message</h2>
          <table style="width:100%; border-collapse: collapse; font-size:14px;">
            <tr><td style="padding:6px; font-weight:600; width:140px;">Name</td><td style="padding:6px;">${newMessage.fullName || '-'}</td></tr>
            <tr><td style="padding:6px; font-weight:600;">Email</td><td style="padding:6px;">${newMessage.email || '-'}</td></tr>
            <tr><td style="padding:6px; font-weight:600;">Phone</td><td style="padding:6px;">${newMessage.phone || '-'}</td></tr>
            <tr><td style="padding:6px; font-weight:600;">Subject</td><td style="padding:6px;">${newMessage.subject || '-'}</td></tr>
            <tr><td style="padding:6px; font-weight:600; vertical-align:top;">Message</td><td style="padding:6px;">${(newMessage.message || '-').replace(/\n/g, '<br/>')}</td></tr>
            <tr><td style="padding:6px; font-weight:600;">Subscribe</td><td style="padding:6px;">${newMessage.subscribe ? 'Yes' : 'No'}</td></tr>
          </table>
        </div>
      `;

      await sendEmail({
        subject: `Contact Form: ${newMessage.subject || 'New message from website'}`,
        html,
      });
    } catch (mailErr) {
      console.error('Failed to send contact notification email:', mailErr);
    }

    res.status(201).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all messages
 const getAllMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get single message by ID
const getMessageById = async (req, res) => {
  try {
    const message = await ContactMessage.findById(req.params.id);
    if (!message) return res.status(404).json({ success: false, message: "Message not found" });
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete message
 const deleteMessage = async (req, res) => {
  try {
    const message = await ContactMessage.findByIdAndDelete(req.params.id);
    if (!message) return res.status(404).json({ success: false, message: "Message not found" });
    res.status(200).json({ success: true, message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
module.exports = {
  createMessage,
  getAllMessages,
  getMessageById,
  deleteMessage,
};
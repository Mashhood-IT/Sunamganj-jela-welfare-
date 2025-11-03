const ContactMessage = require("../models/contactMessageSchema");

const createMessage = async (req, res) => {
  try {
    const newMessage = new ContactMessage(req.body);
    await newMessage.save();
    try {
      const sendEmail = require("../utils/sendEmail");
      let html = "";
      let subject = "";
      // If subscribe is true and all other fields are empty, send only subscription email
const isSubscriptionOnly = 
  newMessage.subscribe === true &&
  (!newMessage.fullName || newMessage.fullName.trim() === '') &&
  (!newMessage.phone || newMessage.phone.trim() === '') &&
  (!newMessage.subject || newMessage.subject.trim() === '') &&
  (!newMessage.message || newMessage.message.trim() === '');
    if (isSubscriptionOnly) {
  subject = "New Newsletter Subscription";
  html = `
    <div style="font-family: Arial, sans-serif; color: #222; padding: 20px; max-width: 600px;">
      <h2 style="margin-bottom: 16px; color: #16a34a;"> New Newsletter Subscription</h2>
      <p style="font-size: 16px; color: #555; margin-bottom: 20px;">
        A new user has subscribed to your newsletter!
      </p>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; background: #f9f9f9; border-radius: 8px; overflow: hidden;">
        <tbody>
          <tr>
            <td style="padding: 16px; font-weight: 600; color: #333; border-bottom: 1px solid #e5e5e5;">Email Address:</td>
            <td style="padding: 16px; color: #555; border-bottom: 1px solid #e5e5e5;">${newMessage.email}</td>
          </tr>
          <tr>
            <td style="padding: 16px; font-weight: 600; color: #333;">Subscribed On:</td>
            <td style="padding: 16px; color: #555;">${new Date().toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}else {
        subject = `Contact Form: ${newMessage.subject || 'New message from website'}`;
        html = `
          <div style="font-family: Arial, sans-serif; color: #222; padding: 10px;">
            <h2 style="margin-bottom: 16px; color: #333;">New Contact Message</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <thead>
                <tr style="background: #f4f4f4;">
                  <th colspan="2" style="text-align: left; padding: 10px; border: 1px solid #ddd; font-size: 15px;">Contact Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="padding: 8px; font-weight: 600; width: 140px; border: 1px solid #ddd;">Name</td>
                  <td style="padding: 8px; border: 1px solid #ddd;">${newMessage.fullName || '-'}</td>
                </tr>
                <tr style="background: #fafafa;">
                  <td style="padding: 8px; font-weight: 600; border: 1px solid #ddd;">Email</td>
                  <td style="padding: 8px; border: 1px solid #ddd;">${newMessage.email || '-'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: 600; border: 1px solid #ddd;">Phone</td>
                  <td style="padding: 8px; border: 1px solid #ddd;">${newMessage.phone || '-'}</td>
                </tr>
                <tr style="background: #fafafa;">
                  <td style="padding: 8px; font-weight: 600; border: 1px solid #ddd;">Subject</td>
                  <td style="padding: 8px; border: 1px solid #ddd;">${newMessage.subject || '-'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: 600; vertical-align: top; border: 1px solid #ddd;">Message</td>
                  <td style="padding: 8px; border: 1px solid #ddd;">${(newMessage.message || '-').replace(/\n/g, '<br/>')}</td>
                </tr>
                <tr style="background: #fafafa;">
                  <td style="padding: 8px; font-weight: 600; border: 1px solid #ddd;">Subscribe</td>
                  <td style="padding: 8px; border: 1px solid #ddd;">${newMessage.subscribe ? 'Yes' : 'No'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        `;
      }

      await sendEmail({
        subject,
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
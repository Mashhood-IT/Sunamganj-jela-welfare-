const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASS,
  },
});


const sendEmail = async ({ to, subject, html, attachments = [] }) => {
  const mailOptions = {
    from: `"Website Notification" <${process.env.ADMIN_EMAIL}>`,
    to: to || process.env.ADMIN_EMAIL,
    subject,
    html,
    attachments,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;

const nodemailer = require("nodemailer");
const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const sendMembershipEmail = async (membership) => {
  const pdfPath = path.join(__dirname, `../uploads/membership_${membership._id}.pdf`);

  const isPDF = (filePath) => {
    return filePath && path.extname(filePath).toLowerCase() === '.pdf';
  };

  const renderFile = (filePath, title) => {
    if (!filePath) return '';
    if (isPDF(filePath)) return '';
    return `
      <div class="section">
        <h3>${title}</h3>
        <img src="http://localhost:5000${filePath}" style="max-width: 300px; border: 1px solid #ddd; border-radius: 4px;" />
      </div>
    `;
  };

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const html = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; color: #333; }
          h1 { color: #1f7a1f; }
          p { margin: 5px 0; }
          .section { margin-bottom: 15px; }
          .header { display: flex; justify-content: space-between; align-items: center; }
          img { max-height: 80px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Membership Application</h1>
          <p>Date: ${new Date(membership.dateOfApplication).toLocaleDateString()}</p>
        </div>

        <div class="section">
          <h3>Applicant Details</h3>
          <p><strong>Name:</strong> ${membership.title} ${membership.fullName}</p>
          <p><strong>Gender:</strong> ${membership.gender}</p>
          <p><strong>Email:</strong> ${membership.email}</p>
          <p><strong>Mobile:</strong> ${membership.mobile}</p>
        </div>

        <div class="section">
          <h3>UK Address</h3>
          <p>${membership.ukAddress}</p>
          <p><strong>Postcode:</strong> ${membership.postcode}</p>
        </div>

        <div class="section">
          <h3>Bangladesh Address</h3>
          <p><strong>Village:</strong> ${membership.bangladeshAddress?.village || "-"}</p>
          <p><strong>Post Office:</strong> ${membership.bangladeshAddress?.postOffice || "-"}</p>
          <p><strong>Upazela:</strong> ${membership.bangladeshAddress?.upazela || "-"}</p>
        </div>

        <div class="section">
          <h3>Membership Info</h3>
          <p><strong>Membership Fee:</strong> £${membership.membershipFee}</p>
          <p><strong>Received By:</strong> ${membership.receivedBy || "-"}</p>
          <p><strong>Declaration Accepted:</strong> ${
            membership.declarationAccepted ? "Yes" : "No"
          }</p>
        </div>

        ${renderFile(membership.picture, "Profile Picture")}
        ${renderFile(membership.signatureOfApplicant, "Signature of Applicant")}
      </body>
    </html>
  `;

  await page.setContent(html, { waitUntil: "networkidle0" });
  await page.pdf({ path: pdfPath, format: "A4" });
  await browser.close();

  const attachments = [
    {
      filename: `membership_${membership._id}.pdf`,
      path: pdfPath,
    },
  ];

  if (isPDF(membership.signatureOfApplicant)) {
    const signaturePath = path.join(process.cwd(), membership.signatureOfApplicant);
    if (fs.existsSync(signaturePath)) {
      attachments.push({
        filename: `applicant_signature_${membership._id}.pdf`,
        path: signaturePath,
      });
    }
  }

 

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_PASS,
    },
  });

  const mailOptions = {
    from: `"Membership Application" <${process.env.ADMIN_EMAIL}>`,
    to: "mtlcontrol10@gmail.com",
    subject: `New Membership Application - ${membership.fullName}`,
    html: `
      <p>A new membership application has been received.</p>
      <p><strong>Name:</strong> ${membership.fullName}</p>
      <p><strong>Email:</strong> ${membership.email}</p>
      <p><strong>View attached PDF for full details.</strong></p>
      ${attachments.length > 1 ? '<p><em>Note: PDF  are included as separate attachments.</em></p>' : ''}
    `,
    attachments,
  };

  await transporter.sendMail(mailOptions);

  setTimeout(() => {
    if (fs.existsSync(pdfPath)) fs.unlinkSync(pdfPath);
  }, 8000);
};

module.exports = sendMembershipEmail;
const nodemailer = require("nodemailer");
const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const sendMembershipEmail = async (membership) => {
  const pdfPath = path.join(__dirname, `../uploads/membership_${membership._id}.pdf`);

  const isPDF = (filePath) => {
    return filePath && path.extname(filePath).toLowerCase() === ".pdf";
  };

const renderFile = (filePath, title) => {
  if (!filePath) return "";
  const clean = String(filePath).replace(/^\//, "");
  const absPath = path.join(process.cwd(), clean);

  if (isPDF(filePath)) {
    const name = path.basename(clean);
    return `
      <div class="section file-note">
        <h3>${title}</h3>
        <p>Attached PDF: ${name}</p>
      </div>
    `;
  }
  if (fs.existsSync(absPath)) {
    try {
      const imageBuffer = fs.readFileSync(absPath);
      const base64Image = imageBuffer.toString('base64');
      const ext = path.extname(absPath).toLowerCase();
      const mimeType = ext === '.png' ? 'image/png' : ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : 'image/png';
      
      return `
        <div class="section image-block">
          <h3>${title}</h3>
          <img src="data:${mimeType};base64,${base64Image}" alt="${title}" />
        </div>
      `;
    } catch (err) {
      console.error(`Error reading image ${absPath}:`, err);
    }
  }

  return "";
};

  const browser = await puppeteer.launch({
    args: ["--allow-file-access-from-files", "--disable-web-security"],
  });
  const page = await browser.newPage();

  const html = `
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: 'Segoe UI', Roboto, Arial, sans-serif; padding: 28px; color: #222; }
          .brand { color: #00A162; }
          .accent { color: #FEAA53; }
          .card { border: 1px solid #e6e6e6; border-radius: 8px; padding: 16px; margin-bottom: 14px; }
          .header { display:flex; justify-content:space-between; align-items:center; margin-bottom: 12px; }
          h1 { margin:0; font-size:20px; color: #083927; }
          h2 { margin:0; font-size:16px; color: #083927; }
          p { margin:6px 0; font-size:13px; }
          .muted { color:#666; font-size:12px; }
          .grid { display:flex; gap:18px; }
          .col { flex:1; }
          .section h3 { margin:0 0 8px 0; font-size:14px; color:#0b513f; }
          .field { margin-bottom:6px; }
          table { width:100%; border-collapse:collapse; }
          td { padding:6px 8px; vertical-align:top; }
          .label { width:170px; color:#0b513f; font-weight:600; }
           img { max-width:120px; max-height:120px; border-radius:6px; border:1px solid #e2e8f0; }
          .file-note { font-style:italic; color:#444; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <h1 class="brand">Membership Application</h1>
            <div class="muted">Generated: ${new Date().toLocaleString()}</div>
          </div>
          <div style="text-align:right">
            <div><strong>Date of Application:</strong></div>
            <div class="muted">${new Date(membership.dateOfApplication).toLocaleDateString()}</div>
            <div style="height:6px"></div>
            <div><strong>Date of Registration:</strong></div>
            <div class="muted">${new Date(membership.dateOfApplication).toLocaleDateString()}</div>
          </div>
        </div>

        <div class="card">
          <h2>Applicant Details</h2>
          <table>
            <tr>
              <td class="label">Full name</td>
              <td>${membership.title || ''} ${membership.fullName || '-'}</td>
            </tr>
            <tr>
              <td class="label">Gender</td>
              <td>${membership.gender || '-'}</td>
            </tr>
            <tr>
              <td class="label">Email</td>
              <td>${membership.email || '-'}</td>
            </tr>
            <tr>
              <td class="label">Mobile</td>
              <td>${membership.mobile || '-'}</td>
            </tr>
            <tr>
              <td class="label">Landline</td>
              <td>${membership.landline || '-'}</td>
            </tr>
          </table>
        </div>

        <div class="card">
          <h2>Address</h2>
          <div class="grid">
            <div class="col">
              <h3>UK Address</h3>
              <p>${membership.ukAddress || '-'}</p>
              <p class="muted"><strong>Postcode:</strong> ${membership.postcode || '-'}</p>
            </div>
            <div class="col">
              <h3>Bangladesh Address</h3>
              <p><strong>Village:</strong> ${membership.bangladeshAddress?.village || '-'}</p>
              <p><strong>Post Office:</strong> ${membership.bangladeshAddress?.postOffice || '-'}</p>
              <p><strong>Upazela:</strong> ${membership.bangladeshAddress?.upazela || '-'}</p>
            </div>
          </div>
        </div>

        <div class="card">
          <h2>Membership Details</h2>
          <table>
            <tr>
              <td class="label">Membership Fee</td>
              <td>£${membership.membershipFee ?? 0}</td>
            </tr>
            <tr>
              <td class="label">Received By</td>
              <td>${membership.receivedBy || '-'}</td>
            </tr>
            <tr>
              <td class="label">Declaration Accepted</td>
              <td>${membership.declarationAccepted ? 'Yes' : 'No'}</td>
            </tr>
          </table>
        </div>

        <div class="card">
          <div style="display:flex; gap:20px;">
            ${renderFile(membership.picture, 'Profile Picture')}
            ${renderFile(membership.signatureOfApplicant, 'Signature of Applicant')}
          </div>
        </div>

        <div class="card">
          <h2>Approver / Registration</h2>
          <table>
            <tr>
              <td class="label">Approved By</td>
              <td>${membership.approvedBy?.fullName || '-'}</td>
            </tr>
            <tr>
              <td class="label">Approver Signature</td>
              <td>${renderFile(membership.approvedBy?.signature || membership['approvedBy.signature'], 'Approver Signature') || '-'}</td>
            </tr>
          </table>
        </div>

      </body>
    </html>
  `;

  await page.setContent(html, { waitUntil: "networkidle0" });
  await page.pdf({ path: pdfPath, format: "A4" });
  await browser.close();

  const attachments = [
    {
      filename: `membership_${membership.fullName}.pdf`,
      path: pdfPath,
    },
  ];

  if (isPDF(membership.picture)) {
    const picPath = path.join(process.cwd(), membership.picture.replace(/^\//, ""));
    if (fs.existsSync(picPath)) {
      attachments.push({
        filename: `picture_${membership.fullName}.pdf`,
        path: picPath,
      });
    }
  }
  if (isPDF(membership.signatureOfApplicant)) {
    const signaturePath = path.join(process.cwd(), membership.signatureOfApplicant);
    if (fs.existsSync(signaturePath)) {
      attachments.push({
        filename: `applicant_signature_${membership.fullName}.pdf`,
        path: signaturePath,
      });
    }
  }

  const approverSigPathRaw = membership.approvedBy?.signature || membership['approvedBy.signature'] || membership.approverSignature || "";
  if (isPDF(approverSigPathRaw)) {
    const approverPath = path.join(process.cwd(), approverSigPathRaw.replace(/^\//, ""));
    if (fs.existsSync(approverPath)) {
      attachments.push({
        filename: `approver_signature_${membership.fullName}.pdf`,
        path: approverPath,
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
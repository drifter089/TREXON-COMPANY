import { onDocumentCreated } from "firebase-functions/v2/firestore";
import * as nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const onApplicationCreated = onDocumentCreated(
  "applications/{docId}",
  async (event) => {
    const data = event.data?.data();
    if (!data) return;

    const html = `
      <h2>New Application: ${data.roleTitle}</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Location:</strong> ${data.location}</p>
      <p><strong>Experience:</strong> ${data.experience}</p>
      <p><strong>Start Date:</strong> ${data.startDate}</p>
      <p><strong>Motivation:</strong> ${data.excitement}</p>
      ${data.linkedin ? `<p><strong>LinkedIn:</strong> <a href="${data.linkedin}">${data.linkedin}</a></p>` : ""}
      ${data.github ? `<p><strong>GitHub:</strong> <a href="${data.github}">${data.github}</a></p>` : ""}
      ${data.resumeUrl ? `<p><strong>Resume:</strong> <a href="${data.resumeUrl}">Download</a></p>` : ""}
      ${data.portfolioUrl ? `<p><strong>Portfolio:</strong> <a href="${data.portfolioUrl}">Download</a></p>` : ""}
      <p><em>Submitted at ${data.submittedAt}</em></p>
    `;

    await transporter.sendMail({
      from: `"THREXON Careers" <${process.env.SMTP_USER}>`,
      to: "akshat@threxon.org",
      subject: `New Application: ${data.roleTitle} — ${data.name}`,
      html,
    });
  }
);

"use server";

export const sendEmail = async (email: string, name: string, message: string) => {
  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });
  const mailData = {
    from: email,
    to: process.env.EMAIL,
    subject: `${name} sent you a message from your website!`,
    text: `${message} | Sent from: ${email}`,
    html: `<div>${message}</div><p>Sent from: ${email}</p>`,
  };
  let res = { success: true, error: "none!" };
  try {
    await transporter.sendMail(mailData);
  } catch (e: any) {
    res = { success: false, error: e.message };
  } finally {
    return res;
  }
};

export default sendEmail;

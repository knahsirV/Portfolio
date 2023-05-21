"use server";
import { render } from "@react-email/render";
import ToMe from "@/emails/ToMe";
import ToVisitor from "@/emails/ToVisitor";

export const sendEmail = async (email: string, name: string, message: string) => {
  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailToMe = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `${name} sent you a message from your website!`,
    text: `${message} | Sent from: ${email}`,
    html: render(ToMe({ name: name, email: email, message: message })),
  };
  const mailToVisitor = {
    from: process.env.EMAIL,
    to: email,
    subject: `I've recieved you message, ${name}!`,
    text: `Hi ${name}, thanks for reaching out! I'll get back to you as soon as I can. In the meantime, here's a copy of your message: ${message}`,
    html: render(ToVisitor({ name: name, message: message })),
  };
  let res = { success: true, errorMessage: "none!" };
  try {
    await transporter.sendMail(mailToMe);
    await transporter.sendMail(mailToVisitor);
  } catch (e: any) {
    res = { success: false, errorMessage: e.message };
  } finally {
    return res;
  }
};

export default sendEmail;

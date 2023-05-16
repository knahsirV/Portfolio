import type { NextApiRequest, NextApiResponse } from "next";
import * as nodemailer from "nodemailer";

type Data = {
  message?: string;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const { name, email, message } = req.body;

  if (!message || !name || !message) {
    return res.status(400).json({ message: "Please fill out the necessary fields" });
  }

  if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
    return res.status(400).json({ message: "Please enter a valid email" });
  }

  const mailData = {
    from: email,
    to: process.env.EMAIL,
    subject: `Message from ${name}`,
    text: `${message} | Sent from: ${email}`,
    html: `<div>${message}</div><p>Sent from: ${email}</p>`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err: Error | null, info: any) => {
      if (err) {
        reject(err);
        return res.status(500).json({ error: err.message || "Something went wrong" });
      } else {
        resolve(info.accepted);
        res.status(200).json({ message: "Message sent!" });
      }
    });
  });

  return;
}

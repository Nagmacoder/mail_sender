import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";

export const sendEmail = async (email, subject, text) => {
  try {
    // let testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "freeman38@ethereal.email",
        pass: "s1E24JMwgX933EbeVS",
      },
    });

    const data = {
      name: email,
      otp: text,
      subject: subject,
    };
    const viewsPath = path.join(process.cwd(), "views");
    const templatePath = path.join(viewsPath, "mail.ejs");

    ejs.renderFile(templatePath, data, async (err, html) => {
      if (err) {
        console.error(err.message);
        return;
      } else {
        await transporter.sendMail({
          from: "<nagma@coedify.com>",
          to: email,
          subject: subject,
          html: html,
        });
      }
    });
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

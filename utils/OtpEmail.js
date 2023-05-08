import { sendEmail } from "../../sendMail/MailSender";

export const OtpEmail = async (email) => {
  try {
    const digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }

    const message = OTP;
    await sendEmail(email, "Verify Email", message);

    return parseInt(OTP);
  } catch (error) {
    throw new Error("problem in sending mail.");
  }
};

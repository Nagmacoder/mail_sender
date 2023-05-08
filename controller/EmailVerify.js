import { sendEmail } from "../utils/MailSender.js";

export default async function EmailVerify(req, res) {
  const user_id = "nagmakhan18052001@gmail.com",
    email = "testing",
    otp = "i'm just doing testing";

  try {
    const user = await sendEmail(user_id, email, otp);

    if (!user) {
      res.json({ success: false, error: err.message, data: null });
    }

    res.json({
      success: true,
      error: null,
      data: user,
      message: "User Verified Successfully",
    });
  } catch (err) {
    res.json({ success: false, error: err.message, data: null });
  }
}

import nodemailer from "nodemailer";

type Email = {
  email: string;
  subject: string;
  message: string;
};

/**
 * Send Mail Function
 * @param emailObject - { Email, subject, message }
 */
const sendMail = async ({ email, subject, message }: Email) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT as number | undefined,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  let info = await transporter.sendMail({
    from: `"${process.env.FROM_NAME}" <${process.env.FROM_MAIL}>`,
    to: email,
    subject: subject,
    text: message,
  });

  console.log(`Message send: ${info.messageId}`);
};

export default sendMail;

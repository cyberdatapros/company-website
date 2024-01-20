import { createTransport } from "nodemailer";

export const transporter = createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "marketing@cyberdatapros.com",
    pass: "vqrzmetlzbruijku",
  },
});

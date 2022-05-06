import { MailAdapter, SendMailData } from "../mail-adapters";
import nodemailer from "nodemailer";


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f5f445521e2825",
    pass: "b64e07fff75016"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendemail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Suport Acos Services <aurelio@acos-services.com>",
      to: "Aurélio Castro <aurelio.cos@outlook.com>",
      subject,
      html: body,
    })
  }
}